import wildfireImg1 from "../../assets/img/wildfire/Final01_img.png";
import wildfireImg2 from "../../assets/img/wildfire/Final02_img.png";
import wildfireImg3 from "../../assets/img/wildfire/Final03_img.png";
import wildfireImg4 from "../../assets/img/wildfire/Final04_img.png";
import wildfireImg5 from "../../assets/img/wildfire/Final05_img.png";
import wildfireImg6 from "../../assets/img/wildfire/Final06_img.png";
import wildfireImg7 from "../../assets/img/wildfire/Final07_img.png";
import wildfireImg8 from "../../assets/img/wildfire/Final08_img.png";

export const WildFire = () => {
    return (
        <>
            <section className = "default" id= "wildfire-page">
            
            <p className="section-subtitle">Scientific Visualization</p>
            <h1 className="section-title">WildFire Scientific Visualization</h1>

            <p className="project-overview">
                This project uses ParaView to explore 
                the LANL wildfire dataset in a clear, 
                time-based narrative. <strong>Fuel density, 
                fire intensity, smoke, and wind 
                vectors</strong> are layered to show how 
                conditions drive the spread, while 
                contour filters isolate critical 
                thresholds and streamlines reveal 
                flow paths. A <strong>programmable filter </strong>  
                supports custom metrics and targeted 
                probes, helping turn raw simulation 
                output into an interpretable story 
                of wildfire behavior.
            </p>

            <section className = "wildfire-project" id="wildfire-project">
                <div className = "wildfire-image-stack">
                    <img src={wildfireImg1} alt="Wildfire Visualization Screenshot" className="project-image"/>
                    <img src={wildfireImg2} alt="Wildfire Visualization Screenshot" className="project-image"/>
                    <img src={wildfireImg3} alt="Wildfire Visualization Screenshot" className="project-image"/>
                    <img src={wildfireImg4} alt="Wildfire Visualization Screenshot" className="project-image"/>
                </div>
                <div className = "wildfire-image-stack">
                    <img src={wildfireImg5} alt="Wildfire Visualization Screenshot" className="project-image"/>
                    <img src={wildfireImg6} alt="Wildfire Visualization Screenshot" className="project-image"/>
                    <img src={wildfireImg7} alt="Wildfire Visualization Screenshot" className="project-image"/>
                    <img src={wildfireImg8} alt="Wildfire Visualization Screenshot" className="project-image"/>
                </div>
            </section>

            </section>
        </>
    )
}

