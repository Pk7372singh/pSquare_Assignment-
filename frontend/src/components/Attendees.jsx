import React, { useState } from "react";
import axios from 'axios';
import DashboardTable from "./DashboardTable";

const Attendees = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    phoneNumber: "",
    experience: "",
    resume: null,
  });

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
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('department', formData.department);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('resume', formData.resume);

      const response = await axios.post('http://localhost:5000/api/attendances', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Response from server: ", response.data);
      setFormVisible(false); 
    } catch (error) {
      console.error("Error submitting the form: ", error);
    }
  };

  const columns = [
    { header: "Profile", key: "profile", dataKey: "name" },
    { header: "Designation", key: "text", dataKey: "designation" },
    { header: "Department", key: "text", dataKey: "department" },
    { header: "Task", key: "text", dataKey: "task" },
    { header: "Status", key: "status", dataKey: "status" },
  ];

  const employeesData = [
    {
      name: "Darlene Robertson",
      designation: "Team Lead",
      department: "Backend Development",
      task: "Mobile Login page integration",
      status: "Work from home",
    },
    // Add more employee data here
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Attendees List</h1>
          <div className="flex gap-5">
            <i className="fas fa-bell text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-envelope text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-user text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
          </div>
        </div>

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
              Add New Attendee
            </button>
          </div>
        </div>

        {formVisible && (
          <div className="mt-6 relative">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={() => setFormVisible(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <h2
              className="w-full py-3 text-white font-semibold rounded-lg text-sm text-center"
              style={{
                background: "linear-gradient(180deg, #783FED 0%, #442487 100%)",
              }}
            >
              Add New Attendee
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="text-sm font-semibold">
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

                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email <span className="text-red-500">*</span>
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

                <div>
                  <label htmlFor="department" className="text-sm font-semibold">
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

                <div>
                  <label htmlFor="phoneNumber" className="text-sm font-semibold">
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

                <div>
                  <label htmlFor="experience" className="text-sm font-semibold">
                    Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Experience"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="text-sm font-semibold">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
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
        <DashboardTable columns={columns} data={employeesData} />
      </div>
    </div>
  );
};

export default Attendees;
