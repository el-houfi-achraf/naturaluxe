import React from "react";
import "../styles/Story.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Story = () => {
  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [imageRef, isImageVisible] = useIntersectionObserver();

  return (
    <section id="story" className="story">
      <div className="story-container">
        <div
          ref={contentRef}
          className={`story-content fade-in-left ${
            isContentVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-subtitle">Notre Histoire</span>
          <h2 className="section-title">
            L'Art de la Parfumerie <br />
            depuis des Générations
          </h2>
          <p className="story-text">
            Fondée par un passionné de parfumerie, NaturaLuxe est née de
            l'ambition de créer des parfums qui capturent l'essence du luxe et
            de la nature. Chaque création est inspirée de voyages à travers le
            monde, explorant des ingrédients rares et précieux.
          </p>
          <div className="story-highlights">
            <div className="highlight">
              <span className="highlight-number">25+</span>
              <span className="highlight-text">Années d'Excellence</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">1K+</span>
              <span className="highlight-text">Clients Satisfaits</span>
            </div>
            <div className="highlight">
              <span className="highlight-number">50+</span>
              <span className="highlight-text">Parfums Uniques</span>
            </div>
          </div>
        </div>
        <div
          ref={imageRef}
          className={`story-visuals fade-in-right ${
            isImageVisible ? "is-visible" : ""
          }`}
        >
          <div className="story-image main-image">
            <img src="/images/n.jpg" alt="Notre atelier de parfumerie" />
          </div>
          <div className="story-image secondary-image">
            <img src="/images/n.jpg" alt="Ingrédients précieux" />
          </div>
          <div className="experience-badge">
            <span>25</span>
            <small>ans d'expérience</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
