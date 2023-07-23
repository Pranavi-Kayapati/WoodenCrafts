
import MainRoutes from "./Components/AllRoutes/MainRoutes";
import { Navbar } from "./Components/Navbar/Navbar";
import styled from "styled-components"


function App() {
  return (
    <DIV>
      <div className="App">
        <div className="nav">
        <Navbar />
        </div>
        <div className="body">
        <MainRoutes />
        </div>

        

      </div>

    </DIV>

  );
}

export default App;

const DIV=styled.div`
  .nav{
    margin-bottom:180px;
  }
`


