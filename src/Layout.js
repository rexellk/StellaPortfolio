// src/Layout.js - Update your items array for more reliable path detection
import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Dock from './blocks/Components/Dock';
import HomeNav from './components/HomeNav';

// Import SVG files as React components
import { ReactComponent as LogoChiron } from './assets/logo-chiron.svg';
import { ReactComponent as LogoNotes } from './assets/logo-notes.svg';
import { ReactComponent as LogoCircleStatus } from './assets/logo-circlestatus.svg';
import { ReactComponent as LogoDailyRock } from './assets/logo-rock.svg';
import { ReactComponent as LogoLinkedIn } from './assets/logo-linkedin.svg';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to top when location changes
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [location.pathname]);

    // Updated dock items with path property for more reliable active detection
    const dockItems = [
        // Project group
        {
            label: 'Chiron',
            onClick: () => navigate('/chiron'),
            path: 'chiron', // Add path for active detection
            icon: <LogoChiron />
        },
        {
            label: 'Notes',
            onClick: () => navigate('/notes'),
            path: 'notes', // Add path for active detection
            icon: <LogoNotes />
        },
        {
            label: 'CircleStatus',
            onClick: () => navigate('/circle-status'),
            path: 'circle-status', // Add path for active detection
            icon: <LogoCircleStatus />
        },
        // About section
        {
            label: 'About',
            onClick: () => navigate('/about'),
            path: 'about', // Add path for active detection
            icon: <LogoDailyRock />
        },
        // Separator between About and LinkedIn
        {
            type: 'separator'
        },
        // External links
        {
            label: 'LinkedIn',
            onClick: () => window.open('https://www.linkedin.com/in/stellapengrnr/', '_blank'),
            icon: <LogoLinkedIn />
        },
    ];

    return (
        <div>
            {/* Home navigation */}
            <HomeNav />

            {/* Dock with items that include path information */}
            <Dock items={dockItems} />

            <div className="main-content" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;