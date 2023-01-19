import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="nav">
          
          <Link to="/">Home</Link>
          <Link to="/loginUser">Login</Link>
          <Link to="/logoutUser">Logout</Link>

          
        </div>
      </div>
    </>
  );
};

export default Header;