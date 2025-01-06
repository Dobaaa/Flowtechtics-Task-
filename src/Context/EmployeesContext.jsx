import React, { createContext, useContext, useState } from "react";
import ItImage from "../assets/man.png";

const EmployeesContext = createContext();

export const useEmployees = () => useContext(EmployeesContext);

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      img: ItImage,
      role: "Software",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      id: 2,
      name: "Ali Ahmed",
      img: ItImage,
      role: "IT",
      email: "example2@gmail.com",
      phone: "013154854842",
      startDate: "25/12/2024",
      active: false,
    },
    // More employees...
  ]);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
