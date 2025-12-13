import { Typewriter } from 'react-simple-typewriter';
import ProjectCard from './ProjectCard';

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

                {/*GVT*/}
                <ProjectCard
                    miniTitle="Gateway Visualization Tool"
                    badge="NASA/Barrios Technology"
                    title="Immersive Mission Planning & Systems Visualization in XR"
                    description="An immersive XR application developed in collaboration with NASA and Barrios Technology to support mission planning and systems understanding for the Lunar Gateway. The tool enables users to explore complex spacecraft modules, 
                    spatial relationships, and mission data in a fully interactive 3D environment, enhancing situational awareness and collaborative decision-making."
                    tags={['VR', 'Unreal Engine', 'Blueprints', 'C++', 'Data Visualization', 'Human-Computer Interaction', 'UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*Los Alamos National Lab*/}
                <ProjectCard
                    miniTitle="Human-Centered XR Research"
                    badge="Los Alamos National Laboratory"
                    title="Immersive Data Visualization in VR"
                    description="A human-centered XR research project at Los Alamos National Laboratory exploring spatial data interaction on Apple Vision Pro. 
                    The work investigates how immersive interfaces and natural interaction techniques can improve data comprehension, analysis, and decision-making in complex scientific and engineering contexts."
                    tags={['VR', 'Apple Vision Pro', 'Unreal Engine', 'Blueprints','C++', 'Human-Computer Interaction', 'UI/UX Design']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />
                {/*TDE*/}
                <ProjectCard
                    miniTitle="Tidal Disruption Event"
                    badge="Astrophysics Computational Research"
                    title="Search for Tidal Disruption Events in ZTF Data"
                    description="A data-driven astrophysics research project focused on identifying and analyzing Tidal Disruption Events (TDEs) using data from the Zwicky Transient Facility (ZTF). 
                    The project employs machine learning techniques and statistical analysis to detect TDE signatures, contributing to our understanding of black hole physics and stellar dynamics."
                    tags={['Data Visualization', 'Python', 'Pandas', 'FastAPI', 'UI/UX Design', 'Physics', 'ML']}
                    img="https://via.placeholder.com/300"
                    link="#"
                />

            </section>
        </>
    )
}
