import profile from "../assets/img/profile.png";
import { Typewriter } from "react-simple-typewriter";
import ChawinResume from "../assets/resume/Chawin Mingsuwan Resume.pdf";
import { motion } from "framer-motion";
import BackgroundAtmosphere from "./BackgroundAtmosphere";

/*
const orgLogos = [
    { name: "NASA", url: "https://cdn.simpleicons.org/nasa/ffffff" },
    { name: "JHU APL", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Johns_Hopkins_Logo.svg/320px-Johns_Hopkins_Logo.svg.png" },
    { name: "Los Alamos", url: "https://cdn.simpleicons.org/doi/ffffff" },
    { name: "Purdue", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Purdue_Boilermakers_logo.svg/200px-Purdue_Boilermakers_logo.svg.png" },
];
const techLogos = [
    { name: "Unity", url: "https://cdn.simpleicons.org/unity/ffffff" },
    { name: "Unreal Engine", url: "https://cdn.simpleicons.org/unrealengine/ffffff" },
    { name: "C#", url: "https://cdn.simpleicons.org/csharp/60a5fa" },
    { name: "C++", url: "https://cdn.simpleicons.org/cplusplus/60a5fa" },
    { name: "Python", url: "https://cdn.simpleicons.org/python/60a5fa" },
    { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/f7df1e" },
    { name: "React", url: "https://cdn.simpleicons.org/react/61dafb" },
    { name: "Blender", url: "https://cdn.simpleicons.org/blender/f5792a" },
    { name: "Figma", url: "https://cdn.simpleicons.org/figma/a259ff" },
    { name: "Git", url: "https://cdn.simpleicons.org/git/f05032" },
    { name: "Arduino", url: "https://cdn.simpleicons.org/arduino/00979d" },
    { name: "AWS", url: "https://cdn.simpleicons.org/amazonwebservices/ff9900" },
];


const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
*/
const experienceData = [
    { role: "Human Factors Engineering Virtual Environment Lab (VEL) Intern", org: "NASA Marshall Space Flight Center (MSFC)", date: "Jun 2026 – Aug 2026", upcoming: true },
    { role: "XR Astronaut Interface Developer — TEAM VISOR", org: "NASA SUITS", date: "Jan 2026 – Present" },
    {role: "Technical Lead, XR & AI systems", org: "Johns Hopkins Applied Physics Laboratory (APL) - Sponsor", date: "Oct 2025 - May 2026"},
    { role: "XR Research Intern", org: "LyoHub", date: "Jan 2026 – May 2026" },
    { role: "Computational Astrophysics Research Cohort", org: "Purdue University", date: "Aug 2025 – May 2026" },
    { role: "Lead UX/UI and Virtual Reality Developer", org: "NASA / Barrios Technology / Data Mine Corporate Partner", date: "Jan 2025 – Dec 2025" },
    { role: "XR HPC Intern", org: "Los Alamos National Laboratory", date: "Jun 2024 – Aug 2024" },
    { role: "Software Engineering Intern", org: "Ilender", date: "May 2024 – Jul 2024" },
    { role: "UX / XR Developer — TEAM JARVIS", org: "NASA SUITS", date: "Aug 2023 – May 2024" },
];

export const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'relative' }}
        >
            <BackgroundAtmosphere variant="about" />
            <div style={{ position: "relative", zIndex: 2 }}>
                <section className="about-me" id="aboutMe">
                    <p className="section-subtitle">Interest, Experience, and Skills</p>
                    <h1 className="About-Me-Title">About Me</h1>

                    <div className="about-split-layout">
                        {/* ── Left Column: Sticky ── */}
                        <div className="about-split-left">
                            <motion.div
                                className="about-sticky-content"
                                initial={{ opacity: 0, x: -24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.6 }}
                            >
                                <div className="about-badge-currently">
                                    <span className="status-dot"></span>
                                    Currently at NASA MSFC
                                </div>

                                <div className="about-me-img-container">
                                    <img src={profile} alt="Chawin Mingsuwan" className="about-me-img" />
                                </div>

                                <div className="about-me-typewriter">
                                    <Typewriter
                                        words={['Creative Technologist', 'XR Engineer', 'Game Designer', 'Astronomer', 'Software Engineer']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </div>

                                <h2 className="about-hook-statement">
                                    Building immersive XR systems for space operations, scientific visualization, and human-centered exploration.
                                </h2>

                                <p className="about-short-bio">
                                    I develop XR systems that help people interact with complex information in more intuitive and immersive ways. My work spans mission operations, scientific visualization, AI-assisted interfaces, and human-centered design, with experience building applications for NASA projects, research laboratories, and immersive computing platforms including HoloLens, Apple Vision Pro, and Meta Quest.
                                </p>



                                <div className="about-actions">
                                    <button className="vvd" onClick={() => window.open(ChawinResume, '_blank')}><span>View Resume</span></button>
                                </div>
                            </motion.div>
                        </div>

                        {/* ── Right Column: Scrollable ── */}
                        <div className="about-split-right">
                            {/* ── Experience Timeline ── */}
                            <motion.div
                                className="about-experience-section"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="about-section-heading">Experience</h3>
                                <div className="timeline">
                                    {experienceData.map((exp, i) => (
                                        <motion.div
                                            className={`timeline-item${exp.upcoming ? ' timeline-item--upcoming' : ''}`}
                                            key={i}
                                            initial={{ opacity: 0, x: 16 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.07, duration: 0.4 }}
                                        >
                                            <div className="timeline-marker" />
                                            <div className="timeline-content">
                                                <span className="timeline-date">{exp.date}</span>
                                                <p className="timeline-role">{exp.role}</p>
                                                <p className="timeline-org">{exp.org}</p>
                                                {exp.upcoming && <span className="timeline-badge">Upcoming</span>}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* ── Tech Stack ── */}
                            <motion.div
                                className="about-skills-section"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="about-section-heading">Tech Stack</h3>
                                <div className="skills-category">
                                    <h4 className="skills-cat-label">XR Development</h4>
                                    <div className="skill-pills">
                                        {['Unity', 'Unreal Engine', 'C#', 'C++', 'Blueprints'].map(s => <span className="skill-pill" key={s}>{s}</span>)}
                                    </div>
                                </div>
                                <div className="skills-category">
                                    <h4 className="skills-cat-label">Hardware</h4>
                                    <div className="skill-pills">
                                        {['HoloLens', 'Apple Vision Pro', 'Meta Quest', 'Arduino'].map(s => <span className="skill-pill" key={s}>{s}</span>)}
                                    </div>
                                </div>
                                <div className="skills-category">
                                    <h4 className="skills-cat-label">Programming & Data</h4>
                                    <div className="skill-pills">
                                        {['Python', 'Pandas', 'FastAPI', 'Matplotlib', 'PyTorch', 'JavaScript', 'React', 'HTML/CSS', 'ParaView', 'C'].map(s => <span className="skill-pill" key={s}>{s}</span>)}
                                    </div>
                                </div>
                                <div className="skills-category">
                                    <h4 className="skills-cat-label">Tools</h4>
                                    <div className="skill-pills">
                                        {['Git', 'AWS', 'Blender', 'Figma', 'Adobe Creative Suite', 'Solidworks', 'NX Siemens'].map(s => <span className="skill-pill" key={s}>{s}</span>)}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}