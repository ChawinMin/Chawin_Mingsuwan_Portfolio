import { motion } from "framer-motion";

/**
 * Animated feature/bullet list with accent dots.
 *
 * Props:
 *  - items (string[] | {bold:string, text:string}[]) list items
 */
const FeatureList = ({ items = [] }) => (
    <div className="pd-feature-list">
        {items.map((item, i) => {
            const bold = typeof item === "object" ? item.bold : null;
            const text = typeof item === "object" ? item.text : item;
            return (
                <motion.div
                    className="pd-feature-item"
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                    <span className="pd-feature-dot" />
                    <p className="pd-feature-text">
                        {bold && <strong>{bold}</strong>}
                        {bold ? ": " : ""}
                        {text}
                    </p>
                </motion.div>
            );
        })}
    </div>
);

export default FeatureList;
