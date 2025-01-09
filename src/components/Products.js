import React, { useRef, useState, useEffect } from "react";
import "../styles/Products.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ProductCard = React.forwardRef(({ product }, ref) => {
  return (
    <div ref={ref} className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "fallback-image-url.jpg"; // Ajouter une image par défaut
          }}
        />
        <div className="product-overlay"></div>
      </div>
      <div className="product-info">
        <span className="product-collection">{product.collection}</span>
        <h3 className="product-name">{product.name}</h3>
      </div>
    </div>
  );
});

const Products = ({ category }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Jasmin Éternel",
      collection: "Essence Nature",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Velours Noir",
      collection: "Élégance Intemporelle",
      image:
        "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "L'Ombre Sauvage",
      collection: "Horizon Masculin",
      image:
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "N 5 Chanel",
      collection: "Essence Nature",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);

  const [headerRef, isHeaderVisible] = useIntersectionObserver();

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div
          ref={headerRef}
          className={`products-header fade-in-up ${
            isHeaderVisible ? "is-visible" : ""
          }`}
        >
          <span className="section-subtitle">Nos Créations</span>
          <h2 className="section-title">Collections Exclusives</h2>
          <p className="section-description">
            Découvrez nos parfums d'exception, créés avec les ingrédients les
            plus précieux pour une expérience olfactive unique.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Products);
