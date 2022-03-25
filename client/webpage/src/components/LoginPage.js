import React, {useState, useEffect, Component, useRef} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginPage.css';
//import axios from 'axios';

export default function LoginPage ({setToken}){
  const [password, setPassword] = useState();
  const [userPhone, setUserPhone] = useState();

  const [allowLogin, setAllowLogin] = useState(false);

  const handleclick = (e) =>{
    const userphone = setUserPhone(e.target.value)
    const userpwd = setPassword(e.target.value)
    if (userpwd == '123' && userphone == '1234'){
      setAllowLogin(true);
    }
  }
  return(
    <>
    <div className='outer'>

        <div className='login-header'>
          <h2> Welcome to DBS </h2>
          <img src='assets/logo.jpg' className='dbs-logo' width='400' height='100'></img>
        </div>

        <div className='login-cred'>
            <form className='log-form'>
              <label>
                <p>Phone Number</p>
                <input type='text' onChange={handleclick}/>
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={handleclick}/>
              </label>
              <div>
                <button className='log-btn' onClick={handleclick}>Login</button>
              </div>
              <Link to="/SignUp" className='sign-btn'>Click here to SignUp!</Link>
              <p>{allowLogin}</p>
              {allowLogin ? (<Link to="/home"></Link>): (<p>Unsuccessful Login</p>)}

            </form>
          </div>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
