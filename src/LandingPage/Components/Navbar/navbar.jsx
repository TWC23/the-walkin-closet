// react imports
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// asset imports
import { bag, Profile, favorite, search, logo, walkincloset, UpdatedLogo } from '../../../assets/index';

// component imports
import DropdownMenu from "../DropdownMenu/dropdown";

// css imports
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const notify = () => toast.info("Coming soon!");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <a href="/" onClick={() => navigate("/")}>
        <img src={UpdatedLogo} alt="TWC logo" className="logo-img" />
      </a>
      <ul>
        <li>
          <a href="#" onClick={notify}>
            Men
          </a>
        </li>
        <li>
          <a href="#" onClick={notify}>
            Women
          </a>
        </li>
        <li>
          <a href="#" onClick={notify}>
            Blog
          </a>
        </li>
        <li>
          <a href="#" onClick={notify}>
            Originals
          </a>
        </li>
        <li>
          <a href="#" onClick={notify}>
            Boutique Boulevard
          </a>
        </li>
        <li>
          <a href="#" onClick={notify}>
            Rentals
          </a>
        </li>
        <li>
          <a href="/bulk-order" onClick={() => navigate("/bulk-order")}>
            College Merch
          </a>
        </li>
        <li>
          <div
            className="menu"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <img src={Profile} alt="" />
            {/* <DropdownMenu /> */}
            {isDropdownOpen && <DropdownMenu />}
          </div>
        </li>
      </ul>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />

      {/* <ul>
        <li>
          <img src={search} alt="" />
        </li>

        <li>
          <img src={favorite} alt="" />
        </li>
        <li>
          <img src={bag} alt="" />
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
