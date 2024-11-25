import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen text-black flex flex-col" style={{ width: '230px', height: '442px', gap: '0px', opacity: '1', backgroundColor: 'white' }}>
      
      <div className="p-4 flex flex-col items-center">
        <div className="flex items-center mr-10">
          <i className="fas fa-user-circle text-gray-600 mr-3 text-3xl"></i> 
          <span className="text-xl font-semibold text-gray-800">Logo</span>
        </div>
      </div>
      
      <div className="p-4 relative">
        <div className="flex items-center bg-gray-200 rounded-[50px] w-full p-2">
          <i className="fas fa-search text-gray-600 mr-3"></i>
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-transparent text-black placeholder-gray-500 border-none outline-none"
          />
        </div>
      </div>

      <div className="flex-grow p-4">
        <ul className="space-y-4">
          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <Link to="/sidebar/requirement" className="text-black" style={{ color: 'rgba(164, 164, 164, 1)' }}>Requirement</Link>
          </li>
          
          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <i className="fas fa-user text-gray-600 mr-2"></i>
            <Link to="/sidebar/candidate" className="text-black">Candidate</Link>
          </li>
          
          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <Link to="/sidebar/organisation" className="text-black" style={{ color: 'rgba(164, 164, 164, 1)' }}>Organisation</Link>
          </li>

          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <i className="fas fa-users text-gray-600 mr-2"></i>
            <Link to="/sidebar/employee" className="text-black">Employee</Link>
          </li>

          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <i className="fas fa-calendar text-gray-600 mr-2"></i>
            <Link to="/sidebar/attendees" className="text-black">Attendees</Link>
          </li>

          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <i className="fas fa-folder text-gray-600 mr-2"></i>
            <Link to="/sidebar/leaves" className="text-black">Leaves</Link>
          </li>

          <li className="flex items-center hover:bg-gray-200 p-2 rounded" style={{ marginLeft: '15px' }}>
            <Link to="/sidebar/other" className="text-black" style={{ color: 'rgba(164, 164, 164, 1)' }}>Other</Link>
          </li>
        </ul>
      </div>

      <div className="p-4 mt-auto">
      <Link 
          to="/sidebar/logout"  
          className="w-full p-2 rounded text-black ml-1 hover:bg-gray-200"
          style={{ backgroundColor: 'white', border: '1px solid #ddd' }}
        >
          <i className="fas fa-sign-out-alt text-gray-600 mr-2"></i>
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
