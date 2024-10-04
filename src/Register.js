// src/components/Login.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "./studySpotr.png";
import {
  FaPlug,
  FaChalkboard,
  FaMapMarkerAlt,
  FaRegIdCard,
  FaVolumeDown,
  FaChevronDown,
  FaChevronUp,
  FaEye,
  FaEyeSlash,
  FaDoorOpen,
  FaDoorClosed,
  FaWifi,
  FaUserSlash,
  FaUser,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/fa";
import { FiAlertTriangle, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";
import logo from "./studySpotrLogo.png";
import { AnimatePresence } from "framer-motion";
import AlertPopUp from "./AlertPopUp";
import Input from "./Input";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState(null);
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null); // State to hold user data
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [message, setMessage] = useState(""); // State for storing messages
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const goToForm = () => {
    window.open("https://forms.gle/1c4DcSNjSDaxaHzF7", "_blank");
  };

  useEffect(() => {
    const userString = localStorage.getItem("user");

    const user = JSON.parse(userString);

    if (user != null) {
      setProfile(user);
    } else {
      setProfile(null);
    }
  }, []);

  const forgotPassword = (e) => {
    e.preventDefault(); // Prevents the form from submitting
    // Add your forgot password logic here
    console.log("Forgot password triggered");
  };

  useEffect(() => {
    // Check if passwords match
    if (password && passwordConfirm) {
      setPasswordMatch(password === passwordConfirm);
    }
  }, [password, passwordConfirm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleShowAlert();

    if (name == "" || name == "") {
      setMessage("Please enter your name!");
      return;
    }

    if (username == "" || username == "") {
      setMessage("Please enter a username!");
      return;
    }

    if (email == "" || email == "") {
      setMessage("Please enter your email!");
      return;
    }

    if (password == "" || password == "") {
      setMessage("Please enter a password!");
      return;
    }

    if (password != passwordConfirm) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/api/auth/register`,
        { name, username, email, password }
      );
      const user = {
        name: data.name,
        username: data.username,
        email: data.email,
        id: data._id,
      };

      localStorage.setItem("user", JSON.stringify(user));

      setMessage("");
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Login failed. Please try again.");
      }
      console.error("Login failed", error);
    }
  };

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="py-8 pl-0 lg:pt-0 lg:pl-10 flex flex-row">
      <AnimatePresence>
        {showAlert && message && (
          <AlertPopUp
            className={"top-3 right-2 h-max"}
            icon={
              message === "You don't have an account. Please sign up." ? (
                <FaUser />
              ) : message === "!" ? (
                <FaUserCheck />
              ) : message === "Email is invalid!" ? (
                <FaChalkboard />
              ) : (
                <FiAlertTriangle />
              )
            }
            message={message}
            onClose={handleCloseAlert}
          />
        )}
      </AnimatePresence>
      <div className="lg:w-2/5 w-full h-max lg:h-screen flex px-10 lg:px-32 flex-col justify-between bg-white mt-0 pt-0 gap-8 lg:gap-6 lg:py-20 pt-2 items-center lg:mt-0">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-2 lg:gap-16"
        >
          <h2 className="poppins-semibold flex flex-col gap-2 text-2xl lg:text-4xl w-full text-center">
            Register Now
            <p className="poppins-regular text-xs opacity-50">
              Enter your information below!
            </p>
          </h2>
          <div className="flex flex-col gap-4 lg:gap-6">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 rounded-none lg:text-md text-sm"
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-2 lg:text-md text-sm rounded-none"
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full  mt-2 lg:text-md text-sm rounded-none"
            />
            <div className="relative w-full">
              <Input
                type={showPassword ? "text" : "password"} // Toggle between text and password
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 lg:text-md text-sm rounded-none"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="relative w-full transition duration-300 ease-in-out">
              <Input
                type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full mt-2 lg:text-md text-sm rounded-none transition duration-300 ease-in-out" // Smooth transition for input
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer transition duration-300 ease-in-out" // Smooth transition for the eye icon
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <div className="transition-transform duration-300 ease-in-out">
                  {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                </div>
              </div>
            </div>

            <div className="h-0">
              {passwordConfirm !== "" && !passwordMatch && (
                <p className="poppins-light rounded-none text-sm text-red-500">
                  Passwords do not match
                </p>
              )}
            </div>
          </div>
          <button
            className="w-full poppins-medium bg-black transition duration-500 ease-in-out text-white mt-4 lg:hover:bg-white lg:hover:text-black buttonHover px-3 py-2 rounded-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="flex flex-center flex-col items-center justify-center">
          <p className="poppins-light text-sm lg:w-10/12 text-center">
            Take 3 minutes to complete a survey! It would be beyond useful and
            appreciated by the development and design team!
          </p>
          <button
            onClick={goToForm}
            className="w-1/2 poppins-medium bg-orange-500 transition duration-500 ease-in-out text-white mt-4 lg:hover:bg-black lg:hover:text-white buttonHover px-3 py-2 rounded-full"
          >
            Take survey
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-3/5 rounded-xl pr-20 h-screen">
        <img
          src={image}
          alt="background"
          className="w-full rounded-l-3xl h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Register;
