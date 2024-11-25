import React, { useState } from "react";
import LeavePage from "./LeavePage";

const Leaves = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: "",
    leaveType: "",
    startDate: "",
    attachment: "",
    reason: "",
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

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Leaves List</h1>
          <div className="flex gap-5">
            <i className="fas fa-bell text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-envelope text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
            <i className="fas fa-user text-gray-700 text-xl cursor-pointer hover:text-gray-900"></i>
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <select className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all">Approved</option>
              <option value="option1">Reject</option>
              <option value="option2">Pending</option>
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
              Add New Leave
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
              Add New Leave
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Employee Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="employeeName"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Employee Name"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Leave Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="leaveType"
                    name="leaveType"
                    value={formData.leaveType}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Designation
                    </option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Maternity Leave">Maternity Leave</option>
                    <option value="Paternity Leave">Paternity Leave</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Attachment <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      onChange={handleInputChange}
                      className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="attachment"
                      className="absolute inset-y-0 right-3 flex items-center"
                    >
                      <i className="fas fa-paperclip text-gray-500"></i>
                    </label>
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Reason for Leave <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Reason for Leave"
                    required
                  />
                </div>

                <div className="col-span-2 text-center mt-6">
                  <button
                    type="submit"
                    className="w-20 py-2 text-gray font-semibold rounded-lg text-sm"
                    style={{
                      background: "rgba(164, 164, 164, 1)",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        <LeavePage />
      </div>
    </div>
  );
};

export default Leaves;
