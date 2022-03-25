import React from "react";
import CurrentLoans from "../CurrentLoans";
import LoanHistory from "../LoanHistory";

function Loans() {
  return (
  <div className="loanpage">
  <CurrentLoans/>
  <LoanHistory/>
  </div>

  )
}

export default Loans;
