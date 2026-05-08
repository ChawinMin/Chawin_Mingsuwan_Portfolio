import CullImg1 from "../../assets/img/Cults of the Carven/RortoImg1.png";
import CullImg2 from "../../assets/img/Cults of the Carven/RortoImg2.png";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';
import VideoEmbed from '../VideoEmbed';
import FeatureList from '../FeatureList';

export const Cull = () => {
    return (
        <ProjectDetailLayout
            subtitle="Game Development Personal Project"
            title="Cults of the Carvenal"
            heroImage={CullImg1}
            tags={['Unreal Engine', 'Blueprints', 'C++', 'Game Design', 'Sound Design', 'Level Design', 'UI/UX Design']}
            metadata={[
                { label: "Type", value: "Team Project" },
                { label: "Engine", value: "Unreal Engine 5" },
                { label: "Genre", value: "Horror RPG" },
                { label: "Role", value: "UI/UX & Sound Design" },
            ]}
            currentPath="/Cull"
        >
            <ProjectSection title="Overview">
                <div className="pd-two-col">
                    <p className="pd-text">
                        During one semester, I worked with a <strong>randomly assigned group of classmates</strong> to develop a horror game called The Cults of Carven as part of an industry readiness exercise. My contributions to the project included <strong>designing the sound and UI/UX, working on game mechanics, and utilizing block scripting within Unreal Engine 5.</strong> This experience provided valuable insight into collaborative game development, simulating real-world conditions and preparing us for work in the game industry.
                    </p>
                    <ImageGallery
                        images={[{ src: CullImg1, alt: "Cults of the Carven Screenshot" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>

            <ProjectSection title="Key Features">
                <FeatureList items={[
                    { bold: "Atmospheric Storytelling", text: "Engaging narrative that immerses players in a dark and mysterious world." },
                    { bold: "Challenging Gameplay Mechanics", text: "Strategic combat and puzzle-solving elements that test players' skills and decision-making." },
                    { bold: "Immersive Environments", text: "Detailed and haunting game worlds that enhance the horror experience." },
                    { bold: "Character Development", text: "Players can customize and upgrade their characters as they progress through the game." },
                ]} />
            </ProjectSection>

            <ProjectSection title="Implementation">
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: CullImg2, alt: "Cults of the Carven Implementation" }]}
                        columns={1}
                    />
                    <FeatureList items={[
                        { bold: "UI/UX design", text: "creating an immersive and readable interface that supported gameplay flow without breaking the horror atmosphere." },
                        { bold: "Sound design and ambient audio", text: "to reinforce tension and enhance the dark, unsettling tone of the game." },
                        { bold: "Forest level environment", text: "using lighting, layout, and environmental storytelling to guide player movement and create a claustrophobic mood." },
                        { bold: "Shotgun shooting mechanic", text: "including spread-based firing behavior for realistic and satisfying combat." },
                        { bold: "Enemy hitbox logic", text: "to ensure responsive and accurate combat interactions." },
                        { bold: "Unreal Engine 5 Blueprints", text: "for rapid prototyping and collaborative development within a team-based production environment." },
                    ]} />
                </div>
            </ProjectSection>

            <ProjectSection title="Beta Version">
                <VideoEmbed
                    videoUrl="https://youtu.be/Y6sZryF5Erc"
                    title="Beta Gameplay"
                    caption="Here is a beta version of the game showcasing key gameplay elements, including exploration, combat, and environmental design. Please note that this is an early build and may contain bugs or incomplete features."
                />
            </ProjectSection>
        </ProjectDetailLayout>
    )
}