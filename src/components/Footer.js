import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "fa-instagram",
      url: "https://www.instagram.com/nat.uraluxe1?igsh=YXdrNnJrdTVhMXV2&utm_source=qr",
    },

    {
      name: "TikTok",
      icon: "fa-tiktok",
      url: "https://www.tiktok.com/@naturaluxe110?_t=ZM-8svknZAy9ob&_r=1",
    },
    {
      name: "WhatsApp",
      icon: "fa-whatsapp",
      url: "https://wa.me/qr/XELRT2RX5PDFA1",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">NaturaLuxe</h3>
            <p className="footer-tagline">Le parfum, une seconde peau</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Navigation</h4>
              <a href="#home">Accueil</a>
              <a href="#story">Notre Histoire</a>
              <a href="#values">Nos Valeurs</a>
              <a href="#products">Collections</a>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: naturaluxe168@gmail.com</p>
              <p>Tél: +212 6 13 12 90 06</p>
              <p>Maroc</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} NaturaLuxe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
