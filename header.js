import React ,{useState}from "react";
import { Link } from "react-router-dom";
import './App.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the menuActive state
  };
    return (
      <header>
        <figure>
         <img src={require('./places/logo.png')} alt="error" width="70pxpx" height="70px" ></img>
      <img src={require('./bytheway.png')} alt="error" width="200px" height="50px"></img>
      </figure>
     <ul>
     <span className="menu-icon" onClick={toggleMenu}>
          ☰
        </span>
      <li>
        <Link to="/home">Home</Link></li>
      <li>
        <Link to="/hotels">Hotels</Link></li>
      <li>
        <Link to="/services">PopularPlace</Link></li>
        <li>
          <Link to="/food">Food</Link>
        </li>
      <li>
        <Link to="/about">About</Link></li>
      <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/booknow"></Link>
        </li>
     </ul>
     
      </header>  
    );
}
export default Header;