import React from 'react';

const Menu = (props) => {
    return (
        <div className="product-container">
            {props.productList}
        </div>
    );
};

export default Menu;