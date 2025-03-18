/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSignOutAlt, FaSearch } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { GetUserRole } from "../services/Auth";

const NavBar = () => {
  const [role, setRole] = useState(null);
  const [show, setShow] = useState(false);

  /* Role Based Authorization */

  useEffect(() => {
    setRole(GetUserRole());
  }, []);

  const navigate = useNavigate();

  /* Logout Button */
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbarShow">
      <div className="container">
        <div className="logo">
          <img src="/JobZee-logos__white.png" alt="logo" />
        </div>
        <ul className="menu">
          {role && (
            <li>
              <Link to={"/"}> 🏡HOME</Link>
            </li>
          )}

          {role === "jobseeker" && (
            <li>
              <Link to={"/myprofile"}> 👤MY PROFILE </Link>
            </li>
          )}
          {role === "Employer" && (
            <li>
              <Link to={"/applicants"}> 📄APPLICATIONS </Link>
            </li>
          )}
          {role === "Employer" && (
            <li>
              <Link to={"/add/jobs"}> ➕ADD JOBS </Link>
            </li>
          )}
          {role === "Employer" && (
            <li>
              <Link to={"/update/jobs"}> 📲UPDATE JOBS </Link>
            </li>
          )}
          {role === "jobseeker" && (
            <li>
              <Link to={"/job/getall"}> 💼ALL JOBS </Link>
            </li>
          )}

          {role === "jobseeker" && (
            <li>
              <Link to={"/jobsearch"}>🔍JOB SEARCH </Link>
            </li>
          )}

          {role === "jobseeker" && (
            <li>
              <Link to={"/favorites"}>🔖BOOKMARKED JOBS</Link>
            </li>
          )}

          <button
            onClick={handleLogout}
            className="btn  btn-sm fw-bold text-uppercase shadow-sm py-2 px-3 rounded-pill d-flex align-items-center justify-content-center gap-2"
          >
            <FaSignOutAlt />
            LOGOUT
          </button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
