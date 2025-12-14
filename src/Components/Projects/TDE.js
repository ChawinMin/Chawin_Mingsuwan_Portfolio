import TDEimg1 from "../../assets/img/TDE/TDE_Cover_Photos.png";
import TDEimg2 from "../../assets/img/TDE/Light_Curve_1.png";
import TDEimg3 from "../../assets/img/TDE/Light_Curve_2.png";
import TDEimg4 from "../../assets/img/TDE/TDEinder_UI.png";  

export const TDE = () => {
    return (
        <>
            <section className = "default" id="tde-hero">
                <p className="section-subtitle">Astrophysics Cohort</p>
                <h1 className="section-title">Search for Tidal Disruption Events (TDEs)</h1>
                <p className="project-overview">
                    This project focuses on identifying and analyzing <strong>Tidal Disruption Events (TDEs)</strong> 
                    using data from the Zwicky Transient Facility (ZTF). 
                    By employing <strong>machine learning techniques and statistical analysis</strong>, 
                    we aim to detect <strong>TDE signatures</strong> and contribute to our understanding of 
                    <strong>black hole physics and stellar dynamics.</strong>
                </p>
                <section className = "project-details">

                    <div className = "Title-on-top-of-texture">
                        <h2 className = 'skills-title'>What Are TDEs?</h2>

                        <p className = 'project-overview'>
                        Tidal Disruption Events occur when a star ventures too close to a supermassive black hole and is torn apart by the black hole's immense gravitational forces. 
                        The resulting accretion of stellar debris onto the black hole produces a luminous flare that can be observed across multiple wavelengths, 
                        providing valuable insights into black hole properties and the dynamics of stellar interactions in galactic centers. TDEs typically follow a <strong>t<sup>-5/3</sup></strong> decay in brightness over time, 
                        making their identification in transient surveys like ZTF crucial for advancing our understanding of these rare and energetic phenomena.
                        </p>

                    </div>
                    
                    <img src= {TDEimg1} alt="TDE Illustration" className="lanl-image"/>

                </section>

                <h2 className = 'skills-title'>Project Highlights</h2>

                <section className="project-details">
                    <img src = {TDEimg4} alt="TDEinder Application Screenshot" className="lanl-image"/>
                    <div className = "Paragraphs-on-top-of-bulletpoints">
                        <p className = 'project-overview'>
                            In addition to the backend filtering pipeline, I designed and implemented an interactive
                            visualization interface using <strong>React</strong> to support rapid inspection and
                            decision-making across hundreds of candidate transients, with a{" "}
                            <strong>Python-based backend</strong> handling data ingestion, filtering, machine learning
                            scoring, and API queries that connect directly to the frontend. The UI emphasizes a clear
                            visual hierarchy—highlighting light-curve shape, peak luminosity, decay behavior, and filter
                            pass/fail status—to reduce cognitive load during manual review. By combining machine learning
                            scores with interpretable visual diagnostics, the interface bridges automated classification
                            and human judgment, enabling researchers to quickly identify promising TDE candidates while
                            understanding why a source passed or failed specific filters. This human-centered design
                            approach was critical for validating model outputs, diagnosing false positives (e.g., variable
                            stars), and guiding future improvements to the filtering strategy.
                        </p>
                        
                        <h3 className = 'sub-skills-title'>Key Contributions:</h3>

                        <ul>
                            <li><strong>Data Filtering & Pipeline Design:</strong> Designed and implemented a multi-stage filtering pipeline to identify TDE-like transients from ZTF data, applying constraints on data-point count, peak luminosity, observation window (MJD), light-curve quality, and host-galaxy center offset.</li>
                            <li><strong>Datapoint-Level Filtering:</strong> Built custom datapoint filters to remove noisy, sparse, and non-physical measurements prior to model evaluation, ensuring robust light-curve fitting and reducing false positives.</li>
                            <li><strong>High-Throughput Data Ingestion:</strong> Implemented multithreaded API querying to efficiently retrieve photometry, metadata, and classifications from ALeRCE and ANTARES brokers, enabling large-scale candidate screening and faster iteration.</li>
                            <li><strong>Machine Learning & Anomaly Detection:</strong> Trained and deployed an anomaly-detection model using Scikit-learn and TensorFlow, trained on ~2,500 non-TDE transients to score candidates based on deviation from typical transient behavior.</li>
                            <li><strong>Astrophysical Validation:</strong> Integrated host-galaxy classification and galactic-center offset calculations using the DELIGHT framework, and cross-matched events via ALeRCE catsHTM to obtain redshifts and compute peak luminosities using the distance modulus relation.</li>
                            <li><strong>Visualization & Analysis:</strong> Generated diagnostic light-curve visualizations, including best-fit decay models (t⁻⁵ᐟ³), to validate filter performance and prioritize high-confidence candidates for manual review.</li>
                        </ul>
                    </div>
                </section>

                <h2 className = 'Candidates-title'>Possible Candidates</h2>

                <div className='tde-images'>
                    <img src={TDEimg2} alt="Light-Curve-1" className="tde-image"/>
                    <img src={TDEimg3} alt="Light-Curve-2" className="tde-image"/> 
                </div>

                <p className = 'project-overview'>
                    These transients represent our most promising <strong>TDE-like candidates</strong> identified
                    by the filtering pipeline. In both cases, the observed light curves exhibit a rapid rise
                    followed by a smooth, monotonic decline that closely follows the expected{" "}
                    <em>t⁻⁵ᐟ³</em> fallback decay associated with tidal disruption events. The strong agreement
                    between the observed data and the theoretical decay model, reflected by high R² values,
                    indicates that the filters are successfully isolating physically meaningful TDE-like
                    behavior from the broader ZTF transient population.
                </p>

                <p className = 'project-overview'>
                    Although none of the candidates were ultimately confirmed as classified TDEs after
                    cross-matching with external catalogs, the presence of these characteristic decay
                    signatures demonstrates that the pipeline is detecting the correct physical signals rather
                    than noise. One of the strongest candidates was later identified as a variable star,
                    highlighting a known challenge in time-domain astronomy where variable sources can mimic
                    TDE-like light curves.
                </p>

                <p className = 'project-overview'>
                    To address this limitation, a <strong>variable star filtering stage</strong> has been
                    implemented for future iterations of the project. This filter is designed to suppress
                    periodic and quasi-periodic sources, significantly reducing false positives while
                    preserving genuine transient behavior. With this addition, the results confirm that the
                    filtering framework is sound and capable of identifying real TDEs as additional refinements
                    and larger datasets are incorporated.
                </p>

            </section>
        </>
    )
}