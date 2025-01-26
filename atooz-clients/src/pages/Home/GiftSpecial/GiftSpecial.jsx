import React from "react";
import styled from "styled-components";
import { FaGift } from "react-icons/fa";

const GiftSpecial = () => {
  return (
    <>
      <Wrapper>
        <div className="Container_margin px-3 py-4 rounded giftt mb-4">
          <div className="row main_gift">
            <div className="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center gap-3 left-part">
              <FaGift className="fs-1 text-danger iiccoonn" />
              <h2 className="fs-4 m-0 text-danger">Gift Special</h2>
            </div>

            <div className="col-lg-7 col-sm-12 d-flex justify-content-between align-items-center middle_part">
              <h2 className="fw-semibold fs-6 m-0">
                Wrap new offers / gift every single day on weekends - New Coupon
                code: <span className="year">Happy 2024</span>
              </h2>
            </div>

            <div className="col-lg-2 col-sm-12 d-flex justify-content-between align-items-center right_part">
              <button className="button">Get Coupon</button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .giftt {
    background-color: #070f2b;
    color: #ffff;
    transition: 0.8s ease-in-out;
  }
  .giftt .year {
    color: #f71f03;
  }
  .giftt .button {
    background-color: #ff1100;
    color: #ffff;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 18px;
    padding: 5px 10px;

    font-weight: 600;
    transition: 0.4s ease-in-out;
  }
  .giftt:hover {
    background-color: #0b1844 !important;
  }

  .giftt:hover .button {
    transform: scale(1.2);
  }
  .giftt:hover .iiccoonn {
    transform: scale(1.2);
  }

  .giftt .button:hover {
    background-color: #fa6262;
    color: #070f2b;
  }

  @media only screen and (max-width: 769px) {
    .col-sm-12 {
      margin-bottom: 1.5rem !important;
    }
    .giftt .main_gift {
      flex-direction: column;
      text-align: left !important;
    }
    .left-part {
      justify-content: flex-start !important;
    }
    .left-part,
    .right_part,
    .middle_part,
    .button {
      text-align: left !important;
    }
  }
  @media only screen and (max-width: 769px) {
    .giftt {
      margin-bottom: 1.5rem !important;
    }
  }
`;

export default GiftSpecial;
