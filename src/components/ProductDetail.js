import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";


const ProductDetail = () => {
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

    return(
        <>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h2>Product Details</h2>
                </div>
            </div>
            <div className="row bg-info bg-opacity-50">
                <div className="col-12">
                    <h4>{id}</h4>
                </div>
            </div>
        </>
    )
}


export default ProductDetail;