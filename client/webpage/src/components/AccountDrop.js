import React from "react";
import CloseIcon from "@mui/icons-material/Close";
//import "../Modal.css";
import { Link } from "react-router-dom";
import Header from "./Header";

const AccountDrop = () => {

  // const fetchData = async () =>{
  //   e.preventDefault();
  //   const url = 'https://dbs-techtrek.herokuapp.com/user/login'
  //   const res = await axios.post(url, {
  //       customer_phone: userPhone.valueOf(),
  //       password: password.valueOf()
  //   });
  //
  // }

  return (
    <div className="account-modal">
        <Header/>

      <section className="accountbalance">
        <div className="accountbalance--content">
          <h1>ACCOUNT DETAILS</h1>
        </div>

        <div className="balance--container">
          <p>ID:</p>
          <p>Name:</p>
          <p>Phone Number:</p>
          <p>Address:</p>
        </div>
        <h1>Account Balance</h1>
        <li>
          <Link to="/account"> View Balance</Link>
        </li>
        <p>Current Balance</p>

        <li>
          <Link to="/account"> Deposit</Link>
        </li>
        <h1>Current Loans</h1>
        <li>
          <Link to="/account">Make Payments</Link>
        </li>
      </section>
    </div>
  );
};

export default AccountDrop;
