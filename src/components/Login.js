/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginUser } from '../redux/actions/loginActions';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const errorRef = useRef();

  const loginDetails = useSelector((state) => state.login);
  // console.log('-----------login details------------', loginDetails);

  useEffect(() => {
    if (loginDetails.authUser.loginStatus) {
      if (loginDetails.lastUrl) {
        // console.log('---------if ----------', loginDetails)
        navigate(loginDetails.lastUrl);
      } else {
        // console.log('---------if ----------', loginDetails)
        navigate('/');
      }
    }
  }, [loginDetails.authUser.loginStatus]);

  const loginFn = async () => {
    const username = inputRef1.current.value;
    const password = inputRef2.current.value;
    if (username !== '' && password !== '') {
      // call api with username and password
      // const url = 'http://4000/users/login?username=deepak123&password=12345';
      // const url = 'http://4000/users/login/deepak123/12345'
      try {
        // const url = 'http://localhost:4000/users/login'
        const url = `${process.env.REACT_APP_API_URL}users/login/`;
        const response = await axios.post(url, {
          username,
          password,
        });
        // console.log(response);
        if (response.status === 200) {
          // dispatch(loginUser(username));
          // store complete obj coming from back end
          dispatch(loginUser(response.data));
          errorRef.current.textContent = '';
        }
      } catch {
        errorRef.current.textContent = 'Username or password incorrect.';
      }

      // if login successfull
      // if(username === 'ecommerceuser' && password === '123456') {
      //     //dispatch login action
      //     dispatch(loginUser('ecommerceuser'));
      //     errorRef.current.textContent = '';
      // }
      // else {
      //     //show error for incorrect data
      //     errorRef.current.textContent = 'Username or password incorrect.'
      // }
    } else {
      // show error for proper inputs.
      errorRef.current.textContent = 'Please, fill all the values.';
    }
  };

  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-11">
          <h2>Login</h2>
        </div>
      </div>

      <div className="row bg-secondary bg-opacity-50">
        <div className="col-12">

          Username:
          {' '}
          <input type="text" name="" ref={inputRef1} />
          <br />
          Password:
          {' '}
          <input type="password" name="" ref={inputRef2} />
          <br />
          <button type="button" className="btn btn-success" onClick={loginFn}>Login</button>
          <div className="text-danger" ref={errorRef} />
        </div>
      </div>

      {/* <div className="row bg-secondary bg-opacity-50">
            <div className="col-12">

                Username: <input type="text" name="" ref={inputRef1} value="ecommerceuser" /><br></br>
                Password: <input type="password" name="" ref={inputRef2} value="123456" /><br></br>
                <button className="btn btn-success" onClick={loginFn}>Login</button>
                <div className="text-danger" ref={errorRef}></div>
            </div>
        </div> */}

    </>
  );
}

export default Login;
