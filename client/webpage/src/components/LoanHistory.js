import React from 'react'
import "./LoanHistory.css"

const LoanHistory = () => {
    return (
        <section className='loanhistory'>
            <div className="loanhistory--content">
                    <h1>History</h1>
            </div>
    
            <div className="loanhistory--container">
            
            <p>Loan ID</p>
            <p>Payment ID</p>
            <p>Payment Date</p>
            <p>Payment Amount</p>
    
            </div>
        </section>
      )
}

export default LoanHistory