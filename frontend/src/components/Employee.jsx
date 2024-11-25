import React, { useState } from "react";
import DashboardTable from "./DashboardTable";
import EmployeePage from "./EmployeeTable";

const Employee = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    phoneNumber: "",
    position: "",
    joiningDate: "",  
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const columns = [
    { header: "Profile", key: "profile", dataKey: "name" },
    { header: "Email Address", key: "text", dataKey: "email" },
    { header: "Phone Number", key: "text", dataKey: "phone" },
    { header: "Position", key: "text", dataKey: "position" },
    { header: "Department", key: "text", dataKey: "department" },
    { header: "Date of Joining", key: "text", dataKey: "joiningDate" },
  ];

  const employeeData = [
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
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Employee List
          </h1>
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
            <h2
              className="w-full py-3 text-white font-semibold rounded-lg text-sm text-center"
              style={{
                background: "linear-gradient(180deg, #783FED 0%, #442487 100%)",
              }}
            >
              Add New Employee
            </h2>

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
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Team Lead">Team Lead</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Intern">Intern</option>
                    <option value="Designer">Designer</option>
                    <option value="Backend Developer">Backend Developer</option>
                  </select>
                </div>

                <div className="relative">
                  <label htmlFor="joiningDate" className="text-sm font-medium text-gray-700">
                    Joining Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="joiningDate"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <DashboardTable columns={columns} data={employeeData} />
      </div>
    </div>
  );
};

export default Employee;
