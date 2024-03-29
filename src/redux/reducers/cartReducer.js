/* eslint-disable no-case-declarations */
import { ActionTypes } from '../constants/action-types';

const initialStateCart = {
  cartProducts: [],
};

export const cartReducer = (state = initialStateCart, { type, payload }) => {
  switch (type) {
  case ActionTypes.ADD_PRODUCT_TO_CART:
    console.log('cart reducer - ', type, payload);
    const temp = [...state.cartProducts, payload];
    return { ...state, cartProducts: temp };
  case ActionTypes.REMOVE_PRODUCT_FROM_CART:
    console.log('cart reducer - ', type, payload);
    const temp2 = state.cartProducts.filter((temp3) => temp3.id !== payload);
    return { ...state, cartProducts: temp2 };
  case ActionTypes.EMPTY_CART:
    console.log('----------empty cart---------');
    // eslint-disable-next-line no-param-reassign
    state = initialStateCart;
    return state;
  default:
    return state;
  }
};
