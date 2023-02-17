import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import MenuSale from "../components/MenuSale";
import Panier from "../components/Panier";
import Menu from "../components/Menu";

const Plats = () => {

  const [menuSale, setMenuSale] = useState(MenuSale);

  // cette fonction a besoin d'un argument
  // qui dépend du composant enfant qui l'appelle ici le composant product duquel elle récupère l'id

  function handleProductPress(productId) {
    //Je récupère la div correspondante à celle cliquée
    const container = document.getElementById('cart');
    const clickedProduct = document.getElementById(productId);
    const cloneClickedProduct = clickedProduct.cloneNode(true);

    container.appendChild(cloneClickedProduct);
     

    // alert(`Le produit ${productId} a été pressé !`);
    // setMessage('Bon appétit !');
  }
  
  const productList = menuSale.map(product =>
    <Product key={product.id} 
    details={product} 
    id={product.id}
    onProductPress={handleProductPress}
    />)


  return (
    <React.Fragment>
        <Menu 
        productList = {productList}
        />
    </React.Fragment>
  );
};

export default Plats;