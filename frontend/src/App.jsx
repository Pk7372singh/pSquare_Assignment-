import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Employee from './components/Employee';
import Attendees from './components/Attendees';
import Leaves from './components/Leaves';
import Candidate from './components/Candidate';
import Logout from './components/Logout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterComplete, setIsRegisterComplete] = useState(false);
  const [showLogoutPage, setShowLogoutPage] = useState(false);

  const handleCloseLogoutPage = () => {
    setShowLogoutPage(false);
  };

  const handleLogoutButtonClick = () => {
    setShowLogoutPage(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register setIsRegisterComplete={setIsRegisterComplete} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/sidebar/*"
          element={
            isLoggedIn ? (
              <div className="flex">
                <Sidebar />
                <div className="flex-1 p-6 bg-gray-100 min-h-screen ml-[230px]">
                  <Routes>
                    <Route path="employee" element={<Employee />} />
                    <Route path="attendees" element={<Attendees />} />
                    <Route path="leaves" element={<Leaves />} />
                    <Route path="candidate" element={<Candidate />} />
                    <Route path="logout" element={<Logout onClose={handleCloseLogoutPage} />} />
                  </Routes>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/sidebar" />} />
      </Routes>
      {showLogoutPage && <Logout onClose={handleCloseLogoutPage} />}
    </Router>
  );
};

export default App;
