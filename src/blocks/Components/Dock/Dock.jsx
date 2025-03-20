// src/blocks/Components/Dock.jsx
/*
  jsrepo 1.35.1
  Installed from https://reactbits.dev/default/
  2-10-2025
*/

"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

import "./Dock.css";

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  isActive,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${isActive ? 'active-dock-item' : ''} ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      aria-current={isActive ? 'page' : undefined}
    >
      {Children.map(children, (child) =>
        cloneElement(child, { isHovered })
      )}
      {isActive && <div className="dock-indicator"></div>}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: "-40%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  // 如果 children 是一个 SVG 元素，则使用 cloneElement 强制设置样式为填满父容器
  if (children && typeof children === "object" && children.type === "svg") {
    const newChild = cloneElement(children, {
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        ...children.props.style,
      },
    });
    return (
      <div className={`dock-icon ${className}`} style={{ width: "100%", height: "100%" }}>
        {newChild}
      </div>
    );
  }
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

// Separator component
function DockSeparator() {
  return <div className="dock-separator" aria-hidden="true"></div>;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 90,
  distance = 200,
  panelHeight = 60,
  dockHeight = 256,
  baseItemSize = 50,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const location = useLocation();
  const [showDock, setShowDock] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);

  // Get current path without leading slash for easier comparison
  const currentPath = location.pathname.replace(/^\//, '');

  // Function to check if an item corresponds to the current route
  const isItemActive = (item) => {
    if (!item.onClick || typeof item.onClick !== 'function' || item.type === 'separator') {
      return false;
    }

    // Extract path from onClick function for comparison
    // This assumes the onClick functions use navigate('/path')
    const onClick = item.onClick.toString();
    const match = onClick.match(/navigate\(['"]\/([^'"]*)['"]\)/);

    if (match && match[1]) {
      const itemPath = match[1];
      return itemPath === currentPath;
    }

    // Special case for home page
    if (currentPath === '' && onClick.includes("navigate('/')") || onClick.includes('navigate("/")')) {
      return true;
    }

    return false;
  };

  // Detect if current page is home page
  useEffect(() => {
    // Check if we're on the home page (root path)
    const onHomePage = location.pathname === '/';
    setIsHomePage(onHomePage);

    // Always show dock on home page
    setShowDock(onHomePage);
  }, [location.pathname]);

  // Handle mouse movement to show/hide dock on project pages
  useEffect(() => {
    if (isHomePage) return; // Skip on home page

    const handleMouseMove = (e) => {
      // Show dock when mouse is in the bottom half of the screen
      const windowHeight = window.innerHeight;
      const mouseY = e.clientY;

      if (mouseY > windowHeight / 2) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHomePage]);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  // Animation variants for the dock
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <motion.div
      style={{ height: maxHeight, overflow: "hidden", scrollbarWidth: "none" }}
      className="dock-outer"
      animate={showDock ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          item.type === 'separator' ? (
            <DockSeparator key={`separator-${index}`} />
          ) : (
            <DockItem
              key={index}
              onClick={item.onClick}
              className={item.className}
              mouseX={mouseX}
              spring={spring}
              distance={distance}
              magnification={magnification}
              baseItemSize={baseItemSize}
              isActive={isItemActive(item)}
            >
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          )
        ))}
      </motion.div>
    </motion.div>
  );
}