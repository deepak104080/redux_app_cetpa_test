import React, { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [userStatus, setUserStatus] = useState(false);

  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const errorRef = useRef();

  const registerFn = async () => {
    const username = inputRef1.current.value;
    const name = inputRef2.current.value;
    const email = inputRef3.current.value;
    const mobile = inputRef4.current.value;
    const password = inputRef5.current.value;
    if (username !== '' && email !== '' && password !== '') {
      const response = await axios.post('http://localhost:4000/users/adduser', {
        username,
        name,
        email,
        mobile,
        password,
      });
      if (response.status === 201) {
        console.log('user created....');
        setUserStatus(true);
        errorRef.current.textContent = '';
      } else {
        errorRef.current.textContent = 'User Registration Failed. Plz try again.';
      }
    } else {
      errorRef.current.textContent = 'Please, fill all the values.';
    }
  };

  return (
    <>
      <div className="row bg-info bg-opacity-50">
        <div className="col-11">
          <h2>Register</h2>
        </div>
      </div>

      {userStatus
            && (
              <div className="row bg-secondary bg-opacity-50">
                <div className="col-12">
                  <div className="alert alert-success" role="alert">
                    User Created.
                    <br />
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
            )}

      <div className="row bg-secondary bg-opacity-50">
        <div className="col-12">

          Username:
          {' '}
          <input type="text" name="" ref={inputRef1} />
          <br />
          Name:
          {' '}
          <input type="text" name="" ref={inputRef2} />
          <br />
          Email:
          {' '}
          <input type="text" name="" ref={inputRef3} />
          <br />
          Mobile:
          {' '}
          <input type="text" name="" ref={inputRef4} />
          <br />
          Password:
          {' '}
          <input type="password" name="" ref={inputRef5} />
          <br />
          <button type="button" className="btn btn-success" onClick={registerFn}>Register</button>
          <div className="text-danger" ref={errorRef} />
        </div>
      </div>

    </>
  );
}

export default Register;
