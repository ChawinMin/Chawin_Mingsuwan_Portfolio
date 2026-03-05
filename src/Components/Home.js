import { Typewriter } from 'react-simple-typewriter';
import GatewayColoringImg from "../assets/img/GatewayImg/GatewayColoring.png";
import LANLImg from "../assets/img/LANL/LANL_3.png";
import TDEImg from "../assets/img/TDE/TDE_Cover_Photos.png";
import ProjectCard from './ProjectCard';
import APLImg from "../assets/img/APL/VRAPLMCC.png";

export const Home = () => {
    return (
        <>
            <section className="home" id="home-hero">
                <div className="hero-kicker">
                    <Typewriter 
                    words ={['Creative Technologists',
                        'XR Engineer',
                        'Data Visualization Enthusiast',
                        'Game Designer',
                        'Astronomer',
                        'Software Engineer']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </div>

            </section>

            <section className = "featured-section" id='featured'>
                <p className = 'section-subtitle'>XR, data visualization, and more</p>
                <h2 className = "Feature-title">Featured Works</h2>
                
                {/*Marker for featured section start*/}
                <div id="featured-start"/>
                
                {/*APL*/}
                <ProjectCard
                    miniTitle="NASA JSC Mission Control Center"
                    badge="JHU APL Sponsor Project"
                    title="Virtual Reality & Intelligent Agent for NASA JSC Mission Control"
                    description="Project in Progress: Johns Hopkins Applied Physics Laboratory (JHU APL) in collaboration with IXL to develop an immersive visualization and AI assistant for NASA Johnson Space Center's Mission Control Center. 
                    The project focuses on creating an interactive 3D environment that enhances situational awareness and decision-making for mission controllers, leveraging cutting-edge VR technology and AI-driven insights."
                    tags={['Unity', 'VR', 'C#', 'AI Integration', 'API', 'Human-Computer Interaction', 'UI/UX Design']}
                    img= {APLImg}
                    link="/APL"
                />

                {/*GVT*/}
                <ProjectCard
                    miniTitle="Immersive Mission Planning"
                    badge="NASA/Barrios Technology"
                    title="Gateway Visualization Tool"
                    description="An immersive XR application developed in collaboration with NASA and Barrios Technology to support mission planning and systems understanding for the Lunar Gateway. The tool enables users to explore complex spacecraft modules, 
                    spatial relationships, and mission data in a fully interactive 3D environment, enhancing situational awareness and collaborative decision-making."
                    tags={['VR', 'Unreal Engine', 'Blueprints', 'C++', 'Data Visualization', 'Human-Computer Interaction', 'UI/UX Design']}
                    img={GatewayColoringImg}
                    link="/Gateway"
                />
                {/*Los Alamos National Lab*/}
                <ProjectCard
                    miniTitle="Human-Centered XR Research"
                    badge="Los Alamos National Laboratory"
                    title="XR & HPC Internship"
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

            </section>
        </>
    )
}
