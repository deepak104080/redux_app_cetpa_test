import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    //useselector to fetch all items in cart
    const cartProduct = useSelector((state) => state);
    console.log('selected product in cart - ', cartProduct);
    return(
        <>
            Cart Page
            {/* To Add multiple products in cart
            Display cart list */}
        </>
    )
}

export default Cart;