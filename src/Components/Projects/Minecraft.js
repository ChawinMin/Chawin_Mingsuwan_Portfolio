import MinecraftImg1 from "../../assets/img/Minecraft/MinecraftImg.jpg";
import MinecraftImg2 from "../../assets/img/Minecraft/MinecraftImg2.jpg";
import MinecraftImg3 from "../../assets/img/Minecraft/MinecraftImg2.png";
import MinecraftImg4 from "../../assets/img/Minecraft/MinecraftImg3.png";
import MinecraftPoster from "../../assets/img/Minecraft/Minecraft Presentation.pdf";

export const Minecraft = () => {
    return (
        <>
            <section className = "default" id="minecraft-hero">
                <p className="section-subtitle">First-time Engineering Researcher Fellowship</p>
                <h1 className="section-title">Minecraft Mod for Teaching Statics and Mechanical Engineering</h1>
                <p className="project-overview">
                    Apart of my undergraduate research, I collaborated with Professor Tepole 
                    in the Flex Lab to <strong>gamify mechanical engineering concepts</strong>, specifically 
                    statics, by integrating these principles into Minecraft. My contributions 
                    included <strong>quality assurance (QA)</strong> testing to ensure the functionality and 
                    engagement of the educational tools within the game environment. 
                    Additionally, I presented our findings at the Spring Symposium, 
                    showcasing how <strong>interactive gameplay can enhance the learning and 
                    understanding of complex engineering topics.</strong> This research demonstrated 
                    how gamification can make engineering concepts more accessible and 
                    engaging for students.
                </p>
                
                <h2 className = 'skills-title'>Statics Example</h2>
                <section name = "text-image-next-to-each-other" className="image-and-bullets-next-to-each-other">
                    <div className="minecraft-Paragraphs">
                        <p>
                        This structure is not purely visual—there is computational logic behind 
                        it that <strong>simulates structural tension and load distribution.</strong> 
                        Each block’s color represents the <strong>calculated stress state of 
                        that part of the structure</strong>, determined by code that evaluates 
                        how much tension or force the structure is withstanding at different 
                        points. <strong>Green indicates areas that are structurally sound</strong> and 
                        operating within safe limits, while warmer colors (such as yellow, 
                        orange, and red) represent increasing levels of stress. <strong>Black blocks 
                        signify failure points</strong> where the calculated tension exceeds the 
                        structural threshold, indicating that the structure has broken or 
                        can no longer support the applied load. Together, the color mapping 
                        provides an <strong> intuitive, real-time visualization of structural 
                        integrity, translating underlying physics-based calculations </strong> 
                        into a form that is easy to interpret visually.
                        </p>

                        <p>
                        I presented this work as a poster at the <strong>Fall 2024 Undergraduate Research Symposium</strong>, where 
                        I communicated the technical approach, underlying computational logic, 
                        and visual outcomes of the project to a multidisciplinary audience. 
                        The presentation emphasized how code-driven analysis was translated 
                        into an <strong>intuitive visual system</strong>, allowing viewers to quickly understand 
                        complex structural behavior through color mapping and failure indicators. 
                        Engaging with faculty, researchers, and fellow students provided valuable 
                        feedback on both the technical implementation and the clarity of the 
                        visualization, reinforcing the <strong>importance of effective visual 
                        communication in conveying complex scientific and engineering concepts.</strong>
                        </p>
                    </div>

                    <div className = "project-image-stack">
                        <img src= {MinecraftImg1} alt="Minecraft Project" className = "minecraft-image"/>
                        <img src= {MinecraftImg2} alt="Minecraft Project" className = "minecraft-image"/>
                    </div>
                </section>

                <h2 className = 'skills-title'>Fall 2024 undergraduate Research Symposium</h2>

                <div name = "text-image-next-to-each-other" className="image-and-bullets-next-to-each-other">
                    <img src = {MinecraftImg3} alt="Minecraft Project Presentation" className = "minecraft-image-presentation"/>
                    <img src = {MinecraftImg4} alt="Minecraft Project Presentation" className = "minecraft-image-presentation"/>
                </div>

               <iframe title="Minecraft Research Presentation" src={MinecraftPoster} className="minecraft-poster" loading="lazy" >Minecraft_Mingsuwan_Fall_2024_Poster</iframe>

            </section>
        
        </>
    )
}