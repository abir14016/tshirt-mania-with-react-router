const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("shopping_cart"))
}

const addToLacalStorage = (id) => {
    let shoppingCart = {};
    const exists = getFromLocalStorage();
    if (!exists) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = exists;
        if (shoppingCart[id]) {
            shoppingCart[id] += 1;
        }
        else {
            shoppingCart[id] = 1;
        }
    }
    localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart))
}

const clearLocalStorage = () => {
    localStorage.removeItem("shopping_cart")
}
export { addToLacalStorage, getFromLocalStorage, clearLocalStorage }