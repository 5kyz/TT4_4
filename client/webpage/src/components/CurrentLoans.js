import React, {useState, useEffect, Component, useRef} from 'react';
import "./CurrentLoans.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from 'axios';

const CurrentLoans = () => {
  const [result, setResult] = useState([]);

    const fetchData = async () => {
        const url = 'https://dbs-techtrek.herokuapp.com/loan'
        axios.get(url).then(resp => {
          setResult(result)
          console.log(resp.data);
          });





  // const fetchData = async () => {
  //   try{
  //       const url = "https://dbs-techtrek.herokuapp.com/loan"
  //
  //       const res = await fetch(url);
  //
  //       const jsonD = await res.json();
  //       const results = jsonD
  //
  //       setResult(results)
  //
  //       console.log(jsonD);
  //   }catch(error) {
  //         console.log("error", error)
  //     }
  // }

    useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>
    <p>{result}</p>
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
