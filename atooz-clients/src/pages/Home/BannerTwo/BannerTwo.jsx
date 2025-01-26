import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const BannerTwo = () => {
  return (
    <Wrapper>
      <div
        style={{ backgroundColor: "#ffff" }}
        className="Container_margin shadow-sm mb-4 px-4 py-4 rounded bannerTwo"
      >
        <div className="d-flex justify-content-between align-items-center row bbaanneerr">
          <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center align-items-center gap-3 flex-column ccoolll3">
            <TbTruckDelivery className="bannerTwo_icon" />
            <h3 className="m-0">Super Fast and Free Delivery</h3>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center align-items-center gap-3 flex-column ccoolll3">
            <BiShieldQuarter className="bannerTwo_icon" />
            <h3 className="m-0">Non-Contact Shipping</h3>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center align-items-center gap-3 flex-column ccoolll3">
            <GiReceiveMoney className="bannerTwo_icon" />
            <h3 className="m-0">Money-back Guaranteed</h3>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-center align-items-center gap-3 flex-column ccoolll3">
            <RiSecurePaymentLine className="bannerTwo_icon" />
            <h3 className="m-0">Super Secure Payment System</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .bannerTwo .bannerTwo_icon {
    font-size: 50px;
    color: #ee2a07e2;
  }
  .bannerTwo {
    margin-bottom: 1.5rem !important;
  }
  .bannerTwo h3 {
    font-size: 18px;
    text-align: center;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    .bbaanneerr {
      flex-direction: column !important;
    }

    .ccoolll3 {
      flex-direction: column !important;
      justify-content: space-evenly !important;
    }
  }

  @media only screen and (max-width: 425px) {
    .ccoolll3 {
      flex-direction: row !important;
      justify-content: flex-start !important;
    }

    .bannerTwo .bannerTwo_icon {
      font-size: 40px;
    }

    .bannerTwo h3 {
      font-size: 15px;
      margin: 15px !important;
    }
  }
`;

export default BannerTwo;
