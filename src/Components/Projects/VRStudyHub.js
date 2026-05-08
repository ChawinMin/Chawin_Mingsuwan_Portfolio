import VRStudyHubImg1 from "../../assets/img/VRStudyHub/VRStudyHub_1.png";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';
import VideoEmbed from '../VideoEmbed';
import FeatureList from '../FeatureList';

export const VRStudyHub = () => {
    return (
        <ProjectDetailLayout
            subtitle="Technology and Design Thinking"
            title="VR Study Hub"
            heroImage={VRStudyHubImg1}
            tags={['VR', 'Unity', 'C#', 'Educational Technology', 'UI/UX Design', 'Human-Computer Interaction']}
            metadata={[
                { label: "Role", value: "VR Developer" },
                { label: "Course", value: "TECH 120" },
                { label: "Engine", value: "Unity + XR Rig" },
            ]}
            currentPath="/VRStudyHub"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    The VR Study Hub is an <strong>immersive virtual reality application designed to create an engaging and interactive learning environment.</strong> Developed using <strong>Unity and C#</strong>, this project explores how VR technology can enhance student engagement and comprehension in complex subjects, particularly in STEM fields. The VR Study Hub offers a variety of <strong>educational modules, interactive simulations, and collaborative study spaces to facilitate effective learning experiences.</strong>
                </p>
            </ProjectSection>

            <ProjectSection title="Key Features">
                <FeatureList items={[
                    { bold: "Immersive Learning Modules", text: "Interactive lessons and simulations that allow students to explore complex concepts in a 3D environment." },
                    { bold: "Collaborative Study Spaces", text: "Virtual rooms where students can meet, discuss, and work on projects together in real-time." },
                    { bold: "Customizable Avatars", text: "Personalize your virtual presence with customizable avatars to enhance social interaction." },
                    { bold: "Progress Tracking", text: "Monitor learning progress and achievements through an integrated tracking system." },
                ]} />
            </ProjectSection>

            <ProjectSection title="Development">
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: VRStudyHubImg1, alt: "VR Study Hub Screenshot" }]}
                        columns={1}
                    />
                    <p className="pd-text">
                        For one of my projects, I worked on developing a Virtual Reality Study Hub using <strong>Unity and the XR Rig,</strong> typically used in gaming and entertainment. We created a <strong>fully interactive virtual environment designed to enhance study experiences</strong>, offering an immersive way to organize and focus on tasks. Our team conducted tests with different individuals to gather feedback and improve the experience. We presented our finalized prototype to our TECH 120 class, where our <strong>instructor was highly impressed</strong> with how we adapted this entertainment-focused technology for academic and productive purposes.
                    </p>
                </div>
            </ProjectSection>

            <ProjectSection title="Demo Videos">
                <p className="pd-text">
                    Below are demo videos showcasing the features and user experience of the VR Study Hub.
                </p>
                <div className="pd-two-col">
                    <VideoEmbed
                        videoUrl="https://youtu.be/onq003rloy8"
                        title="Demo 1"
                    />
                    <VideoEmbed
                        videoUrl="https://youtu.be/GLq0cPEQ-oI"
                        title="Demo 2"
                    />
                </div>
            </ProjectSection>
        </ProjectDetailLayout>
    )
}