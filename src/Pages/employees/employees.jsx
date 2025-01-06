import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/Nav/NavBar";
import Tabel from "../../components/Tabel/Tabel";
import { Outlet } from "react-router-dom";

const Employees = () => {
  return (
    <div className="users-parent flex">
      <SideBar />
      <div className="w-[100%] bg-[var(--backGroundColor)]">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Employees;
