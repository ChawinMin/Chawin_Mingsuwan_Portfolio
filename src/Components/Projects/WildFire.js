import wildfireImg1 from "../../assets/img/wildfire/Final01_img.png";
import wildfireImg2 from "../../assets/img/wildfire/Final02_img.png";
import wildfireImg3 from "../../assets/img/wildfire/Final03_img.png";
import wildfireImg4 from "../../assets/img/wildfire/Final04_img.png";
import wildfireImg5 from "../../assets/img/wildfire/Final05_img.png";
import wildfireImg6 from "../../assets/img/wildfire/Final06_img.png";
import wildfireImg7 from "../../assets/img/wildfire/Final07_img.png";
import wildfireImg8 from "../../assets/img/wildfire/Final08_img.png";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';

export const WildFire = () => {
    return (
        <ProjectDetailLayout
            subtitle="Scientific Visualization"
            title="WildFire Scientific Visualization"
            heroImage={wildfireImg2}
            tags={['ParaView', 'Python', 'Scientific Visualization', '3D Visualization']}
            metadata={[
                { label: "Tool", value: "ParaView" },
                { label: "Dataset", value: "LANL Wildfire" },
                { label: "Focus", value: "Time-based Narrative" },
            ]}
            currentPath="/WildFire"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    This project uses ParaView to explore the LANL wildfire dataset in a clear, time-based narrative. <strong>Fuel density, fire intensity, smoke, and wind vectors</strong> are layered to show how conditions drive the spread, while contour filters isolate critical thresholds and streamlines reveal flow paths. A <strong>programmable filter</strong> supports custom metrics and targeted probes, helping turn raw simulation output into an interpretable story of wildfire behavior.
                </p>
            </ProjectSection>

            <ProjectSection title="Visualization Results">
                <ImageGallery
                    images={[
                        { src: wildfireImg1, alt: "Wildfire Visualization 1" },
                        { src: wildfireImg2, alt: "Wildfire Visualization 2" },
                        { src: wildfireImg3, alt: "Wildfire Visualization 3" },
                        { src: wildfireImg4, alt: "Wildfire Visualization 4" },
                        { src: wildfireImg5, alt: "Wildfire Visualization 5" },
                        { src: wildfireImg6, alt: "Wildfire Visualization 6" },
                        { src: wildfireImg7, alt: "Wildfire Visualization 7" },
                        { src: wildfireImg8, alt: "Wildfire Visualization 8" },
                    ]}
                    columns={2}
                />
            </ProjectSection>
        </ProjectDetailLayout>
    )
}
