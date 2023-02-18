import React from "react";
import { useState, useRef} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import Panier from "../components/Panier";
import Plats from "../components/Plats";
import Desserts from "../components/Desserts";

const Homepage = () => {
  const [toggleState, setToggleState] = useState(1);

  const [message, setMessage] = useState("Il n'y a aucun produit dans votre panier.");

  //Je vais chercher le nombre de produits dans le panier
  var productNb = document.querySelectorAll(".product-list > div");

  // const Msg = () => {
  //   setMessage("Il n'y a toujours rien");
  const [ordered, setOrdered] = useState([]);
  // }
  
  function clearCart() {
    // const container = document.getElementById('cart');
    // while (container.firstChild) {
    //     // Supprimer la div enfant de l'élément parent
    //     container.removeChild(container.firstChild);
    //   }
    alert('Clic');
    }

  function handleProductPress(productId) {
   
    //Je récupère la div correspondante à celle cliquée
    const container = document.getElementById('cart');
   
    const clickedProduct = document.getElementById(productId);
    const cloneClickedProduct = clickedProduct.cloneNode(true);

    container.appendChild(cloneClickedProduct);
        
       
    const panier = document.querySelector('.order-container');
    // const clearBtn = document.createElement('button');
   

    if(productNb.length+1 === 1){
    setMessage(`Il y a ${productNb.length+1} produit dans votre panier`)
    }else{
      setMessage(`Il y a ${productNb.length+1} produits dans votre panier`)
    }

   
    // alert(`Le produit ${productId} a été pressé !`);
    // setMessage('Bon appétit !');
  }

  function clearCart() {
    const container = document.getElementById('cart');
    while (container.firstChild) {
        // Supprimer la div enfant de l'élément parent
        container.removeChild(container.firstChild);
      }
    } 

  const orderedList = ordered.map(order =>
    <Product key={order.id} 
    details={order} 
    id={order.id}
    />)

    const toggleTab = (index) => {
      setToggleState(index);
    }

    

  return (
    <React.Fragment>
      <Header />
      <div className="app-container">
        <Navigation 
        //On déclare les props pour pouvoir les appeler dans le composant
        toggleTab={toggleTab}
        toggleState={toggleState}/>
        <div className="products">
          {/* //Les accolades retournent une expression, ici un opérateur ternaire */}
          <div className={toggleState === 1 ? 'content active-content' : 'content'}>
            <Plats
            addPlat ={handleProductPress}
            />
          </div>
          <div className={toggleState === 2 ? 'content active-content' : 'content'}>
          <Desserts
            addDessert ={handleProductPress} />
          </div>
        </div>
        <Panier
        clearCart={clearCart}
        message={message}
        orderedList = {orderedList}
         />
      </div>
    </React.Fragment>
  );
};

export default Homepage;
