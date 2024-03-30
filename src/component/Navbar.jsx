import React from "react";
import logo from "../img/Group.png"
const Navbar =()=>{
    return(
        <nav className="nav">
           <img src={logo} alt="React-app" className="nav-image"/>
            <h3>ReactFact</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
export default Navbar;