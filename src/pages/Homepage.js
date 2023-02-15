import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";



const Homepage = () => {
  
  return (
    <div>
      <Header />
      <div className="app-container">
        <Navigation />
        <div className="product-container">
          <Product />
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

const container = document.querySelector('.product-list');




export default Homepage;
