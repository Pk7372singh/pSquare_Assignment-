import React from 'react';
import DashboardTable from './DashboardTable';
import { MoreVertical } from 'lucide-react';

const EmployeePage = () => {
  const columns = [
    { header: 'Profile', key: 'profile', dataKey: 'name' },
    { header: 'Email Address', key: 'text', dataKey: 'email' },
    { header: 'Phone Number', key: 'text', dataKey: 'phone' },
    { header: 'Position', key: 'text', dataKey: 'position' },
    { header: 'Department', key: 'text', dataKey: 'department' },
    { header: 'Date of Joining', key: 'text', dataKey: 'joiningDate' }
  ];

  const employeeData = [
    {
      name: 'Darlene Robertson',
      email: 'michael.mitc@example.com',
      phone: '(603) 555-0123',
      position: 'Team Lead',
      department: 'Backend Development',
      joiningDate: '10/06/17'
    },
    {
      name: 'Leslie Alexander',
      email: 'felicia.reid@example.com',
      phone: '(229) 555-0109',
      position: 'Intern',
      department: 'Designer',
      joiningDate: '09/15/17'
    },
    {
      name: 'Ronald Richards',
      email: 'debra.holt@example.com',
      phone: '(907) 555-0101',
      position: 'Senior designer',
      department: 'Backend Development',
      joiningDate: '12/04/17'
    },
    {
      name: 'Theresa Webb',
      email: 'alma.lawson@example.com',
      phone: '(303) 555-0105',
      position: 'Junior Developer',
      department: 'Employee Name',
      joiningDate: '11/07/16'
    },
    {
      name: 'Cody Fisher',
      email: 'tanya.hill@example.com',
      phone: '(302) 555-0107',
      position: 'Full Time',
      department: 'Designer',
      joiningDate: '06/19/14'
    },
    {
      name: 'Devon Lane',
      email: 'nevaeh.simmons@example.com',
      phone: '(319) 555-0115',
      position: 'Full Time',
      department: 'Designer',
      joiningDate: '05/30/14'
    }
  ];

  
  const ActionMenu = () => (
    <div className="relative group">
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical size={20} />
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
        <div className="py-1">
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Edit
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Employees</h1>
      </div>
      
      <DashboardTable 
        columns={columns} 
        data={employeeData}
        type="employees"
        renderActions={() => <ActionMenu />}
        showCheckbox={true}
      />
    </div>
  );
};


export default EmployeePage;