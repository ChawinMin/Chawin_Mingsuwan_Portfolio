import LSPACEImg from "../../assets/img/LSPACE/LSPACEImg1.png";
import LSPACEPDF from "../../assets/img/LSPACE/PDR Team 22 - Fall 2024.pdf";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';

export const LSPACE = () => {
    return (
        <ProjectDetailLayout
            subtitle="NASA L'SPACE Mission Concept Academy"
            title="Student Computer Hardware Engineer & Scientist"
            heroImage={LSPACEImg}
            tags={['Mission Design', 'Computer Engineering', 'Leadership', 'Multi-disciplinary Collaboration', 'Lunar Exploration', 'Systems Engineering']}
            metadata={[
                { label: "Program", value: "NASA L'SPACE" },
                { label: "Role", value: "Computer HW Engineer" },
                { label: "Mission", value: "Tycho-29B Cave Exploration" },
                { label: "Semester", value: "Fall 2024" },
            ]}
            currentPath="/LSPACE"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    NASA L'SPACE is a <strong>competitive, NASA-sponsored academy</strong> designed for university students interested in gaining real-world experience in space exploration and project management. Participants work in teams to <strong>solve real NASA challenges</strong>, learn about NASA's processes, and develop skills in leadership, collaboration, and innovation. It's a hands-on opportunity to engage in mission-related projects and prepare for careers in the space industry.
                </p>
            </ProjectSection>

            <ProjectSection title="Lunar Concept">
                <div className="pd-two-col">
                    <div>
                        <p className="pd-text">
                            As a <strong>Student Computer Hardware Engineer and Scientist</strong> in NASA L'SPACE, I worked with a multidisciplinary team on designing a mission focused on lunar cave exploration, specifically targeting Tycho-29B, a double-chambered cave. My primary responsibilities involved understanding how the rover's subsystems—such as <strong>command and data handling, mechanical systems, and software architecture</strong>—interacted to ensure mission success.
                        </p>
                        <p className="pd-text">
                            I designed the <strong>software flowchart</strong> that the rover would follow, helping bridge communication between the engineering and science teams. Additionally, I utilized <strong>JMARS</strong> to analyze landing strategies and terrain characteristics, gaining insights into lunar properties and environmental challenges. This experience reinforced my understanding of <strong>mission design, robotics, and resource utilization</strong>, contributing to the broader goal of future human exploration on the Moon.
                        </p>
                    </div>
                    <ImageGallery
                        images={[{ src: LSPACEImg, alt: "LSPACE Project" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>

            <ProjectSection title="Preliminary Design Review">
                <div className="pd-links">
                    <a href={LSPACEPDF} download="LSPACE_Final_Report.pdf" className="pd-link">
                        📄 Download PDR Report →
                    </a>
                </div>
                <iframe title="LSPACE PDR" src={LSPACEPDF} className="pd-pdf-embed" loading="lazy" />
            </ProjectSection>
        </ProjectDetailLayout>
    )
}