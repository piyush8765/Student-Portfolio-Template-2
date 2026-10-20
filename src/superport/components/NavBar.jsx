import React from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaEnvelope,
  FaMoon,
  FaSun
} from "react-icons/fa";
import "./Navbar.css";

const NavBar = ({ portfolioName, isDark, setIsDark, active, setActive }) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <>
      {/* ===== TOP HEADER (DESKTOP) ===== */}
      <header className={`top-header ${isDark ? "dark-ui" : "light-ui"}`}>
        <div className="logo" onClick={() => scrollToSection("home")}>
          {portfolioName}
        </div>

        <nav className="desktop-nav">
          <NavItem text="Home" active={active === "home"} onClick={() => scrollToSection("home")} />
          <NavItem text="About" active={active === "about"} onClick={() => scrollToSection("about")} />
          <NavItem text="Projects" active={active === "projects"} onClick={() => scrollToSection("projects")} />
          <NavItem text="Skills" active={active === "skills"} onClick={() => scrollToSection("skills")} />
           <NavItem text="Experience" active={active === "experience"} onClick={() => scrollToSection("experience")} />  
          <NavItem text="Contact" active={active === "contact"} onClick={() => scrollToSection("contact")} />
{/* 
          <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button> */}
        </nav>
      </header>

      {/* ===== MOBILE BOTTOM NAV ===== */}
      <div className={`mobile-bottom-nav ${isDark ? "dark-ui" : "light-ui"}`}>
        <MobileBtn icon={<FaHome />} active={active === "home"} onClick={() => scrollToSection("home")} />
        <MobileBtn icon={<FaUser />} active={active === "about"} onClick={() => scrollToSection("about")} />
        <MobileBtn icon={<FaProjectDiagram />} active={active === "projects"} onClick={() => scrollToSection("projects")} />
        <MobileBtn icon={<FaTools />} active={active === "skills"} onClick={() => scrollToSection("skills")} />
        <MobileBtn icon={<FaEnvelope />} active={active === "contact"} onClick={() => scrollToSection("contact")} />

        {/* <MobileBtn
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={() => setIsDark(!isDark)}
        /> */}
      </div>
    </>
  );
};

/* ===== SMALL COMPONENTS ===== */

const NavItem = ({ text, onClick, active }) => (
  <button className={`nav-text-btn ${active ? "active" : ""}`} onClick={onClick}>
    {text}
  </button>
);

const MobileBtn = ({ icon, onClick, active }) => (
  <div className={`mobile-btn ${active ? "active" : ""}`} onClick={onClick}>
    {icon}
  </div>
);

export default NavBar;
