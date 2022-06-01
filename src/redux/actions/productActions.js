import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (productSelected) => {
    console.log('selected product action - ', productSelected );
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: productSelected,
    };
};

export const addProductToCart = (cartProduct) => {
    console.log('product added in cart - ', cartProduct);
    return{
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        payload: cartProduct,
    }
}