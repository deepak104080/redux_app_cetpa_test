import { combineReducers } from "redux";
import { productsReducer, selectedProductReducer, cartReducer } from './productsReducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    cart: cartReducer,
})

export default reducers;