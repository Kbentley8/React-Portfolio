import React from "react";
import NavTabs from "../components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";


function Header(props) {
    return (
        
            
        <header className="header bg-info">
            <a href="https://github.com/Kbentley8"> <h1 className="text-white">Kiyona Bentley </h1></a>
            <NavTabs />
        </header>
            
        
            
    );
}

export default Header;