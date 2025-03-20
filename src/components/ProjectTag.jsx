// src/components/ProjectTag.jsx
import React from 'react';
import './ProjectTag.css';

const ProjectTag = ({ children }) => {
    return (
        <span className="project-tag">
            {children}
        </span>
    );
};

export default ProjectTag;