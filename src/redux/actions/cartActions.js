import { ActionTypes } from '../constants/action-types';

// console.log('product added in cart - ', cartProduct);
export const addProductToCart = (cartProduct) => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART,
  payload: cartProduct,
});

export const removeProductFromCart = (id) => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

export const emptyCart = () => ({
  type: ActionTypes.EMPTY_CART,
});
