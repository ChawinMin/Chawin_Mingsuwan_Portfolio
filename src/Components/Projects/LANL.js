import LANLimg1 from "../../assets/img/LANL/LANL_1.png";
import LANLimg2 from "../../assets/img/LANL/LANL_2.png";
import LANLimg3 from "../../assets/img/LANL/LANL_3.png";
import LANLXRposter from "../../assets/img/LANL/XR_Poster.png";
import lightslides from "../../assets/img/LANL/Mingsuwan_HPC_XR_Light_Talk_Slides.pdf";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';
import FeatureList from '../FeatureList';

export const LANL = () => {
    return (
        <ProjectDetailLayout
            subtitle="Los Alamos National Laboratory"
            title="Extended Reality (XR) High-Performance Computing (HPC) Intern"
            heroImage={LANLimg3}
            tags={['VR', 'Apple Vision Pro', 'Unreal Engine', 'Blueprints', 'C++', 'Human-Computer Interaction', 'UI/UX Design']}
            metadata={[
                { label: "Role", value: "XR & HPC Intern" },
                { label: "Organization", value: "Los Alamos National Lab" },
                { label: "Timeline", value: "Jun 2024 – Aug 2024" },
                { label: "Team", value: "HPC/ISTI Innovation Hub" },
            ]}
            currentPath="/LANL"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    At LANL, I advanced <strong>extended reality (XR)</strong> applications for <strong>scientific visualization</strong> within the HPC/ISTI Innovation Hub. My work focused on <strong>bridging high-performance simulation data with immersive environments and developing an user-interface</strong> to support scientists and engineers.
                </p>
            </ProjectSection>

            <ProjectSection title="Features Implemented">
                <FeatureList items={[
                    { bold: "Developed XR prototypes in Unreal Engine 5.6 for Apple Vision Pro", text: "enabling scientists to interact with CAD models and large-scale simulation datasets." },
                    { bold: "Integrated ParaView-exported point clouds and HPC data", text: "into immersive environments, creating intuitive tools for scientific exploration and analysis." },
                    { bold: "Built hand-gesture interaction systems", text: "(pinch detection, scaling, rotation, and UI widgets) for natural, controller-free user control." },
                    { bold: "Automated packaging and deployment workflows", text: "using Python and Xcode, including device builds and xcrun device." },
                    { bold: "Presented research at the LANL Student Symposium", text: "through a poster and lightning talk titled \"Reimagining Reality for Scientists & Engineers.\"" },
                ]} />
                <ImageGallery
                    images={[
                        { src: LANLimg1, alt: "LANL XR Project Screenshot 1" },
                        { src: LANLimg2, alt: "LANL XR Project Screenshot 2" },
                        { src: LANLimg3, alt: "LANL XR Project Screenshot 3" },
                    ]}
                    columns={3}
                />
            </ProjectSection>

            <ProjectSection title="LANL Student Symposium 2024">
                <p className="pd-text">
                    I presented my research at the LANL Student Symposium 2024 through a poster <em>"Reimagining Reality for Scientists & Engineers."</em> and lightning talk titled <em>"What is Reality?"</em>. The poster highlighted the potential of XR technologies to transform scientific visualization and data interaction within high-performance computing contexts.
                </p>
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: LANLXRposter, alt: "LANL Student Symposium Poster" }]}
                        columns={1}
                    />
                    <iframe title="LANL Lightning Talk Slides" src={lightslides} className="pd-pdf-embed" loading="lazy" />
                </div>
            </ProjectSection>
        </ProjectDetailLayout>
    )
}