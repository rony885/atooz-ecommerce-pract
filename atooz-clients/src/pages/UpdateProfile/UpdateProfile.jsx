import React from "react";
import styled from "styled-components";

const UpdateProfile = () => {
  return (
    <Wrapper>
      <div className="profupdate-container mt-5">
        <h1>Update Profile</h1>

        <form className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>

          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input type="file" id="profilePicture" name="profilePicture" />
          </div>

          <button type="submit" className="submit-btn">
            Update Profile
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;
  .profupdate-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }

  h1 {
    font-size: 30px;
    text-align: center;
    color: #333;
    font-weight: 700;
    font-family: serif;
  }

  .profile-form {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    font-family: serif;
  }

  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="password"],
  .form-group input[type="file"] {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline-color: #f80000;
  }

  .submit-btn {
    padding: 10px;
    color: #fff;
    background-color: #f80000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.4s all ease-in-out;
  }

  .submit-btn:hover {
    background-color: #ce5353;
  }
  @media only screen and (max-width: 768px) {
    .profupdate-container {
      margin-bottom: 40px !important;
    }
  }
  @media only screen and (max-width: 425px) {
    margin-top: 160px !important;
    .profupdate-container {
      max-width: 350px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .profupdate-container {
      max-width: 320px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .profupdate-container {
      max-width: 300px !important;
    }
  }
`;

export default UpdateProfile;
