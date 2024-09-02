import { useState } from "react";
// import { useSelector } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [selectedRole, setSelectedRole] = useState("1");
  const [showPassword, setShowPassword] = useState(false);
  const [tooltip, setTooltip] = useState("");
  // const { isDarkMode } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleUserCreate() {}

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseEnter = (role) => {
    if (role === "Personal") {
      setTooltip("Individual account for personal use.");
    } else if (role === "Business") {
      setTooltip("Account for businesses and organizations.");
    }
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen p-6 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <form
        className={` p-8 rounded-lg shadow-lg w-full max-w-md relative ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <span
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Light
          </span>
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`w-10 h-6 flex items-center rounded-full ${
              isDarkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full transform transition-transform duration-300 ${
                isDarkMode ? "bg-yellow-300 translate-x-4" : "bg-yellow-500"
              }`}
            ></div>
          </button>
          <span
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Dark
          </span>
        </div>
        <h1
          className={`text-3xl font-semibold mb-6 text-center ${
            isDarkMode ? "text-gray-100" : "text-gray-700"
          }`}
        >
          Create an Account
        </h1>

        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          className={`border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"
          }`}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          className={`border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"
          }`}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={`border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"
          }`}
        />
        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          className={`border border-gray-300 rounded-md p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"
          }`}
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            className={`border border-gray-300 rounded-md p-3 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-white text-gray-900"
            }`}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon
                className={`w-5 h-5 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
            ) : (
              <EyeIcon
                className={`w-5 h-5 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
            )}
          </button>
        </div>

        <div className="relative mb-4">
          <select
            name="role"
            value={selectedRole}
            onChange={handleRoleChange}
            onMouseEnter={() =>
              handleMouseEnter(selectedRole === "1" ? "Personal" : "Business")
            }
            onMouseLeave={handleMouseLeave}
            className={`border border-gray-300 rounded-md p-3 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            }`}
          >
            <option
              value="1"
              className={`${isDarkMode ? "text-white" : "text-black"}`}
            >
              Personal
            </option>
            <option
              value="2"
              className={`${isDarkMode ? "text-white" : "text-black"}`}
            >
              Business
            </option>
          </select>
          {/* Tooltip */}
          {tooltip && (
            <span
              className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-full mt-2 w-[220px] ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-gray-100 text-gray-800"
              } text-center rounded-xl p-2 shadow-lg opacity-100 transition-opacity duration-300`}
            >
              {tooltip}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4 ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                } rotate-45`}
              ></span>
            </span>
          )}
        </div>
        <Link to="/" className="text-blue-500 hover:underline">
          have already account ?
        </Link>

        <button
          className={`bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition duration-200 w-full max-w-xs mx-auto ${
            isDarkMode ? "bg-orange-400" : "bg-orange-500"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};