import MainRoutes from "./Components/AllRoutes/MainRoutes";
import { Navbar } from "./Components/Navbar/Navbar";
import styled from "styled-components"

function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>

       <Navbar/>
      <MainRoutes />
    </div>
  );
}

export default App;

