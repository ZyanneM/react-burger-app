import React from "react";

class Product extends React.Component {
render() {
    const productsList = [
{
id:1,
name:"PHP Burger", 
price:5.95+"€", 
picture:"/images/product1.png"
},

{
id:2, 
name:"Burger de la mort",
price:8.95+"€", 
picture:"/images/product2.png"
},

{
id:3, name:"Javascript Burger", 
price:3.95+"€", 
picture:"/images/product3.png"
},

{
id:4, 
name:"NoWrap Poulet", 
price:5.95+"€", 
picture:"/images/product4.png"
},

{
id:5, 
name:"Tower of Heroes",
price:8.95+"€",
picture:"/images/product5.png"
},

{
id:6, 
name:"Salade React Healthy", 
price:3.95+"€", 
picture:"/images/product6.png"
}
];

const singleProduct = productsList.map((product, index) =>
      <div key={index} className="single-container" id={product.id} >
        <p>{product.name}</p>
        <div className="product-img-container">
            <img className="product-img" src={product.picture} alt="" />
        </div>
        <p>{product.price}</p>
      </div>
);

return (
    <>
    {singleProduct}
    </>
);

}
}

export default Product;