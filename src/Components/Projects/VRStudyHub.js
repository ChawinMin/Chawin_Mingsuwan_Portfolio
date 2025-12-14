import Youtube from 'react-youtube';
import VRStudyHubImg1 from "../../assets/img/VRStudyHub/VRStudyHub_1.png";

export const VRStudyHub = () => {

    const youtubelinkedemo1 = "https://youtu.be/onq003rloy8";
    const youtubelinkedemo2 = "https://youtu.be/GLq0cPEQ-oI";

    return (
        <>
            <section className = "default" id="vrstudyhub-hero">

                <p className="section-subtitle">Technology and Design Thinking</p> 

                <h1 className="section-title">VR Study Hub</h1>

                <p className="project-overview">
                    The VR Study Hub is an immersive virtual reality application 
                    designed to create an engaging and interactive learning environment. 
                    Developed using Unity and C#, this project explores how 
                    VR technology can enhance student engagement and comprehension 
                    in complex subjects, particularly in STEM fields. 
                    The VR Study Hub offers a variety of educational modules, 
                    interactive simulations, and collaborative study spaces to 
                    facilitate effective learning experiences.
                </p>

                <h3 className = 'skills-title'>Key Features</h3>

                <section className="vrstudyhub-project" id="vrstudyhub">
                    <div className = 'text-image-next-to-each-other'>
                        <ul>
                            <li><strong>Immersive Learning Modules:</strong> Interactive lessons and simulations that allow students to explore complex concepts in a 3D environment.</li>
                            <li><strong>Collaborative Study Spaces:</strong> Virtual rooms where students can meet, discuss, and work on projects together in real-time.</li>
                            <li><strong>Customizable Avatars:</strong> Personalize your virtual presence with customizable avatars to enhance social interaction.</li>
                            <li><strong>Progress Tracking:</strong> Monitor learning progress and achievements through an integrated tracking system.</li>
                        </ul>
                        
                    </div>

                    <div className = 'text-image-next-to-each-other'>
                        <img src={VRStudyHubImg1} alt="VR Study Hub Screenshot" className="project-image"/>
                        <p className='project-overview'>
                            For one of my projects, I worked on developing a Virtual Reality Study Hub 
                            using Unity and the XR Rig, typically used in gaming and entertainment. 
                            We created a fully interactive virtual environment designed to enhance 
                            study experiences, offering an immersive way to organize and focus on tasks. 
                            Our team conducted tests with different individuals to gather feedback and 
                            improve the experience. We presented our finalized prototype to our TECH 120 
                            class, where our <strong>instructor was highly impressed</strong> with how we adapted this 
                            entertainment-focused technology for academic and productive purposes.
                        </p>
                    </div>

                </section>

                <h2 className = 'skills-title'>Demo Video</h2>

                <p className ='project-overview'>
                        Below are demo videos showcasing the features and 
                        user experience of the VR Study Hub.
                </p>

                <section className='video-section'>
                    
                    <Youtube videoId={youtubelinkedemo1.split('youtu.be/')[1]} className="youtube-video"/>
                    <Youtube videoId={youtubelinkedemo2.split('youtu.be/')[1]} className="youtube-video"/>

                </section>

            </section>
        </>
    )
}
        