import React, { useState } from "react";
import "./tabel.css";
/* FontAwesome Icons  */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faRetweet,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import PopupCircle from "../popupCircle/popupCircle";
import { useNavigate } from "react-router-dom";
/* use Context to get  Data */
import { useEmployees } from "../../Context/EmployeesContext";

const Tabel = () => {
  const { employees, setEmployees } = useEmployees(); // use Context to acsses Data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // To track steps in the modal
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    img: null,
    role: "",
    email: "",
    phone: "",
    startDate: "",
    active: true,
  });
  const navigate = useNavigate();

  //make currebt value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };
  // image function
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewEmployee({ ...newEmployee, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEmployee = () => {
    // Check if all fields are filled
    if (
      !newEmployee.name ||
      !newEmployee.img ||
      !newEmployee.role ||
      !newEmployee.email ||
      !newEmployee.phone ||
      !newEmployee.startDate
    ) {
      alert("Please fill in all the required fields.");
      return; // Don't proceed if any field is empty
    }

    // Add employee if all fields are filled
    const updatedEmployee = {
      ...newEmployee,
      id: employees.length + 1,
      active: true,
    };
    setEmployees((prevEmployees) => {
      const updatedList = [...prevEmployees, updatedEmployee];
      navigate(`/employee/${updatedEmployee.id}`);
      return updatedList;
    });
    setIsModalOpen(false);
    setStep(1);
    setNewEmployee({
      name: "",
      img: null,
      role: "",
      email: "",
      phone: "",
      startDate: "",
      active: true,
    });
  };

  //handel delete
  const handleDeleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (confirmDelete) {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    }
  };
  // move to details Page
  const handleUserClick = (id) => {
    navigate(`/employee/${id}`); // انتقل إلى صفحة التفاصيل مع تمرير الـ ID
  };
  return (
    <div className="p-6">
      {/* tabel head*/}
      <div className="flex items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search employees"
          className="w-[80%] p-2 border rounded-2xl shadow-sm"
        />
        <button
          className="bg-[var(--main-color)] text-white px-4 py-2 rounded-2xl text-xs md:text-lg whitespace-nowrap"
          onClick={() => setIsModalOpen(true)}
        >
          + New Employees
        </button>
      </div>
      {/* tabel */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <th className="p-4">Employee</th>
              <th className="p-4">Role</th>
              <th className="p-4">E-Mail</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">Active</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="text-sm text-gray-700 hover:bg-gray-50"
              >
                <td
                  className="p-4 flex items-center gap-3"
                  onClick={() => handleUserClick(employee.id)}
                >
                  <img
                    src={employee.img}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  {employee.name}
                </td>
                <td className="p-4">{employee.role}</td>
                <td className="p-4">{employee.email}</td>
                <td className="p-4">{employee.phone}</td>
                <td className="p-4">{employee.startDate}</td>
                <td className="p-4">
                  {employee.active ? (
                    <span className="bg-green-500 text-[var(--seconed-color)]  tabel-icon p-1 rounded-full">
                      &#x2714;
                    </span>
                  ) : (
                    <span className="bg-red-500 text-[var(--seconed-color)] tabel-icon p-1  rounded-full">
                      &#x2716;
                    </span>
                  )}
                </td>
                <td className="p-4">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteEmployee(employee.id)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Popup Area*/}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] popup-box">
            {step === 1 && (
              <>
                <h2 className="text-lg font-bold mb-4">Personal Data</h2>
                <PopupCircle
                  FirstCircle="bg-[var(--main-color)] "
                  SeconedCircle="bg-gray-300  "
                  ThirdCircle="bg-gray-300  "
                />
                <div className="personal-inpts">
                  <label htmlFor="name">
                    name<span className="text-[var(--main-color)]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="enter employee name"
                    className="w-full p-2 mb-2 border rounded-2xl focus:outline-none"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="date">
                    Start Date
                    <span className="text-[var(--main-color)]">*</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="startDate"
                    className="w-full p-2 mb-2 border rounded-2xl focus:outline-none"
                    value={newEmployee.startDate}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="date">
                    Role
                    <span className="text-[var(--main-color)]">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full p-2  border rounded-2xl focus:outline-none mb-[25px]"
                    value={newEmployee.role}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="IT">IT</option>
                    <option value="Software">Software</option>
                    <option value="Data Entry">Data Entry</option>
                  </select>

                  <label htmlFor="email">
                    E-mail
                    <span className="text-[var(--main-color)]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 mb-2 border rounded-2xl focus:outline-none"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="phone">
                    Phone
                    <span className="text-[var(--main-color)]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-2 mb-2 border rounded-2xl focus:outline-none"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-lg font-bold mb-4">Upload Image</h2>
                <PopupCircle
                  FirstCircle="bg-gray-300  "
                  SeconedCircle="bg-[var(--main-color)] "
                  ThirdCircle="bg-gray-300 "
                />
                <div className="image-upload-inpt text-center">
                  {newEmployee.img ? (
                    <div className="flex justify-center gap-3 items-center">
                      <img
                        src={newEmployee.img}
                        alt="Preview"
                        className="w-40 h-20 rounded-3xl "
                      />
                      <div className="img-info ">
                        <h4>image.png</h4>
                        <div className="img-action flex gap-2">
                          <div className=" flex items-center gap-2 text-[var(--LightGray)]">
                            <FontAwesomeIcon
                              icon={faRetweet}
                              className="text-[var(--main-color)]"
                            />
                            <label
                              htmlFor="changee"
                              className="cursor-pointer z-10"
                            >
                              change
                            </label>
                            <input
                              id="changee"
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="w-full p-12 mb-4 border rounded img-btn "
                            />
                          </div>
                          <button
                            className=" flex items-center gap-2 text-[var(--LightGray)]"
                            onClick={() =>
                              setNewEmployee((prev) => ({ ...prev, img: null }))
                            }
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="text-[var(--main-color)]"
                            />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faImage}
                        className="text-[var(--main-color)] text-2xl p-3"
                      />
                      <label htmlFor="file" className="custom-label">
                        + Add image
                      </label>
                      <input
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-12 mb-4 border rounded img-btn "
                      />
                    </>
                  )}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="text-lg font-bold mb-4">Add New employees </h2>
                <PopupCircle
                  FirstCircle="bg-gray-300  "
                  SeconedCircle="bg-gray-300  "
                  ThirdCircle="bg-[var(--main-color)] "
                />
                <div className="preview-info text-start  p-4 mb-6">
                  <h3 className="bg-[var(--LightGray)] rounded-lg p-2 mb-2">
                    Summary
                  </h3>
                  <p className="flex justify-between  items-center">
                    <span>Employee:</span>
                    <div
                      className="flex items-center
                    "
                    >
                      {newEmployee.img && (
                        <img
                          src={newEmployee.img}
                          alt="Preview"
                          className="w-10 h-10 rounded-full mx-auto"
                        />
                      )}
                      {newEmployee.name}
                    </div>
                  </p>
                  <p className="flex  items-center justify-between ">
                    <span>Role:</span> {newEmployee.role}
                  </p>
                  <p className="flex  items-center justify-between">
                    <span>E-mail:</span> {newEmployee.email}
                  </p>
                  <p className="flex  items-center justify-between">
                    <span>Phone:</span> {newEmployee.phone}
                  </p>
                </div>
                <div className="preview-option flex justify-between p-4 mb-8">
                  <div className="date w-[40%]">
                    <h4 className="bg-[var(--LightGray)] rounded-lg p-2">
                      Date
                    </h4>
                    <p className="flex mt-2  items-center justify-between">
                      <span>Start Date:</span> {newEmployee.startDate}
                    </p>
                  </div>
                  <div className="active w-[50%]">
                    <h4 className="bg-[var(--LightGray)] rounded-lg p-2">
                      Active
                    </h4>
                    <label class="inline-flex gap-4 items-center cursor-pointer mt-2">
                      <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        active
                      </span>
                      <input
                        type="checkbox"
                        value={newEmployee.active}
                        class="sr-only peer"
                      />
                      <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button
                  className="px-4 py-2 bg-transparent border border-gray-300 rounded-2xl text-gray-400 absolute bottom-2 "
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  className="px-7
                   py-2 bg-[var(--main-color)] text-white rounded-3xl absolute bottom-2 right-2 "
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-[var(--main-color)] text-white rounded-2xl absolute bottom-2 right-2"
                  onClick={handleAddEmployee}
                >
                  Apply
                </button>
              )}
              <button
                className="px-4 py-2  cancel"
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabel;
