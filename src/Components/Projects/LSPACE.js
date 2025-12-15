import LSPACEImg from "../../assets/img/LSPACE/LSPACEImg1.png";
import LSPACEPDF from "../../assets/img/LSPACE/PDR Team 22 - Fall 2024.pdf";

export const LSPACE = () => {
    return (
        <>
            <section className = "default" id="lspace-hero">
                <p className="section-subtitle">NASA L'SPACE Mission Concept Academy</p>
                <h1 className="section-title">Student Computer Hardware Engineer & Scientists</h1>
                <p className="project-overview">
                    NASA L'SPACE is a <strong>competitive, NASA-sponsored academy</strong> designed for 
                    university students interested in gaining real-world experience in 
                    space exploration and project management. Participants work in teams 
                    to <strong>solve real NASA challenges</strong>, learn about NASA's processes, and develop 
                    skills in leadership, collaboration, and innovation. It's a hands-on 
                    opportunity to engage in mission-related projects and prepare for careers 
                    in the space industry.
                </p>
                <h2 className = 'skills-title'>Lunar Concept</h2>

                <section name = "text-image-next-to-each-other" className="image-and-bullets-next-to-each-other">
                    <div className="LSPACE-Paragraphs">

                        <p>
                        As a <strong>Student Computer Hardware Engineer and Scientist</strong> in NASA L’SPACE, 
                        I worked with a multidisciplinary team on designing a mission focused on 
                        lunar cave exploration, specifically targeting Tycho-29B, a double-chambered cave. 
                        My primary responsibilities involved understanding how the rover’s subsystems—such as <strong>command 
                        and data handling, mechanical systems, and software architecture</strong>—interacted to 
                        ensure mission success.
                        </p>
                        
                        <p>
                        I designed the <strong>software flowchart</strong> that the rover would follow, helping 
                        bridge communication between the engineering and science teams. 
                        Additionally, I utilized <strong>JMARS</strong> to analyze landing strategies and 
                        terrain characteristics, gaining insights into lunar properties and 
                        environmental challenges. This experience reinforced my understanding 
                        of <strong>mission design, robotics, and resource utilization</strong>, contributing to 
                        the broader goal of future human exploration on the Moon.
                        </p>

                    </div>

                    <img src= {LSPACEImg} alt="LSPACE Project" className = "LSPACE-image"/>
                
                </section>

                <a href= {LSPACEPDF} download="LSPACE_Final_Report.pdf" className="download-link">
                PDR Download
                </a>
            </section>
        </>
    )
}