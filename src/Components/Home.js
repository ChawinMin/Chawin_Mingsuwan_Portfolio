import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
//import { Typewriter } from 'react-simple-typewriter';
import GatewayColoringImg from "../assets/img/GatewayImg/GatewayColoring.png";
import LANLImg from "../assets/img/LANL/LANL_3.png";
import TDEImg from "../assets/img/TDE/TDE_Cover_Photos.png";
import ProjectCard from './ProjectCard';
import APLImg from "../assets/img/APL/VRAPLMCC.png";

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
        >
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
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -2 }}
                />

                <div className="hero-content">
                    <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="hero-label"
                    >
                        XR Engineer · Creative Technologist · Software Engineer
                    </motion.p>

                    <motion.h1
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="hero-name"
                    >
                        Chawin Mingsuwan
                    </motion.h1>

                    <motion.p
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hero-statement"
                    >
                        I design and build immersive systems for scientific exploration and progress
                        from NASA mission planning tools to spatial data interfaces
                        at Los Alamos National Laboratory.
                    </motion.p>

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

                <motion.a
                    href="#featured-start"
                    className="hero-scroll-cta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('featured-start')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="scroll-label">View Projects</span>
                    <span className="scroll-chevron">⌄</span>
                </motion.a>
                <div className="hero-bottom-fade"></div>
            </section>

            <section className="featured-section" id="featured">
                <p className="section-subtitle">NASA · Johns Hopkins Applied Physics Laboratory · Los Alamos National Laboratory · Barrios Technology · Astrophysics</p>
                <h2 className="Feature-title">Featured Projects</h2>

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
                        tags={['Unity', 'VR', 'C#', 'AWS', 'AI Integration', 'API', 'Human-Computer Interaction', 'UI/UX Design']}
                        img={APLImg}
                        link="/APL"
                    />
                </div>

                <div className="projects-grid projects-grid--2col">
                    {/* Side-by-side cards */}
                    <ProjectCard
                        index={1}
                        miniTitle="Immersive Mission Planning"
                        badge="NASA/Barrios Technology"
                        title="Gateway Visualization Tool"
                        description="An immersive XR application developed in collaboration with NASA and Barrios Technology to support mission planning and systems understanding for the Lunar Gateway. The tool enables users to explore complex spacecraft modules, 
                        spatial relationships, and mission data in a fully interactive 3D environment, enhancing situational awareness and collaborative decision-making."
                        tags={['VR', 'Unreal Engine', 'Blueprints', 'C++', 'Data Visualization', 'Human-Computer Interaction', 'UI/UX Design']}
                        img={GatewayColoringImg}
                        link="/Gateway"
                    />
                    <ProjectCard
                        index={2}
                        miniTitle="Human-Centered XR Research"
                        badge="Los Alamos National Laboratory"
                        title="XR & HPC Internship"
                        description="A human-centered XR research project at Los Alamos National Laboratory exploring spatial data interaction on Apple Vision Pro. 
                        The work investigates how immersive interfaces and natural interaction techniques can improve data comprehension, analysis, and decision-making in complex scientific and engineering contexts."
                        tags={['VR', 'Apple Vision Pro', 'Unreal Engine', 'Blueprints', 'C++', 'Human-Computer Interaction', 'UI/UX Design']}
                        img={LANLImg}
                        link="/LANL"
                    />
                </div>

                <div className="projects-grid projects-grid--home">
                    {/* Full-width bottom card */}
                    <ProjectCard
                        index={3}
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
