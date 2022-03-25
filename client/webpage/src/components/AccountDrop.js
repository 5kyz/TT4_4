import React from "react";
import CloseIcon from "@mui/icons-material/Close";
//import "../Modal.css";
import { Link } from "react-router-dom";

const AccountDrop = () => {
  return (
    <div className="account-modal">
      <div>
        <CloseIcon className="account-modal-icon" />
      </div>
      <section className="accountbalance">
        <div className="accountbalance--content">
          <h1>ACCOUNT DETAILS</h1>
        </div>

        <div className="balance--container">
          <p>Name</p>
          <p>Phone Number</p>
          <p>Address</p>
          <p>Current Loans</p>
          <button>Pay Loans</button>
          <p>Make Payments</p>
        </div>
        <li>
          <Link to="/account"> View Balance</Link>
        </li>

        <li>
          <Link to="/account"> Deposit</Link>
        </li>
      </section>
    </div>
  );
};

export default AccountDrop;
