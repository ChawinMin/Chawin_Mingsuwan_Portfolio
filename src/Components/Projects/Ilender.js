import ilenderImg1 from "../../assets/img/Ilender/IlenderImg1.png";
import ilenderImg2 from "../../assets/img/Ilender/IlenderImg2.png";
import ProjectDetailLayout from '../ProjectDetailLayout';
import ProjectSection from '../ProjectSection';
import ImageGallery from '../ImageGallery';

export const Ilender = () => {
    return (
        <ProjectDetailLayout
            subtitle="Ilender"
            title="Software Engineering Intern"
            heroImage={ilenderImg1}
            tags={['Python', 'Data Processing', 'Software Engineering', 'ML', 'ARIMA', 'Data Visualization']}
            metadata={[
                { label: "Role", value: "Software Engineering Intern" },
                { label: "Organization", value: "Ilender" },
                { label: "Timeline", value: "May 2024 – Jul 2024" },
                { label: "Focus", value: "Data Pipelines & ML" },
            ]}
            currentPath="/Ilender"
        >
            <ProjectSection title="Overview">
                <p className="pd-text">
                    During my <strong>software engineering internship</strong> at iLender, a pharmaceutical company, I contributed to the development of their lending platform. My role involved collaborating with the development team to enhance the <strong>data pipelines</strong> and <strong>machine learning.</strong>
                </p>
            </ProjectSection>

            <ProjectSection title="What is Ilender?">
                <p className="pd-text">
                    Ilender is a Peruvian pharmaceutical company founded in 1989 that specializes in the development, production, and distribution of veterinary medicinal products and solutions for animal health and nutrition. The company operates across <strong>multiple countries</strong> in Latin America, including <strong>Bolivia, Brazil, Chile, and Colombia,</strong> and has expanded into markets like Mexico, Central America, and China. With a focus on biosafety and high-quality standards, Ilender has positioned itself as a leader in the poultry and livestock industries, offering a wide range of veterinary products aimed at improving animal health and nutrition.
                </p>
            </ProjectSection>

            <ProjectSection title="My Contributions">
                <div className="pd-two-col">
                    <ImageGallery
                        images={[{ src: ilenderImg1, alt: "Ilender Dashboard" }]}
                        columns={1}
                    />
                    <p className="pd-text">
                        At Ilender, I worked as a <strong>Software Engineering Intern</strong>, where I focused on <strong>data visualization</strong> and <strong>automating various aspects of data analysis.</strong> My main project involved developing an <strong>ARIMA model</strong> to <strong>predict the purchasing trends of different countries</strong>, helping the company anticipate whether certain markets would continue buying or cease their purchases. I also assisted with visualizing these trends and automating the process to make the data more accessible and actionable for the team, which supported their <strong>strategic decision-making</strong> and <strong>client engagement</strong>.
                    </p>
                </div>
                <ImageGallery
                    images={[{ src: ilenderImg2, alt: "iLender Platform" }]}
                    columns={1}
                />
            </ProjectSection>
        </ProjectDetailLayout>
    )
}