import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import MenuSale from "../components/MenuSale";
import Panier from "../components/Panier";
import Menu from "../components/Menu";

const Plats = (props) => {

  const [menuSale, setMenuSale] = useState(MenuSale);

  // cette fonction a besoin d'un argument
  // qui dépend du composant enfant qui l'appelle ici le composant product duquel elle récupère l'id
  
  const productList = menuSale.map(product =>
    <Product key={product.id} 
    details={product} 
    id={product.id}
    onProductPress={props.addPlat}
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