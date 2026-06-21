import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageGallery from '../ImageGallery';
import VideoEmbed from '../VideoEmbed';

// Assets
import SUITSImg1 from "../../assets/img/SUITS/Azeem_Ehtisham-Felix-13.jpg"; // Hero
import SUITSImg2 from '../../assets/img/SUITS/Azeem_Ehtisham-day1-78.jpg';
import SUITSImg3 from '../../assets/img/SUITS/Azeem_Ehtisham-Felix-7.jpg';
import SUITSImg4 from '../../assets/img/SUITS/jsc2026e043695.jpg';
import SUITSImg5 from '../../assets/img/SUITS/jsc2026e041359.jpg';
import SUITSImg6 from '../../assets/img/SUITS/jsc2026e042707.jpg';
import SUITSUIScreenshot from '../../assets/img/SUITS/NASAHaloLensUI.png';
import SUITSPoster from '../../assets/img/SUITS/NASA SUITS VISOR Poster.pdf';
import SUITSDiagram from '../../assets/img/SUITS/VISORTeamDiagram.png';
import FlightDirectorImg from '../../assets/img/SUITS/FlightDirectorImg.png';
import CAPCOMimg from '../../assets/img/SUITS/CAPCOMDiagramImg.png';

// Additional Rock Yard testing photos
import SUITSRockYard1 from '../../assets/img/SUITS/Azeem_Ehtisham-Felix-14.jpg';
import SUITSRockYard2 from '../../assets/img/SUITS/Azeem_Ehtisham-Felix-15.jpg';
// import SUITSRockYard3 from '../../assets/img/SUITS/Azeem_Ehtisham-day1-79.jpg';
// import SUITSRockYard4 from '../../assets/img/SUITS/Azeem_Ehtisham-day1-80.jpg';
// import SUITSRockYard5 from '../../assets/img/SUITS/Azeem_Ehtisham-day1-81.jpg';
// import SUITSRockYard6 from '../../assets/img/SUITS/jsc2026e039647_alt.jpg';
import SUITSRockYard7 from '../../assets/img/SUITS/jsc2026e041356.jpg';
// import SUITSRockYard8 from '../../assets/img/SUITS/jsc2026e041358.jpg';
import SUITSRockYard9 from '../../assets/img/SUITS/jsc2026e042471.jpg';
import SUITSRockYard10 from '../../assets/img/SUITS/jsc2026e043731.jpg';

// Project order for footer navigation
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

export const SUITS = () => {
    const currentPath = "/SUITS";
    const idx = PROJECT_ORDER.findIndex((p) => p.path === currentPath);
    const prev = idx > 0 ? PROJECT_ORDER[idx - 1] : PROJECT_ORDER[PROJECT_ORDER.length - 1];
    const next = idx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[idx + 1] : PROJECT_ORDER[0];

    const scrollToContent = () => {
        document.getElementById('suits-overview').scrollIntoView({ behavior: 'smooth' });
    };

    const metadata = [
        { label: "Role", value: "XR Astronaut Interface Lead" },
        { label: "Organization", value: "NASA SUITS / Purdue SEARCH" },
        { label: "Timeline", value: "Jan 2026 – May 2026" },
        { label: "Team", value: "Team VISOR" },
    ];

    return (
        <div className="apl-case-study">
            {/* Breadcrumb */}
            <div className="pd-breadcrumb pd-breadcrumb--hero">
                <Link to="/AllWork" className="pd-back">← All Projects</Link>
            </div>

            {/* 1. HERO SECTION */}
            <section className="apl-hero">
                <div className="apl-hero-bg">
                    <img src={SUITSImg1} alt="NASA SUITS Rock Yard Testing" />
                    <div className="apl-hero-overlay" />
                </div>

                <motion.div
                    className="apl-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="apl-badge">NASA EVA UI FOR LUNAR AND MARTIAN OPERATIONS</span>
                    <h1 className="apl-hero-title">NASA SUITS</h1>
                    <p className="apl-hero-subtitle">
                        An AI-powered mixed reality interface for the Microsoft HoloLens 2 to assist astronauts in Artemis lunar exploration.
                    </p>
                    <div className="apl-hero-tags">
                        {['Unity', 'VR', 'C#', 'AI Integration', 'Real-Time Telemetry', 'API', 'HCI', 'UI/UX Design', 'HoloLens 2'].map(t => (
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

                {/* 2. OVERVIEW SECTION */}
                <section id="suits-overview" className="apl-section">
                    <div className="apl-container">
                        <motion.div
                            className="apl-overview-grid"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="apl-section-title">Introduction to the Future of Space Exploration</h2>
                            <p className="apl-large-text">
                                The <strong>NASA SUITS (Spacesuit User Interface Technologies for Students) Challenge</strong> is a nationwide competition hosted by NASA that challenges university teams to design and develop next-generation astronaut interfaces for future lunar exploration missions. As the <strong>XR Astronaut Interface Lead of Purdue Team VISOR</strong>, I led an interdisciplinary team of eight students in creating an AI-powered mixed reality system for the Microsoft HoloLens 2. Our platform provided astronauts with real-time spacesuit telemetry, navigation assistance, and voice-driven mission support. The project culminated at <strong>NASA Johnson Space Center's Rock Yard</strong>, where the system was tested in simulated lunar surface operations designed to mirror the challenges of future Artemis missions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3. WHAT IS NASA SUITS (Two-column) */}
                <section className="apl-section">
                    <div className="apl-container apl-sme-container">
                        <div className="apl-sme-text">
                            <span className="apl-badge">The Design Challenge</span>
                            <h2 className="apl-section-title">What is NASA SUITS?</h2>
                            <p className="apl-text">
                                The Spacesuit User Interface Technologies for Students program is a highly competitive educational initiative by NASA's STEM Engagement office. It invites undergraduate and graduate students to design human-spaceflight user interfaces to address real-world EVA (Extravehicular Activity) task demands on the lunar surface.
                            </p>
                            <p className="apl-text">
                                Artemis astronauts returning to the lunar south pole will face extreme environments and strict operational schedules. Handheld documents are impractical, and communication delays to Earth require greater autonomy. NASA SUITS challenges teams to leverage mixed reality to deliver hands-free, glanceable information that enhances safety and operational autonomy.
                            </p>
                            <p className="apl-text">
                                Working within a small interdisciplinary team of students from Aerospace Engineering, Computer Science, Information Technology, and related fields,
                                I served as the XR Astronaut Interface Lead, helping develop the mixed reality systems used during the competition. The project culminated at NASA Johnson Space Center,
                                where our team demonstrated our solution to NASA engineers, software developers, and designers.
                                The image on the right captures me presenting our work to astronaut <strong>Raja Chari</strong> and other NASA stakeholders.
                            </p>
                        </div>
                        <ImageGallery
                            images={[{ src: SUITSImg6, alt: "resenting to NASA Astronaut at JSC" }]}
                            columns={1}
                        />
                    </div>
                </section>

                {/* 4. MISSION SCENARIO & EVA OPERATIONS (Feature Grid) */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <h2 className="apl-section-title">EVA Mission Scenario & Capabilities</h2>
                        <p className="apl-text" style={{ marginBottom: '2rem' }}>
                            During onsite testing at the Johnson Space Center Rock Yard, the VR/AR interface was subjected to realistic lunar operational tasks designed by NASA EVA specialists.
                        </p>
                        <div className="apl-feature-grid">
                            {[
                                { title: "Egress & Ingress Procedures", desc: "Interactive procedural support for entering and exiting simulated spacecraft cabins and airlocks, linking directly with UIA (Umbilical Interface Assembly) switch states." },
                                { title: "Lunar Navigation & Wayfinding", desc: "Spatial path guidance using dynamic waypoints, 3D path visualization, and path history tracking to help astronauts navigate safely back to base." },
                                { title: "Geology & Science Tasks", desc: "Digital geological toolkits featuring tool status indicators, sample collection tracking, and recording of key points of interest during exploration." },
                                { title: "Rover Operations & Interoperability", desc: "Display of critical telemetries and battery health of the Lunar Terrain Vehicle (LTV) with directional spatial indicators pointing to its location." },
                                { title: "Real-Time Suit Telemetry", desc: "Seamless streaming of critical life support metrics (oxygen, battery, pressure) from NASA's Telemetry Stream Server (TSS) with custom alert triggers." },
                                { title: "VISOR AI Voice Assistant", desc: "Hands-free natural language agent helping astronauts query suit health, recall procedures, and flag scientific findings without using their hands." },
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

                {/* 7. TESTING AT NASA JSC - ROCK YARD GALLERY */}
                <section className="apl-section">
                    <div className="apl-container">
                        <h2 className="apl-section-title">Testing at NASA Johnson Space Center</h2>
                        <p className="apl-text" style={{ marginBottom: '3rem' }}>
                            The culmination of months of engineering and design was testing our system live at the <strong>NASA JSC Rock Yard</strong> in Houston, Texas. In simulated lunar operations, test subjects wore our mixed reality rig while navigating simulated terrain, carrying out sampling tasks, and interacting with astronauts and flight specialists.
                        </p>
                        <ImageGallery
                            images={[
                                { src: SUITSImg2, alt: "Team VISOR during testing" },
                                { src: SUITSImg3, alt: "Field testing at JSC Rock Yard" },
                                { src: SUITSImg4, alt: "Astronaut perspective testing" },
                                { src: SUITSImg5, alt: "Evaluating interface elements" },
                                { src: SUITSRockYard1, alt: "HoloLens 2 calibration in the field" },
                                { src: SUITSRockYard2, alt: "Field test operations" },
                                { src: SUITSRockYard10, alt: "Evaluating pathfinding navigation" },
                                { src: SUITSRockYard7, alt: "Evaluating suit telemetry indicators" },
                            ]}
                            columns={2}
                        />
                    </div>
                </section>

                {/* 5. VISOR AI ASSISTANT DEEP DIVE (Two-column) */}
                <section className="apl-section">
                    <div className="apl-container apl-sme-container">
                        <div className="apl-sme-text">
                            <span className="apl-badge">Voice-Driven Autonomy & Ground Control</span>
                            <h2 className="apl-section-title">VISOR AI Assistant & Mission Control Center</h2>
                            <p className="apl-text">
                                Astronauts working on the Moon have limited use of their hands due to bulky spacesuit gloves. To address this interaction barrier, I led the integration of our voice-driven assistant, <strong>VISOR AI</strong>, onto the HoloLens 2.
                            </p>
                            <p className="apl-text">
                                The system processed voice commands locally to ensure responsiveness and stability during field operations. Through natural speech, astronauts can pull up detailed procedures, inspect suit status metrics (e.g., "Check suit telemetry"), adjust the UI contrast, and log sample descriptions. This hands-free interaction loop drastically reduces the cognitive load of searching through traditional documents.
                            </p>
                        </div>
                        <ImageGallery
                            images={[{ src: SUITSUIScreenshot, alt: "VISOR AI and Telemetry HoloLens UI" }]}
                            columns={1}
                        />

                        <ImageGallery
                            images={[{ src: SUITSDiagram, alt: "VISOR Team Diagram" }]}
                            columns={1}
                        />

                        <p className="apl-text">
                            The Mission Control Center (MCC) architecture was designed to mirror real NASA operations by establishing clear communication pathways between astronauts, mission controllers, and support systems. At the center of the system are the <strong>Flight Director</strong> and <strong>CAPCOM (Capsule Communicator)</strong>, who coordinate information flow between the astronaut and mission support infrastructure. Real-time spacesuit telemetry from NASA's Test Support System (TSS) is routed through the Flight Director, while astronaut inputs from the HoloLens 2, Wrist Mounted Display (WMD), and voice commands are processed through an onboard Raspberry Pi. The CAPCOM serves as the primary communication interface with the astronaut, relaying mission updates, telemetry, and AI-generated assistance directly to the headset. An integrated AI system provides contextual responses and operational guidance, enabling rapid access to procedures and mission information. Together, these hardware and software components create a closed-loop communication ecosystem that enhances astronaut situational awareness, supports decision-making, and reflects the command structure used during real-world human spaceflight operations.
                        </p>

                    </div>

                    <div className="apl-container">
                        <h2 className="apl-section-title">Mission Control Center</h2>
                        <ImageGallery
                            images={[
                                { src: FlightDirectorImg, alt: "Flight Director" },
                                { src: CAPCOMimg, alt: "CAPCOM" },
                            ]}
                            columns={1}
                        />
                    </div>

                </section>

                {/* 6. TECHNICAL ARCHITECTURE */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container">
                        <h2 className="apl-section-title">Technical Architecture & Stack</h2>
                        <p className="apl-text">
                            To ensure high-performance rendering and reliability in a field environment, we built our Mixed Reality client on <strong>Unity</strong> and <strong>C#</strong> utilizing Microsoft's Mixed Reality Toolkit (MRTK) for spatial interaction and hand tracking.
                        </p>
                        <p className="apl-text">
                            The client integrated with the NASA <strong>Telemetry Stream Server (TSS)</strong> via WebSockets. We processed JSON and GeoJSON messages containing location coordinates, EVA status, and suit environmental systems data in real time. We built a robust caching layer to prevent data dropouts and network instability from crashing the user interface, implementing graceful fallback views when telemetry packets were delayed.
                        </p>
                    </div>
                </section>

                {/* 8. DESIGN DECISIONS & FUTURE IMPACT */}
                <section className="apl-section apl-section--dark">
                    <div className="apl-container apl-split-text">
                        <div className="apl-split-col">
                            <h3 className="apl-sub-title">Design Philosophy</h3>
                            <p className="apl-text">
                                Throughout testing we took in mind the foundations of Flight Operations and the prioritization of Human Spaceflight.
                                The prioritization are as follows: <strong>the safety of the crew, the safety of the vehicle, and the success of the mission</strong>.
                                AR interfaces face major visibility issues under the harsh lighting conditions of space exploration.
                                We designed high-contrast interface themes and used spatial audio cues to direct user attention.
                                Instead of cluttering the central field of view,
                                we positioned telemetry menus in the user's peripheral field,
                                allowing astronauts to pull them up with simple wrist gestures
                                (HMD/WMD dual-platform mapping) to maintain clear situational awareness.
                            </p>
                        </div>
                        <div className="apl-split-col">
                            <h3 className="apl-sub-title">Lessons & Impact</h3>
                            <p className="apl-text">
                                Testing at the NASA Rock Yard showed that voice interfaces are critical in high-stress outdoor environments. High ambient noise and communication latency require local, reliable speech recognition engines. These usability findings provide valuable design heuristics for future mixed reality systems supporting human spaceflight.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 9. DEMO VIDEO */}
                <section className="apl-final-section">
                    <div className="apl-final-bg">
                        <img src={SUITSRockYard2} alt="NASA SUITS Field Test" />
                        <div className="apl-final-overlay" />
                    </div>
                    <div className="apl-final-content">
                        <h2>Empowering astronauts with intelligent mixed reality for lunar exploration.</h2>
                        <VideoEmbed
                            videoUrl="https://www.youtube.com/live/VIQ5LbNfwNY"
                            title="NASA SUITS Demonstration"
                            caption="Watch the full livestream recording of the NASA SUITS presentations (VISOR presentation starts at 37:40)"
                            startSeconds={2260}
                        />
                    </div>
                </section>

                {/* 10. VISOR POSTER */}
                <section className="apl-section">
                    <div className="apl-container">
                        <h2 className="apl-section-title">Team VISOR Presentation Poster</h2>
                        <p className="apl-text" style={{ marginBottom: '3rem' }}>
                            We compiled our systems engineering process, user studies, and mixed reality architectural pipeline into our final project poster, presented to NASA investigators and academic sponsors during evaluation week.
                        </p>
                        <div className="apl-symposium-grid">
                            <iframe title="NASA SUITS Poster" src={SUITSPoster} className="pd-pdf-embed" loading="lazy" style={{ width: '100%', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255, 255, 255, 0.1)', height: '700px' }} />
                        </div>

                        <ImageGallery
                            images={[{ src: SUITSRockYard9, alt: "Group photo" }]}
                            columns={1}
                        />
                    </div>
                </section>

                {/* 11. PHOTO CREDITS */}
                <section className="apl-section" style={{ padding: '2rem 0', opacity: 0.6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="apl-container" style={{ textAlign: 'center' }}>
                        <p className="apl-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                            Photography by <strong>Azeem Ehtisham</strong> and <strong>David DeHoyos</strong>.
                        </p>
                    </div>
                </section>
            </div>

            {/* 12. PREV / NEXT NAVIGATION */}
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