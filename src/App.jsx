import React from "react";
import MainContent from "./component/MainContent";
import Navbar from "./component/Navbar";
import "./style.css";


const App =()=>{
  return(
    <div>
      <Navbar/>
      <MainContent/>
    </div>
  )
}
export default App;