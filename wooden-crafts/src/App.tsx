import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/product">product</Link>
      <MainRoutes />
    </div>
  );
}

export default App;
