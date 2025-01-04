import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/Nav/NavBar";
import Tabel from "../../components/Tabel/Tabel";

const Employees = () => {
  return (
    <div className="users-parent flex">
      <SideBar />
      <div className="w-[100%] bg-[var(--backGroundColor)]">
        <NavBar />
        <Tabel />
      </div>
    </div>
  );
};

export default Employees;