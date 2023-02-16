import React from "react";

// import menu from "./Menu";

// J'ai gardé uniquement la logique de l'affichage de la carte
//Le contenu est injecté quand j'appelle le composant dans la page
const Product = ({product}) => {
   

    const handleClick = () => {
      const cart = document.querySelector('.product-list');
      const contenu = (document.getElementById('1')).innerHTML;
     
    
      // alert('You clicked');
    cart.innerHTML = contenu;


    }

    return (
      <div className="single-container" id={product.id} >
        <p>{product.name}</p>
        <div className="product-img-container">
            <img className="product-img" src={product.picture} onClick={handleClick} alt="" />
        </div>
        <p>{product.price}</p>
      </div>
);

};

export default Product;