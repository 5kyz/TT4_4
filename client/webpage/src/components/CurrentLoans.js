import React from "react";
import "./CurrentLoans.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Header from "./Header";

const CurrentLoans = () => {
  return (
    <div>
        <Header/>

      <section className="currentloans">
        <div className="currentloans--content">
          <h1>Current Loans</h1>
        </div>

        <div className="currentloans--container">
          <p>Loan ID</p>
          <p>Total Loan Amount</p>
          <p>Outstanding Amount</p>
          <input type="text"/>
          <button>Pay Loans</button>
        </div>

        <div className="applyloan">
        <label>Amount to Loan</label>
          <input type="text" />
          <button>Apply Loan</button>
        </div>
      </section>
    </div>
  );
};

export default CurrentLoans;
