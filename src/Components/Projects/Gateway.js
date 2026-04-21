import GatewayConferenceImg1 from "../../assets/img/GatewayImg/ConferenceImg1.jpeg";
import GatewayConferenceImg2 from "../../assets/img/GatewayImg/ConferenceImg2.jpeg";
import GatewayConferenceImg3 from "../../assets/img/GatewayImg/ConferenceImg3.jpeg";
import GatewayColoringImg from "../../assets/img/GatewayImg/GatewayColoring.png";
import GatewayEnvironmentImg from "../../assets/img/GatewayImg/GatewayEnv.png";
import GatewayDockingImg from "../../assets/img/GatewayImg/GatewayDockingCubes.png";
import GatewayPSDImg from "../../assets/img/GatewayImg/PSDGVT.jpg";
import GatewayLogo from "../../assets/img/GatewayImg/GatewayLogo.jpg"
import GatewayPresentation from "../../assets/img/GatewayImg/PosterPresentation.jpg";
import GatewayPoster from "../../assets/img/GatewayImg/TDM BGV Poster.pdf"

export const Gateway = () => {
    return (
        <>
            <section className="Gateway" id="gateway-hero">

                <p className="section-subtitle">NASA/Barrios Technology</p>
                <h1 className="section-title">Gateway Visualization Tool</h1>

                <p className="project-overview">
                    At The Data Mine Corporate Partner Program, I am working with <strong>Barrios Technology a NASA JSC contractor</strong> on a <strong>Gateway and Lunar Surface Operations Visualization Tool</strong>. This project focuses on developing data-driven visualizations to support <strong>mission planning</strong> and analysis for lunar exploration. By leveraging data science and visualization techniques, we aim to create tools that enhance <strong>situational awareness</strong> and <strong>decision-making</strong> for future Gateway and lunar surface operations.
                </p>

                <h2 className="skills-title">What is Gateway?</h2>
                <div className='project-details'>
                    <p className="project-overview">
                        Gateway is a planned <strong>lunar orbiting space station</strong> scheduled for <strong>Artemis IV</strong>.
                        Gateway is central to the NASA-led Artemis missions to return to the Moon for scientific discovery and chart a path for the <strong>first human missions to Mars and beyond</strong>.
                        The lunar-space station will be a multi-purpose outpost supporting <strong>lunar surface missions, science in lunar orbit, and human exploration further into the cosmos</strong>.
                        NASA is working with commercial and international partners to build humanity's Gateway. International partners include <strong>Canadian Space Agency (CSA), European Space Agency (ESA), Japan Aerospace Exploration Agency (JAXA)</strong>, and the <strong>Mohammed Bin Rashid Space Centre (MBRSC)</strong>.
                    </p>
                    <img src={GatewayLogo} alt="Gateway Visualization Tool Screenshot" className="lanl-image" />
                </div>

                <h2 className="skills-title">Project Overview</h2>
                <p className="project-overview">
                    I served as the <strong>UX and VR Lead</strong> for the <strong>Gateway Visualization Tool (GVT)</strong> for over a year,
                    leading a multidisciplinary student team across <strong>Purdue University</strong>
                    and <strong>Angelo State University</strong> (remote) to design
                    and build immersive visualization tools that support <strong>NASA Gateway</strong>
                    and future <strong>lunar surface operations</strong>. The tool
                    provides <strong>interactive, spatial visualizations</strong> of
                    the Gateway’s structure, subsystems, and operational
                    configurations, enabling mission planners and engineers
                    to explore spacecraft components in context and better
                    understand complex system relationships. By translating spacecraft
                    concepts into intuitive XR experiences, the platform
                    enhances <strong>situational awareness
                    </strong>, supports <strong>configuration analysis</strong>,
                    and enables <strong>more informed decision-making </strong>
                    for future cislunar missions through immersive interaction
                    and human-centered design.
                </p>

                <h2 className='skills-title'>Features Implemented</h2>
                <section className="gateway-project" id="gateway">
                    <div className='project-image-stack'>
                        <ul>
                            <li><strong>Led Unreal Engine onboarding and collaborative XR development</strong> for a multidisciplinary team, establishing the technical workflow for the NASA Gateway Visualization Tool.</li>
                            <li><strong>Designed the interactive XR architecture</strong> enabling users to manipulate Gateway modules in real time through Blueprint-driven spatial controls.</li>
                            <li><strong>Implemented modular spacecraft assembly mechanics</strong> allowing translation, rotation, and positioning of Gateway components inside an immersive environment.</li>
                            <li><strong>Built dynamic solar array and radiator articulation systems</strong> simulating realistic deployment and rotation behaviors for spacecraft visualization.</li>
                            <li><strong>Developed immersive inspection tools</strong> allowing users to explore Gateway structures and components in spatial context.</li>
                            <li><strong>Created an advanced visualization editor mode</strong> with HSV color controls and reflectivity tuning for high-dynamic-range material visualization.</li>
                            <li><strong>Implemented material and lighting adjustment systems</strong> to evaluate reflectivity and surface properties across Gateway modules.</li>
                            <li><strong>Optimized Blueprint interaction systems</strong> to support responsive manipulation and smooth XR interaction workflows.</li>
                            <li><strong>Enabled immersive spacecraft configuration exploration</strong> supporting understanding of Gateway structure and subsystem relationships.</li>
                        </ul>
                        <img src={GatewayColoringImg} alt="Gateway Visualization Tool Screenshot" className="project-image" />
                    </div>
                    <div className='project-image-stack'>
                        <img src={GatewayDockingImg} alt="Gateway Visualization Tool Screenshot" className="docking-image" />
                        <img src={GatewayEnvironmentImg} alt="Gateway Visualization Tool Screenshot" className="project-image" />
                    </div>
                </section>

                <section className='IEEE' id='ieee'>
                    <h2 className='skills-title'>Data Mine Corporate Partners Symposium </h2>
                    <p className='project-overview'>
                        I presented the <strong>Gateway Visualization Tool</strong> at the <strong>Data Mine Corporate
                            Partners Symposium in April 2025</strong>. The presentation highlighted the
                        tool's <strong>immersive XR features</strong>, its potential applications for
                        <strong>NASA Gateway and lunar surface operations</strong>, and the
                        collaborative development process with <strong>NASA, Barrios Technology, Purdue, and Angelo State University</strong>.
                        The presentation was well received by industry professionals,
                        NASA representatives, and academic peers, showcasing the tool's
                        innovative approach to supporting <strong>future space exploration
                            missions through human-centered design and immersive visualization.</strong>
                    </p>
                    <div className='ieee-images'>
                        <img src={GatewayPresentation} alt="IEEE Conference Presentation" className="XR-poster" />
                        <iframe title="Gateway Visualization Tool Poster" src={GatewayPoster} className="lanl-slide" loading="lazy" ></iframe>
                    </div>
                </section>

                <section className='IEEE' id='ieee'>
                    <h2 className='skills-title'>IEEE SMC-IT/SCC 2025</h2>
                    <p className='project-overview'>
                        I served as <strong>first author</strong> on our paper, <strong>“Foundations of a Visualization Tool for NASA Gateway and Lunar Surface Operations,”</strong> which was accepted for publication at the <strong>IEEE SMC-IT/SCC 2025 conference</strong>. I led the writing, revisions, and submission process, ensuring the work reflected both the technical depth of our VR tool and its broader impact on future mission operations.
                        At the conference, <strong>I presented our findings to various NASA centers</strong>., highlighting how XR and human-centered interaction design can support NASA Gateway planning and lunar surface activities. Additionally, I <strong>participated in an author panel</strong> along with XR experts and NASA employees. The paper will be available on IEEE Xplore (link coming soon).
                    </p>

                    <div className='lanl-project-images'>
                        <img src={GatewayConferenceImg1} alt="IEEE Conference Presentation" className="ieee-image" />
                        <img src={GatewayConferenceImg2} alt="IEEE Conference Paper" className="ieee-image" />
                        <img src={GatewayConferenceImg3} alt="IEEE Conference Attendance" className="ieee-image" />
                    </div>

                </section>

                <section className='out-reach'>
                    <h2 className='skills-title'>Purdue Space Day 30th Anniversary - The Largest STEM Outreach & GVT</h2>
                    <p className='project-overview'>
                        Purdue Space Day (PSD) is an <strong>all-day, educational outreach program</strong> held each fall on the West Lafayette campus.
                        It is designed to give approximately <strong>675 students from 3rd to 8th grades</strong> the opportunity to learn about engineering and
                        space exploration through listening to a presentation by a
                        <strong> Purdue alumnus astronaut</strong> and by participating in three
                        unique age-appropriate, hands-on experiences with the
                        intention of <strong>sparking interest in science, technology,
                            engineering and math (STEM) using a space theme</strong>.
                    </p>

                    <p className='project-overview'>
                        For the 2025 Purdue Space Day, the <strong>30th annversary</strong> of the event, I was the <strong>Director of Activities and Treasurer</strong>.
                        I was in charge of developing the <strong>9 unique STEM activities</strong>, leading <strong>400+ volunteers, 11+ organizations, and managing 600+ students</strong>.
                        This year, I developed a Gateway-themed activity where students built their own Gateway modules using cardboard and other materials.
                        And the <strong>Gateway Visualization Tool</strong> was featured in the activity to let 5th - 6th grade students <strong>spatially and visually understand the Gateway and its components in Lunar orbit</strong>.
                    </p>

                    <div className='project-details'>
                        <img src={GatewayPSDImg} alt='Outreach-img' className='ieee-image' />

                        <p className='project-overview'>Image of me showing astronaut <strong>Roy Bridges</strong> about the Gateway Visualization Tool during the event. I developed this activity for 5th - 6th graders to develop their own version of <strong>Gateway</strong>, GVT was used to inspire students and help them spatially understand what it would look like in space. This was the <strong>first ever time </strong>
                            the tool was used for outreach, highlighting its potential impact on future STEM outreach. The tool was well received by students, faculty, and volunteers, and it provided a unique opportunity to inspire the next generation of space explorers by giving them a hands-on experience with NASA's Gateway mission.
                        </p>
                    </div>

                </section>

            </section>
        </>
    )
}