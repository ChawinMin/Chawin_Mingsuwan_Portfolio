import { useState, useRef, useEffect } from "react";

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
    
    //Reference to THIS project card DOM element
    const cardRef = useRef(null);
    const imageRef = useRef(null);

    //Control the hover state for the card and the image
    const [isHoveredCard, setIsHoveredCard] = useState(false);  
    const [isHoveredImage, setIsHoveredImage] = useState(false);
    
    //Scrolling Animation
    const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) entry.target.classList.add('show');
        else entry.target.classList.remove('show');
    });
    }, 
    {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
    })
    const projectCardElements = document.querySelectorAll(".project-card");
    projectCardElements.forEach(el => observer.observe(el));

    requestAnimationFrame( () => {
        const firstCard = document.querySelector(".project-card");
        if (firstCard) firstCard.classList.add('show');
    });

    useEffect(() => {
        //Store last known mouse position
        let lastX = 0;
        let lastY = 0;

        //Preent excessive work during fast scrolling
        let raf = null;

        //Run whenever the mouse moves
        const onMouseMove = (e) => {
            lastX = e.clientX;
            lastY = e.clientY;
        };

        //Check what element is under the cursor
        const updateHoverFromPoint = () => {
            const el = document.elementFromPoint(lastX, lastY);
            const card = el?.closest?.(".project-card");
            const image = el?.closest?.(".project-img");

            //Is this card the onder under the cursor
            const isThisCard = !!card && cardRef.current && card === cardRef.current;
            setIsHoveredCard(isThisCard);

            const isThisImage = !!image && imageRef.current && image === imageRef.current;
            setIsHoveredImage(isThisImage);
        };

        //Runs when scrolling happens
        const onScroll = () => {

            //Prevnets multiple updates per frame
            if(raf) return;
            raf = requestAnimationFrame(() => {
                raf = null;
                updateHoverFromPoint();
            });
        };

        //Listen for mouse movement
        window.addEventListener("mousemove", onMouseMove, {passive: true});

        //Listen for scrolling
        window.addEventListener("scroll", onScroll,{passive: true});

        //Check if cursor is over a card
        updateHoverFromPoint();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("scroll", onScroll);
            if(raf) cancelAnimationFrame(raf);
        };
    }, []);
    
    return (
        <article 
            ref = {cardRef}
            className={`project-card ${isHoveredCard ? "is-hovered" : ""}`}
            onPointerEnter={() => setIsHoveredCard(true)}
            onPointerLeave={() => {setIsHoveredCard(false); setIsHoveredImage(false);}}
        >
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
                    {projectFileName} <span className="arrow">→</span>
                </a>
            </div>

            <div className = "project-right">
                <img
                ref = {imageRef} 
                className= {`project-img ${isHoveredImage ? "is-hovered" : ""}`} 
                src={img} 
                alt={title}/>
            </div>
        </article>
    )
}
