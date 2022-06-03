import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {checkoutOrder} from '../redux/actions/checkoutActions';

const Cart = () => {
    //useselector to fetch all items in cart
    const cartProduct = useSelector((state) => state);
    console.log('cart state - ', cartProduct);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartProductList = useSelector((state) => state.cart.payload);
    console.log('cart product in cart - ', cartProductList);

    const checkoutFn = () => {
        dispatch(checkoutOrder(cartProductList));
        navigate('/orders');
    }

    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Cart</h2>
                </div>
            </div>

            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    <table className="table table-striped table-responsive">
                        <tr>
                            <th>Sr No</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Rate</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                        </tr>


                        <tr>
                            <td>1</td>
                            <td>{cartProductList.title || ' '}</td>
                            <td><img src={cartProductList.image} alt="product image" className="img-fluid" /></td>
                            <td>{cartProductList.price || ' '}</td>
                            <td>1</td>
                            <td>{cartProductList.price || ' '}</td>
                        </tr>
                        
                    </table>
                       
                       
                </div>
            </div>

            <div className="row bg-info bg-opacity-10">
                <div className="col-12">
                    <button onClick={checkoutFn}>Proceed to Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart;