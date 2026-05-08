import UFOimg1 from "../../assets/img/UFO/UFOimg1.png";
import UFOimg2 from "../../assets/img/UFO/UFOimg2.png";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';
import VideoEmbed from '../VideoEmbed';

export const UFO = () => {
    return (
        <ProjectDetailLayout
            subtitle="Data Visualization Project"
            title="UFO Sightings Data Visualization"
            heroImage={UFOimg2}
            tags={['Data Visualization', 'Python', 'Pandas', 'Selenium', 'Matplotlib', 'UI/UX Design']}
            metadata={[
                { label: "Type", value: "Personal Project" },
                { label: "Tools", value: "Python, Pandas, Selenium" },
                { label: "Output", value: "Interactive HTML Maps" },
            ]}
            currentPath="/UFO"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    This project involves the <strong>analysis and visualization of UFO sightings</strong> data collected from various sources. The goal is to identify patterns and trends in the sightings, such as geographical distribution, time of occurrence, and common characteristics reported by witnesses. Using tools like <strong>Python, Pandas, Selenium, and Matplotlib,</strong> I created <strong>interactive visualizations</strong> that allow users to explore the data and gain insights into UFO phenomena.
                </p>
            </ProjectSection>

            <ProjectSection title="Key Features">
                <div className="pd-two-col">
                    <p className="pd-text">
                        My team and I worked on a UFO data visualization project, analyzing a dataset of UFO sightings across the United States. I developed a <strong>Python script</strong> that allows users to <strong>input a specific year</strong> and <strong>generates HTML files displaying a map of the U.S. with plotted latitude and longitude coordinates of reported sightings.</strong> This tool provides an interactive way to explore UFO sighting patterns over time, enhancing <strong>data accessibility and visualization for further analysis.</strong>
                    </p>
                    <ImageGallery
                        images={[{ src: UFOimg1, alt: "UFO Sightings Map" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>

            <ProjectSection title="UFO Evolution Over Time">
                <div className="pd-two-col">
                    <VideoEmbed
                        videoUrl="https://youtu.be/6U24Qf8p-fM"
                        title="Animation"
                        caption="Time-lapse animation of UFO sighting data across the United States."
                    />
                    <ImageGallery
                        images={[{ src: UFOimg2, alt: "UFO Sightings Heat Map" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>

            <ProjectSection title="Links">
                <div className="pd-links">
                    <a href="https://github.com/ChawinMin/UFODataVisualization#" className="pd-link" target="_blank" rel="noopener noreferrer">
                        GitHub Repository →
                    </a>
                    <a href="https://ufocgt270.weebly.com/" className="pd-link" target="_blank" rel="noopener noreferrer">
                        More Information →
                    </a>
                </div>
            </ProjectSection>
        </ProjectDetailLayout>
    )
}