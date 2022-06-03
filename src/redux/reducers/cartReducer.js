import { ActionTypes } from "../constants/action-types";

const initialStateCart = {
    cartProducts:[]
}



export const cartReducer = (state = initialStateCart, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            console.log('cart reducer - ', type, payload);
            // console.log('cart reducer - prev array', state.cart);
            // let temp = state.cart.cartProducts.push(payload);
            // console.log('temp array - ', temp);
            // console.log([...state.cart, payload]);
            return {...state, payload};
            // return {
            //     ...state,
            //     cart: [...state.cart, payload]
            // }
        default:
            return state;
    }
}