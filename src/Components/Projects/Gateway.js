import GatewayConferenceImg1 from "../../assets/img/GatewayImg/ConferenceImg1.jpeg";
import GatewayConferenceImg2 from "../../assets/img/GatewayImg/ConferenceImg2.jpeg";
import GatewayConferenceImg3 from "../../assets/img/GatewayImg/ConferenceImg3.jpeg";
import GatewayColoringImg from "../../assets/img/GatewayImg/GatewayColoring.png";
import GatewayEnvironmentImg from "../../assets/img/GatewayImg/GatewayEnv.png";
import GatewayDockingImg from "../../assets/img/GatewayImg/GatewayDockingCubes.png";

export const Gateway = () => {
    return (
        <>
            <section className = "Gateway" id="gateway-hero">

                <p className="section-subtitle">NASA/Barrios Technology</p> 
                <h1 className="section-title">Gateway Visualization Tool</h1>

                <p className="project-overview">
                    At The Data Mine Corporate Partner Program, I am working with <strong>Barrios Technology a NASA contractor</strong> on a <strong>Gateway and Lunar Surface Operations Visualization Tool</strong>. This project focuses on developing data-driven visualizations to support <strong>mission planning</strong> and analysis for lunar exploration. By leveraging data science and visualization techniques, we aim to create tools that enhance <strong>situational awareness</strong> and <strong>decision-making</strong> for future Gateway and lunar surface operations.
                </p>

                <h3 className = 'skills-title'>Features Implemented</h3>
                <section className="gateway-project" id="gateway">
                    <div className = 'project-image-stack'>
                        <ul>
                            <li><strong>Led Unreal Engine onboarding and collaborative XR development</strong> for a multidisciplinary team.</li>
                            <li><strong>Implemented interactive Gateway module manipulation</strong> using Blueprint-driven spatial controls.</li>
                            <li><strong>Built dynamic solar array and radiator rotation systems</strong> to simulate realistic deployment behavior.</li>
                            <li><strong>Created an advanced editor mode</strong> with HSV color controls and reflectivity tuning for high-dynamic-range visualization.</li>
                        </ul>
                        <img src = {GatewayDockingImg} alt="Gateway Visualization Tool Screenshot" className="docking-image"/>
                    </div>
                    <div className = 'project-image-stack'>
                        <img src={GatewayColoringImg} alt="Gateway Visualization Tool Screenshot" className="project-image"/>
                        <img src={GatewayEnvironmentImg} alt="Gateway Visualization Tool Screenshot" className="project-image"/>
                    </div>
                </section>

                <section className = 'IEEE' id='ieee'>
                    <h2 className = 'skills-title'>IEEE SMC-IT/SCC 2025</h2>
                    <p className = 'project-overview'>
                    I served as first author on our paper, “Foundations of a Visualization Tool for NASA Gateway and Lunar Surface Operations,” which was accepted for publication at the IEEE SMC-IT/SCC 2025 conference. I led the writing, revisions, and submission process, ensuring the work reflected both the technical depth of our VR tool and its broader impact on future mission operations. 
                    At the conference, I presented our findings, highlighting how XR and human-centered interaction design can support NASA Gateway planning and lunar surface activities. The paper will be available on IEEE Xplore (link coming soon).
                    </p>

                    <div className='ieee-images'>
                        <img src={GatewayConferenceImg1} alt="IEEE Conference Presentation" className="ieee-image"/>
                        <img src={GatewayConferenceImg2} alt="IEEE Conference Paper" className="ieee-image"/>
                        <img src={GatewayConferenceImg3} alt="IEEE Conference Attendance" className="ieee-image"/>
                    </div>
                    
                </section>

            </section>
        </>
    )
}