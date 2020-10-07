import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";

import Navbar from "./Navbar";
import Timer from './Timer';
import "./index.css";


const App = () => {
  return (
    <div>
    <Navbar />
    <Timer />
      {/* <button className="btn btn-success">Click here</button> */}
    </div>
  );
};

export default App;
