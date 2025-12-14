import YouTube from "react-youtube"
import UFOimg1 from "../../assets/img/UFO/UFOimg1.png"
import UFOimg2 from "../../assets/img/UFO/UFOimg2.png"

export const UFO = () => {
    const youtubeUFOVideo = "https://youtu.be/6U24Qf8p-fM";
    return (
        <>
            <section className = "default" id="ufo-hero">
                <p className="section-subtitle">Data Visualization Project</p>
                <h1 className="section-title">UFO Sightings Data Visualization</h1>
                <p className="project-overview">
                    This project involves the analysis and visualization of 
                    UFO sightings data collected from various sources. The goal 
                    is to identify patterns and trends in the sightings, such as 
                    geographical distribution, time of occurrence, and 
                    common characteristics reported by witnesses. Using tools like 
                    Python, Pandas, and Matplotlib, I created interactive 
                    visualizations that allow users to explore the data and 
                    gain insights into UFO phenomena.
                </p>

                <h3 className = 'skills-title'>Key Features</h3>
                <section className = "project-details">
                    <p className = "project-overview">
                        My team and I worked on a UFO data visualization project, analyzing a dataset 
                        of UFO sightings across the United States. I developed a <strong>Python script</strong> that 
                        allows users to <strong>input a specific year</strong> and <strong>generates HTML files displaying a 
                        map of the U.S. with plotted latitude and longitude coordinates of reported 
                        sightings.</strong> This tool provides an interactive way to explore UFO sighting 
                        patterns over time, enhancing <strong>data accessibility and visualization for 
                        further analysis.</strong>
                    </p>
                    <img src= {UFOimg1} alt="UFO Sightings Visualization Screenshot" className="UFO-image"/>
                </section>

                <h2 className = 'skills-title'>UFO Evolution Over Time (Added animation)</h2>
                <section className = 'animation-video'>
                    
                    <div className = "media-box">
                        <YouTube videoId={youtubeUFOVideo.split('youtu.be/')[1]} className="youtube-video" />
                    </div>

                    <div className = "media-box">
                        <img src= {UFOimg2} alt="UFO Sightings Visualization Screenshot" className="map-image"/>
                    </div>
                
                </section>

                <a href='https://github.com/ChawinMin/UFODataVisualization#' className = 'UFO-links'>Github</a>
                <a href='https://ufocgt270.weebly.com/' className = 'UFO-links'>More Information</a>

            </section>
        </>
    )
}