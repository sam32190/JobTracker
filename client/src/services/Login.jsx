import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Handles login submission
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }

    // Using try & catch for error handling
    try {
      const response = await axios.post(
        "https://localhost:7279/api/Auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/"); // Redirects to the specified path
      } else {
        toast.error("Login successful, but no token received!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Check the console."
      );
    }
  };

  return (
    <>
      <Toaster position="top-center" autoclose={3000} />
      <section className="authPage">
        <div className="container">
          {/* Header section with logo and title */}

          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Login to your account</h3>
          </div>

          {/* Login form */}

          <form onSubmit={handleLogin}>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit">Login</button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>

        {/* Banner section */}
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
  );
};

export default Login;
