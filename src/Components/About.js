import profile from "../assets/img/profile.png";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
    return (
        <section className="about-me" id="aboutMe">
            <p className = "section-subtitle">Interest, Experience, and Skills</p>
            <h1 className = "About-Me-Title">About Me</h1>

            <div className = "about-grid">

                {/* Left Column */}
                <div className = "about-left">
                    
                    <img src={profile} alt="Profile" className="about-me-img"/>
    
                    <span className = "about-me-typewriter">
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
                    <p className = "Contact-info">
                        Email: cmingsuw@purdue.edu
                        Phone: (818) 599-9058
                    </p>

                </div>

                {/* Center Column */}
                <div className = "about-center">
                    <h2 className = "Hello">Hi, I'm Chawin!</h2>

                    <p className = "about-me-description">
                    I am a Creative Technologist and XR Engineer working at the intersection of immersive technology, 
                    data visualization, and human-centered design. My work focuses on developing interactive XR systems that 
                    support scientific exploration, mission planning, and decision-making, particularly within aerospace and research-driven environments. I have collaborated with organizations such as NASA, Barrios Technology, and Los Alamos National Laboratory to build tools that translate complex data and systems into intuitive, spatial experiences.
                    </p>

                    <p className = "about-me-description">
                    My passion lies in understanding how people interact with information and leveraging immersive technologies to make that interaction clearer, 
                    more engaging, and more meaningful. Through XR development, UI/UX design, and software engineering, I strive to create experiences that are not only visually compelling, but also functional, accessible, 
                    and impactful—bridging the gap between advanced technology and human understanding.
                    </p>
                
                </div>

                {/* Right Column */}
                <div className = "about-right">
                    <h3 className = "experiences-title">Experiences</h3>
                    <ul className = "experiences-list">
                        <li>Computational Astrophysics Research Cohort (August 2025 - Present)</li>
                        <li>NASA/Barrios Technology Purdue Data Mine Corporate Partners (January 2025 - Dec 2025)</li>
                        <li>Los Alamos National Laboratory Summer Intern (June 2024 - August 2024)</li>
                        <li>Ilender Software Engineering Intern (May 2024 - July 2024)</li>
                        <li>NASA SUITS UX/XR developer TEAM JARVIS (August 2023 - May 2024)</li>
                    </ul>
                    <h3 className = "skills-title">Skills</h3>
                    <ul className = "skills-list">
                        <li>XR Development: Unity, Unreal Engine, C#, C++, Blueprints</li>
                        <li>Hardware: Apple Vision Pro, Meta Quests, Arduino</li>
                        <li>Programming: Python (Pandas, FastAPI, MatplotLib, Pytorch), JavaScript, HTML/CSS, React</li>
                        <li>Data Visualization: Matplotlib, ParaView</li>
                        <li>Tools: Git, Blender, Figma, Adobe Creative Suite</li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
}