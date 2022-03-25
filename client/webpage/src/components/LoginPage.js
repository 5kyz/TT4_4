import React, {useState, useEffect, Component, useRef} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginPage.css';
import logo from "./assets/logo.jpg";
//import axios from 'axios';

export default function LoginPage (){
  const [password, setPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [allowLogin, setAllowLogin] = useState(false);
  const [failLogin, setfailLogin] = useState(false);

  const handlePassword = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
    console.log(password);
    console.log(allowLogin);
  }

  const handlePhone = (e) =>{
    e.preventDefault();
    setUserPhone(e.target.value);
  }

  const login = (e) =>{
    e.preventDefault();
    if (userPhone.valueOf() == '123' && password.valueOf() == '1234'){
      setAllowLogin(true);
    }else{
      setfailLogin(true);
    }
    console.log(allowLogin);
  }

  return(
    <>
    <div className='outer'>

        <div className='login-header'>
          <h2> Welcome to DBS </h2>
          <img src={logo} className='dbs-logo' width='400' height='100'></img>
        </div>

        <div className='login-cred'>
            <form className='log-form' onSubmit={login}>
              <label>
                <p>Phone Number</p>
                <input type='text' onChange={handlePhone}/>
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={handlePassword}/>
              </label>
              <div>
                <button className='log-btn'>Login</button>
              </div>
              <div className='go-links'>
              <Link to="/SignUp" className='sign-btn'>Click here to SignUp!</Link>

              {failLogin ? (<p>Unsuccessful Login</p>):null}

              {allowLogin ? (<Link to='/home'>
                              <p> Login Successful!</p>
                              <button className='go-home'>Go to Home</button>
                              </Link>): failLogin}
              </div>

            </form>
          </div>
      </div>
    </>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }
