import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import menuSucre from "../components/MenuSucre";
import Panier from "../components/Panier";

const Desserts = () => {

  const [menuDesserts, setMenuDesserts] = useState(menuSucre);

    // cette fonction a besoin d'un argument
    // qui dépend du composant enfant qui l'appelle ici le composant product duquel elle récupère l'id
    function handleProductPress(productId) {
      //Je récupère la div correspondante à celle cliquée
      const container = document.getElementById('cart');
      const clickedProduct = document.getElementById(productId);
      const cloneClickedProduct = clickedProduct.cloneNode(true);
  
      container.appendChild(cloneClickedProduct);
       
      // setMessage('Bon appétit !');
      // alert(`Le produit ${productId} a été pressé !`);
    }

  const productList = menuDesserts.map(product =>
    <Product key={product.id} 
    details={product} 
    id={product.id}
    onProductPress={handleProductPress}
    />)


  return (
    <React.Fragment>
        <div className="product-container">
        {productList}
        </div>
    </React.Fragment>
  );
};

export default Desserts;
