import React, { useState } from "react";
import axios from "axios"; 

import apiConfig from "../apiConfig.jsx"; 

const Employee = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    phoneNumber: "",
    position: "",
    joiningDate: "",
    resume: null,
  });
  const [employeeData, setEmployeeData] = useState([
    {
      name: "Darlene Robertson",
      email: "michael.mitc@example.com",
      phone: "(603) 555-0123",
      position: "Team Lead",
      department: "Backend Development",
      joiningDate: "10/06/17",
    },
    {
      name: "Leslie Alexander",
      email: "felicia.reid@example.com",
      phone: "(229) 555-0109",
      position: "Intern",
      department: "Designer",
      joiningDate: "09/15/17",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        `${apiConfig.API_BASE_URL}/api/employees`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      
      console.log("Employee created:", response.data);

     
      setEmployeeData((prevData) => [...prevData, response.data]);

     
      setFormVisible(false);
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  const columns = [
    { header: "Profile", key: "profile", dataKey: "name" },
    { header: "Email Address", key: "text", dataKey: "email" },
    { header: "Phone Number", key: "text", dataKey: "phone" },
    { header: "Position", key: "text", dataKey: "position" },
    { header: "Department", key: "text", dataKey: "department" },
    { header: "Date of Joining", key: "text", dataKey: "joiningDate" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Employee List</h1>
          <div className="flex gap-5">
            <i className="fas fa-bell text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-envelope text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-user text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
          </div>
        </div>

        {/* Filter/Search Section */}
        <div className="flex space-x-4 mb-4">
          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">All</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <input
              type="text"
              placeholder="More Information"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <button
              onClick={() => setFormVisible(true)}
              className="w-full py-2 text-white font-semibold rounded-lg text-sm hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-500"
              style={{
                background: "linear-gradient(180deg, #783FED 0%, #442487 100%)",
              }}
            >
              Add New Employee
            </button>
          </div>
        </div>

        {formVisible && (
          <div className="mt-6">
            <div
              className="flex items-center justify-between py-3 px-4 rounded-lg text-white font-semibold text-sm"
              style={{
                background: "linear-gradient(180deg, #783FED 0%, #442487 100%)",
              }}
            >
              <h2 className="text-center flex-1">Add New Employee</h2>
              <button
                onClick={() => setFormVisible(false)}
                className="text-xl font-bold focus:outline-none"
                title="Close"
                style={{ background: "transparent" }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email address"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="department" className="text-sm font-medium text-gray-700">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Department"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="position" className="text-sm font-medium text-gray-700">
                    Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Position"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="joiningDate" className="text-sm font-medium text-gray-700">
                    Date of Joining <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="joiningDate"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                

                <div className="col-span-2 text-center mt-6 mb-4">
                  <button
                    type="submit"
                    className="w-20 py-2  text-gray font-semibold rounded-lg text-sm"
                    style={{
                      background: 'rgba(164, 164, 164, 1)',
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

       
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="text-sm font-semibold text-gray-700 bg-gray-100">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-4 py-3 text-left border-b border-gray-300"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employeeData.map((employee, index) => (
                <tr key={index} className="text-sm text-gray-700">
                  {columns.map((column) => (
                    <td key={column.key} className="px-4 py-3 border-b border-gray-300">
                      {employee[column.dataKey] || "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
