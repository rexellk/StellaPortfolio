import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import FadeInSection from '../components/FadeInSection';
import ProjectTag from '../components/ProjectTag';

const Notes = () => {
    const asideItems = [
        { label: 'Brief', anchor: 'ProjectInfo' },
        { label: 'Problem', anchor: 'ProblemGoal' },
        { label: 'Final Design', anchor: 'finaloutcome' },
        { label: 'Research', anchor: 'Research' },
        { label: 'Testing', anchor: 'testing' },
        { label: 'Reflection', anchor: 'Takeaways' },
    ];

    const sections = [
        {
            id: 'ProjectInfo',
            content: (
                <FadeInSection>
                    <div className="project-tags">
                        <ProjectTag>UX/UI Design</ProjectTag>
                        <ProjectTag>User Research</ProjectTag>
                        <ProjectTag>Redesign</ProjectTag>
                    </div>
                    {/* <h1 className="project-title">Notes Redesign (2023)</h1> */}
                    <div className="columnlayout3">
                        <div>
                            <h2 className="project-subtitle">Context:</h2>
                            <p>
                                I've always relied on Notes to jot things down, whether I'm on my iPhone or Mac.
                                But over time, I noticed a few things that just didn't feel as smooth or efficient as they could be.
                                <br /><br />
                                That's what got me thinking about how the app could be improved, leading me to redesign it with a better user experience.
                            </p>
                        </div>
                        <div>
                            <h2 className="project-subtitle">Role:</h2>
                            <p>
                                User Flows<br />
                                Functional Prototypes<br />
                                Competitive Benchmarking<br />
                                Wireframing<br />
                                Interaction Design
                            </p>
                            <h2 className="project-subtitle">Timeline:</h2>
                            <p>
                                2023 Winter | 5 weeks:<br />
                                2 weeks research <br />1 week prototype & design <br /> 2 weeks testing
                            </p>
                        </div>
                    </div>
                    <br />


                    <FadeInSection>
                        <section className="graphics-image-content">
                            <h1>Project Quick Look</h1>
                            <br />
                            <img src="/images/applenotes_overview2.png" alt="Overview" />
                            <img src="/images/applenotes_impact1.png" alt="Impact 1" />
                            <img src="/images/applenotes_impact2.png" alt="Impact 2" />
                        </section>
                    </FadeInSection>
                </FadeInSection>
            ),
        },
        {
            id: 'ProblemGoal',
            content: (
                <FadeInSection>
                    <br /><br />
                    <h1>Why Redesign?</h1>
                    <div className="columnlayout3">
                        <h2>Firstly, map out the current user flow.</h2>
                        <p>
                            I identified specific moments where users face obstacles in their note-taking process, revealing key pain points.
                        </p>
                    </div>
                    <br />
                    <img className="graphics-image-content" src="/images/applenotes_Discovery 1.png" alt="Discovery 1" />
                    <br />      <br />
                    <div className="columnlayout3">
                        <div>
                            <p style={{ margin: 0, color: 'red' }}>Pain Point 1</p>
                            <h2 >Audio Limitation</h2>
                            <p>
                                After launching the app, users are funneled toward text input without an obvious option for audio recording.
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0, color: 'red' }}>Pain Point 2</p>
                            <h2 >Can't Sketch</h2>
                            <p>
                                Users expect to sketch or highlight directly over text, but the current design doesn't support it.
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0, color: 'red' }}>Pain Point 3</p>
                            <h2>No Timestamp</h2>
                            <p>
                                There is no clear indicator of when different sections of a note were created or modified.
                            </p>
                        </div>
                    </div>

                    <div>
                        <br />   <hr /><br />
                        <div className="columnlayout3">
                            <h2>Secondly, benchmark against leading competitors.</h2>
                            <p>
                                Competitive analysis ensures that the redesign is both problem-solving and positions Notes favorably in the market.
                            </p>
                        </div>
                        <img className="graphics-image-content" src="/images/applenotes_Discovery 3.png" alt="Discovery 3" />
                    </div>
                    <br />   <hr /><br />
                    <div>
                        <div className="columnlayout3">
                            <h2>Finally, define goals and metrics for success.</h2>
                            <p >
                                Collaborating with designers and a developer, we prioritized the most critical goals, ensuring alignment with user needs and business objectives.
                            </p>
                        </div>
                        <br /> <br />
                        <img className="graphics-image-content" src="/images/applenotes_Data Synthesis 3.png" alt="Data Synthesis 3" />
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'finaloutcome',
            content: (
                <FadeInSection>
                    <h1>Introducing New Notes</h1>
                    <img className="graphics-image-content" src="/images/applenotes_outcome 1.png" alt="Outcome 1" />
                    <div className="uiux-content">

                        <div>
                            <div>               <br /><br />
                                <h2>Effortless Dictation</h2>
                                <div>
                                    <p>Now you can easily convert recordings into text. Capture your thoughts on the go and refine them later with just a tap.

                                        <br /><br /> Pain Killer for Audio limitation</p>
                                </div>
                            </div>

                        </div>
                        <div className="uiux-img">
                            <img src="/images/applenoteDictation1-unscreen.gif" alt="Dictation 1" />
                            <img src="/images/applenoteDictation2-unscreen.gif" alt="Dictation 2" />
                        </div>
                    </div>


                    <div className="uiux-content">
                        <div>    <br /><br />
                            <h2>Smart Sketching</h2>
                            <div> <p>
                                Adding a new sketch is now smarter. Areas where you can't draw turn gray, while hints show where you can. This makes sketching more intuitive and your notes more organized.
                                <br /><br /> Pain Killer for sketch confuse. </p>
                            </div>

                        </div>
                        <div className="uiux-img">
                            <img src="/images/applenote_sketch.gif" alt="Sketch 1" />
                            <img src="/images/applenote_sketch2.gif" alt="Sketch 2" />
                        </div>
                    </div>


                    <div className="uiux-content reverse">
                        <div>    <br /><br />
                            <h2>Context at a Glance</h2>
                            <div> <p>
                                Swipe right on any note to reveal time stamps. Keep track of when your notes were created or updated, giving you better context and organization.
                                <br /><br /> Pain Killer for no time record</p>
                            </div>
                        </div>
                        <div className="uiux-img">
                            <img src="/images/applenotetimestamp1-unscreen.gif" alt="Timestamp 1" />
                            <img src="/images/applenotetimestamp2-unscreen.gif" alt="Timestamp 2" />
                        </div>
                    </div>

                    <h1>Reality isn't always so smooth, so let's troubleshooting.</h1>

                    <div> <img className="graphics-image-content" src="/images/applenotes_outcome 3.png" alt="Outcome 3" /> <br />
                        <img className="graphics-image-content" src="/images/applenotes_outcome 4.png" alt="Outcome 4" /> <br />
                        <img className="graphics-image-content" src="/images/applenotes_outcome 5.png" alt="Outcome 5" /> <br />
                        <img className="graphics-image-content" src="/images/applenotes_outcome 7.png" alt="Outcome 7" />
                    </div>

                </FadeInSection >
            ),
        },
        {
            id: 'Research',
            content: (
                <FadeInSection>

                    <h1>Is it just me or...?</h1>
                    <p>
                        After identifying core pain points and inefficiencies, I dug deep into understanding user behavior and expectations.
                        For the Data Synthesis phase, I chose three methodologies that ground our design strategy in real user needs.
                    </p> <br /> <hr /> <br />
                    <div className="columnlayout3">
                        <div>
                            {/* <p style={{ margin: 0, color: '#ECAC00' }}>Methodologies 1</p> */}
                            <h2 className="project-subtitle">Persona</h2>
                            <p>
                                Empathized with key user groups to ensure our design addressed specific needs.
                            </p>
                        </div>
                        <div>
                            {/* <p style={{ margin: 0, color: '#ECAC00' }}>Methodologies 2</p> */}
                            <h2 className="project-subtitle">User Journey</h2>
                            <p>
                                Visualized how users interact with Notes over time, mapping critical touchpoints to improve workflow.
                            </p>
                        </div>
                        <div>
                            {/* <p style={{ margin: 0, color: '#ECAC00' }}>Methodologies 3</p> */}
                            <h2 className="project-subtitle">Card Sorting</h2>
                            <p>
                                Refined natural categorization of features to ensure the interface aligns with user expectations.
                            </p>
                        </div>
                    </div>
                    <div className="graphics-image-content">
                        <img className="scroll-trigger" src="/images/applenotes_Data Synthesis 1.png" alt="Data Synthesis 1" />
                    </div>
                    <div className="graphics-image-content">
                        <img className="scroll-trigger" src="/images/applenotes_Data Synthesis 2.png" alt="Data Synthesis 2" />
                    </div>
                    <div className="graphics-image-content">
                        <img className="scroll-trigger" src="/images/applenotes_Data Synthesis 4.png" alt="Data Synthesis 4" />
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'testing',
            content: (
                <FadeInSection>
                    <h1 className="project-title">I conducted User Testing with some Apple fans.</h1>
                    <div className="columnlayout3">
                        <div>
                            <p style={{ margin: 0, color: '#34C759' }}>Goals</p>
                            <h2 className="project-subtitle">We aim to:</h2>
                            <p>
                                1. Evaluate if voice-to-text accurately transcribes speech in various environments.
                                <br />
                                2. Compare usability of Smart Sketching with and without the feature.
                                <br />
                                3. Determine the clarity of note timestamps.
                            </p>
                        </div>
                        <div>
                            <p style={{ margin: 0, color: '#34C759' }}>Guidance</p>
                            <h2 className="project-subtitle">During testing:</h2>
                            <p>
                                1. Users tested voice-to-text in various settings and accents, then reviewed and corrected transcriptions.
                                <br />
                                2. Users created sketches with and without Smart Sketching.
                                <br />
                                3. They also checked the clarity of note timestamps.
                            </p>
                        </div>
                    </div>
                    <div className="graphics-image-content">
                        <img src="/images/applenotes_outcome9.png" alt="Outcome 9" />
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'Takeaways',
            content: (
                <FadeInSection>
                    <h1 className="project-title">Reflection</h1>
                    <div className="graphics-image-content">
                        <img src="/images/applenotes_Reflection.png" alt="Reflection" />
                    </div>
                </FadeInSection>
            ),
        },
    ];

    const footerContent = null;

    return (
        <ProjectTemplate
            coverImage="/images/applenotes_cover.png"
            projectTitle="Notes Redesign"
            asideItems={asideItems}
            sections={sections}
            footerContent={footerContent}
        />
    );
};

export default Notes;