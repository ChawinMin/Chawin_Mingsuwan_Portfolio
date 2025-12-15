import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import profile from "../assets/img/profile.png";
import { Link } from "react-router-dom";
/*import { useNavigate } from "react-router-dom";*/

export const NavBar = () =>  {
    /*const navigate = useNavigate();*/
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand = "lg" bg = "dark" variant = "dark" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand as={Link} to = "/" className="brand">
                    <img src={profile} alt="Profile" className="brand-img"/>
                    <div className = "brand-text">
                        <span className="brand-name">Chawin Mingsuwan</span>
                        <span className="brand-subtitle">Creative Technologist</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav">
                    <span className = "navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "mx-auto">
                        <Nav.Link as={Link} to = "/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link as={Link} to = "/#featured-start" className={activeLink === 'featured' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('featured')}>Featured</Nav.Link>
                        <Nav.Link as={Link} to = "/AllWork" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>All Work</Nav.Link>
                        <Nav.Link as={Link} to = "/aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                    </Nav>
                    <span className ="navbar-text">
                        {/*<button className = "vvd" onClick={() => navigate('/aboutMe')}><span>Let's Connect</span></button>*/}
                        <button className = "vvd" onClick={() => window.open('https://www.linkedin.com/in/chawinmingsuwan', '_blank')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}