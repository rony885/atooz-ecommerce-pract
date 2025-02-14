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
// `;

export default Header;
