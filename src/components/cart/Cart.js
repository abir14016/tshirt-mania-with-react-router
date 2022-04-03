import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, handleRemoveFromCart, clearCart, added, handleOffer, tshirts, offer, freeProducts, grandTotal, grandTotalPrice } = props

    return (
        <div>
            <h2>selected types : {cart.length}</h2>
            <h3>Selected items: {grandTotal}</h3>
            <h2>Grand Total: ${grandTotalPrice}</h2>
            <button onClick={clearCart} title='clear all' disabled={added}>X</button>
            {
                cart.map(tshirt => <div className='cart'>
                    <div>
                        <img src={tshirt.picture} alt="" />
                        <h3>{tshirt.name}</h3>
                    </div>
                    <div className='cart-info'>
                        <div>
                            <p><small>Price: ${tshirt.price}</small></p>
                            <p><small>Quantity: {tshirt.quantity}</small></p>
                            <p><small>sub total: ${tshirt.subTotal}</small></p>
                        </div>
                        <div>
                            <button onClick={() => handleRemoveFromCart(tshirt)} title="remove this item">X</button>
                        </div>
                    </div>
                </div>)
            }
            <p><small>Buy one get one free</small></p>
            <button onClick={() => handleOffer(tshirts)} disabled={added}>GET FREE</button>
            {
                Object.keys(freeProducts).length > 0 && (<div className='cart'>
                    <div>
                        <img src={offer.picture} alt="" />
                        <h3>{offer.name}</h3>
                    </div>
                    <div className='cart-info'>
                        <div>
                            <p><small>Price: $00</small></p>
                            <h3>Free For U</h3>
                        </div>
                        {/* <div>
                        <button onClick={() => handleRemoveFromCart(offer)} title="remove this item">X</button>
                    </div> */}
                    </div>
                </div>)
            }

        </div >
    );
};

export default Cart;