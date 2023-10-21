import React, { useState } from "react";
import Logo from "../assets/Pizza-logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';



function NavBar() {
  
  const [openLinks, setopenLinks]= useState(false);
  function onHandelrLink () {
    setopenLinks(!openLinks);
}
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Pizza Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
          <button onClick={onHandelrLink}><AppsIcon /></button>
        
      </div>
    </div>
  );
}

export default NavBar;
