import React from "react";
import styled from "styled-components";
import profileImg from "../../images/categoryImg-Cemeras.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Wrapper>
      <div className="profile-container mt-5">
        <div className="profile-header">
          <img src={profileImg} alt="Profile" className="profile-picture" />
          <div className="profile-info">
            <h2>Imran Khan</h2>
            <p className="mb-0">imrankhan@gmail.com</p>
            <button className="profile_btn">
              <Link to="/updateprofile" className="linkk">
                Profile update
              </Link>
            </button>
          </div>
        </div>

        <div className="orders">
          <h2>Order History</h2>
          <ul>
            <li>
              <span>2023-06-01</span>
              <span>$50.00</span>
            </li>
            <li>
              <span>2023-06-01</span>
              <span>$30.00</span>
            </li>
            <li>
              <span>2023-06-01</span>
              <span>$70.00</span>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;
  .profile-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .profile-info h2 {
    margin: 0;
    font-size: 24px;
  }
  .profile-info p {
    margin: 5px 0 0 0;
    color: #888;
  }
  .orders {
    margin-top: 20px;
  }
  .orders h2 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .orders ul {
    list-style-type: none;
    padding: 0;
  }
  .orders li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .orders li:last-child {
    border-bottom: none;
  }
  .orders li span {
    font-size: 16px;
    color: #555;
  }
  .profile-info .linkk {
    text-decoration: none;
    color: inherit;
  }
  .profile_btn {
    border-radius: 4px;
    background-color: #f80000;
    color: #ffff;
    border: none;
    padding: 5px 8px;
    margin-top: 18px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .profile_btn:hover {
    background-color: #ce5353;
  }

  @media only screen and (max-width: 768px) {
    .profile-container {
      margin-bottom: 40px !important;
      max-width: 700px;
    }
  }
  @media only screen and (max-width: 425px) {
    margin-top: 160px !important;
    .profile-container {
      max-width: 400px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .profile-container {
      max-width: 350px !important;
    }
    .profile-header {
      display: flex;
      flex-direction: column !important;
      gap: 10px;
    }
    .profile-info {
      text-align: center;
    }
    .profile_btn {
      margin-top: 10px !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .profile-container {
      max-width: 300px !important;
    }
  }
`;

export default Profile;
