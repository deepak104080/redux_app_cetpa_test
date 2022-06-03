import { ActionTypes } from "../constants/action-types";


export const addProductToCart = (cartProduct) => {
    console.log('product added in cart - ', cartProduct);
    return{
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: cartProduct,
    }
}