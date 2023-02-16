import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import menu from "../components/Menu";
import Panier from "../components/Panier";

const Homepage = () => {
  
  return (
    <div>
      <Header />
      <div className="app-container">
        <Navigation />
        <div className="product-container">
  {/* J'appelle mon tableau, je map, je lui passe en paramètre product qui représente chaque élément de mon tableau et j'appelle mon composant Product, je lui applique une clé unique et je lui donne le paramètre product qui sera égal à l'objet product*/}
          {menu
            .map((product) => <Product key={product.id} product={product} />)}
        </div>
        <Panier />
        </div>
        {/* <img src="/images/product1.png" alt="burger 1" /> */}
      </div>
  );
};

const container = document.querySelector('.product-list');




export default Homepage;
