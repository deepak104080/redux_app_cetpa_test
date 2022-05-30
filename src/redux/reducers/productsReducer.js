import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: 'product 1'
        },
        {
            id: 2,
            title: 'product 2'
        },
        {
            id: 3,
            title: 'product 3'
        }
    ]
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
            console.log('selected product reducer - ', type, payload);
            return {...state, ...payload};
        default:
            return state;
    }
}