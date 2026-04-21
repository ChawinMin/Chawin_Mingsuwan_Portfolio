import profile from "../assets/img/profile.png";
import { Typewriter } from "react-simple-typewriter";
import ChawinResume from "../assets/resume/Chawin Mingsuwan Resume.pdf";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="about-me" id="aboutMe">
                <p className="section-subtitle">Interest, Experience, and Skills</p>
                <h1 className="About-Me-Title">About Me</h1>

                <div className="about-grid">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="about-left"
                    >

                        <div className="about-me-img-container">
                            <img src={profile} alt="Profile" className="about-me-img" />
                        </div>

                        <span className="about-me-typewriter">
                            <Typewriter
                                words={['Creative Technologists',
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
                        </span>
                        <p className="Contact-info">
                            Email: cmingsuw@purdue.edu
                        </p>

                        <span className="navbar-text">
                            <button className="vvd" onClick={() => window.open(ChawinResume, '_blank')}><span>Resume</span></button>
                        </span>

                    </motion.div>

                    {/* Center Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="about-center"
                    >
                        <h2 className="Hello">Hi, I'm Chawin!</h2>

                        <p className="about-me-description">
                            I am a Creative Technologist and XR Engineer working at the intersection of immersive technology,
                            data visualization, and human-centered design. My work focuses on developing interactive XR systems that
                            support scientific exploration, mission planning, and decision-making, particularly within aerospace and research-driven environments. I have collaborated with organizations such as NASA, Barrios Technology, and Los Alamos National Laboratory to build tools that translate complex data and systems into intuitive, spatial experiences.
                        </p>

                        <p className="about-me-description">
                            My passion lies in understanding how people interact with information and leveraging immersive technologies to make that interaction clearer,
                            more engaging, and more meaningful. Through XR development, UI/UX design, and software engineering, I strive to create experiences that are not only visually compelling, but also functional, accessible,
                            and impactful—bridging the gap between advanced technology and human understanding.
                        </p>

                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="about-right"
                    >
                        <h3 className="experiences-title">Experiences</h3>
                        <ul className="experiences-list">
                            <li>Incoming Human Factors Engineering Virutal Enviornment Laboratory intern - NASA Marshall Space Flight Center (June 2026 - August 2026)</li>
                            <li>NASA SUITS XR Developer - TEAM VISOR (January 2026 - Present)</li>
                            <li>LyoHub - XR Research Intern (January 2026 - Present)</li>
                            <li>Computational Astrophysics Research Cohort (August 2025 - Present)</li>
                            <li>NASA/Barrios Technology Purdue Data Mine Corporate Partners (January 2025 - Dec 2025)</li>
                            <li>Los Alamos National Laboratory Summer Intern (June 2024 - August 2024)</li>
                            <li>Ilender Software Engineering Intern (May 2024 - July 2024)</li>
                            <li>NASA SUITS UX/XR developer - TEAM JARVIS (August 2023 - May 2024)</li>
                        </ul>
                        <h3 className="skills-title">Skills</h3>
                        <ul className="skills-list">
                            <li>XR Development: Unity, Unreal Engine, C#, C++, Blueprints</li>
                            <li>Hardware: Apple Vision Pro, Meta Quests, Arduino</li>
                            <li>Programming: Python (Pandas, FastAPI, MatplotLib, Pytorch), JavaScript, HTML/CSS, React</li>
                            <li>Data Visualization: Matplotlib, ParaView</li>
                            <li>Tools: Git, Blender, Figma, Adobe Creative Suite</li>
                        </ul>
                    </motion.div>
                </div>

            </section>
        </motion.div>
    )
}