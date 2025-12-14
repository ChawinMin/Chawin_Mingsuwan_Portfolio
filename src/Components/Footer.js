import linkedinIcon from "../assets/img/linkedinIcon.png";

export const Footer = () => {
    return (
        
        <footer className="footer">

            <p className = "footer-text">© 2025 Chawin Mingsuwan. All rights reserved.</p>

            <div className = "footer-right">
                <a href = "https://www.linkedin.com/in/chawinmingsuwan"
                target="_blank"
                rel="noreferrer"
                className="linkedin-icon"
                > 
                    <img src = {linkedinIcon} alt ="Linkedin" className = "linkedin-img"/>
                </a>
            </div>
            
        </footer>
    )
}  