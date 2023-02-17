import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import menuSucre from "../components/MenuSucre";
import Panier from "../components/Panier";

const Desserts = () => {
  const [message, setMessage] = useState("Il n'y a aucun produit dans votre panier.");

  const [menuDesserts, setMenuDesserts] = useState(menuSucre);

  
  function handleProductPress(productId) {
    // cette fonction a besoin d'un argument
    // qui dépend du composant enfant qui l'appelle ici le composant product duquel elle récupère l'id
    alert(`Le produit ${productId} a été pressé !`);
  }

  const productList = menuDesserts.map(product =>
    <Product key={product.id} 
    details={product} 
    id={product.id}
    onProductPress={handleProductPress}
    />)


  return (
    <React.Fragment>
      <Header />
      <div className="app-container">
        <Navigation />
        <div className="product-container">
        {productList}
        </div>
        <Panier
        message={message}/>
        </div>
    </React.Fragment>
  );
};

export default Desserts;
