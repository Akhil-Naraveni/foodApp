import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import "./Header.css"

const Header = () =>{
    return(
        <>
        <div className="header" >
            <Navbar/>
            <div className="header-text">Come Lets Dive into the journey of Food..!</div>
        </div>
        </>
    )
}
export default Header;