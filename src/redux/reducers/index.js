import { combineReducers } from "redux";
import { productsReducer } from './productsReducer';
import { selectedProductReducer } from './selectedProductReducer';
import { cartReducer } from './cartReducer';
import { checkoutReducer } from "./checkoutReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    productSelected: selectedProductReducer,
    cart: cartReducer,
    order: checkoutReducer
})

export default reducers;