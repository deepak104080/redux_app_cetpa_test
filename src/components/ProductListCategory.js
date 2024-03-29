import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { setProducts } from '../redux/actions/productActions';

function ProductListCategory() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const { category } = useParams();

  const fetchProducts = () => {
    // const url = `http://localhost:4000/products/category/${category}`;
    const url = `${process.env.REACT_APP_API_URL}products/category/${category}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        dispatch(setProducts(response.data));
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);
  return (
    <>
      <div className="row bg-success bg-opacity-10">
        <div className="col-12">
          <h3>Products List</h3>
        </div>
      </div>

      <div className="row bg-secondary bg-opacity-10">
        <div className="col-12">
          <div className="row">
            {products && products.map((temp, index) => (

              // eslint-disable-next-line react/no-array-index-key
              <div className="col-3 border my-2" key={temp.productid + index}>
                <Link to={`/product/${temp.id}`}>
                  <div>
                    <img alt="" src={temp.image} className="img-fluid home-image" />
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

export default ProductListCategory;

// Redux Middleware - Redu-saga, Redux-thunk
// test cases files
// mock data file
