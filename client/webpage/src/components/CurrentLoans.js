import React from 'react'
import "./CurrentLoans.css"

const CurrentLoans = () => {

  return (
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
            <input type="text" />
            <button>Apply Loan</button>
        </div>
    </section>
  )
}

export default CurrentLoans