import React, {useState, useEffect, Component, useRef} from 'react';
import {Link } from 'react-router-dom';
import './SignUpPage.css';

export default function SignUpPage (){
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [checkpwd, setCheckPwd] = useState();
  const [userAddr, setUserAddr] = useState();
  const [userPhone, setUserPhone] = useState();

  const [allowSignUp, setAllowSignUp] = useState(false);

  function signup(){
    setAllowSignUp(true);

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
                <p>Name</p>
                <input type="text" onChange={e=>setUserName(e.target.value)}/>
              </label>
              <label>
                <p>Phone Number</p>
                <input type='text' onChange={e=>setUserPhone(e.target.value)}/>
              </label>
              <label>
                <p>Address</p>
                <input type='text'onChange={e=>setUserAddr(e.target.value)}/>
              </label>
              <label>
                <p>Password</p>
                <input type="password" onChange={e=>setPassword(e.target.value)}/>
              </label>
              <label>
                <p>Re-Enter Password</p>
                <input type="password" onChange={e=>setCheckPwd(e.target.value)}/>
              </label>

              <div className='reg-btns'>
                <div>
                  <button type="submit" onClick={signup}>SignUp</button>
                </div>
                {allowSignUp ? (<Link to='/home'></Link>):(<p>Unsuccessful SignUp</p>)}
              </div>

            </form>
          </div>
      </div>
    </>
  )
}
