// src/components/HomeNav.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeNav.css';

const HomeNav = () => {
    const navigate = useNavigate();
    const [showReturnText, setShowReturnText] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [lastScrollTop, setLastScrollTop] = useState(0);

    // Handle navigation to home page
    const goToHome = () => {
        navigate('/');
    };

    // Detect scroll direction and manage "Return to start" visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Determine scroll direction
            if (currentScrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }

            // Show "Return to start" text when scrolling up and past threshold
            if (scrollDirection === 'up' && currentScrollTop > 200) {
                setShowReturnText(true);
            } else if (scrollDirection === 'down' || currentScrollTop < 100) {
                setShowReturnText(false);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, scrollDirection]);

    return (
        <div className="home-nav">
            {/* Return to start text - conditionally shown */}
            <div
                className={`return-text ${showReturnText ? 'visible' : ''}`}
                onClick={goToHome}
            >
                <span>←</span> Back Home
            </div>
        </div>
    );
};

export default HomeNav;