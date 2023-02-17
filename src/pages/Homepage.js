import React from "react";
import { useState} from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import Panier from "../components/Panier";
import Plats from "../components/Plats";
import Desserts from "../components/Desserts";

const Homepage = () => {
  const [toggleState, setToggleState] = useState(1);

  const [message, setMessage] = useState("Il n'y a aucun produit dans votre panier.");

  const [ordered, setOrdered] = useState([]);

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
            <Plats />
          </div>
          <div className={toggleState === 2 ? 'content active-content' : 'content'}>
          <Desserts />
          </div>
        </div>
        <Panier 
        message={message}
        orderedList = {orderedList}/>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
