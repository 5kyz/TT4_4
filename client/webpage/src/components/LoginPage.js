import React, {useState, useEffect, Component, useRef} from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
//import axios from 'axios';

export default function LoginPage (){
  const [password, setPassword] = useState();
  const [userPhone, setUserPhone] = useState();

  const [allowLogin, setAllowLogin] = useState(false);

  function handleclick(){
    setAllowLogin(true)

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
                <input type='text' onChange={e=>setUserPhone(e.target.value)}/>
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={e=>setPassword(e.target.value)}/>
              </label>
              <div>
                <button className='log-btn' onClick={handleclick}>Login</button>
              </div>
              <Link to="/SignUp" className='sign-btn'>Click here to SignUp!</Link>

              {allowLogin ? (<p>Welcome! Login Successful</p>) : (<p>Sorry please try again.</p>)}

            </form>
          </div>
      </div>
    </>
  )
}
