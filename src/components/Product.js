import React from "react";


// J'ai gardé uniquement la logique de l'affichage de la carte
//Le contenu est injecté quand j'appelle le composant dans la page
//Entre accolade va signifier que la prop attendue est un objet
const Product = (props) => {

  //Faire un state dans homepage avec tous les détails du product et le faire descendre dans product ?
  const id = props.details.id;
  const name = props.details.name;

    return (
      <div className="single-container" id={props.details.id}>
        <p>{props.details.name}</p>
        <div className="product-img-container">
            <img className="product-img" src={props.details.picture} alt="" onClick={() => props.onProductPress(id, name)}/>
        </div>
        <p>{props.details.price}</p>
      </div>
      
);



};

export default Product;