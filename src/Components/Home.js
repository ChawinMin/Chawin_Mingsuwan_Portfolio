import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import BackgroundAtmosphere from "./BackgroundAtmosphere";
import GatewayColoringImg from "../assets/img/GatewayImg/GatewayColoring.png";
import LANLImg from "../assets/img/LANL/LANL_3.png";
import TDEImg from "../assets/img/TDE/TDE_Cover_Photos.png";
import ProjectCard from './ProjectCard';
import APLImg from "../assets/img/APL/VREnvironment/Image3.png";
import SUITSImg from "../assets/img/SUITS/Azeem_Ehtisham-Felix-13.jpg";

export const Home = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'relative' }}
        >
            <BackgroundAtmosphere variant="home" />
            <section className="home" id="home-hero">
                <div className="hero-glow"></div>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: { color: { value: "transparent" } },
                        fpsLimit: 60,
                        particles: {
                            color: { value: "#60a5fa" },
                            links: { color: "#60a5fa", distance: 180, enable: true, opacity: 0.08, width: 1 },
                            move: { enable: true, speed: 0.4 },
                            number: { density: { enable: true, area: 1200 }, value: 25 },
                            opacity: { value: 0.15 },
                            shape: { type: "circle" },
                            size: { value: { min: 1, max: 2 } },
                        },
                        detectRetina: true,
                    }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}
                />

                <div className="hero-content" style={{ position: "relative", zIndex: 2 }}>
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="hero-label"
                    >
                        <Typewriter
                            words={['XR Engineer', 'Creative Technologist', 'Software Engineer', 'Human-Centered Designer', 'Astronomer']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </motion.p>

                    <motion.h1
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="hero-name"
                    >
                        Chawin Mingsuwan
                    </motion.h1>


                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="hero-status"
                    >
                        <span className="status-dot"></span>
                        Currently at NASA Marshall Space Flight Center (MSFC) · NASA SUITS · Purdue University
                    </motion.div>
                </div>

            </section>

            <section className="featured-section" id="featured">
                <h2 className="Feature-title">Featured Projects</h2>
                <p className="section-subtitle">NASA · Johns Hopkins Applied Physics Laboratory · Los Alamos National Laboratory · Barrios Technology · Astrophysics</p>

                <div id="featured-start" />

                <div className="projects-grid projects-grid--home">
                    {/* Hero card — full width */}
                    <ProjectCard
                        index={0}
                        miniTitle="NASA JSC Mission Control Center"
                        badge="JHU APL Sponsor Project"
                        title="Virtual Reality & Intelligent Agent for NASA JSC Mission Control"
                        description="This project was sponsored by Johns Hopkins Applied Physics Laboratory (JHU APL) and the goal is to develop an immersive visualization and AI assistant for NASA Johnson Space Center's Mission Control Center. 
                        The project focuses on creating an interactive 3D environment that enhances situational awareness and decision-making for mission controllers, leveraging cutting-edge VR technology and AI-driven insights."
                        tags={['Unity', 'VR', 'C#', 'AWS', 'AI Integration', 'API', 'Human-Computer Interaction', 'UI/UX Design', 'Meta Quest 3']}
                        img={APLImg}
                        link="/APL"
                    />

                    {/*NASA SUITS*/}
                    <ProjectCard
                        index={1}
                        miniTitle="NASA EVA UI FOR LUNAR AND MARTIANS OPERATIONS"
                        badge="NASA SUITS Challenge 2026"
                        title="NASA Spacesuit User-Interface Technologies for Students NASA Design Challenge"
                        description="NASA SUITS (Spacesuit User Interface Technologies for Students) is a NASA design challenge that tasks university 
                        teams with developing next-generation mixed reality interfaces for astronauts conducting lunar surface operations. 
                        As the XR Astronaut Interface Lead for Team VISOR, I led the development of an AI-powered HoloLens 2 system that integrated real-time spacesuit telemetry, 
                        navigation tools, and voice-based assistance to support astronaut decision-making during simulated Artemis missions."
                        tags={['Unity', 'VR', 'C#', 'AI Integration', 'Real-Time Telemetry System', 'API', 'Human-Computer Interaction', 'UI/UX Design', 'Halolens 2']}
                        img={SUITSImg}
                        link="/SUITS"
                    />
                </div>

                <div className="projects-grid projects-grid--2col">
                    {/* Side-by-side cards */}
                    <ProjectCard
                        index={2}
                        miniTitle="Immersive Mission Planning"
                        badge="NASA/Barrios Technology"
                        title="Gateway Visualization Tool"
                        description="An immersive XR application developed in collaboration with NASA and Barrios Technology to support mission planning and systems understanding for the Lunar Gateway. The tool enables users to explore complex spacecraft modules, 
                        spatial relationships, and mission data in a fully interactive 3D environment, enhancing situational awareness and collaborative decision-making."
                        tags={['VR', 'Unreal Engine', 'Blueprints', 'C++', 'Data Visualization', 'Human-Computer Interaction', 'UI/UX Design', 'Meta Quest 2']}
                        img={GatewayColoringImg}
                        link="/Gateway"
                    />
                    <ProjectCard
                        index={3}
                        miniTitle="Human-Centered XR Research"
                        badge="Los Alamos National Laboratory"
                        title="XR & HPC Internship"
                        description="A human-centered XR research project at Los Alamos National Laboratory exploring spatial data interaction on Apple Vision Pro. 
                        The work investigates how immersive interfaces and natural interaction techniques can improve data comprehension, analysis, and decision-making in complex scientific and engineering contexts."
                        tags={['VR', 'Apple Vision Pro', 'Unreal Engine', 'Blueprints', 'C++', 'Human-Computer Interaction', 'UI/UX Design', 'Apple Vision Pro']}
                        img={LANLImg}
                        link="/LANL"
                    />
                </div>

                <div className="projects-grid projects-grid--home">
                    {/* Full-width bottom card */}
                    <ProjectCard
                        index={4}
                        miniTitle="Tidal Disruption Event"
                        badge="Astrophysics Computational Research"
                        title="Search for Tidal Disruption Events in ZTF Data"
                        description="A data-driven astrophysics research project focused on identifying and analyzing Tidal Disruption Events (TDEs) using data from the Zwicky Transient Facility (ZTF). 
                        The project employs machine learning techniques and statistical analysis to detect TDE signatures, contributing to our understanding of black hole physics and stellar dynamics."
                        tags={['Data Visualization', 'Python', 'Pandas', 'FastAPI', 'UI/UX Design', 'Physics', 'ML']}
                        img={TDEImg}
                        link="/TDE"
                    />
                </div>
            </section>
        </motion.div>
    )
}
