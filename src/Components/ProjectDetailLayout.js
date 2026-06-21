import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PROJECT_ORDER = [
    { path: "/APL", title: "VR & Intelligent Agent", subtitle: "JHU APL" },
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

const ProjectDetailLayout = ({
    subtitle,
    title,
    heroImage,
    tags = [],
    metadata = [],
    currentPath,
    children,
}) => {
    const idx = PROJECT_ORDER.findIndex((p) => p.path === currentPath);
    const prev = idx > 0 ? PROJECT_ORDER[idx - 1] : PROJECT_ORDER[PROJECT_ORDER.length - 1];
    const next = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : PROJECT_ORDER[0];
    const contentId = `${(currentPath || title).replace(/[^a-z0-9]/gi, '').toLowerCase()}-overview`;

    const scrollToContent = () => {
        document.getElementById(contentId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            className="apl-case-study"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="pd-breadcrumb pd-breadcrumb--hero">
                <Link to="/AllWork" className="pd-back">← All Projects</Link>
            </div>

            <header className="apl-hero">
                <div className="apl-hero-bg">
                    <img src={heroImage} alt={title} />
                    <div className="apl-hero-overlay" />
                </div>

                <motion.div
                    className="apl-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="apl-badge">{subtitle}</span>
                    <h1 className="apl-hero-title">{title}</h1>

                    {tags.length > 0 && (
                        <div className="apl-hero-tags">
                            {tags.map((t) => (
                                <span className="apl-hero-tag" key={t}>{t}</span>
                            ))}
                        </div>
                    )}

                    <button className="apl-cta-btn" onClick={scrollToContent}>
                        Explore the Project ↓
                    </button>
                </motion.div>
            </header>

            <div className="apl-body" id={contentId}>
                {metadata.length > 0 && (
                    <section className="apl-section apl-section--meta">
                        <motion.div
                            className="apl-container pd-meta-strip"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {metadata.map((m, i) => (
                                <div className="pd-meta-card apl-feature-card" key={i}>
                                    <span className="pd-meta-label">{m.label}</span>
                                    <span className="pd-meta-value">{m.value}</span>
                                </div>
                            ))}
                        </motion.div>
                    </section>
                )}
                {children}
            </div>

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
        </motion.div>
    );
};

export default ProjectDetailLayout;
