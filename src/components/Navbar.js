import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ["home", "story", "values", "products"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const menuItems = [
    { id: "home", label: "Accueil" },
    { id: "story", label: "Notre Histoire" },
    { id: "values", label: "Nos Valeurs" },
    { id: "products", label: "Collections" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="#home" className="logo">
              NaturaLuxe
            </a>
          </div>

          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.id);
                }}
              >
                {item.label}
                <span className="link-underline"></span>
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <button className="icon-button">
              <i className="fas fa-search"></i>
            </button>
            <button
              className={`menu-toggle ${isOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`navbar-backdrop ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />
    </>
  );
};

export default Navbar;
