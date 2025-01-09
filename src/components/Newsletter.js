import React, { useState } from "react";
import "../styles/Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'inscription à la newsletter
    console.log("Email soumis:", email);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Rejoignez notre <span>Club Privé</span>
          </h2>
          <p className="newsletter-text">
            Inscrivez-vous pour recevoir en avant-première nos nouveautés, des
            offres exclusives et des invitations à nos événements privés.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
              />
              <button type="submit" className="button-primary">
                S'inscrire
              </button>
            </div>
            <label className="privacy-label">
              <input type="checkbox" required />
              <span>
                J'accepte de recevoir les communications marketing de NaturaLuxe
              </span>
            </label>
          </form>
        </div>
        <div className="newsletter-image">
          <img src="/images/k.jpg" alt="Newsletter background" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
