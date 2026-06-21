import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageGallery from '../ImageGallery';
import VideoEmbed from '../VideoEmbed';

// Assets
import AIWorkFlow from '../../assets/img/APL/FinalizedAIDiagram_optimized.png';
import Image1 from '../../assets/img/APL/VREnvironment/Image1.png';
import Image2 from '../../assets/img/APL/VREnvironment/Image2.png';
import Image3 from '../../assets/img/APL/VREnvironment/Image3.png';
import Image4 from '../../assets/img/APL/VREnvironment/Image4.png';
import Image5 from '../../assets/img/APL/VREnvironment/Image5.png';
import image6 from '../../assets/img/APL/VREnvironment/Image6.png';
import APLPoster from '../../assets/img/APL/APLPoster.pdf';
import ResearchGroupPhoto from '../../assets/img/APL/ResearchPhoto.jpeg';

// Project order for footer navigation
const PROJECT_ORDER = [
    { path: "/APL", title: "VR & Intelligent Agent", subtitle: "JHU APL" },
    { path: "/SUITS", title: "NASA SUITS Challenge", subtitle: "NASA SUITS" },
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

export const APL = () => {
    const currentPath = "/APL";
    const idx = PROJECT_ORDER.findIndex((p) => p.path === currentPath);
    const prev = idx > 0 ? PROJECT_ORDER[idx - 1] : PROJECT_ORDER[PROJECT_ORDER.length - 1];
    const next = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : PROJECT_ORDER[0];

    const scrollToContent = () => {
        document.getElementById('apl-overview').scrollIntoView({ behavior: 'smooth' });
    };

    const metadata = [
        { label: "Role", value: "Technical Lead, XR & AI Systems" },
        { label: "Organization", value: "Johns Hopkins APL / Sponsor" },
        { label: "Timeline", value: "Oct 2025 – May 2026" },
        { label: "Team", value: "APL Research Team / Team IXL" }
    ];

    return (
        <div className="apl-case-study">
            {/* Breadcrumb */}
            <div className="pd-breadcrumb" style={{ position: 'absolute', zIndex: 100, top: '100px', left: 'max(2rem, calc((100vw - 1120px) / 2))' }}>
                <Link to="/AllWork" className="pd-back">← All Projects</Link>
            </div>

            {/* 1. HERO SECTION */}
            <section className="apl-hero">
                <div className="apl-hero-bg">
                    <img src={Image3} alt="VR Mission Control" />
                    <div className="apl-hero-overlay" />
                </div>

                <motion.div
                    className="apl-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="apl-badge">Johns Hopkins APL Collaboration</span>
                    <h1 className="apl-hero-title">VR + AI Mission Control Center</h1>
                    <p className="apl-hero-subtitle">
                        An immersive AI-assisted operational environment inspired by NASA mission control workflows.
                    </p>
                    <div className="apl-hero-tags">
                        {['Unity', 'VR', 'AI', 'RAG', 'AWS', 'OpenAI', 'Space Operations', 'Human Factors'].map(t => (
                            <span key={t} className="apl-hero-tag">{t}</span>
                        ))}
                    </div>
                    <button className="apl-cta-btn" onClick={scrollToContent}>
                        Explore the Project ↓
                    </button>
                </motion.div>
            </section>

            <div className="apl-body">

                {/* METADATA STRIP */}
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

                {/* 2. PROJECT OVERVIEW SECTION */}
                <section id="apl-overview" className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            className="apl-overview-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="apl-section-title">Redefining Mission Operations</h2>
                            <p className="apl-large-text">
                                Developed in collaboration with <strong>Johns Hopkins Applied Physics Laboratory</strong>, this project explores the intersection of spatial computing and conversational AI to support mission operations. The system recreates a mission control center in virtual reality and integrates a <strong>Retrieval-Augmented Generation (RAG)</strong> AI assistant. By simulating real-world decision-making environments, the project investigates how immersive spatial interfaces and intelligent agents can enhance situational awareness and operational understanding for future human spaceflight.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3. FEATURE GRID SECTION */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <h2 className="apl-section-title">System Capabilities</h2>
                        <div className="apl-feature-grid">
                            {[
                                { title: "Immersive VR Environment", desc: "A high-fidelity spatial interface simulating mission control systems." },
                                { title: "Conversational AI Assistant", desc: "Natural language interactions to query telemetry, procedures, and logs." },
                                { title: "Retrieval-Augmented Generation", desc: "Grounding AI responses in verified operational documents and flight rules." },
                                { title: "Voice Interaction Pipeline", desc: "Seamless Speech-to-Text and Text-to-Speech integration via Whisper and ElevenLabs." },
                                { title: "Real-Time Information Retrieval", desc: "Instant access to critical mission parameters without breaking immersion." },
                                { title: "Human-Centered Design", desc: "UI/UX optimized for cognitive load reduction during high-stress operations." },
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
                    </div>
                </section>

                {/* 4. SME / RESEARCH SECTION */}
                <section className="apl-section">
                    <div className="apl-container apl-sme-container">
                        <div className="apl-sme-text">
                            <span className="apl-badge">Human Factors & Discovery</span>
                            <h2 className="apl-section-title">Operational Research & SME Interviews</h2>
                            <p className="apl-text">
                                A core pillar of this research was ensuring absolute operational realism. The system’s design, AI behaviors, and interface layouts were heavily informed by qualitative research and structured interviews with domain experts.
                            </p>
                            <p className="apl-text">
                                We engaged with <strong>Flight Directors, Flight Controllers, Astronauts, and EVA Specialists</strong> to understand how decisions are actually made on the console. These insights directly shaped the AI’s conversational behavior, the prioritization of information within the VR space, and the use of authentic operational terminology.
                            </p>
                        </div>
                        <div className="apl-sme-visual">
                            <img src={Image1} alt="Mission Control Perspective" className="apl-rounded-img" />
                        </div>
                    </div>
                </section>

                {/* 5. TECHNICAL ARCHITECTURE SECTION */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <h2 className="apl-section-title">Technical Architecture</h2>
                        <p className="apl-text" style={{ marginBottom: '2rem' }}>
                            The backend infrastructure relies on a modular, cloud-connected pipeline designed for low latency and high accuracy. Voice inputs in Unity are transcribed by OpenAI Whisper, processed through a custom Flask API using LangChain and a FAISS vector database for RAG, generating a response via GPT-4, and synthesized back into audio using ElevenLabs.
                        </p>
                        <motion.div
                            className="apl-architecture-img"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src={AIWorkFlow} alt="AI Workflow Architecture" />
                        </motion.div>
                    </div>
                </section>

                {/* 6. ENVIRONMENT GALLERY SECTION */}
                <section className="apl-section">
                    <div className="apl-container">
                        <h2 className="apl-section-title">Environment & Interface Design</h2>
                        <p className="apl-text" style={{ marginBottom: '3rem' }}>
                            The virtual environment was constructed in Unity to reflect the physical constraints and collaborative nature of a modern mission operations center. Every console and display is positioned to maximize spatial awareness.
                        </p>
                        <ImageGallery
                            images={[
                                { src: Image1, alt: "Main Operations Floor" },
                                { src: Image2, alt: "Console Telemetry View" },
                                { src: Image3, alt: "AI Assistant Spatial UI" },
                                { src: Image4, alt: "Orbital Tracking Display" },
                                { src: Image5, alt: "Flight Director Perspective" },
                                { src: image6, alt: "MCC Screen Up Close" },
                            ]}
                            columns={2}
                        />
                    </div>
                </section>

                {/* 7. PROCESS / DESIGN DECISIONS & 8. IMPACT */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container apl-split-text">
                        <div className="apl-split-col">
                            <h3 className="apl-sub-title">Design Decisions</h3>
                            <p className="apl-text">
                                VR was chosen to test how spatial computing can break the limits of traditional 2D monitors. Instead of alt-tabbing through PDF flight rules, operators can visually scan their environment while conversing naturally with the AI. This multimodal interaction reduces cognitive load and keeps the operator's hands free and eyes focused on telemetry.
                            </p>
                        </div>
                        <div className="apl-split-col">
                            <h3 className="apl-sub-title">Future Work & Impact</h3>
                            <p className="apl-text">
                                The insights gathered from this prototype open pathways for multi-user mission operations, real-time telemetry integration, and AR support systems for astronauts. As spaceflight scales to the Moon and Mars, human-AI collaboration will be essential to manage communication delays and complex system anomalies.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. FINAL VISUAL SECTION */}
                <section className="apl-final-section">
                    <div className="apl-final-bg">
                        <img src={Image3} alt="Final View" />
                        <div className="apl-final-overlay" />
                    </div>
                    <div className="apl-final-content">
                        <h2>Immersive environments are the future of operational awareness.</h2>
                        <VideoEmbed
                            videoUrl="https://www.youtube.com/watch?v=LH1G0Wwj9_8&t=292s"
                            title="Demo Video"
                            caption="Watch the full VR + AI demonstration"
                        />
                    </div>
                </section>

                {/* 10. RESEARCH SYMPOSIUM SECTION */}
                <section className="apl-section">
                    <div className="apl-container">
                        <h2 className="apl-section-title">Purdue Undergraduate Research Conference</h2>
                        <p className="apl-text" style={{ marginBottom: '3rem' }}>
                            We presented our findings at Purdue's annual Undergraduate Research Symposium in Spring 2026. The presenting team included <strong>Chawin Mingsuwan, Avery Dellinger III, Salvador Alvery, Russell Thomas</strong>, and our mentors from APL, <strong>Jackson Murray, and Wade Lewis</strong>.
                        </p>
                        <div className="apl-split-text apl-symposium-grid">
                            <div className="apl-split-col">
                                <ImageGallery
                                    images={[{ src: ResearchGroupPhoto, alt: "APL Research Group" }]}
                                    columns={1}
                                />
                            </div>
                            <div className="apl-split-col">
                                <iframe title="APL Poster" src={APLPoster} className="pd-pdf-embed" loading="lazy" style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Prev / Next Nav */}
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