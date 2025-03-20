import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import FadeInSection from '../components/FadeInSection';
import PhotoGallery from '../components/PhotoGallery';


const Notes = () => {
    const asideItems = [
        { label: 'About Me', anchor: 'aboutMe' },
        { label: 'Visual Identity', anchor: 'visualIdentity' },
        { label: 'Industrial Design', anchor: 'industrialDesign' },
        // { label: 'Interaction Design', anchor: 'InteractionDesign' },
        { label: 'Photography', anchor: 'Photos' },
    ];

    const sections = [
        {
            id: 'aboutMe',
            content: (
                <FadeInSection>
                    {/* <h1>About Stella Peng</h1> */}
                    {/* <h1 className="project-title">Notes Redesign (2023)</h1> */}
                    <div className="columnlayout3">
                        <div>
                            <h2>Me:</h2>
                            <p>
                                I weave together curiosity, empathy, attention to detail, and critical thinking to create meaningful design experiences.
                            </p>
                        </div>
                        <div>
                            <h2>Education:</h2>
                            <p>
                                School of Art & Design + School of Information at University of Michigan.
                            </p>
                        </div>
                    </div>
                    <br /><hr /><br />
                    <div className="columnlayout3">
                        <div>
                            <h2>Technology:</h2>
                            <p>
                                Figma, Sketch, HTML/CSS, JavaScript, Wordpress, Adobe Creative Suits (Illustrator, Photoshop, InDesign, After Effect, Premiere Pro), SQL, R, Unity, Blender, SolidWorks, Rhino, KeyShot.
                            </p>
                        </div>
                        <div>
                            <h2>Design:</h2>
                            <p>
                                UX Design, Product Design, Industrial Design, Design System, Front-End Web Dev, Wireframes, Information Architecture, Visual Design, Prototyping, Video Editing, 3D Modeling, Rendering, Animation, Motion Design.
                            </p>
                        </div>
                        <div>
                            <h2>Research:</h2>
                            <p>
                                Data analysis, A / B testing, Survey, Interview, Journey map, Persona, Competitive analysis, Card sorting, Information Architecture, Usability testing, Contextual inquiry, Heuristic evaluation.
                            </p>
                        </div>
                    </div>
                    <div><img className="graphics-image-content" src="/images/aboutcollage.png" alt="Overview" /></div>
                </FadeInSection>
            ),
        },
        {
            id: 'visualIdentity',
            content: (
                <FadeInSection>
                    <br /><br />
                    <h1>Visual Identity and Branding</h1>
                    {/* <p>Selected projects showcasing my work in brand identity, logo design, and visual systems.</p> */}

                    <PhotoGallery
                        photos={[
                            {
                                src: "/images/visual/visual1.png",

                            },
                            {
                                src: "/images/visual/visual2.png",

                            },
                            {
                                src: "/images/visual/visual3.png",

                            },
                            {
                                src: "/images/visual/visual4.png",

                            },
                            {
                                src: "/images/visual/visual5.png",

                            },
                            {
                                src: "/images/visual/visual6.png",

                            }
                        ]}
                    />
                </FadeInSection>
            ),
        },
        {
            id: 'industrialDesign',
            content: (
                <FadeInSection>
                    <br /><br />
                    <h1>Industrial Design</h1>
                    {/* <p>Product design concepts, prototyping, and 3D modeling showcasing my industrial design skills.</p> */}

                    <PhotoGallery
                        photos={[
                            {
                                src: "/images/industrial/product1.png",

                            },
                            {
                                src: "/images/industrial/product2.png",

                            },
                            {
                                src: "/images/industrial/product3.png",

                            },
                            {
                                src: "/images/industrial/product4.png",

                            },
                        ]}
                    />
                </FadeInSection>
            ),
        },
        // {
        //     id: 'InteractionDesign',
        //     content: (
        //         <FadeInSection>
        //             <br /><br />
        //             <h1>Interaction and Motion</h1>

        //             <PhotoGallery
        //                 photos={[
        //                     {
        //                         src: "/images/interaction/interface1.jpg",

        //                     },
        //                     {
        //                         src: "/images/interaction/interface2.jpg",

        //                     },
        //                     {
        //                         src: "/images/interaction/interface3.jpg",

        //                     },
        //                     {
        //                         src: "/images/interaction/interface4.jpg",

        //                     },
        //                     {
        //                         src: "/images/interaction/interface5.jpg",

        //                     },
        //                     {
        //                         src: "/images/interaction/interface6.jpg",

        //                     }
        //                 ]}
        //             />
        //         </FadeInSection>
        //     ),
        // },
        {
            id: 'Photos',
            content: (
                <FadeInSection>
                    <br /><br />
                    <h1>Photos that I took.</h1>
                    {/* <p>A collection of photographs capturing moments, spaces, and perspectives through my lens.</p> */}

                    <PhotoGallery
                        photos={[
                            {
                                src: "/images/photos/photo1.png",

                            },
                            {
                                src: "/images/photos/photo2.png",

                            },
                            {
                                src: "/images/photos/photo3.png",

                            },
                            {
                                src: "/images/photos/photo4.png",

                            },
                            {
                                src: "/images/photos/photo5.png",

                            },
                            {
                                src: "/images/photos/photo6.png",

                            },
                            {
                                src: "/images/photos/photo7.png",

                            },
                            {
                                src: "/images/photos/photo8.png",

                            }
                        ]}
                    />
                </FadeInSection>
            ),
        },
    ];

    const footerContent = null;

    return (
        <ProjectTemplate
            coverImage="/images/aboutcover.png"
            projectTitle="About Stella"
            asideItems={asideItems}
            sections={sections}
            footerContent={footerContent}
        />
    );
};

export default Notes;