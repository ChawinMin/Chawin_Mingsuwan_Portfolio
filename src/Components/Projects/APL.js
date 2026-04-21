import MCCVRImage from '../../assets/img/APL/VRAPLMCC.png';
import AIWorkFlow from '../../assets/img/APL/FinalizedAIDiagram.png';
import APLPoster from '../../assets/img/APL/APLPoster.pdf';
import ResearchGroupPhoto from '../../assets/img/APL/ResearchPhoto.jpeg';
import Youtube from 'react-youtube';

export const APL = () => {

    const youtubelinkedemo1 = "https://www.youtube.com/watch?v=LH1G0Wwj9_8&t=292s";

    return (
        <>
            <section className="default" id="lanl-hero">
                <p className="section-subtitle">John Hopkins Applied Physics Laboratory (APL) - Sponsored Research Project</p>
                <h1 className="section-title">Virtual Reality and Intelligent Agent</h1>
                <div className='project-details'>
                    <p className="project-overview">
                        I am currently leading the development of a <strong>VR + AI Mission Control Center prototype </strong>
                        in collaboration with the <strong>Johns Hopkins Applied Physics
                            Laboratory (APL)</strong>, exploring how immersive
                        technologies and intelligent agents can support
                        decision-making in complex space missions. The
                        system creates an interactive <strong>virtual
                            mission control environment</strong> where
                        users can explore operational scenarios,
                        interact with mission data, and consult an
                        AI assistant trained on insights
                        from human-spaceflight experts. By
                        combining <strong>extended reality,
                            knowledge retrieval, and
                            human-centered design</strong>, the
                        project investigates how immersive
                        systems can improve situational
                        awareness and operational understanding for
                        future spaceflight missions.
                    </p>
                    <img src={MCCVRImage} alt="VR Mission Control Center Prototype" className="lanl-image" />
                </div>

                <h2 className='skills-title'>My Role</h2>
                <p className='project-overview'>
                    I served as the <strong>Technical Lead and XR Developer</strong>,
                    responsible for designing the system architecture and
                    leading development of the immersive environment. I
                    coordinated the integration of <strong>VR interaction systems,
                        AI knowledge retrieval, and backend infrastructure</strong>,
                    while also conducting expert interviews to inform the system’s
                    knowledge base. My work focused on translating complex
                    operational reasoning from astronauts and flight
                    controllers into <strong>interactive XR
                        experiences</strong> that allow users to explore
                    mission operations in an intuitive spatial environment.
                </p>

                <h2 className='skills-title'>Problem & Motivation</h2>
                <p className='project-overview'>
                    Modern space missions involve <strong>highly complex
                        operational environments</strong> where decisions
                    must be made using information distributed across
                    multiple systems and expert roles. Mission control
                    teams rely on years of training and specialized
                    knowledge to interpret spacecraft data and respond
                    to unexpected scenarios. However, much of this
                    expertise exists as <strong>tacit knowledge </strong>
                    developed through experience or static documentation.
                    This project explores how <strong>virtual reality and AI-driven knowledge
                        systems</strong> can help capture and present
                    operational expertise in a more intuitive and
                    accessible format, supporting improved understanding,
                    training, and decision-making for future missions.
                </p>

                <h2 className='skills-title'>System Architecture</h2>
                <p className='project-overview'>
                    The system integrates virtual reality with an AI knowledge agent through a modular architecture:
                </p>
                <div className='project-details'>
                    <ul>
                        <li><strong>Unity VR Environment</strong> – immersive mission control interface where users interact with operational systems and spatial data</li>
                        <li><strong>Retrieval-Augmented Generation (RAG) Agent</strong> – AI system that retrieves relevant operational knowledge before generating responses</li>
                        <li><strong>Vector Knowledge Database</strong> – stores structured insights derived from astronaut and flight controller interviews</li>
                        <li><strong>Backend API Infrastructure</strong> – handles communication between the VR environment and AI services</li>
                        <li><strong>Speech Interaction Pipeline</strong> – enables voice-based interaction with the AI assistant</li>
                        <li><strong>Cloud Computing Services with AWS</strong> – supports scalable AI inference and data retrieval</li>
                    </ul>
                    <img src={AIWorkFlow} alt="AI Knowledge Agent Workflow" className="lanl-image" />
                </div>

                <h2 className='skills-title'>Final Presentation</h2>
                <div className='project-details'>
                    <p className='project-overview'>
                        This is the final presentation video of our APL project that showcases the
                        immersive <strong>virtual mission control
                            center</strong> designed to mirror the
                        collaborative and information-dense
                        environment of real flight operations.
                        Within this spatial interface, users
                        can navigate the room, interact with
                        mission displays, and access contextual
                        operational knowledge through intuitive
                        VR interactions. As well as the
                        <strong> AI knowledge agent </strong>
                        built using a Retrieval-Augmented Generation
                        (RAG) architecture.This approach ensures that responses
                        are grounded in <strong>domain-specific expertise</strong>
                        and reflect real-world operational reasoning.
                    </p>
                    <div className="video-container" style={{ flex: 1, width: '100%' }}>
                        <Youtube videoId={youtubelinkedemo1.split('youtu.be/')[1]} className="youtube-video" opts={{ width: '100%', height: '320' }} />
                    </div>
                </div>

                <section className="project-overview">
                    <h2 className='skills-title'>Undergraduate Research Symposium Spring 2026</h2>
                    <p>
                        I presented at Purdue's annual <strong>Undergraduate Research Symposium Spring 2026</strong>.
                        The group that presented is <strong>Chawin Mingsuwan, Avery Dellinger III, Salvador Alvery, Russell Thomas</strong>,
                        and our mentor from APL, <strong>Jackson Murray</strong>.
                    </p>

                    <div className="LANL-media">
                        <img src={ResearchGroupPhoto} alt="APL research group" className="XR-poster" />
                        <iframe title="APL Poster" src={APLPoster} className="lanl-slide" loading="lazy" ></iframe>
                    </div>
                </section>
            </section>
        </>
    )
}