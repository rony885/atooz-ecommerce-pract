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

const Header = ({ OpenSidebar, c_user, dhandleLogout }) => {
  const [acDropdownOpen, setAcDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  console.log(c_user.image)
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
            {c_user.image !== null && c_user.image ? (
              <div className="d-flex align-items-center justify-content-center gap-3">
                <img
                  className="rounded-circle header-profile-user"
                  src={`${process.env.REACT_APP_BASE_URL}${c_user.image}`}
                  alt="Header Avatar"
                  width={35}
                  height={35}
                />
                <div className="d-flex flex-column">
                  <span style={{ fontSize: "12px" }}>{c_user.name}</span>
                  <span style={{ fontSize: "12px" }}>
                    Admin&nbsp;/&nbsp;Staff
                  </span>
                </div>
              </div>
            ) : (
              <BsPersonCircle className="icon" />
            )}
            {/* <BsPersonCircle className="icon" />
            <span>Admin</span> */}
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
