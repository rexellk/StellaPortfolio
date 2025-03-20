// src/pages/Chiron.jsx
import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import FadeInSection from '../components/FadeInSection';
import ProjectTag from '../components/ProjectTag';


const Chiron = () => {
    const asideItems = [
        { label: 'Brief', anchor: 'ProjectInfo' },
        { label: 'Problem', anchor: 'ProblemGoal' },
        { label: 'Final Design', anchor: 'finaloutcome' },
        { label: 'Research', anchor: 'Research' },
        { label: 'Ideation', anchor: 'testing' },
        { label: 'Reflection', anchor: 'Takeaways' },
    ];

    const sections = [
        {
            id: 'ProjectInfo',
            content: (
                <FadeInSection>
                    <div className="project-tags">
                        <ProjectTag>UX/UI Design</ProjectTag>
                        <ProjectTag>Design System</ProjectTag>
                        <ProjectTag>Healthcare</ProjectTag>
                    </div>
                    <div className="columnlayout3">
                        <div>
                            <h2>Context:</h2>
                            <p>
                                Business + Tech Innovation Jam, a 6-week program where teams compete in three phases,
                                simulating critical aspects of the product development process.
                            </p>
                            <div>
                                <h2>Team:</h2>
                                <p>
                                    Celina: Product Manager<br />
                                    Teddy: Business Analyst<br />
                                    Debbie: Software Engineer
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2>Role:</h2>
                            <p>
                                Interaction Design<br />
                                Wireframing<br />
                                Design System<br />
                                Branding
                            </p>
                            <h2>Timelines:</h2>
                            <p>
                                2024 Fall | 6 weeks
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'ProblemGoal',
            header: 'Problem',
            title: 'When step in to the gym...',
            content: (
                <FadeInSection>
                    <br /><br />
                    <h1>When step in to the gym...</h1>
                    <br />
                    <div className="columnlayout3">

                        <div>

                            <h2 >
                                1 in every 5 gym-goers face frustration due to <span style={{ color: '#0056F1' }}>poor machine accessibility</span>.
                            </h2>
                        </div>
                        <div>
                            <p>
                                While inclusivity is a buzzword in many industries, it’s rarely applied to the gym space.
                                This lack of support can make workouts feel inefficient, frustrating, and sometimes even unsafe.
                            </p>
                            <p>
                                Our mission was to create a product that promotes confidence and comfort for every user, regardless of body type or fitness level.
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="columnlayout3">
                        <div>
                            <h2 >Intermediate Gym Users</h2>
                        </div>
                        <div>
                            <p>
                                Our target users are intermediate gym users who want effective workouts but often face challenges with machine accessibility and guidance.
                                Chiron aims to empower them by providing:
                            </p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="columnlayout3">
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Support</h2>
                            <p>Personalized guidance for using machines correctly and confidently.</p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Efficiency</h2>
                            <p>Optimize workout routines with machine availability and alternative exercises.</p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Accessibility</h2>
                            <p>Tailored adjustments and advice for users of all body types, ensuring a safe and inclusive gym experience.</p>
                        </div>
                    </div>
                    <br />  <br />
                </FadeInSection>
            ),
        },


        {
            id: 'finaloutcome',
            header: 'Final Design',
            title: 'Introducing Chiron',
            content: (
                <FadeInSection>

                    <h1>Introducing Chiron, a Smarter Gym Experiences</h1>

                    <div className="uiux-content">
                        <div>
                            <div>
                                <h2 className="project-subtitle">Onboarding</h2>
                                <div>
                                    <p>Design Decision: <br />Only 4-step process: Goal, Time, Confidence, Gym Location tailors the app to individual needs.</p>
                                </div>
                            </div>
                            <br />
                            <div>
                                <div>
                                    <p>Business Impact: <br />Streamlines user entry while collecting valuable data for gyms to enhance member retention and satisfaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="uiux-img">
                            <img src="/images/Chiron-Onboarding01.gif" alt="Onboarding 1" />
                            <img src="/images/Chiron-Onboarding02.gif" alt="Onboarding 2" />
                        </div>
                    </div>


                    <div className="uiux-content reverse">
                        <div>
                            <h2>Machine Guidance</h2>
                            <div>
                                <p>Design Decision: <br />Step-by-step setup and usage guidance, customized for different body types, ensures safe and effective workouts.</p>
                            </div>
                            <br />
                            <div>
                                <p>Business Impact: <br />Reduces the costs for staff assistance while building user trust and confidence, improving gym retention rates.</p>
                            </div>
                        </div>
                        <div className="uiux-img">
                            <img src="/images/Chiron-Machine01.gif" alt="Machine Guidance 1" />
                            <img src="/images/Chiron-Machine02.gif" alt="Machine Guidance 2" />
                        </div>
                    </div>
                    <div className="uiux-content">
                        <div>
                            <h2>Alternatives</h2>
                            <div>
                                <p>Design Decision: <br />Suggests alternate exercises or equipment when a machine is unavailable, keeping workouts on track.</p>
                            </div>
                            <br />
                            <div>
                                <p>Business Impact: <br />Optimizes equipment usage and reduces user frustration during peak hours, enhancing overall gym satisfaction.</p>
                            </div>
                        </div>
                        <div className="uiux-img">
                            <img src="/images/Chiron-Machine01.gif" alt="Machine Guidance 1" />
                            <img src="/images/Chiron-Machine02.gif" alt="Machine Guidance 2" />
                        </div>
                    </div>
                    <div className="uiux-content reverse">
                        <div>
                            <h2>Live Traffic</h2>
                            <div>
                                <p>Design Decision: <br />Real-time traffic data and peak hour predictions help users avoid crowds and plan better workouts.</p>
                            </div>
                            <br />
                            <div>
                                <p>Business Impact: <br />Supports gyms in managing traffic flow and improving user experience, reducing complaints and boosting loyalty.</p>
                            </div>
                        </div>
                        <div className="uiux-img">
                            <img src="/images/Chiron-alt01.gif" alt="Machine Guidance 1" />
                            <img src="/images/Chiron-alt02.gif" alt="Machine Guidance 2" />
                        </div>
                    </div>
                </FadeInSection >
            ),
        },



        {
            id: 'Research',
            header: 'Research',
            title: 'How We Listened to Users',
            content: (
                <FadeInSection>
                    <div className="graphics-image-content">
                        <img src="/images/Chiron-research.png" alt="Test" />
                    </div>

                    <h1 className="project-title">Yes, We conducted 20+ user interview!</h1>
                    <p>
                        To identify key pain points, we engaged with intermediate gym users, gathering insights into their
                        frustrations with machine guidance, the impact of crowded gyms, and their experiences with equipment
                        not suited to diverse body types.
                    </p>
                    <br />
                    <hr />
                    <br />
                    <div className="columnlayout3">
                        <div>
                            <p>User Quote:</p>
                            <h2>
                                “Even though I go to the gym regularly, I still get overwhelmed when someone’s using the machine I know,
                                and I have to figure out how to use something new.”
                            </h2>
                        </div>
                        <div>
                            <p>Insight:</p>
                            <h2>
                                Clear, step-by-step guidance and alternative can help users confidently adapt to new equipment,
                                keeping workouts on track.
                            </h2>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <h1 className="project-title">From Conversation to Insight</h1>
                    <div className="columnlayout3">
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Limited Accessibility</h2>
                            <p>
                                Gym equipment is often designed for larger body frames, leaving users with smaller or diverse body types struggling to adjust.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Crowded Environment</h2>
                            <p>
                                Peak times can feel overwhelming. Machines are hard to access, and confusing settings make it even more challenging.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Inconsistent Support</h2>
                            <p>
                                Many users turn to YouTube or occasional trainer tips for help.
                            </p>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <h1 className="project-title">Market Research</h1>
                    <div className="columnlayout3">
                        <div>
                            <p>Total Addressable Market (TAM)</p>
                            <h2>
                                <span style={{ color: '#0056F1' }}>64.2M </span>gym members &amp; <span style={{ color: '#0056F1' }}>$6.86B</span> U.S. fitness app market.
                            </h2>
                        </div>
                        <div>
                            <p>Serviceable Addressable Market (SAM)</p>
                            <h2>
                                25.7M gym-goers who work out regularly, comprising <span style={{ color: '#0056F1' }}>40%</span> of membership holders.
                            </h2>
                        </div>
                        <div>
                            <p>Serviceable Obtainable Market (SOM)</p>
                            <h2>
                                7.7M individuals willing to pay for app-based fitness guidance, representing a potential <span style={{ color: '#0056F1' }}>$823M</span> revenue stream.
                            </h2>
                        </div>
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'testing',
            header: 'Ideation',
            title: 'Building MVP with Impact',
            content: (
                <FadeInSection>
                    <h1 className="project-title">Building MVP with Impact</h1>

                    <p>
                        Our MVP prioritization focuses on improving accessibility, safety, and convenience,
                        ensuring that Chiron meets the immediate needs of gym-goers while setting a foundation for scalable growth.
                    </p><br />
                    <div className="graphics-image-content">
                        <img src="/images/Chiron-ideat-mvp.png" alt="MVP" />
                    </div>
                    <br />
                    <h1>Pivot from One Page to Expandable Layout</h1>
                    <div className="graphics-image-content">
                        <img src="/images/Chiron-ideation-test.png" alt="Test" />
                    </div>
                    <br />
                    <h1 className="project-title">How Chiron looks and feels</h1>
                    <div className="columnlayout3">
                        <div>
                            <p >
                                We drew inspiration from gym environments but softened the edges, choosing friendly icons and clean typography to remove intimidation.
                            </p>
                        </div>
                        <div>
                            <p>
                                The brand balances professionalism with warmth, ensuring it resonates with both users and gym partners.
                                Every screen was refined to feel intuitive and aligned with real-world gym needs.
                            </p>
                        </div>
                    </div><br />
                    <div>
                        <div className="graphics-image-content">
                            <img src="/images/Chiorn-ideation-interface.png" alt="Interface 1" />
                        </div>
                        <div className="graphics-image-content">
                            <img src="/images/Chiorn-ideation-interface2.png" alt="Interface 2" />
                        </div>
                        <div className="graphics-image-content">
                            <img src="/images/Chiorn-ideation-interface3.png" alt="Interface 3" />
                        </div>
                    </div>

                </FadeInSection>
            ),
        },
        {
            id: 'Takeaways',
            header: 'Reflection',
            title: 'Reflection',
            content: (
                <FadeInSection>
                    <div>
                        <h1>Reflection</h1>
                        <hr />
                        <h2 className="project-subtitle">Auto Layout Can Wait, Trust Me.</h2>
                        <p>
                            Working with non-designers taught me a valuable lesson: tools like Figma’s Auto Layout, while powerful,
                            aren’t always the most accessible for those unfamiliar with them.
                            I realized it’s better to hold off on using Auto Layout until after key design decisions are finalized,
                            ensuring the workflow remains inclusive and adaptable.
                            For example, usability pivots like shifting to a collapsible layout were easier to adjust without Auto Layout,
                            allowing for smoother collaboration and quicker iteration during crucial decision-making stages.
                        </p>
                    </div>
                    <div>
                        <h2 className="project-subtitle">DEI isn't Just a Buzzword</h2>
                        <p>
                            Designing for DEI opened my eyes to just how dangerous accessibility issues can be when overlooked.
                            It was sobering to realize how many designs cater only to the majority, leaving those with different needs
                            feeling excluded—or worse, unsafe.
                            This project deepened my understanding of the responsibility designers have to create solutions that genuinely work for everyone, not just the average user.
                        </p>
                    </div>
                    {/* <div>
                        <h2 className="project-subtitle">Next Steps</h2>
                        <p>
                            Expand partnerships with major gym chains to integrate machine databases.
                            <br />
                            Explore gamification features to increase long-term user engagement.
                        </p>
                    </div> */}
                </FadeInSection>
            ),
        },
    ];

    const footerContent = null;

    return (
        <ProjectTemplate
            coverImage="/images/chiron-cover-inside.png"
            projectTitle="Chiron"
            asideItems={asideItems}
            sections={sections}
            footerContent={footerContent}
        />
    );
};

export default Chiron;
