import React, { useState } from "react";
import ItImage from "../../assets/man.png";
import "./tabel.css";
const Tabel = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      img: ItImage,
      role: "software",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      id: 2,
      name: "Ahmed Ali",
      img: ItImage,
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: false,
    },
    {
      id: 2,
      name: "Ahmed Ali",
      img: ItImage,
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: false,
    },
    {
      id: 2,
      name: "Ahmed Ali",
      img: ItImage,
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: false,
    },
  ]);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

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
    setEmployees([
      ...employees,
      { ...newEmployee, id: employees.length + 1, active: true },
    ]);
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

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search employees"
          className="w-[80%] p-2 border rounded-2xl shadow-sm"
        />
        <button
          className="bg-[var(--main-color)] text-white px-4 py-2 rounded-2xl"
          onClick={() => setIsModalOpen(true)}
        >
          + New Employees
        </button>
      </div>

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
                <td className="p-4 flex items-center gap-3">
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
                    <span className="text-green-500">&#x2714;</span>
                  ) : (
                    <span className="text-red-500">&#x2716;</span>
                  )}
                </td>
                <td className="p-4">
                  <button className="text-red-500 hover:text-red-700">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            {step === 1 && (
              <>
                <h2 className="text-lg font-bold mb-4">Personal Data</h2>
                <div className="circle-steps flex justify-center  items-center">
                  <div className="personal">
                    <div className="fisrt-circle flex items-center gap-1">
                      <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
                      <hr className="border-t-2 border-blue-400 border-dashed w-[50px]" />
                    </div>
                    <p>personal data </p>
                  </div>
                  <div className="img">
                    <div className="seconed-circle flex items-center gap-1">
                      <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
                      <hr className="border-t-2 border-blue-400 border-dashed w-[50px]" />
                    </div>
                    <p>image</p>
                  </div>
                  <div className="preview">
                    <div className="third-circle flex">
                      <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
                    </div>
                    <p>preview </p>
                  </div>
                </div>
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
                  Start Date<span className="text-[var(--main-color)]">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  name="startDate"
                  className="w-full p-2 mb-2 border rounded-2xl focus:outline-none"
                  value={newEmployee.startDate}
                  onChange={handleInputChange}
                />
                <select
                  name="role"
                  className="w-full p-2 mb-2 border rounded-2xl focus:outline-none"
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
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-lg font-bold mb-4">Upload Image</h2>
                <div className="circle-steps flex justify-center  items-center p-3">
                  <div className="personal">
                    <div className="fisrt-circle flex items-center gap-1">
                      <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
                      <hr className="border-t-2 border-blue-400 border-dashed w-[50px]" />
                    </div>
                    <p>personal data </p>
                  </div>
                  <div className="img">
                    <div className="seconed-circle flex items-center gap-1">
                      <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
                      <hr className="border-t-2 border-blue-400 border-dashed w-[50px]" />
                    </div>
                    <p>image</p>
                  </div>
                  <div className="preview">
                    <div className="third-circle flex">
                      <span className="w-[30px] h-[30px] rounded-full bg-slate-400"></span>
                    </div>
                    <p>preview </p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-12 mb-4 border rounded img-btn "
                />
                {newEmployee.img && (
                  <img
                    src={newEmployee.img}
                    alt="Preview"
                    className="w-20 h-20 rounded-full mx-auto "
                  />
                )}
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="text-lg font-bold mb-4">Preview</h2>
                <p>
                  <strong>Name:</strong> {newEmployee.name}
                </p>
                <p>
                  <strong>Role:</strong> {newEmployee.role}
                </p>
                <p>
                  <strong>Email:</strong> {newEmployee.email}
                </p>
                <p>
                  <strong>Phone:</strong> {newEmployee.phone}
                </p>
                <p>
                  <strong>Start Date:</strong> {newEmployee.startDate}
                </p>
                {newEmployee.img && (
                  <img
                    src={newEmployee.img}
                    alt="Preview"
                    className="w-20 h-20 rounded-full mx-auto"
                  />
                )}
              </>
            )}

            <div className="flex justify-between mt-4">
              {step > 1 && (
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setStep(step - 1)}
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  className="px-7
                   py-2 bg-[var(--main-color)] text-white rounded-3xl"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded"
                  onClick={handleAddEmployee}
                >
                  Add Employee
                </button>
              )}
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabel;
