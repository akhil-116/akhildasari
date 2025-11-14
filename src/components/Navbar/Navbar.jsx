import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"
import Button from "../Button/Button";

const Navbar = () =>{
    const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        const closeMenu = () => {
            setIsOpen(false);
        };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
        <Link to="/"> Akhil Dasari </Link>
        </div>
        
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
          Home
        </Link>

        <Link
          to="/aboutme"
          className={location.pathname === "/aboutme" ? "active" : ""} onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""} onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""} onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
       <div className="desktop-btn">
            <Button href="/contact" text="Hire Me" type="primary" />
        </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
        </div>

      </div>  
      
      
    </nav>
  );
}

export default Navbar