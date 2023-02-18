import React from "react";
import { useState } from "react";

const Panier = (props) => {
   const [count, setCount] = useState(0);


    return (
        <div className="order-container">
        <h2>Votre Commande</h2>
        <p className="msg">{props.message}</p>
          <div className="product-list" id="cart">
            {props.orderedList}
            <button className='clear' onClick={props.clearCart}>Vider le panier</button>
          </div>
        </div>
    );
};

export default Panier;