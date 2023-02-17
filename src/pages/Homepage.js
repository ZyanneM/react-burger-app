import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import menu from "../components/Menu";
import Panier from "../components/Panier";

const Homepage = () => {
  const [message, setMessage] = useState("Il n'y a aucun produit dans votre panier.");

  const [menuSale, setMenuSale] = useState(menu);


  function handleProductPress(buttonId) {
    // cette fonction a besoin d'un argument
    // qui dépend du composant enfant qui l'appelle ici le composant product duquel elle récupère l'id
    alert(`Le produit ${buttonId} a été pressé !`);
  }

  const productList = menuSale.map(product =>
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

const container = document.querySelector('.product-list');




export default Homepage;
