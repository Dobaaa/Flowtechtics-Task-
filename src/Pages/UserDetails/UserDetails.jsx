import React from "react";
import { useParams } from "react-router-dom";
import { useEmployees } from "../../Context/EmployeesContext";

const UserDetails = () => {
  const { id } = useParams();
  const { employees } = useEmployees();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div>
      <h2>{employee.name}</h2>
      <img src={employee.img} alt={employee.name} />
      <p>Role: {employee.role}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
      <p>Start Date: {employee.startDate}</p>
      <p>Status: {employee.active ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default UserDetails;
