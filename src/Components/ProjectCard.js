export default function ProjectCard({
    miniTitle,
        badge,
        title,
        description,
        tags = [],
        img,
        link = "#", 
        projectFileName = "View Project"}
        ) 
    {

    return (
        <article className = "project-card"> 
            <div className = "project-left">
                <div className = "project-top">
                    <span className = "project-mini">{miniTitle}</span>
                    {badge && <span className = "project-badge">{badge}</span>}
                </div>

                <h3 className = "project-title">{title}</h3>
                <p className = "project-description">{description}</p>
                <div className = "project-tags">
                    {tags.map((t) => (
                        <span className = "tag-pill" key={t}>
                            {t}
                        </span>
                    ))}
                </div>

                <a className="project-link" href={link}>
                    View Project <span className="arrow">→</span>
                </a>
            </div>

            <div className = "project-right">
                <img className="project-img" src={img} alt={title}/>
            </div>
        </article>
    )
}
