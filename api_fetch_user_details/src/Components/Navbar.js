import React from "react";
import "./NavbarStyle.css";

import {Link} from "react-router-dom"



const Navbar = () => {
    return(

       <>
       <div className="nav-section">
            <div className="nav-logo">
                <a href="index.html" className="logo-text">Talent<span>Hub</span></a>
            </div>

            <div className="nav-menu">
                <ul className="menus">
                    <li><Link to="/" className="nav-options">Home</Link></li>
                    <li><Link to="/Students" className="nav-options">Students</Link></li>
                    <li><Link to="/Contact" className="nav-options">Contact</Link></li>
                </ul>
            </div>
       </div>
       </> 
       
       );


}

export default Navbar;