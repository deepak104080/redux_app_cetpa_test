import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { setProducts } from '../redux/actions/productActions';
import {
  AltButton, SubmitButton, DangerText, SuccessText, Text,
} from './shared/AltButton.style';

function ProductList() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = () => {
    axios.get('http://localhost:4000/products')
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="row bg-success bg-opacity-10">
        <div className="col-12">
          <h3>Products List</h3>
        </div>

        <AltButton>test alt button</AltButton>
        <SubmitButton>test alt button</SubmitButton>
        <DangerText>Danger Text</DangerText>
        <SuccessText>Success Text</SuccessText>
        <Text color="green">Text 123</Text>
        <Text color="blue">Text 123</Text>
        <Text color="red">Text 123</Text>
      </div>

      <div className="row bg-secondary bg-opacity-10">
        <div className="col-12">
          <div className="row">
            {products && products.map((temp, index) => (

              <div className="col-3 border my-2" key={temp.productid + index}>
                <Link to={`/product/${temp.id}`}>
                  <div>
                    <img src={temp.image} className="img-fluid home-image" />
                  </div>
                </Link>
                <div className="fw-bold">
                  {temp.id}
                  {' '}
                  -
                  {temp.title}
                </div>
                <div className="fw-bold">
                  &#8377;
                  {temp.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;

// Redux Middleware - Redu-saga, Redux-thunk
// test cases files
// mock data file
