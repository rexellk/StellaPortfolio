// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Use the 'auto' behavior for instant scrolling with no animation
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'  // 'auto' ensures immediate jump to top without animation
        });
    }, [pathname]);

    return null;
}

export default ScrollToTop;