import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Account from "./components/pages/Account";
import Loans from "./components/pages/Loans";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        //<Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/loans" element={<Loans />} />
        //<Route path="/Login" element={<Login />} />
      </Routes>
      <div> footer </div>
    </Router>
  );
}

export default App;
