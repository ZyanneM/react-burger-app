import React from "react";
import { useState } from "react";

const Panier = (props) => {
   const [count, setCount] = useState(0);
   
console.log(props.toggleBtn);
    return (
        <div className="order-container">
        <h2>Votre Commande</h2>
        <p className="msg">{props.message}</p>
          <div className="product-list" id="cart">
            {props.orderedList}
          </div>
          <button className={props.toggleBtn === 0 ? "not-active" : "clear"} onClick={props.clearCart}>Vider le panier</button>
        </div>
    );
};

export default Panier;