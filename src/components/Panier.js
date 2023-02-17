import React from "react";
import { useState } from "react";

const Panier = (props) => {
   const [count, setCount] = useState(0);

    return (
        <div className="order-container">
        <h2>Votre Commande</h2>
        <p>{props.message}</p>
          <div className="product-list" id="cart">
            {props.orderedList}
          </div>
        </div>
    );
};

export default Panier;