// src/ProjectPage.js
import React from 'react';

const ProjectPage = ({ projectId }) => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>{projectId}</h2>
            <p>This is the project page content.</p>
        </div>
    );
};

export default ProjectPage;
