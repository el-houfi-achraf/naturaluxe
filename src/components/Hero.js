import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-subtitle">NaturaLuxe</span>
        <h1 className="hero-title">
          Le parfum, <br />
          une seconde peau
        </h1>
        <p className="hero-text">
          Des créations olfactives uniques qui éveillent les sens et subliment
          la personnalité de chacun. Découvrez l'alliance parfaite entre luxe et
          nature.
        </p>
        <div className="hero-cta">
          <button className="button-secondary">Notre histoire</button>
        </div>
        <div className="hero-features">
          <div className="feature">
            <i className="fas fa-leaf"></i>
            <span>100% Naturel</span>
          </div>
          <div className="feature">
            <i className="fas fa-award"></i>
            <span>Haute Qualité</span>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <span>Fait main</span>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div
          className="hero-image"
          style={{ backgroundImage: `url('/images/b.jpg')` }}
        ></div>
        <div className="hero-overlay"></div>
      </div>
    </section>
  );
};

export default Hero;
