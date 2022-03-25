import React, { useState, useEffect, Component, useRef } from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";
import logo from "./assets/logo.jpg";
import axios from 'axios';

export default function SignUpPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkpwd, setCheckPwd] = useState('');
  const [userAddr, setUserAddr] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [allowSignUp, setAllowSignUp] = useState(false);
  const [failSignUp, setfailSignUp] = useState(false);


  const handlePwd = (e) =>{
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handlecpwd = (e) =>{
    e.preventDefault();
    setCheckPwd(e.target.value);
  }

  const signup = async (e) =>{
    e.preventDefault();
    if (password.valueOf() == checkpwd.valueOf()){
      setAllowSignUp(true);
      axios({
        method: 'post',
        url: 'https://dbs-techtrek.herokuapp.com/user/signup',
        data: {
          customer_name: userName,
          customer_phone: userPhone,
          customer_address: userAddr,
          password: password
        }
      });
    }else{
      setfailSignUp(true);
    }
  }

  return (
    <>
      <div className="outer">
        <div className="login-header">
          <h2> Welcome to DBS </h2>
          <img src={logo} className="dbs-logo" width="400" height="100"></img>
        </div>

        <div className="login-cred">
          <form className="log-form">
            <label>
              <p>Name</p>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              <p>Phone Number</p>
              <input
                type="text"
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </label>
            <label>
              <p>Address</p>
              <input
                type="text"
                onChange={(e) => setUserAddr(e.target.value)}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={handlePwd}
              />
            </label>
            <label>
              <p>Re-Enter Password</p>
              <input
                type="password"
                onChange={handlecpwd}
              />
            </label>

            <div className="reg-btns">
              <div>
                <button type="submit" onClick={signup}>
                  SignUp
                </button>

                {failSignUp ? (<p>Unsuccessful SignUp</p>):null}

                {allowSignUp ? (<div>
                                <p> Sign Up Successful! </p>
                                <Link to="/" className='sign-btn'>Back to Login</Link>
                                </div>
                              ): failSignUp}
              </div>
              {/* {allowSignUp ? (<Link to='/home'></Link>):(<p>Unsuccessful SignUp</p>)} */}
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
