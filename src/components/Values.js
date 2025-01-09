import React from "react";
import "../styles/Values.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Values = () => {
  const values = [
    {
      id: 1,
      icon: "gem",
      title: "Artisanat",
      description:
        "Chaque parfum est soigneusement conçu par nos maîtres parfumeurs, alliant tradition et innovation.",
    },
    {
      id: 2,
      icon: "leaf",
      title: "Écoresponsabilité",
      description:
        "Nous nous engageons à utiliser des ingrédients durables et des emballages recyclables.",
    },
    {
      id: 3,
      icon: "award",
      title: "Qualité",
      description:
        "Une sélection minutieuse d'essences naturelles et synthétiques haut de gamme.",
    },
    {
      id: 4,
      icon: "fingerprint",
      title: "Personnalisation",
      description:
        "Des créations adaptées à chaque personnalité, pour une expérience unique.",
    },
  ];

  const [headerRef, isHeaderVisible] = useIntersectionObserver();

  return (
    <section id="values" className="values">
      <div className="values-container">
        <div
          ref={headerRef}
          className={`values-header fade-in-up ${
            isHeaderVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-subtitle">Nos Valeurs</span>
          <h2 className="section-title">L'Excellence au Service de vos Sens</h2>
          <p className="section-description">
            Découvrez ce qui fait l'unicité de NaturaLuxe : un engagement
            constant envers la qualité et le respect de l'environnement.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => {
            const [valueRef, isValueVisible] = useIntersectionObserver();
            return (
              <div
                key={value.id}
                ref={valueRef}
                className={`value-card scale-in ${
                  isValueVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">
                  <i className={`fas fa-${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
