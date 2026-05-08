import TDEimg1 from "../../assets/img/TDE/TDE_Cover_Photos.png";
import TDEimg2 from "../../assets/img/TDE/Light_Curve_1.png";
import TDEimg3 from "../../assets/img/TDE/Light_Curve_2.png";
import TDEimg4 from "../../assets/img/TDE/TDEinder_UI.png";
import TDEimg5 from "../../assets/img/TDE/TDEResearchGroupPhoto.png";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';
import FeatureList from '../FeatureList';

export const TDE = () => {
    return (
        <ProjectDetailLayout
            subtitle="Astrophysics Computational Research"
            title="Search for Tidal Disruption Events in ZTF Data"
            heroImage={TDEimg1}
            tags={['Data Visualization', 'Python', 'Pandas', 'FastAPI', 'UI/UX Design', 'Physics', 'ML']}
            metadata={[
                { label: "Role", value: "Researcher & Developer" },
                { label: "Organization", value: "Purdue Astrophysics" },
                { label: "Timeline", value: "Aug 2025 – Present" },
                { label: "Mentor", value: "Prof. Danny Milisavljevic" },
            ]}
            currentPath="/TDE"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    This project focuses on identifying and analyzing <strong>Tidal Disruption Events (TDEs)</strong> using data from the Zwicky Transient Facility (ZTF). By employing <strong>machine learning techniques and statistical analysis</strong>, we aim to detect <strong>TDE signatures</strong> and contribute to our understanding of <strong>black hole physics and stellar dynamics.</strong>
                </p>
            </ProjectSection>

            <ProjectSection title="What Are TDEs?">
                <div className="pd-two-col">
                    <p className="pd-text">
                        Tidal Disruption Events occur when a star ventures too close to a <strong>supermassive black hole</strong> and is torn apart by the <strong>black hole's immense gravitational forces</strong>. The resulting accretion of stellar debris onto the black hole produces a luminous flare that can be observed across multiple wavelengths, providing valuable insights into black hole properties and the dynamics of stellar interactions in galactic centers. TDEs typically follow a <strong>t<sup>-5/3</sup></strong> decay in brightness over time, making their identification in transient surveys like ZTF crucial for advancing our understanding of these rare and energetic phenomena.
                    </p>
                    <ImageGallery
                        images={[{ src: TDEimg1, alt: "TDE Illustration" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>

            <ProjectSection title="Project Highlights">
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: TDEimg4, alt: "TDEinder Application Screenshot" }]}
                        columns={1}
                    />
                    <div>
                        <p className="pd-text">
                            In addition to the backend filtering pipeline, I designed and implemented an interactive visualization interface using <strong>React</strong> to support rapid inspection and decision-making across hundreds of candidate transients, with a <strong>Python-based backend</strong> handling <strong>data ingestion, filtering, machine learning scoring, and API queries that connect directly to the frontend.</strong> The UI emphasizes a clear visual <strong>hierarchy—highlighting light-curve shape, peak luminosity, decay behavior, and filter pass/fail status—to reduce cognitive load during manual review.</strong>
                        </p>
                    </div>
                </div>

                <FeatureList items={[
                    { bold: "Data Filtering & Pipeline Design", text: "Designed and implemented a multi-stage filtering pipeline to identify TDE-like transients from ZTF data, applying constraints on data-point count, peak luminosity, observation window (MJD), light-curve quality, and host-galaxy center offset." },
                    { bold: "Datapoint-Level Filtering", text: "Built custom datapoint filters to remove noisy, sparse, and non-physical measurements prior to model evaluation, ensuring robust light-curve fitting and reducing false positives." },
                    { bold: "High-Throughput Data Ingestion", text: "Implemented multithreaded API querying to efficiently retrieve photometry, metadata, and classifications from ALeRCE and ANTARES brokers, enabling large-scale candidate screening and faster iteration." },
                    { bold: "Machine Learning & Anomaly Detection", text: "Trained and deployed an anomaly-detection model using Scikit-learn and TensorFlow, trained on ~2,500 non-TDE transients to score candidates based on deviation from typical transient behavior." },
                    { bold: "Astrophysical Validation", text: "Integrated host-galaxy classification and galactic-center offset calculations using the DELIGHT framework, and cross-matched events via ALeRCE catsHTM to obtain redshifts and compute peak luminosities using the distance modulus relation." },
                    { bold: "Visualization & Analysis", text: "Generated diagnostic light-curve visualizations, including best-fit decay models (t⁻⁵ᐟ³), to validate filter performance and prioritize high-confidence candidates for manual review." },
                ]} />
            </ProjectSection>

            <ProjectSection title="Possible Candidates">
                <ImageGallery
                    images={[
                        { src: TDEimg2, alt: "Light Curve Candidate 1" },
                        { src: TDEimg3, alt: "Light Curve Candidate 2" },
                    ]}
                    columns={2}
                />
                <p className="pd-text">
                    These transients represent our most promising <strong>TDE-like candidates</strong> identified by the filtering pipeline. In both cases, the observed light curves exhibit a rapid rise followed by a smooth, monotonic decline that closely follows the expected <em>t⁻⁵ᐟ³</em> fallback decay associated with tidal disruption events. The strong agreement between the observed data and the theoretical decay model, reflected by high R² values, indicates that the filters are successfully isolating physically meaningful TDE-like behavior from the broader ZTF transient population.
                </p>
                <p className="pd-text">
                    Although none of the candidates were ultimately confirmed as classified TDEs after cross-matching with external catalogs, the presence of these characteristic decay signatures demonstrates that the pipeline is detecting the correct physical signals rather than noise. One of the strongest candidates was later identified as a variable star, highlighting a known challenge in time-domain astronomy where variable sources can mimic TDE-like light curves.
                </p>
                <p className="pd-text">
                    To address this limitation, a <strong>variable star filtering stage</strong> has been implemented for future iterations of the project. This filter is designed to suppress periodic and quasi-periodic sources, significantly reducing false positives while preserving genuine transient behavior. With this addition, the results confirm that the filtering framework is sound and capable of identifying real TDEs as additional refinements and larger datasets are incorporated.
                </p>
            </ProjectSection>

            <ProjectSection title="Undergraduate Research Symposium Fall 2025">
                <div className="pd-two-col">
                    <p className="pd-text">
                        I presented this research at Purdue University's Undergraduate Research Symposium in Fall 2025. This research was mentored by <strong>Professor Danny Milisavljevic</strong> and our Graduate TA was <strong>Noah Zimmer.</strong> This Symposium provided an opportunity to share my findings with the Purdue community, receive feedback, and discuss potential future directions for the project. My fellow team members include: <strong>Medhansh Garg, Francisco Ruiz, Jason Emsley, and Jay Gannam.</strong>
                    </p>
                    <ImageGallery
                        images={[{ src: TDEimg5, alt: "TDE Research Group" }]}
                        columns={1}
                    />
                </div>
            </ProjectSection>
        </ProjectDetailLayout>
    )
}