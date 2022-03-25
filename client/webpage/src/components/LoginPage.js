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
    if (userPhone == '123' && password == '1234'){
      setAllowLogin(!allowLogin);
      console.log(allowLogin);
    }
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
            </form>
            <Link to="/SignUp" className='sign-btn'>Click here to SignUp!</Link>
              <p>{allowLogin}</p>
              
              {allowLogin ? (<Link to="/home"></Link>): (<p>Unsuccessful Login</p>)}

          </div>
      </div>
    </>
  )
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }
