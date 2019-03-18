import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../src/components/navbar";
import Routes from "./routes" 
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Navbar />
    <Routes/>
    </div>
    
  </BrowserRouter>,

  document.getElementById("root")
);
