import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Desserts = () => {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Navigation />
        <div className="product-container"></div>
        <div className="order-container">
          <h2>Votre Commande</h2>
          <div className="product-list"></div>
        </div>
        {/* <img src="/images/product1.png" alt="burger 1" /> */}
      </div>
    </div>
  );
};

export default Desserts;
