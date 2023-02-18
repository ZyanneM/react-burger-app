import React from 'react';

const ClearBtn = (props) => {
    return (
        <>
            <button className='clear' onClick={() => props.clear}>Vider le panier</button>
        </>
    );
};

export default ClearBtn;