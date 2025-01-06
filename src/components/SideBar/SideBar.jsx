import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { faGaugeSimpleHigh, faGear } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="Side">
      <div className="logo flex justify-center pt-8">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="side-container flex justify-center">
        <div className="Side-links flex flex-col items-start pt-12">
          <NavLink className="side-bar-link text-center" to={"/dashboard"}>
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="icon" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink className="side-bar-link" to={"/teams"}>
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="icon" />
            <span>Teams</span>
          </NavLink>
          <NavLink className="side-bar-link" to={"/employees"}>
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="icon" />
            <span>Employees</span>
          </NavLink>
          <NavLink className="side-bar-link" to={"/setting"}>
            <FontAwesomeIcon icon={faGear} className="icon" />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
