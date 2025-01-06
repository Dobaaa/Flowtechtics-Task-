import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo.png";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import {
  faGaugeSimpleHigh,
  faGear,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="Side flex flex-col items-center">
      <div className="logo  pt-8">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="side-container ">
        <div className="Side-links flex flex-col items-start  pt-12">
          <div>
            <NavLink className="side-bar-link " to={"/dashboard"}>
              <FontAwesomeIcon icon={faGaugeSimpleHigh} className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="side-bar-link" to={"/teams"}>
              <FontAwesomeIcon icon={faUsers} />
              <span>Teams</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="side-bar-link" to={"/employees"}>
              <FontAwesomeIcon icon={faUserTie} />
              <span>Employees</span>
            </NavLink>
          </div>
          <div>
            <NavLink className="side-bar-link" to={"/setting"}>
              <FontAwesomeIcon icon={faGear} className="icon" />
              <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
