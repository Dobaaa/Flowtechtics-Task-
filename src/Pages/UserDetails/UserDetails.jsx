import React from "react";
import { useParams } from "react-router-dom";
import { useEmployees } from "../../Context/EmployeesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const UserDetails = () => {
  const { id } = useParams();
  const { employees } = useEmployees();
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  return (
    <div className="p-3">
      <div className="employ-head p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <strong>
            Employees <FontAwesomeIcon icon={faAngleRight} />
          </strong>
          <h2>{employee.name}</h2>
        </div>
        <button className="bg-[var(--main-color)] text-[var(--seconed-color)] p-3 rounded-3xl">
          Edit employee
        </button>
      </div>

      <div className="personal bg-[var(--seconed-color)]  rounded-2xl p-5">
        <h3 className="bg-[var(--LightGray)] rounded-lg p-2 mb-2">Summary</h3>
        <div className="sumary w-[50%] ">
          <div className="sumary-info flex items-center justify-between ">
            <span className="key">Employee</span>
            <div className="flex items-center">
              <img
                src={employee.img}
                alt={employee.name}
                className="w-10 h-10 rounded-full mx-auto"
              />
              <h2>{employee.name}</h2>
            </div>
          </div>
          <div className="sumary-info flex items-center justify-between ">
            <span className="key">Role</span>
            <div className="flex items-center">
              <h2>{employee.role}</h2>
            </div>
          </div>
          <div className="sumary-info flex items-center justify-between ">
            <span className="key">E-mail</span>
            <div className="flex items-center">
              <h2>{employee.email}</h2>
            </div>
          </div>
          <div className="sumary-info flex items-center justify-between ">
            <span className="key">Phone</span>
            <div className="flex items-center">
              <h2>{employee.phone}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="more-details  flex justify-evenly p-4">
        <div className="date w-[40%] bg-[var(--seconed-color)]  rounded-2xl">
          <h4 className="bg-[var(--LightGray)] rounded-lg p-2">Date</h4>
          <div className="p-3 flex  items-center gap-7">
            <span>Start Date</span>
            <h4> {employee.startDate}</h4>
          </div>
        </div>
        <div className="Active w-[40%] bg-[var(--seconed-color)]  rounded-2xl">
          <h4 className="bg-[var(--LightGray)] rounded-lg p-2">Active</h4>
          <div className="p-3 flex  items-center gap-7">
            <span>Status</span>
            <label class="cursor-pointer ">
              <input
                type="checkbox"
                value={employee.active}
                class="sr-only peer"
              />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
