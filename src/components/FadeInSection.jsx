// src/components/FadeInSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // 找到所有columnlayout3元素并添加visible类
                    if (sectionRef.current) {
                        const columnLayouts = sectionRef.current.querySelectorAll('.columnlayout3');
                        columnLayouts.forEach(layout => {
                            layout.classList.add('visible');
                        });
                    }
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={{ willChange: "opacity, transform" }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
