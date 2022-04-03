import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import UseTShirts from '../Hooks/UseTshirts'
import Tshirt from '../Tshirt/Tshirt';
import { addToLacalStorage, clearLocalStorage, getFromLocalStorage } from '../Utilities/LocalStorage';
import './Home.css'

const Home = () => {
    // getFromLocalStorage()
    const [tshirts] = UseTShirts()
    const [cart, setCart] = useState([])
    const [offer, setOffer] = useState({})
    const [grandTotal, setgrandTotal] = useState(0)
    const [grandTotalPrice, setgrandTotalPrice] = useState(0)
    const [added, setAdded] = useState(true)
    const [freeProducts, setFreeProducts] = useState({})


    useEffect(() => {
        { cart.length > 0 ? setAdded(false) : setAdded(true) }
    }, [cart])

    useEffect(() => {
        if (tshirts.length) {
            const storedTshirtsIds = getFromLocalStorage();
            // console.log(storedProductsIds)
            const previousCart = []
            for (const id in storedTshirtsIds) {
                // console.log(id)
                const foundTshirt = tshirts.find(tshirt => tshirt.id === id)
                console.log(foundTshirt)
                const quantity = storedTshirtsIds[id]
                foundTshirt.quantity = quantity;

                const sub = foundTshirt.price * foundTshirt.quantity;
                foundTshirt.subTotal = sub


                previousCart.push(foundTshirt);
            }
            setCart(previousCart)
        }
    }, [tshirts])

    useEffect(() => {
        const grandquantityContainer = cart.map(selectedTshirt => selectedTshirt.quantity)
        // console.log(grandquantityContainer)
        let sum = 0;
        for (const quantity of grandquantityContainer) {
            sum = sum + quantity;
        }
        setgrandTotal(sum)

    }, [cart])

    useEffect(() => {
        const grandPriceContainer = cart.map(selectedTshirt => selectedTshirt.subTotal)
        // console.log(grandPriceContainer)
        let totalPrice = 0;
        for (const price of grandPriceContainer) {
            totalPrice = totalPrice + price;
        }
        setgrandTotalPrice(totalPrice)

    }, [cart])

    //handle add to cart button
    const handleAddToCart = (selectedTshirt) => {
        // console.log(selectedTshirt)
        let newCart = [];
        const exists = cart.find(tshirt => tshirt.id === selectedTshirt.id)
        let quantity;
        let subTotal;
        if (!exists) {
            newCart = [...cart, selectedTshirt]
            quantity = 1
            selectedTshirt.quantity = quantity;
            const price = selectedTshirt.price;
            subTotal = price * selectedTshirt.quantity;
            selectedTshirt.subTotal = subTotal;
        }
        else {
            newCart = [...cart]
            quantity = selectedTshirt.quantity + 1
            selectedTshirt.quantity = quantity;
            const price = selectedTshirt.price;

            subTotal = (price * selectedTshirt.quantity);
            selectedTshirt.subTotal = subTotal;
        }
        setCart(newCart)
        addToLacalStorage(selectedTshirt.id)
    }


    //handle remove button
    const handleRemoveFromCart = (selectedTshirt) => {
        let newCart = [];
        const rest = cart.filter(tshirt => tshirt.id !== selectedTshirt.id)
        newCart = [...rest]
        setCart(newCart)
    }


    //handle clear cart button
    const clearCart = () => {
        setCart([])
        setOffer({})
        setFreeProducts({})
        clearLocalStorage()
        // const x = delete(offer)

    }


    //handle offer button
    const handleOffer = (tshirts) => {
        const randomNumber = parseInt(Math.random() * tshirts.length)
        setOffer(tshirts[randomNumber])
        setFreeProducts(tshirts[randomNumber])
    }
    // console.log(cart);
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">

                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    clearCart={clearCart}
                    handleOffer={handleOffer}
                    added={added}
                    tshirts={tshirts}
                    offer={offer}
                    freeProducts={freeProducts}
                    grandTotal={grandTotal}
                    grandTotalPrice={grandTotalPrice}
                // subTotal={subTotal}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;