import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({
    miniTitle,
    badge,
    title,
    description,
    tags = [],
    img,
    link = "#",
    index = 0
}) {
    const cardRef = useRef(null);

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            ref={cardRef}
            className="project-card"
        >
            <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="project-right">
                    <img
                        className="project-img"
                        src={img}
                        alt={title}
                    />
                </div>

                <div className="project-left">
                    <div className="project-top">
                        {badge && <span className="project-badge">{badge}</span>}
                        {miniTitle && <span className="project-mini">{miniTitle}</span>}
                    </div>

                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>

                    <div className="project-tags">
                        {tags.map((t) => (
                            <span className="tag-pill" key={t}>{t}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.article>
    )
}
