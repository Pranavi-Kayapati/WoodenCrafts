import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import CartPage from "./Components/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <h1>Wooden Crafts</h1>
    
      <MainRoutes />
    </div>
  );
}

export default App;
