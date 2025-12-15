import CullImg1 from "../../assets/img/Cults of the Carven/RortoImg1.png";
import CullImg2 from "../../assets/img/Cults of the Carven/RortoImg2.png";
import Youtube from "react-youtube"

export const Cull = () => {
    const youtubeCullVideo = "https://youtu.be/Y6sZryF5Erc";
    return (
        <>
            <section className = "default" id="cull-hero">
                <p className="section-subtitle">Game Development Personal Project</p>
                <h1 className="section-title">Cults of the Carvenal</h1>

                <div className = "text-image-next-to-each-other">
                    <p className="project-overview">
                        During one semester, I worked with a <strong>randomly assigned group of 
                        classmates</strong> to develop a horror game called The Cults of Carven 
                        as part of an industry readiness exercise. My contributions to 
                        the project included <strong>designing the sound and UI/UX, working on 
                        game mechanics, and utilizing block scripting within Unreal 
                        Engine 5.</strong> This experience provided valuable insight into 
                        collaborative game development, simulating real-world conditions 
                        and preparing us for work in the game industry.
                    </p>
                    <img src={CullImg1} alt="Cults of the Carven Screenshot" className="project-image"/>
                </div> 
                <h2 className = 'skills-title'>Key Features</h2>
                <section className="cull-project-details">
                    <ul>
                        <li><strong>Atmospheric Storytelling:</strong> Engaging narrative that immerses players in a dark and mysterious world.</li>
                        <li><strong>Challenging Gameplay Mechanics:</strong> Strategic combat and puzzle-solving elements that test players' skills and decision-making.</li>
                        <li><strong>Immersive Environments:</strong> Detailed and haunting game worlds that enhance the horror experience.</li>
                        <li><strong>Character Development:</strong> Players can customize and upgrade their characters as they progress through the game.</li>
                    </ul>
                </section>

                <h2 className = 'skills-title'>Implementation</h2>
                <section className = "image-and-bullets-next-to-each-other">
                    <img src={CullImg2} alt="Cults of the Carven Screenshot" className="project-image"/>
                    <ul>
                        <li>
                        Led <strong>UI/UX design</strong>, creating an immersive and readable interface that 
                        supported gameplay flow without breaking the horror atmosphere.
                        </li>
                        <li>
                        Designed and implemented <strong>sound design and ambient audio</strong> to 
                        reinforce tension and enhance the dark, unsettling tone of the game.
                        </li>
                        <li>
                        Built the <strong>forest level environment</strong>, using lighting, layout, and
                        environmental storytelling to guide player movement and create a claustrophobic mood.</li>
                        <li>
                        Implemented the <strong>shotgun shooting mechanic</strong>, including spread-based
                        firing behavior for realistic and satisfying combat.
                        </li>
                        <li>
                        Developed <strong>enemy hitbox logic</strong> to ensure responsive and accurate combat
                        interactions.
                        </li>
                        <li>
                        Utilized <strong>Unreal Engine 5 Blueprints</strong> for rapid prototyping and
                        collaborative development within a team-based production environment.
                        </li>
                    </ul>
                </section>

                <h2 className = 'skills-title'>Beta Version </h2>

                <section className = 'beta-video'>
                    <Youtube videoId={youtubeCullVideo.split('youtu.be/')[1]} className="youtube-video"/>
                    <p>
                        Here is a beta version of the game showcasing key gameplay elements, 
                        including exploration, combat, and environmental design. 
                        Please note that this is an early build and may contain bugs or incomplete features.
                    </p>
                </section>

            </section>
        </>
    )
}