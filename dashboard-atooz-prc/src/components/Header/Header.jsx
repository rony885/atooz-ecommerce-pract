import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
import "./header.css";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

const Header = ({ OpenSidebar }) => {
  const [acDropdownOpen, setAcDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setAcDropdownOpen(!acDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAcDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <Wrapper>
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>

      <div className="header-left">
        <BsSearch className="icon" />
      </div>

      <div className="header-right">
        <BsFillBellFill className="icon" />
        <BsFillEnvelopeFill className="icon" />

        <div
          className="account-icon d-flex justify-content-center align-items-center"
          ref={dropdownRef}
        >
          <div
            onClick={toggleDropdown}
            className="d-flex justify-content-center align-items-center"
          >
            <BsPersonCircle className="icon" />
            <span>Admin</span>
          </div>

          {acDropdownOpen && (
            <ul className="dropDown">
              <li>Profile</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </header>
    //  </Wrapper>
  );
};

// const Wrapper = styled.section`
//   .grid-container {
//     display: grid;
//     grid-template-columns: 250px 1fr;
//     grid-template-rows: 60px 1fr;
//     grid-template-areas:
//       "sidebar header"
//       "sidebar main";
//     height: 100vh;
//   }
//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     /* padding: 10px 20px; */
//     /* background-color: #333; */
//     background-color: #2e7d32;
//     color: white;
//   }
//   .header-right {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .menu-icon .icon,
//   .header-left .icon,
//   .header-right .icon {
//     font-size: 20px;
//     cursor: pointer;
//     /* margin: 0 10px; */
//     /* margin: 0 20px; */
//     margin: 0 6px;
//   }

//   .account-icon {
//     position: relative;
//   }

//   .dropDown {
//     position: absolute;
//     top: 100%;
//     right: 0;
//     background-color: white;
//     color: black;
//     list-style: none;
//     padding: 10px 0;
//     margin: 0;
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//     border-radius: 5px;
//     z-index: 1000;
//     text-align: center;
//     margin-left: 50px;
//   }

//   .dropDown li {
//     padding: 5px 20px;
//     cursor: pointer;
//   }

//   .dropDown li:hover {
//     background-color: #f0f0f0;
//   }
// `;

export default Header;
