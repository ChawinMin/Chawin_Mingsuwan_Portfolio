import LANLimg1 from "../../assets/img/LANL/LANL_1.png";
import LANLimg2 from "../../assets/img/LANL/LANL_2.png";
import LANLimg3 from "../../assets/img/LANL/LANL_3.png";
import LANLXRposter from "../../assets/img/LANL/XR_Poster.png";
import lightslides from "../../assets/img/LANL/Mingsuwan_HPC_XR_Light_Talk_Slides.pdf";

export const LANL = () => {
    return (
        <>
            <section className = "default" id="lanl-hero">
                <p className="section-subtitle">Los Alamos National Laboratory</p>
                <h1 className="section-title">Extended Reality(XR) High-Performance Computing (HPC) Intern</h1>
                <p className="project-overview">
                    At LANL, I advanced <strong>extended reality (XR)</strong> applications for <strong>scientific visualization</strong> within the HPC/ISTI Innovation Hub. 
                    My work focused on <strong>bridging high-performance simulation data with immersive environments 
                    and developing an user-interface</strong> to support scientists and engineers.
                </p>
                <h2 className = 'skills-title'>Features Implemented</h2>

                <section className="project-details">
                    <ul>
                        <li><strong>Developed XR prototypes in Unreal Engine 5.6 for Apple Vision Pro</strong>, enabling scientists to interact with CAD models and large-scale simulation datasets.</li>
                        <li><strong>Integrated ParaView-exported point clouds and HPC simulation data</strong> into immersive environments, creating intuitive tools for scientific exploration and analysis.</li>
                        <li><strong>Built hand-gesture interaction systems</strong> (pinch detection, scaling, rotation, and UI widgets) for natural, controller-free user control.</li>
                        <li><strong>Automated packaging and deployment workflows</strong> using Python and Xcode, including device builds and xcrun device.</li>
                        <li><strong>Presented research at the LANL Student Symposium</strong> through a poster and lightning talk titled <em>“Reimagining Reality for Scientists & Engineers.”</em></li>
                    </ul>
                </section>

                <section className="lanl-project-images">
                    <img src={LANLimg1} alt="LANL XR Project Screenshot 1" className="lanl-image"/>
                    <img src={LANLimg2} alt="LANL XR Project Screenshot 2" className="lanl-image"/>
                    <img src={LANLimg3} alt="LANL XR Project Screenshot 3" className="lanl-image"/>
                </section>

                <section className = "project-overview">
                    <h2 className = 'skills-title'>LANL Student Symposium 2025</h2>
                    <p>
                    I presented my research at the LANL Student Symposium 2024 through a poster <em>“Reimagining Reality for Scientists & Engineers.”</em> and lightning talk titled <em>"What is Reality?"</em>. 
                    The poster highlighted the potential of XR technologies to transform scientific visualization and data interaction within high-performance computing contexts.
                    </p>

                    <div className = "LANL-media">
                        <img src={LANLXRposter} alt="LANL Student Symposium Poster" className="XR-poster"/>
                        <iframe title="LANL Student Symposium Lightning Talk" src={lightslides} className="lanl-slide" loading="lazy" ></iframe>
                    </div>
                    
                </section>

            </section>

            
                
        </>
    )
}