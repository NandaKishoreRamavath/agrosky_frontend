import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {AlignJustify} from "lucide-react";
import Drone_Aspirant_Logo from "../../Assets/DroneAspirants_logo.png";
const Navbar = (props) => {
  return (
    <>
      <nav className={props.extraClass === "true" ? "navClass" : ""}>
        <div className="logo">
          <img src={Drone_Aspirant_Logo} alt="AGROSKY DRONE ASPIRANTS LOGO" />
        </div>
        {/* "" */}
        <ul id="navlinks">
          <button><AlignJustify /></button>
          <li className="link">
            <NavLink to="/" className={({ isActive }) => (isActive ? "activeNav" : "")}>
              HOME
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/services" className={({ isActive }) => (isActive ? "activeNav" : "")}>
              SERVICES
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/products" className={({ isActive }) => (isActive ? "activeNav" : "")}>
              PRODUCTS
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/commingsoon" className={({ isActive }) => (isActive ? "activeNav" : "")}>
              ABOUT US
            </NavLink>
          </li>
        </ul>
        <div className="cntct_btn">
          <a href="#home">CONTACT US</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
