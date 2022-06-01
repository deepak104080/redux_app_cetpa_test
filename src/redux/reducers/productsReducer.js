import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: []
}

const initialStateCart = {
    cartProducts:[]
}

export const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_PRODUCT:
            // console.log('selected product reducer - ', type, payload);
            return {...state, ...payload};
        default:
            return state;
    }
}

export const cartReducer = (state = initialStateCart, {type, payload}) => {
    switch(type) {
        case ActionTypes.ADD_PRODUCT_TO_CART:
            console.log('cart reducer - ', type, payload);
            return {...state, cartProducts: payload};
        default:
            return state;
    }
}