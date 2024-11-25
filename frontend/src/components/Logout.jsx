import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/register');
  };

  const handleCancel = () => {
    
    navigate('/sidebar');
   
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="min-m-screen flex items-center justify-center bg-white">
      <div className="pb-5 bg-white rounded-lg text-center">
     
        <h1
          className="text-2xl font-semibold text-white mb-6 p-2"
          style={{
            background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
            width: '1200px',
            height: '54px',
            borderRadius: '20px 20px 20px 20px',
            gap: '0px',
            display: 'inline-block',
          }}
        >
          Logout Page
        </h1>
        <h2 className="text-xl text-black mb-6">Are you sure you want to log out?</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleLogout}
            className="py-2 px-6 text-white font-semibold rounded-full text-sm hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-500"
            style={{
              background: 'linear-gradient(180deg, #783FED 0%, #442487 100%)',
            }}
          >
            Logout
          </button>
          <button
            onClick={handleCancel}
            className="py-2 px-6 text-gray-700 font-semibold rounded-full text-sm hover:bg-gray-500"
            style={{
              background: 'rgba(164, 164, 164, 1)',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
