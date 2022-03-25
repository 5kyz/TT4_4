import React from 'react'
import "./CurrentLoans.css"
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const CurrentLoans = () => {

  return (
    <div>
    <div>
    <Link to="/home"><CloseIcon className='account-modal-icon' /></Link>
    </div>

    <section className='currentloans'>
        <div className="currentloans--content">
                <h1>Current Loans</h1>
        </div>

        <div className="currentloans--container">
        <p>Loan ID</p>
        <p>Loan Amount</p>
        <button>Pay Loans</button>
        </div>

        <div className="applyloan">
            <label>Loan Amount</label>
            <input type="text" />
            <button>Apply Loan</button>
        </div>
    </section>
    </div>
  )
}

export default CurrentLoans