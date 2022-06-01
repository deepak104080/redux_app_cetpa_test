import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, addProductToCart } from "../redux/actions/productActions";


const ProductDetail = () => {
    const tempProduct = useSelector((state) => state.productSelected);

    console.log('selector data in product---', tempProduct);
    const {category, description, id : tempId, image, price, rating, title} = tempProduct;
   
    
    const {id} = useParams();
    console.log('id', id);
    const dispatch = useDispatch();
    //useSelector for detailed product or else make api call if detailed api gives much more data

    const fetchProductDetails = async () => {
        const url = 'https://fakestoreapi.com/products/' + id;
        const response = await axios.get(url).catch((err) => console.log('err', err));
        console.log('data from detailed description api call - ', response.data);
        //call disptach;
        dispatch(selectedProduct(response.data));
    }

    useEffect(() => {
        fetchProductDetails();
        
    },[])

    const addCartFn = () => {
        dispatch(addProductToCart(tempProduct));
    }

    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Product Details</h2>
                </div>
            </div>
            <div className="row bg-secondary bg-opacity-10">
                <div className="col-12">
                    <div className="row">
                        <>
                        <div className="col-5">
                            <img src={image} alt="product image" className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <h3>{title || ' '}</h3>
                            <h4>Category - {category || ' '}</h4>
                            <p>Description - {description || ' '}</p>
                            {/* <h3>{rating.rate || ' '}</h3>
                            <h3>{rating.count || ' '}</h3> */}
                            <h4>Price - {price || ' '}</h4>
                        </div>
                        <div className="col-3">
                            <input type="text" placeholder="Check Service"/>
                            <br></br>
                            <button onClick >Add to Wishlist</button>
                            <button onClick={addCartFn} className="btn btn-success" >Add to Cart</button>
                        </div>
                        
                        
                        
                        </>
                    
                    
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductDetail;