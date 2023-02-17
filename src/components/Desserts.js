import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import menuSucre from "../components/MenuSucre";
import Panier from "../components/Panier";

const Desserts = (props) => {

  const [menuDesserts, setMenuDesserts] = useState(menuSucre);

  const productList = menuDesserts.map(product =>
    <Product key={product.id} 
    details={product} 
    id={product.id}
    onProductPress={props.addDessert}
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
