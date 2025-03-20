import React, { useState, useEffect } from 'react';
import './ProjectTemplate.css';

const ProjectTemplate = ({
    coverImage,       // 封面图片路径，如 "/images/chiron-cover-inside.png"
    projectTitle,     // 项目标题，如 "Chiron"
    asideItems,       // 侧边导航项数组：每项格式 { label, anchor }
    sections,         // 内容区块数组：每项格式 { id, content }
    footerContent     // 页脚内容（可选，传 null 则不渲染）
}) => {
    // State to track the active section
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        // Function to check which section is currently in viewport
        const handleScroll = () => {
            // Get all section elements
            const sectionElements = sections.map(section =>
                document.getElementById(section.id)
            );

            // Find the first section that's currently in view
            for (let i = 0; i < sectionElements.length; i++) {
                const section = sectionElements[i];
                if (section) {
                    const rect = section.getBoundingClientRect();

                    // If the top of the section is near the top of the viewport (with some buffer)
                    // We consider this section as "active"
                    // Adjust the threshold value (100) as needed for your specific layout
                    if (rect.top <= 100 && rect.bottom > 100) {
                        setActiveSection(sections[i].id);
                        break;
                    }
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Call once on mount to set initial active section
        handleScroll();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    return (
        <div className="project-page">
            {/* 封面图片区域 */}
            <div className="image-container">
                <img src={coverImage} alt={`${projectTitle} Cover`} />
            </div>

            {/* 整体内容区域：侧边导航 + 主要内容 */}
            <div className="overall-content">
                <aside className="menubar">
                    <nav id="nav" className="nav">
                        <ul className="nav-list">
                            {asideItems.map((item, index) => (
                                <li key={index} className="nav-list-item">
                                    <a
                                        href={`#${item.anchor}`}
                                        className={`aside-nav-link ${activeSection === item.anchor ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <section className="project-content-wrapper">
                    {/* 项目标题区 */}
                    <section id="Brief">
                        <h1 className="project-title">{projectTitle}</h1>
                    </section>

                    {/* 各内容区块 */}
                    {sections.map((section, index) => (
                        <section key={index} id={section.id} className="content-section">
                            {section.content}
                        </section>
                    ))}
                </section>
            </div>

            {/* 页脚区域（如果 footerContent 存在） */}
            {footerContent && <footer>{footerContent}</footer>}
        </div>
    );
};

export default ProjectTemplate;