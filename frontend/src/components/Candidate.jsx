import React, { useState } from 'react';
import DashboardTable from './DashboardTable';

const Candidate = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    phoneNumber: '',
    experience: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  const columns = [
    { header: 'Sr no.', key: 'text', dataKey: 'srNo' },
    { header: 'Candidates Name', key: 'text', dataKey: 'name' },
    { header: 'Email Address', key: 'text', dataKey: 'email' },
    { header: 'Phone Number', key: 'text', dataKey: 'phone' },
    { header: 'Position', key: 'text', dataKey: 'position' },
    { header: 'Status', key: 'status', dataKey: 'status' },
    { header: 'Experience', key: 'text', dataKey: 'experience' },
    { header: 'Resume', key: 'text', dataKey: 'resume' }, 
  ];

  const candidatesData = [
    {
      srNo: '01',
      name: 'Floyd Miles',
      email: 'sara.cruz@example.com',
      phone: '(704) 555-0127',
      position: 'Designer Intern',
      status: 'New',
      experience: 'Fresher',
      resume: 'link_to_resume.pdf', 
    },
    // Add more candidate data here
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Candidates List</h1>

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
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white-100 rounded-lg w-1/4 h-24">
            <button
              onClick={() => setFormVisible(true)}
              className="w-full py-2 text-white font-semibold rounded-lg text-sm hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-500"
              style={{
                background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
              }}
            >
              Add New Candidate
            </button>
          </div>
        </div>

        {formVisible && (
          <div className="mt-6">
            <h2
              className="w-full py-3 text-white font-semibold rounded-lg text-sm text-center"
              style={{
                background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
              }}
            >
              Add New Candidate
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700">
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
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
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
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
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
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full mt-0 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

              
                <div className="col-span-2 mt-4 text-left">
                  <input
                    type="checkbox"
                    id="declaration"
                    name="declaration"
                    className="mr-2"
                    required
                  />
                  <label htmlFor="declaration" className="text-sm font-medium text-gray-700">
                    I declare that the above information is true and accurate.
                  </label>
                </div>

                 <div className="col-span-2 text-center mt-6">
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
      </div>

      
      <DashboardTable columns={columns} data={candidatesData} />
    </div>
  );
};

export default Candidate;
