import ProjectCard from "./ProjectCard"
import GatewayColoringImg from "../assets/img/GatewayImg/GatewayColoring.png";
import LANLImg from "../assets/img/LANL/LANL_3.png";
import APLImg from "../assets/img/APL/APLLogo.png";
import TDEImg from "../assets/img/TDE/TDE_Cover_Photos.png";

export const AllWork = () => {
    return (
        <>
            <section className="all-work" id="work">
                <p className="section-subtitle">Industry, personal, and resarch</p>
                <h2 className="section-title">All Work</h2>
            </section>

            <section className="projects-list">
                {/*JHU APL*/}
                <ProjectCard
                    miniTitle="NASA JSC Mission Control Center Immersive Visualization & AI Assistant"
                    badge="JHU APL & IXL"
                    title="Immersive Visualization & AI Assistant for NASA JSC Mission Control"
                    description="Coming soon: Johns Hopkins Applied Physics Laboratory (JHU APL) in collaboration with IXL to develop an immersive visualization and AI assistant for NASA Johnson Space Center's Mission Control Center. 
                    The project focused on creating an interactive 3D environment that enhances situational awareness and decision-making for mission controllers, leveraging cutting-edge VR technology and AI-driven insights."
                    tags={['Unity', 'VR', 'C#', 'AI Integration', 'API', 'Human-Computer Interaction', 'UI/UX Design']}
                    img= {APLImg}
                    link="/APL"
                />
                {/*GVT*/}
                <ProjectCard
                    miniTitle="Gateway Visualization Tool"
                    badge="NASA/Barrios Technology"
                    title="Immersive Mission Planning & Systems Visualization in XR"
                    description="An immersive XR application developed in collaboration with NASA and Barrios Technology to support mission planning and systems understanding for the Lunar Gateway. The tool enables users to explore complex spacecraft modules, 
                    spatial relationships, and mission data in a fully interactive 3D environment, enhancing situational awareness and collaborative decision-making."
                    tags={['VR', 'Unreal Engine', 'Blueprints', 'C++', 'Data Visualization', 'Human-Computer Interaction', 'UI/UX Design']}
                    img= {GatewayColoringImg}
                    link="/Gateway"
                />
                {/*Los Alamos National Lab*/}
                <ProjectCard
                    miniTitle="Human-Centered XR Research"
                    badge="Los Alamos National Laboratory"
                    title="Immersive Data Visualization in VR"
                    description="A human-centered XR research project at Los Alamos National Laboratory exploring spatial data interaction on Apple Vision Pro. 
                    The work investigates how immersive interfaces and natural interaction techniques can improve data comprehension, analysis, and decision-making in complex scientific and engineering contexts."
                    tags={['VR', 'Apple Vision Pro', 'Unreal Engine', 'Blueprints','C++', 'Human-Computer Interaction', 'UI/UX Design']}
                    img= {LANLImg}
                    link="/LANL"
                />
                {/*TDE*/}
                <ProjectCard
                    miniTitle="Tidal Disruption Event"
                    badge="Astrophysics Computational Research"
                    title="Search for Tidal Disruption Events in ZTF Data"
                    description="A data-driven astrophysics research project focused on identifying and analyzing Tidal Disruption Events (TDEs) using data from the Zwicky Transient Facility (ZTF). 
                    The project employs machine learning techniques and statistical analysis to detect TDE signatures, contributing to our understanding of black hole physics and stellar dynamics."
                    tags={['Data Visualization', 'Python', 'Pandas', 'FastAPI', 'UI/UX Design', 'Physics', 'ML']}
                    img= {TDEImg}
                    link="/TDE"
                />
                {/*Virtual Reality Study Hub*/}
                <ProjectCard
                    miniTitle="Virtual Reality Study Hub"
                    badge="Educational Technology"
                    title="Immersive Learning Environment in VR"
                    description="An immersive learning environment developed in VR for educational purposes. The project explores how virtual reality can enhance student engagement and comprehension in complex subjects, particularly in STEM fields."
                    tags={['VR', 'Unity', 'C#', 'Educational Technology', 'UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*Ilender Internship*/}
                <ProjectCard
                    miniTitle="Software Engineering Internship"
                    badge="Ilender"
                    title="Enhancing data processing pipelines"
                    description="A software engineering internship focused on enhancing data processing pipelines for improved efficiency and reliability. The project involved developing and optimizing algorithms to handle large datasets, contributing to the overall performance of the company's data infrastructure."
                    tags={['Python', 'Data Processing', 'Software Engineering', 'ML']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*UFO Sightings Data Visualization*/}
                <ProjectCard
                    miniTitle="UFO Data Visualization"
                    badge="Personal Project"
                    title="Interactive Visualization of UFO Sightings"
                    description="An interactive visualization project for UFO sightings data. The project explores how data visualization can be used to analyze and present UFO sighting reports, contributing to our understanding of patterns and trends in reported phenomena."
                    tags={['Data Visualization', 'Python', 'Pandas', 'UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*Rortos*/}
                <ProjectCard
                    miniTitle="Rortos"
                    badge="Game Development Personal Project"
                    title="Quest to Save the Kingdom"
                    description="A fantasy adventure game developed as a personal project. The game features immersive storytelling, engaging gameplay mechanics, and rich world-building, showcasing skills in game design and development."
                    tags={['Unreal Engine', 'Blueprints', 'C++', 'Game Design', 'Sound Design','Level Design','UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*Cults of the Carvenal*/}
                <ProjectCard
                    miniTitle="Cults of the Carven"
                    badge="Game Development Personal Project"
                    title="A dark, horror RPG Experience"
                    description="A dark horror RPG game developed as a personal project. The game combines atmospheric storytelling, challenging gameplay, and immersive environments to create a compelling horror experience."
                    tags={['Unreal Engine', 'Blueprints', 'C++', 'Game Design', 'Sound Design','Level Design','UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*NASA L'SPACE MCA*/}
                <ProjectCard
                    miniTitle="Mission Concept Academy"
                    badge="NASA L'SPACE"
                    title="Designing a conceptual Lunar Rover Mission to explore Tycho Crater."
                    description=""
                    tags={['Mission Design', 'Computer Engineering', 'Leadership', 'Multi-disciplinary Collaboration','Lunar Exploration', 'Systems Engineering']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*Minecraft Mechanical Engineering Educational Mod*/}
                <ProjectCard
                    miniTitle="Minecraft Mechanical Engineering Educational Mod"
                    badge="First-Time Engineering Research Fellowship"
                    title="Mod to Teach Statics in Minecraft"
                    description="A Minecraft mod developed to teach principles of statics and mechanical engineering. The mod provides an interactive platform for students to explore engineering concepts through gameplay, enhancing learning outcomes in STEM education. 
                    This project was developed as part of a First-Time Engineering Research Fellowship and was presented at the 2024 Spring Research Symposium."
                    tags={['Java', 'Quality & Assurance','Minecraft Modding', 'Mechanical Engineering', 'Educational Technology', 'UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
            </section>
        </>
    )
}