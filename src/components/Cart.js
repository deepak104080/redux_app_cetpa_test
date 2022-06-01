import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    //useselector to fetch all items in cart
    const {cartProduct} = useSelector((state) => state.cart.cartProducts);
    console.log('selected product in cart - ', cartProduct);
    return(
        <>
            Cart Page
        </>
    )
}

export default Cart;