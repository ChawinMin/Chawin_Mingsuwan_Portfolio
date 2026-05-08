import GatewayConferenceImg1 from "../../assets/img/GatewayImg/ConferenceImg1.jpeg";
import GatewayConferenceImg2 from "../../assets/img/GatewayImg/ConferenceImg2.jpeg";
import GatewayConferenceImg3 from "../../assets/img/GatewayImg/ConferenceImg3.jpeg";
import GatewayColoringImg from "../../assets/img/GatewayImg/GatewayColoring.png";
import GatewayEnvironmentImg from "../../assets/img/GatewayImg/GatewayEnv.png";
import GatewayDockingImg from "../../assets/img/GatewayImg/GatewayDockingCubes.png";
import GatewayPSDImg from "../../assets/img/GatewayImg/PSDGVT.jpg";
import GatewayLogo from "../../assets/img/GatewayImg/GatewayLogo.jpg";
import GatewayPresentation from "../../assets/img/GatewayImg/PosterPresentation.jpg";
import GatewayPoster from "../../assets/img/GatewayImg/TDM BGV Poster.pdf";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';
import FeatureList from '../FeatureList';

export const Gateway = () => {
    return (
        <ProjectDetailLayout
            subtitle="NASA / Barrios Technology"
            title="Gateway Visualization Tool"
            heroImage={GatewayColoringImg}
            tags={['VR', 'Unreal Engine', 'Blueprints', 'C++', 'Data Visualization', 'Human-Computer Interaction', 'UI/UX Design']}
            metadata={[
                { label: "Role", value: "UX & VR Lead" },
                { label: "Organization", value: "NASA / Barrios Technology" },
                { label: "Timeline", value: "Jan 2025 – Dec 2025" },
                { label: "Team", value: "Purdue + Angelo State" },
            ]}
            currentPath="/Gateway"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    At The Data Mine Corporate Partner Program, I am working with <strong>Barrios Technology a NASA JSC contractor</strong> on a <strong>Gateway and Lunar Surface Operations Visualization Tool</strong>. This project focuses on developing data-driven visualizations to support <strong>mission planning</strong> and analysis for lunar exploration. By leveraging data science and visualization techniques, we aim to create tools that enhance <strong>situational awareness</strong> and <strong>decision-making</strong> for future Gateway and lunar surface operations.
                </p>
            </ProjectSection>

            <ProjectSection title="What is Gateway?">
                <div className="pd-two-col">
                    <p className="pd-text">
                        Gateway is a planned <strong>lunar orbiting space station</strong> scheduled for <strong>Artemis IV</strong>. Gateway is central to the NASA-led Artemis missions to return to the Moon for scientific discovery and chart a path for the <strong>first human missions to Mars and beyond</strong>. The lunar-space station will be a multi-purpose outpost supporting <strong>lunar surface missions, science in lunar orbit, and human exploration further into the cosmos</strong>. NASA is working with commercial and international partners to build humanity's Gateway. International partners include <strong>Canadian Space Agency (CSA), European Space Agency (ESA), Japan Aerospace Exploration Agency (JAXA)</strong>, and the <strong>Mohammed Bin Rashid Space Centre (MBRSC)</strong>.
                    </p>
                    <ImageGallery
                        images={[{ src: GatewayLogo, alt: "Gateway Logo" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>

            <ProjectSection title="Project Overview">
                <p className="pd-text">
                    I served as the <strong>UX and VR Lead</strong> for the <strong>Gateway Visualization Tool (GVT)</strong> for over a year, leading a multidisciplinary student team across <strong>Purdue University</strong> and <strong>Angelo State University</strong> (remote) to design and build immersive visualization tools that support <strong>NASA Gateway</strong> and future <strong>lunar surface operations</strong>. The tool provides <strong>interactive, spatial visualizations</strong> of the Gateway's structure, subsystems, and operational configurations, enabling mission planners and engineers to explore spacecraft components in context and better understand complex system relationships. By translating spacecraft concepts into intuitive XR experiences, the platform enhances <strong>situational awareness</strong>, supports <strong>configuration analysis</strong>, and enables <strong>more informed decision-making</strong> for future cislunar missions through immersive interaction and human-centered design.
                </p>
            </ProjectSection>

            <ProjectSection title="Features Implemented">
                <FeatureList items={[
                    { bold: "Led Unreal Engine onboarding and collaborative XR development", text: "for a multidisciplinary team, establishing the technical workflow for NASA." },
                    { bold: "Designed the interactive XR architecture", text: "enabling users to manipulate Gateway modules in real time through Blueprint-driven spatial controls." },
                    { bold: "Implemented modular spacecraft assembly mechanics", text: "allowing translation, rotation, and positioning of Gateway components." },
                    { bold: "Built dynamic solar array and radiator articulation systems", text: "simulating realistic deployment and rotation behaviors for spacecraft visualization." },
                    { bold: "Developed immersive inspection tools", text: "allowing users to explore Gateway structures and components in spatial context." },
                    { bold: "Created an advanced visualization editor mode", text: "with HSV color controls and reflectivity tuning for high-dynamic-range material visualization." },
                    { bold: "Implemented material and lighting adjustment systems", text: "to evaluate reflectivity and surface properties across Gateway modules." },
                    { bold: "Optimized Blueprint interaction systems", text: "to support responsive manipulation and smooth XR interaction workflows." },
                    { bold: "Enabled immersive spacecraft configuration exploration", text: "supporting understanding of Gateway structure and subsystem relationships." },
                ]} />
                <ImageGallery
                    images={[
                        { src: GatewayColoringImg, alt: "Gateway Coloring Mode" },
                        { src: GatewayDockingImg, alt: "Gateway Docking Cubes" },
                        { src: GatewayEnvironmentImg, alt: "Gateway Environment" },
                    ]}
                    columns={3}
                />
            </ProjectSection>

            <ProjectSection title="Data Mine Corporate Partners Symposium">
                <p className="pd-text">
                    I presented the <strong>Gateway Visualization Tool</strong> at the <strong>Data Mine Corporate Partners Symposium in April 2025</strong>. The presentation highlighted the tool's <strong>immersive XR features</strong>, its potential applications for <strong>NASA Gateway and lunar surface operations</strong>, and the collaborative development process with <strong>NASA, Barrios Technology, Purdue, and Angelo State University</strong>. The presentation was well received by industry professionals, NASA representatives, and academic peers, showcasing the tool's innovative approach to supporting <strong>future space exploration missions through human-centered design and immersive visualization.</strong>
                </p>
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: GatewayPresentation, alt: "Symposium Presentation" }]}
                        columns={1}
                    />
                    <iframe title="Gateway Visualization Tool Poster" src={GatewayPoster} className="pd-pdf-embed" loading="lazy" />
                </div>
            </ProjectSection>

            <ProjectSection title="IEEE SMC-IT/SCC 2025">
                <p className="pd-text">
                    I served as <strong>first author</strong> on our paper, <strong>"Foundations of a Visualization Tool for NASA Gateway and Lunar Surface Operations,"</strong> which was accepted for publication at the <strong>IEEE SMC-IT/SCC 2025 conference</strong>. I led the writing, revisions, and submission process, ensuring the work reflected both the technical depth of our VR tool and its broader impact on future mission operations. At the conference, <strong>I presented our findings to various NASA centers</strong>, highlighting how XR and human-centered interaction design can support NASA Gateway planning and lunar surface activities. Additionally, I <strong>participated in an author panel</strong> along with XR experts and NASA employees. The paper will be available on IEEE Xplore (link coming soon).
                </p>
                <ImageGallery
                    images={[
                        { src: GatewayConferenceImg1, alt: "IEEE Conference Presentation" },
                        { src: GatewayConferenceImg2, alt: "IEEE Conference Paper" },
                        { src: GatewayConferenceImg3, alt: "IEEE Conference Attendance" },
                    ]}
                    columns={3}
                />
            </ProjectSection>

            <ProjectSection title="Purdue Space Day 30th Anniversary - The Largest STEM Outreach & GVT">
                <p className="pd-text">
                    Purdue Space Day (PSD) is an <strong>all-day, educational outreach program</strong> held each fall on the West Lafayette campus. It is designed to give approximately <strong>675 students from 3rd to 8th grades</strong> the opportunity to learn about engineering and space exploration through listening to a presentation by a <strong>Purdue alumnus astronaut</strong> and by participating in three unique age-appropriate, hands-on experiences with the intention of <strong>sparking interest in science, technology, engineering and math (STEM) using a space theme</strong>.
                </p>
                <p className="pd-text">
                    For the 2025 Purdue Space Day, the <strong>30th anniversary</strong> of the event, I was the <strong>Director of Activities and Treasurer</strong>. I was in charge of developing the <strong>9 unique STEM activities</strong>, leading <strong>400+ volunteers, 11+ organizations, and managing 600+ students</strong>. This year, I developed a Gateway-themed activity where students built their own Gateway modules using cardboard and other materials. And the <strong>Gateway Visualization Tool</strong> was featured in the activity to let 5th - 6th grade students <strong>spatially and visually understand the Gateway and its components in Lunar orbit</strong>.
                </p>
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: GatewayPSDImg, alt: "Purdue Space Day with Astronaut Roy Bridges" }]}
                        columns={1}
                    />
                    <p className="pd-text">
                        Image of me showing astronaut <strong>Roy Bridges</strong> about the Gateway Visualization Tool during the event. I developed this activity for 5th - 6th graders to develop their own version of <strong>Gateway</strong>, GVT was used to inspire students and help them spatially understand what it would look like in space. This was the <strong>first ever time</strong> the tool was used for outreach, highlighting its potential impact on future STEM outreach. The tool was well received by students, faculty, and volunteers, and it provided a unique opportunity to inspire the next generation of space explorers by giving them a hands-on experience with NASA's Gateway mission.
                    </p>
                </div>
            </ProjectSection>
        </ProjectDetailLayout>
    )
}