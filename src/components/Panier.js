import React from "react";
import { useState } from "react";

const Panier = (props) => {
   

    return (
        <div className="order-container">
        <h2>Votre Commande</h2>
        <p>{props.message}</p>
          <div className="product-list"></div>
          </div>
    );
};

export default Panier;