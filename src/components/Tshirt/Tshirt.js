import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Tshirt.css'

const Tshirt = (props) => {
    const { handleAddToCart, tshirt } = props
    const { name, picture, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>
                <p>ADD TO CART</p>
            </button>
        </div>
    );
};

export default Tshirt;