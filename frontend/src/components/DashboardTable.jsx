import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const statusStyles = {
    'Present': 'bg-green-100 text-green-600',
    'Absent': 'bg-red-100 text-red-600',
    'Medical Leave': 'bg-yellow-100 text-yellow-600',
    'Work from home': 'bg-blue-100 text-blue-600',
    'Rejected': 'bg-red-100 text-red-600',
    'Selected': 'bg-purple-100 text-purple-600',
    'Scheduled': 'bg-yellow-100 text-yellow-600',
    'New': 'bg-gray-100 text-gray-600',
    'Ongoing': 'bg-green-100 text-green-600'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
};

const ProfileCell = ({ image, name }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img src="/api/placeholder/32/32" alt={name} className="w-full h-full object-cover" />
    </div>
    <span className="font-medium text-gray-900">{name}</span>
  </div>
);

const DashboardTable = ({ columns, data, type = 'employees' }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-purple-700 text-white">
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-3 text-left text-sm font-medium">
                  {column.header}
                </th>
              ))}
              <th className="px-6 py-3 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <TableRow key={rowIndex} columns={columns} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow = ({ columns, row }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleEdit = () => {
   
    console.log('Edit clicked for', row);
  };

  const handleDelete = () => {
   
    console.log('Delete clicked for', row);
  };

  return (
    <tr className="hover:bg-gray-50">
      {columns.map((column, colIndex) => (
        <td key={colIndex} className="px-6 py-4 text-sm text-gray-700">
          {column.key === 'profile' ? (
            <ProfileCell image={row.image} name={row[column.dataKey]} />
          ) : column.key === 'status' ? (
            <StatusBadge status={row[column.dataKey]} />
          ) : (
            row[column.dataKey]
          )}
        </td>
      ))}
      <td className="px-6 py-4 text-right">
        <button className="text-gray-400 hover:text-gray-600" onClick={toggleMenu}>
          <MoreVertical size={20} />
        </button>

     
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
            <ul>
              <li
                onClick={handleEdit}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Edit
              </li>
              <li
                onClick={handleDelete}
                className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </td>
    </tr>
  );
};

export default DashboardTable;
