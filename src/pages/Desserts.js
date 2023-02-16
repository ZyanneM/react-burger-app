import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import menuSucre from "../components/MenuSucre";

const Desserts = () => {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Navigation />
        <div className="product-container">
        {menuSucre
            .map((product) => <Product key={product.id} product={product} />)}
        </div>
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
