import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Person3Icon from "@mui/icons-material/Person3";
import "../app.css"
 
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="log-container text text-gray-300 flex flex-col gap-2 p-6 shadow-lg h-screen w-56">
        {/* <AccountCircleIcon /> */}
        <div className="link hover:scale-105">
          <Link to="homepage">Cryptoverse</Link>
        </div>
        <Link className="link hover:scale-105" to="homepage">Home</Link>
        <Link className="link hover:scale-105" to="currencies">Currencies</Link>
        <Link className="link hover:scale-105" to="exchange">Exchange</Link>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
    </div>
  );
};

export default Navbar;
