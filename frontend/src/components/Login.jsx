import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import okImage from "../assets/ok.png";
import API_BASE_URL from "../apiConfig.jsx";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginTimestamp = localStorage.getItem("loginTimestamp");
    if (loginTimestamp) {
      const timeElapsed = Date.now() - parseInt(loginTimestamp, 10);

      if (timeElapsed > 2 * 60 * 60 * 1000) {
        logout();
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/auth/login`,
        userCredentials
      );

      if (response.data.token) {
        setIsLoggedIn(true);
        navigate("/sidebar");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginTimestamp");
    alert("Session expired, please log in again");
    navigate("/login");
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-white py-8 relative">
      <i className="fas fa-user absolute top-[20px] left-[calc(20%-10px)] text-2xl mt-20 text-gray-600 transform -translate-x-1/2">
        Logo
      </i>

      <div
        className="flex flex-row justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden"
        style={{ width: "1200px", height: "640px" }}
      >
        <div className="flex items-center justify-center w-1/2 p-4 bg-white">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 border-0 border-gray-300 rounded-lg w-full sm:w-96"
          >
            <div className="text-lg font-semibold text-gray-900 mb-6">
              Welcome to Dashboard
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 text-sm border border-gray-300 rounded-md"
                placeholder="Enter your password"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 transform -translate-y-1/2 cursor-pointer -mt-6"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash text-gray-600"></i>
                ) : (
                  <i className="fas fa-eye text-gray-600"></i>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-md text-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Login
            </button>

            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
              </span>
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div
          className="flex flex-col items-center justify-center p-8"
          style={{
            width: "50%",
            height: "100%",
            borderRadius: "0px 20px 20px 0px",
            background: "linear-gradient(180deg, #783FED 0%, #442487 100%)",
          }}
        >
          <img
            src={okImage}
            alt="OK"
            className="mb-6"
            style={{ margin: "10px 10px 0 10px" }}
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome Back</h1>
            <p className="text-lg text-white">
              Please login to access your dashboard and continue using our
              services.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
