import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageGallery from '../ImageGallery';
// import VideoEmbed from '../VideoEmbed';

// Assets
import LEVRCoverImage from '../../assets/img/MSFC/LEVRCoverImage.png';
import LEVR1 from '../../assets/img/MSFC/LEVR1.png';
import LEVR2 from '../../assets/img/MSFC/LEVR2.png';
import LEVR3 from '../../assets/img/MSFC/LEVR3.png';
import LEVR4 from '../../assets/img/MSFC/LEVR4.png';
// import LEVR5 from '../../assets/img/MSFC/LEVR5.png';
import LEVR6 from '../../assets/img/MSFC/LEVR6.png';
import MSFCPoster from '../../assets/img/MSFC/LEVRPoster.png';
// import LEVRTeaser from '../../assets/img/MSFC/LEVRTeaser.mov';

// Project order for footer navigation
const PROJECT_ORDER = [
    { path: "/APL", title: "VR & Intelligent Agent", subtitle: "JHU APL" },
    { path: "/MSFC", title: "NASA Space Launch System", subtitle: "NASA Marshall Space Flight Center" },
    { path: "/SUITS", title: "NASA SUITS Challenge", subtitle: "NASA" },
    { path: "/Gateway", title: "Gateway Visualization Tool", subtitle: "NASA / Barrios" },
    { path: "/LANL", title: "XR & HPC Internship", subtitle: "Los Alamos" },
    { path: "/TDE", title: "Tidal Disruption Events", subtitle: "Astrophysics" },
    { path: "/VRStudyHub", title: "VR Study Hub", subtitle: "Educational Tech" },
    { path: "/WildFire", title: "WildFire Visualization", subtitle: "Scientific Viz" },
    { path: "/Ilender", title: "Software Engineering", subtitle: "Ilender" },
    { path: "/UFO", title: "UFO Sightings", subtitle: "Data Viz" },
    { path: "/Cull", title: "Cults of the Carvenal", subtitle: "Game Dev" },
    { path: "/LSPACE", title: "Lunar Rover Mission", subtitle: "NASA L'SPACE" },
    { path: "/Minecraft", title: "Statics in Minecraft", subtitle: "Research Fellowship" },
];

export const MSFC = () => {
    const currentPath = "/MSFC";
    const idx = PROJECT_ORDER.findIndex((p) => p.path === currentPath);
    const prev = idx > 0 ? PROJECT_ORDER[idx - 1] : PROJECT_ORDER[PROJECT_ORDER.length - 1];
    const next = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : PROJECT_ORDER[0];

    const scrollToContent = () => {
        document.getElementById('msfc-overview').scrollIntoView({ behavior: 'smooth' });
    };

    const metadata = [
        { label: "Role", value: "Human Factors Engineering Virtual Environment Lab Intern" },
        { label: "Organization", value: "NASA Marshall Space Flight Center" },
        { label: "Timeline", value: "June 2026 – August 2026" },
        { label: "Lab", value: "Human Factors Engineering Virtual Environment Laboratory" },
    ];

    return (
        <div className="apl-case-study">
            {/* Breadcrumb */}
            <div className="pd-breadcrumb pd-breadcrumb--hero">
                <Link to="/AllWork" className="pd-back">← All Projects</Link>
            </div>

            {/* ──────────────────────────────────────────────
                 SECTION 1: HERO — Full-viewport cinematic
                 ────────────────────────────────────────────── */}
            <section className="apl-hero">
                <div className="apl-hero-bg">
                    <img src={LEVRCoverImage} alt="LEVR — Lunar Environment in Virtual Reality with HLS vehicles on the lunar surface" />
                    <div className="apl-hero-overlay" />
                </div>

                <motion.div
                    className="apl-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="apl-badge">HUMAN FACTORS ENGINEERING · VIRTUAL ENVIRONMENT LAB</span>
                    <h1 className="apl-hero-title">Building the Moon in Virtual Reality</h1>
                    <p className="apl-hero-subtitle">
                        An immersive Unreal Engine lunar environment for visualization, human-factors research, and exploration concepts at NASA Marshall Space Flight Center.
                    </p>
                    <div className="apl-hero-tags">
                        {['Unreal Engine 5', 'C++', 'Blueprints', 'Meta Quest 3', 'VR/XR', 'Hand Tracking'].map(t => (
                            <span key={t} className="apl-hero-tag">{t}</span>
                        ))}
                    </div>
                    <button className="apl-cta-btn" onClick={scrollToContent}>
                        Explore the Project ↓
                    </button>
                </motion.div>
            </section>

            <div className="apl-body">

                {/* ──────────────────────────────────────────────
                     SECTION 2: METADATA STRIP
                     ────────────────────────────────────────────── */}
                <section className="apl-section apl-section--meta">
                    <motion.div
                        className="apl-container pd-meta-strip"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {metadata.map((m, i) => (
                            <div className="pd-meta-card apl-feature-card" key={i}>
                                <span className="pd-meta-label">{m.label}</span>
                                <span className="pd-meta-value">{m.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 3: INTRODUCTION — What is LEVR & Why
                     ────────────────────────────────────────────── */}
                <section id="msfc-overview" className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            className="apl-overview-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">THE PROJECT</span>
                            <h2 className="apl-section-title">LEVR — Lunar Environment in Virtual Reality</h2>
                            <p className="apl-large-text">
                                <strong>LEVR</strong> is an immersive lunar environment built in Unreal Engine and experienced through VR hardware such as the <strong>Meta Quest 3</strong>. Developed within NASA Marshall Space Flight Center's <strong>Human Factors Engineering Virtual Environment Laboratory</strong>, LEVR is designed to serve as more than a visual showcase, it is intended as a platform for realistic lunar visualization, human-factors work, engineering demonstrations, and exploration concepts.
                            </p>
                            <p className="apl-text" style={{ marginTop: 'var(--sp-4)' }}>
                                The environment represents the <strong>lunar South Pole</strong>, using terrain data sourced from the Lunar Reconnaissance Orbiter and lighting conditions that simulate what astronauts would experience on the Moon. Within this environment, users can explore the lunar surface, interact with <strong>Human Landing System (HLS)</strong> vehicles, and experience the scale and conditions of future lunar operations — bridging the gap between engineering visualization and immersive experience.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 4: THE LUNAR SURFACE
                     ────────────────────────────────────────────── */}

                {/* 4A: Full-width cinematic lunar terrain image */}
                <section className="msfc-cinematic-break">
                    <div className="msfc-cinematic-break__img-wrap">
                        <img src={LEVR4} alt="Overhead view of LEVR's lunar South Pole terrain — craters and harsh shadows" />
                        <div className="msfc-cinematic-break__overlay msfc-cinematic-break__overlay--subtle" />
                    </div>
                    <motion.p
                        className="msfc-cinematic-break__label"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Lunar South Pole · Unreal Engine 5
                    </motion.p>
                </section>

                {/* 4B: Building the Lunar Surface — Text + Images */}
                <section className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">THE LUNAR ENVIRONMENT</span>
                            <h2 className="apl-section-title">Building the Lunar Surface</h2>
                        </motion.div>

                        <div className="apl-sme-container">
                            <motion.div
                                className="apl-sme-text"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="apl-text">
                                    The lunar surface in LEVR uses <strong>terrain data sourced from the Lunar Reconnaissance Orbiter (LRO)</strong> to provide a realistic surface model of the lunar South Pole. The topography captures the dramatic crater rims, shadowed basins, and elevation changes that define this region of the Moon.
                                </p>
                                <p className="apl-text">
                                    Lighting conditions are designed to simulate the harsh, shadow-dominated environment of the lunar South Pole, where the Sun sits near the horizon, casting long shadows across the terrain. Without an atmosphere to scatter light, illuminated areas are brilliantly lit while shadowed regions remain in near-total darkness.
                                </p>
                                <p className="apl-text">
                                    Rock distributions across the surface are <strong>generated based on visual references from Apollo mission photographs</strong>, approximating the placement and density of surface rocks to create a more believable and immersive environment.
                                </p>
                            </motion.div>

                            <ImageGallery
                                images={[
                                    { src: LEVR6, alt: "Lunar surface with procedurally generated rocks and harsh rim lighting" },
                                    { src: LEVR1, alt: "First-person view of the lunar terrain with the Sun above the horizon" },
                                ]}
                                columns={1}
                            />
                        </div>

                        {/* Feature cards */}
                        <div className="apl-feature-grid" style={{ marginTop: 'var(--sp-8)' }}>
                            {[
                                { title: "Data-Informed Terrain", desc: "Lunar terrain heightmap data sourced from the Lunar Reconnaissance Orbiter for realistic South Pole topography." },
                                { title: "Procedural Rock Distribution", desc: "Rock placement generated based on visual references from Apollo mission photographs to approximate realistic surface conditions." },
                                { title: "Realistic Lunar Lighting", desc: "Simulates the harsh, shadow-dominated lighting of the lunar South Pole where the Sun sits near the horizon." },
                            ].map((f, i) => (
                                <motion.div
                                    className="apl-feature-card"
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h3 className="apl-feature-title">{f.title}</h3>
                                    <p className="apl-feature-desc">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Reference imagery */}
                        <motion.div
                            style={{ marginTop: 'var(--sp-8)' }}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <ImageGallery
                                images={[
                                    { src: LEVR2, alt: "Lunar South Pole terrain with labeled craters — Shackleton and Slater — and Earth visible in the sky" },
                                    { src: LEVR4, alt: "ACT Lunar/LROC mapping tool showing Orthographic South Pole projection — reference data used for terrain modeling" },
                                ]}
                                columns={2}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 5: CONTROLLING THE ENVIRONMENT
                     ────────────────────────────────────────────── */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">OPERATOR CONTROL</span>
                            <h2 className="apl-section-title">Controlling the Lunar Environment</h2>
                        </motion.div>

                        <div className="apl-sme-container">
                            <motion.div
                                className="apl-sme-text"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="apl-text">
                                    I developed an <strong>Operator UI</strong> that allows an operator, someone outside the VR headset, to control the conditions of the simulation in real time. This creates a two-person workflow: one user is immersed in the VR environment, while the operator adjusts environmental parameters from a desktop interface.
                                </p>
                                <p className="apl-text">
                                    One important capability is <strong>controlling the Sun</strong>. The operator can manually adjust the Sun's position, simulate the lighting associated with a particular lunar time, and quickly change environmental conditions for demonstrations or testing scenarios. This enables repeatable conditions for human-factors evaluations without requiring the VR user to exit or pause the experience.
                                </p>
                                <p className="apl-text">
                                    The Operator UI was designed to support real-time demonstrations where lighting conditions need to change dynamically, for instance, showing stakeholders how the environment transitions from harsh direct sunlight to deep shadow as time progresses on the lunar surface.
                                </p>
                            </motion.div>

                            {/* Operator / VR User relationship diagram */}
                            <motion.div
                                className="msfc-operator-diagram"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                            >
                                <div className="msfc-operator-diagram__card">
                                    <div className="msfc-operator-diagram__icon">🖥️</div>
                                    <h4 className="msfc-operator-diagram__title">Operator</h4>
                                    <p className="msfc-operator-diagram__desc">Desktop UI</p>
                                    <ul className="msfc-operator-diagram__list">
                                        <li>Sun position</li>
                                        <li>Lunar time</li>
                                        <li>Environment conditions</li>
                                    </ul>
                                </div>
                                <div className="msfc-operator-diagram__arrow">
                                    <span>Controls</span>
                                    <div className="msfc-operator-diagram__arrow-line" />
                                </div>
                                <div className="msfc-operator-diagram__card">
                                    <div className="msfc-operator-diagram__icon">🥽</div>
                                    <h4 className="msfc-operator-diagram__title">VR User</h4>
                                    <p className="msfc-operator-diagram__desc">Meta Quest 3</p>
                                    <ul className="msfc-operator-diagram__list">
                                        <li>Sees lighting changes</li>
                                        <li>Immersed in updated scene</li>
                                        <li>Uninterrupted experience</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 6: CINEMATIC BREAK — Full-bleed
                     ────────────────────────────────────────────── */}
                <section className="msfc-cinematic-break msfc-cinematic-break--tall">
                    <div className="msfc-cinematic-break__img-wrap">
                        <img src={LEVRCoverImage} alt="Blue Moon and Starship HLS vehicles on the lunar surface with the Sun on the horizon" />
                        <div className="msfc-cinematic-break__overlay" />
                    </div>
                    <motion.div
                        className="msfc-cinematic-break__content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="msfc-cinematic-break__heading">A Platform for Experiencing Lunar Exploration Architectures</h2>
                    </motion.div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 7: HLS EXPERIENCES
                     ────────────────────────────────────────────── */}
                <section className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">EXPLORATION EXPERIENCES</span>
                            <h2 className="apl-section-title">Human Landing System Demonstrations</h2>
                            <p className="apl-text" style={{ marginBottom: 'var(--sp-8)' }}>
                                LEVR was used as a platform for demonstrating <strong>Human Landing System (HLS) concepts</strong>. Two experiences were developed, one for the SpaceX Starship HLS and one for the Blue Origin Blue Moon lander. Based on scientific data and intended for educational purposes, these demonstrations are meant to give the public and stakeholders an idea of what astronauts may experience on the Moon and to communicate the scale, architecture, and operational concepts of these vehicles.
                            </p>
                        </motion.div>

                        {/* 7A: Starship HLS */}
                        <div className="apl-sme-container" style={{ marginBottom: 'var(--sp-16)' }}>
                            <motion.div
                                className="apl-sme-text"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="apl-sub-title">SpaceX Starship HLS</h3>
                                <p className="apl-text">
                                    A <strong>Starship HLS experience</strong> was integrated into the lunar environment, allowing users to explore the vehicle and experience its scale relative to a person standing on the lunar surface. Starship HLS stands approximately 50 meters tall, placing a human figure beside it in VR communicates a sense of scale that photographs and diagrams cannot convey.
                                </p>
                                <p className="apl-text">
                                    One of the interactive elements I developed was an <strong>elevator system</strong>, allowing the user to ride vertically between areas of the vehicle. Users spawn at the top of Starship on the elevator, press a button to begin descent, and as the elevator descends, informational infographics appear pointing to craters and features visible from that vantage point. Once the elevator reaches the bottom, the doors open and users can step onto the lunar surface.
                                </p>
                            </motion.div>
                            <ImageGallery
                                images={[
                                    { src: LEVRCoverImage, alt: "Starship HLS and Blue Moon lander on the lunar surface — demonstrating the immense scale of Starship" },
                                ]}
                                columns={1}
                            />
                        </div>

                        {/* 7B: Blue Moon */}
                        <div className="apl-sme-container msfc-reverse-grid">
                            <ImageGallery
                                images={[
                                    { src: LEVR3, alt: "Blue Moon lander with informational panel — Crew Module description and timer overlay" },
                                ]}
                                columns={1}
                            />
                            <motion.div
                                className="apl-sme-text"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="apl-sub-title">Blue Origin Blue Moon</h3>
                                <p className="apl-text">
                                    I developed an <strong>introductory and informational experience</strong> for the Blue Moon lander. Users spawn next to the vehicle and can walk around it freely. As they explore, the system uses <strong>raytracing to detect where the user is looking</strong>, and contextual information panels appear for the component they are viewing, such as the Crew Module, propulsion systems, or landing gear.
                                </p>
                                <p className="apl-text">
                                    Each panel presents a title, a brief description, and a timer, creating a guided educational walkthrough that responds naturally to user attention. This gaze-driven approach means the experience unfolds at the user's own pace, surfacing information precisely when and where it is relevant.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 8: HAND TRACKING & VR INTERACTION
                     ────────────────────────────────────────────── */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">VR INTERACTION</span>
                            <h2 className="apl-section-title">Natural Interaction Through Hand Tracking</h2>
                            <p className="apl-text">
                                Hand tracking was integrated into the environment for use with the <strong>Meta Quest 3</strong>, allowing users to interact with the VR environment using their hands rather than relying entirely on traditional controllers. For demonstrations and stakeholder presentations, this lowers the barrier to entry, users unfamiliar with VR controllers can immediately begin exploring and interacting.
                            </p>
                            <p className="apl-text">
                                This natural interaction model complements the gaze-driven informational panels in the Blue Moon experience and the button-based elevator interaction in the Starship experience, creating a consistent and intuitive interaction language across the platform. The combination of <strong>hand tracking, gaze detection, and controller support</strong> ensures that LEVR can accommodate a range of users and demonstration contexts.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 9: ENGINEERING BEHIND LEVR — C++ Plugin
                     ────────────────────────────────────────────── */}
                <section className="apl-section apl-section--dark" style={{ borderTop: 'none' }}>
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">SOFTWARE ENGINEERING</span>
                            <h2 className="apl-section-title">The LEVR Plugin</h2>
                            <p className="apl-text">
                                Beyond the visual and interactive elements of the environment, I developed software tools that made it easier for the team to add new features and extend the VR experience. I worked with <strong>C++ and Unreal Engine Blueprints</strong> to create functionality as part of a reusable <strong>LEVR plugin</strong>.
                            </p>
                            <p className="apl-text">
                                The plugin architecture exposes performance-critical C++ implementations through <strong>accessible Blueprint nodes</strong>, allowing developers and designers to leverage complex functionality, such as environment control, interaction systems, and simulation features, through Unreal Engine's visual scripting system rather than requiring every feature to be manually reimplemented in C++.
                            </p>
                        </motion.div>

                        {/* C++ / Blueprint architecture diagram */}
                        <motion.div
                            className="msfc-arch-diagram"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                        >
                            <div className="msfc-arch-diagram__layer msfc-arch-diagram__layer--top">
                                <div className="msfc-arch-diagram__label">Blueprint Nodes</div>
                                <div className="msfc-arch-diagram__desc">Easy-to-use visual scripting interface in Unreal Editor</div>
                            </div>
                            <div className="msfc-arch-diagram__divider">
                                <span>exposes</span>
                            </div>
                            <div className="msfc-arch-diagram__layer msfc-arch-diagram__layer--bottom">
                                <div className="msfc-arch-diagram__label">C++ Implementation</div>
                                <div className="msfc-arch-diagram__desc">Performance-critical logic in the LEVR Plugin</div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 10: TECHNOLOGY — Connected narrative
                     ────────────────────────────────────────────── */}
                <section className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="apl-section-title">Technology</h2>
                            <p className="apl-text" style={{ marginBottom: 'var(--sp-4)' }}>
                                Each technology was chosen for a specific role in bringing the lunar environment to life.
                            </p>
                        </motion.div>

                        <div className="apl-feature-grid">
                            {[
                                { title: "Unreal Engine 5", desc: "High-fidelity real-time rendering of the lunar environment with physically-based lighting and large-scale terrain." },
                                { title: "C++", desc: "Performance-critical plugin development powering core simulation features, interaction systems, and environment control." },
                                { title: "Unreal Blueprints", desc: "Accessible visual scripting interface exposing C++ functionality for rapid prototyping and team collaboration." },
                                { title: "Meta Quest 3", desc: "Standalone VR hardware enabling untethered, immersive lunar walkthroughs with hand tracking support." },
                                { title: "Hand Tracking", desc: "Controller-free natural interaction for demonstrations, lowering the barrier to entry for non-technical users." },
                                { title: "VR/XR Development", desc: "End-to-end immersive experience design — from environment construction to interaction to headset deployment." },
                                { title: "3D Simulation & Visualization", desc: "Data-informed terrain modeling, procedural rock generation, and lighting simulation for engineering-grade visualization." },
                            ].map((f, i) => (
                                <motion.div
                                    className="apl-feature-card"
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <h3 className="apl-feature-title">{f.title}</h3>
                                    <p className="apl-feature-desc">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 11: BEYOND LEVR — Creative / Media
                     ────────────────────────────────────────────── */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="apl-badge">CREATIVE WORK</span>
                            <h2 className="apl-section-title">Beyond Technical Development</h2>
                            <p className="apl-text" style={{ marginBottom: 'var(--sp-6)' }}>
                                Alongside the technical development of LEVR, I contributed to creative and communication work during the internship.
                            </p>
                        </motion.div>

                        <div className="apl-split-text">
                            <motion.div
                                className="apl-split-col"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="apl-sub-title">Intern Showcase Video</h3>
                                <p className="apl-text">
                                    I edited a video shown at the <strong>NASA intern showcase</strong> that captured the collective internship experience, the work, the people, and the environment at Marshall Space Flight Center.
                                </p>
                            </motion.div>
                            <motion.div
                                className="apl-split-col"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="apl-sub-title">Mass Properties Award Video</h3>
                                <p className="apl-text">
                                    I edited an award video for a Mass Properties engineer, styled with cinematic inspiration — a creative communication piece that recognized engineering contributions through storytelling.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 12: REFLECTION & LEARNING
                     ────────────────────────────────────────────── */}
                <section className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="apl-section-title">Reflection</h2>
                        </motion.div>

                        <div className="apl-split-text">
                            <motion.div
                                className="apl-split-col"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="apl-sub-title">What I Learned</h3>
                                <p className="apl-text">
                                    Working at NASA Marshall Space Flight Center deepened my understanding of VR development at an engineering scale, building environments that serve real visualization and human-factors needs rather than purely entertainment purposes. I grew significantly in Unreal Engine C++ development, plugin architecture, and the discipline of building reusable, maintainable tools for a team.
                                </p>
                            </motion.div>
                            <motion.div
                                className="apl-split-col"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="apl-sub-title">The Experience</h3>
                                <p className="apl-text">
                                    Contributing to a project within NASA's Human Factors Engineering Virtual Environment Lab gave me firsthand experience with the intersection of immersive technology and engineering. The internship reinforced that the most impactful VR work is not about visual spectacle alone it is about creating tools that enable better understanding, better decisions, and better preparation for the challenges of human exploration.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 13: INTERN POSTER
                     ────────────────────────────────────────────── */}
                <section className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="apl-section-title">Research Poster</h2>
                            <p className="apl-text" style={{ marginBottom: 'var(--sp-8)' }}>
                                Our work on LEVR was compiled into a formal research poster — <em>"A Virtual Reality Lunar Environment for the Human Landing System"</em> — presented during the NASA intern showcase at Marshall Space Flight Center.
                            </p>
                        </motion.div>
                        <ImageGallery
                            images={[{ src: MSFCPoster, alt: "Research poster — A Virtual Reality Lunar Environment for the Human Landing System" }]}
                            columns={1}
                        />
                    </div>
                </section>

                {/* ──────────────────────────────────────────────
                     SECTION 14: CLOSING CINEMATIC + TEASER
                     ────────────────────────────────────────────── */}
                <section className="apl-final-section">
                    <div className="apl-final-bg">
                        <img src={LEVR1} alt="LEVR lunar surface panorama" />
                        <div className="apl-final-overlay" />
                    </div>
                    <div className="apl-final-content">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Building immersive tools for the future of lunar exploration.
                        </motion.h2>
                        {/* Teaser video embed — uncomment when hosted on YouTube/Vimeo:
                        <VideoEmbed
                            videoUrl="YOUR_VIDEO_URL_HERE"
                            title="LEVR Teaser"
                            caption="A walkthrough of the Lunar Environment in Virtual Reality"
                        />
                        */}
                    </div>
                </section>

            </div>

            {/* ──────────────────────────────────────────────
                 SECTION 15: PREV / NEXT NAVIGATION
                 ────────────────────────────────────────────── */}
            <nav className="pd-nav" style={{ marginTop: 0, position: 'relative', zIndex: 10 }}>
                <Link to={prev.path} className="pd-nav-link pd-nav-prev">
                    <span className="pd-nav-dir">← Previous</span>
                    <span className="pd-nav-title">{prev.title}</span>
                    <span className="pd-nav-sub">{prev.subtitle}</span>
                </Link>
                <Link to={next.path} className="pd-nav-link pd-nav-next">
                    <span className="pd-nav-dir">Next →</span>
                    <span className="pd-nav-title">{next.title}</span>
                    <span className="pd-nav-sub">{next.subtitle}</span>
                </Link>
            </nav>
        </div>
    );
};