import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import "../Modal.css";
import { Link } from "react-router-dom";

const AccountDrop = () => {
  return (
    <div className="account-modal">

    <div>
    <CloseIcon className='account-modal-icon' />
    </div>

    <li>
            <Link to="/account"> View Balance</Link>
    </li>

    <li>
            <Link to="/account"> Deposit</Link>
    </li>

</div>
  )
}

export default AccountDrop