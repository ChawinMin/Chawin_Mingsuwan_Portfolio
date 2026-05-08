import { motion } from "framer-motion";

/**
 * Reusable section wrapper for project detail pages.
 *
 * Props:
 *  - title    (string)   Section heading
 *  - children (ReactNode)
 */
const ProjectSection = ({ title, children }) => (
    <motion.section
        className="apl-section pd-section"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
    >
        <div className="apl-container">
            {title && <h2 className="apl-section-title pd-section-title">{title}</h2>}
            {children}
        </div>
    </motion.section>
);

export default ProjectSection;
