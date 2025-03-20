// src/pages/CircleStatus.jsx
import React from 'react';
import ProjectTemplate from '../components/ProjectTemplate';
import FadeInSection from '../components/FadeInSection';
import ProjectTag from '../components/ProjectTag';

const CircleStatus = () => {
    const asideItems = [
        { label: 'Brief', anchor: 'ProjectInfo' },
        { label: 'Problem', anchor: 'ProblemGoal' },
        { label: 'Final Design', anchor: 'finaloutcome' },
        { label: 'Research', anchor: 'Research' },
        { label: 'Ideation', anchor: 'ideation' },
        { label: 'Testing', anchor: 'testing' },
        { label: 'Reflection', anchor: 'Takeaways' },
    ];

    const sections = [
        {
            id: 'ProjectInfo',
            content: (
                <FadeInSection>
                    <div className="project-tags">
                        <ProjectTag>Industrial Design</ProjectTag>
                        <ProjectTag>Web Design</ProjectTag>
                    </div>
                    {/* <h1>Circle Status</h1> */}
                    <div className="columnlayout3">
                        <div>
                            <h2>Context: </h2>
                            <p>
                                This product was designed as part of the Integrated Product Development (IPD) course at
                                University of Michigan. The challenge was to design and develop a product that deal with
                                power outage.
                            </p>
                            <div>
                                <h2>Design Challenge </h2>
                                <p>"As cross-disciplinary design and development teams, how might we help people deal with
                                    electrical power outages, to ensure that basic needs can be met, inconveniences of the
                                    disruption are reduced, and/or possible benefits of the situation are leveraged or
                                    embraced." <br /> <br /> Check our final deliverable here:</p>
                                <a href="https://circlestatus.webflow.io/" target="_blank" className="button">
                                    <img src="/images/Paperclip 02.png" alt="Paperclip Icon" className="icon" />
                                    Go to Website
                                </a>
                            </div>
                        </div>
                        <div>
                            <h2>Role:</h2>
                            <p>
                                Industrial Design<br />Web Design
                            </p>
                            <div>
                                <h2>Team: </h2>
                                <p>
                                    Product Manger: David Cox <br />R&D: Garima Mazumdar <br />Branding Designer:
                                    Maggie Kirkman <br />Lecturer: Ross School of Business, Erika Block <br /> Stamps
                                    School of Art and Design, Bruce Tharp
                                </p>
                            </div>
                            <h2>Timelines:</h2>
                            <p>Fall 2024 | 15 weeks</p>
                        </div>
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'ProblemGoal',
            // header: 'Problem',
            // title: 'When the Lights Go Out',
            content: (
                <FadeInSection>
                    <h1>When the Lights Go Out...</h1>
                    <div className="columnlayout3">
                        <div>
                            <h1>
                                Staying connected and safe gets much harder.
                            </h1>
                        </div>
                        <div>
                            <br />
                            <p>
                                How might we help people deal with electrical power outages, ensure that basic needs are
                                met, reduce the inconveniences of disruption, and embrace potential benefits of the
                                situation?
                            </p>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="columnlayout3">
                        <div>
                            <h1>
                                How bad it is?
                            </h1>
                        </div>
                        <div>
                            <br />
                            <h2 style={{ color: '#0056F1' }}>5.6 hours </h2>
                            <p>Average duration of power interruptions per U.S. electricity customer in 2022 (EIA)</p>
                            <h2 style={{ color: '#0056F1' }}>18</h2>
                            <p>Weather-related disasters in 2022 caused over $1 billion in damages each (EIA)</p>
                            <h2 style={{ color: '#0056F1' }}>$150 billion</h2>
                            <p>Estimated annual economic loss to U.S. businesses from outages (DOE)</p>
                        </div>
                    </div>
                    <br /><br />

                    <h1>
                        Breaking down the Challenge:
                    </h1>
                    <br />
                    <hr />
                    <br />
                    <div className="columnlayout3">
                        <div>
                            <h2 style={{ color: '#0056F1' }}>What?</h2>
                            <p>A community care system</p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Who?</h2>
                            <p>Families and individuals</p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>Why?</h2>
                            <p>To keep people safe, connected, and supported</p>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>How?</h2>
                            <p>Monitor outages, enable communication, and foster community aid </p>
                        </div>
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'finaloutcome',
            // header: 'Final Design',
            // title: 'Introducing Circle Status',
            content: (
                <FadeInSection>
                    <br /><br />
                    <br /><br />
                    <br /><br />

                    <h1>Introducing Circle Status</h1>
                    <div className="columnlayout3">
                        <a href="https://circlestatus.webflow.io/" target="_blank" className="button">
                            <img src="/images/Paperclip 02.png" alt="Paperclip Icon" className="icon" />
                            Website
                        </a>
                        <br />
                        <p>A smart emergency solution designed to keep you and your community connected during power
                            outages. </p>
                    </div>
                    <br /><br />
                    <hr /> <br />

                    <div className="graphics-image-content">
                        <img src="/images/circle-final-sketch.png" alt="Circle Status sketch" />
                    </div>
                    <div className="graphics-image-content">
                        <img src="/images/circle-final-2.png" alt="Circle Status design" />
                    </div>
                    <div className="graphics-image-content">
                        <img src="/images/circle-final-1.png" alt="Circle Status design" />
                    </div>
                    <div className="graphics-image-content">
                        <img src="/images/circle-final-5.png" alt="Circle Status design" />
                    </div>
                    <div className="graphics-image-content">
                        <img src="/images/circle-final-4.png" alt="Circle Status design" />
                    </div>


                    <br /><br /><br />
                    <p style={{ margin: '0px', color: 'grey' }}>Impact</p>
                    <h1>Making Waves: Sales and lasting connections on trade show</h1>

                    <div className="columnlayout3">
                        <p>
                            The trade show was a 3-day competition organized by the Ross School of Business, University of
                            Michigan, featuring both a virtual and in-person segment. 4 teams competed,
                            attracting visitors, judges, industry investors, and entrepreneurs from various sectors.
                            <br />
                        </p>
                        <p>
                            Attendees were given $200 in "trade-show money" to vote and purchase products, with the team
                            earning the highest profit declared the winner.
                            To stand out, we developed tailored marketing and branding materials, along with promotional
                            content and advertisements, to draw a larger audience and increase purchases
                        </p>
                    </div>
                    <br />
                    <hr /><br />
                    <div className="columnlayout3">
                        <div>
                            <h1>
                                How good it is?
                            </h1>
                        </div>
                        <div>
                            <h2 style={{ color: '#0056F1' }}>264 units</h2>
                            <p>Sold 169 units during the online trade show and 95 units during the in-person event, totaling 305 units.</p>
                            <br />
                            <h2 style={{ color: '#0056F1' }}>$1,055,736</h2>
                            <p>Generated a total profit of $1,055,736 in trade-show currency, ranking among the second-performing teams.</p>
                            <br />
                            <h2 style={{ color: '#0056F1' }}>200+ attendees</h2>
                            <p>Engaged with over 200 attendees, including industry leaders, entrepreneurs, and investors.</p>
                        </div>
                    </div>
                    <br /><br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-impact-tradeshow.png" alt="Trade show impact" />
                    </div>
                </FadeInSection >
            ),
        },
        {
            id: 'Research',
            // header: 'Research',
            // title: 'We Tried it All',
            content: (
                <FadeInSection>


                    <br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-research-cover.png" alt="Research cover" />
                    </div>
                    <br />
                    <h1>In Research, We Tried it All</h1>
                    <br /> <hr />
                    <div className="columnlayout3">
                        <h1>50+ conversations around Michigan, in person and over zoom.</h1>
                        <p> <br />
                            We began by conducting 50+ user interviews with individuals who have experienced power outages in
                            Michigan. These conversations focused on understanding their emotions, challenges, and priorities
                            during such events, providing a wealth of firsthand accounts.
                        </p>
                    </div>
                    <br /><br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-research-interview.png" alt="Research interviews" />
                    </div>
                    <br /> <br /><br />
                    <h1>From Conversation to Insight</h1>
                    <hr /> <br />
                    <p>After the summarizing the primary research, we got following insights:</p> <br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-research-Insights.png" alt="Research insights" />
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'ideation',
            // header: 'Ideation',
            // title: 'From Branding Scale to Actual Ideas',
            content: (
                <FadeInSection>
                    <br /><br /> <br /><br />
                    <h1>From Branding Scale to Actual Ideas</h1>
                    <hr /> <br />
                    <div className="columnlayout3">
                        <p>
                            To guide our vision, we established a team branding style scale, ensuring the design
                            maintained a cohesive and approachable tone throughout the process.
                        </p>
                        <p>
                            Then, we created an inspiration board that visually captured our design aspirations and
                            user-centric focus.
                        </p>
                    </div>
                    <br /><br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-ideation-inspo.png" alt="Ideation inspiration" />
                    </div>


                    <br /><br /><br /><br />
                    <h1>Business Plan</h1>
                    <hr /> <br />
                    <div className="columnlayout3">
                        <div>
                            <p style={{ margin: 0, color: 'grey' }}>Target Market</p>
                            <h2>
                                Elderly living independently +
                                Rural/Suburban households+
                                Urban professionals
                            </h2>
                        </div>
                        <div>
                            <p style={{ margin: 0, color: 'grey' }}>Unique Value Proposition</p>
                            <h2>
                                We integrates emergency lighting with real-time
                                communication and community support, setting it apart from basic lights and costly
                                subscriptions.
                            </h2>
                        </div>
                        <div>
                            <p style={{ margin: 0, color: 'grey' }}>Pricing Strategy</p>
                            <h2>
                                Priced at $39.99 to balance affordability and value, offering a
                                comprehensive solution.
                            </h2>
                        </div>
                    </div>
                </FadeInSection>
            ),
        },
        {
            id: 'testing',
            header: 'Testing',
            title: '3 concept, 2 prototype testing',
            content: (
                <FadeInSection>
                    <br /><br /><br />
                    <h1>3 Concept + 2 Prototype Testing</h1>
                    <hr /> <br />
                    <div className="columnlayout3">
                        <div>
                            <h2>Round 1: Concept Survey</h2>
                        </div>
                        <div>

                            <p>
                                We sent out a survey to 50 people, asking them to rate their purchase interest on a scale
                                from one to ten. From the responses, we found that the "Notify Light" concept scored the
                                highest.
                            </p>
                        </div>
                    </div><br />

                    <div className="graphics-image-content">
                        <img src="/images/circle-testing-r1.png" alt="Testing round 1" />
                    </div>
                    <br /><br />
                    <div className="columnlayout3">
                        <div>
                            <h2>Round 2: Reverse Brainstorm</h2>
                        </div>
                        <div>
                            <p>
                                We applied the reverse brainstorming, which helped us critique
                                and evaluate collaboratively. We pinpointed areas where the idea
                                could be improved, and ways to address these limits effectively.
                            </p>
                        </div>
                    </div><br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-testing-r2.png" alt="Testing round 2" />
                    </div>
                    <br /><br /><br /><br />

                    <div className="columnlayout3">
                        <div>
                            <h2>Round 3: Technical Feasibility</h2>
                        </div>
                        <div>
                            <p>
                                Since we're designing a product that combines software and hardware, we needed to ensure
                                it's technically feasible. Through research, Garima and David figured out how to use
                                APIs and other key technologies to bring it to life.
                            </p>
                        </div>
                    </div><br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-testing-r3.png" alt="Testing round 3" />
                    </div>
                    <br /><br /><br /><br />

                    <div className="columnlayout3">
                        <div>
                            <h1>Collaborative Prototyping</h1>
                        </div>
                        <div>
                            <p>
                                I worked closely with Maggie. She used Rhino for modeling, while I
                                rendered the scenes in Blender. David focused on researching the product's internal
                                structure. We experimented with different textures and shapes, iterating on our design.
                                <br /><br />
                                Through design reviews and peer feedback, we refined and finalized the solution.
                            </p>
                        </div>
                    </div><br />
                    <div className="graphics-image-content">
                        <img src="/images/circle-testing-proto.png" alt="Collaborative prototyping" />
                    </div>

                </FadeInSection>
            ),
        },
        {
            id: 'Takeaways',
            // header: 'Reflection',
            // title: 'Reflection',
            content: (
                <FadeInSection>
                    <h1>Reflection</h1>
                    <hr />
                    <div>
                        <h2>Be "a part of" matters</h2>

                        <p>
                            In conclusion, this project was an absolute marvel to be a part of. Rarely does one get the
                            opportunity to engage with the entire product development cycle, from ideation to delivering
                            a working MVP. This experience taught me the critical value of collaborating within a
                            cross-functional team, working alongside developers, visual designers, product managers,
                            engineers, and artists.
                        </p>
                    </div>
                    <div>
                        <h2>Next Steps</h2>

                        <p>
                            Integrate additional app functionalities, such as predictive outage alerts and energy-saving
                            modes, to enhance the product's value.
                            <br /> Conduct a pilot launch in targeted regions to gather real-world user feedback and
                            refine the design further.
                        </p>
                    </div>
                </FadeInSection>
            ),
        },
    ];

    const footerContent = null;

    return (
        <ProjectTemplate
            coverImage="/images/circle-cover-inside.png"
            projectTitle="Circle Status"
            asideItems={asideItems}
            sections={sections}
            footerContent={footerContent}
        />
    );
};

export default CircleStatus;