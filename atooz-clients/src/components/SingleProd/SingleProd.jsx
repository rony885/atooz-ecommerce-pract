import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleProd = ({ img, name, price, id }) => {
  return (
    <Wrapper>
      <Link to={`/product-details/${id}`} className="liinkk">
        <div
          style={{ height: "310px", backgroundColor: "#a70000" }}
          className="shadow d-flex justify-content-between flex-column singleprod"
        >
          <div className="iimmgg-container" style={{ position: "relative" }}>
            <img className="iimmgg" src={img} alt="" />
            <div className="overlay"></div>
          </div>

          <div className="d-flex justify-content-between align-items-center p-2">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0 tteexxtt1">{name}</h4>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0 tteexxtt2">{price}</h4>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .liinkk {
    text-decoration: none;
  }
  .tteexxtt1 {
    text-transform: uppercase !important;
    font-weight: 500;
    font-size: 12px;
    color: #ffff;
  }
  .tteexxtt2 {
    text-transform: uppercase !important;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
  }

  .iimmgg-container {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); /* Initial opacity 0 */
    transition: background-color 0.3s ease; /* Smooth transition */
  }

  .singleprod:hover .overlay {
    background-color: rgba(252, 215, 207, 0.356); /* Black overlay on hover */
  }
`;

export default SingleProd;
