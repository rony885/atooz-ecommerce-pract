import React from "react";
import styled from "styled-components";
import { FaMoneyBill1 } from "react-icons/fa6";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { TbMessageLanguage } from "react-icons/tb";
import { TbCoinTaka } from "react-icons/tb";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import ban from "../../images/ban.png";
import eng from "../../images/eng.png";

const Header = () => {
  return (
    <Wrapper>
      <div style={{ backgroundColor: "#a70000" }} className="header ">
        <div className="row Container_margin">
          <div className="col-2"></div>

          <div className="col-10 text-right px-0 mx-0">
            <div className="main-header d-flex justify-content-end align-items-center gap-4">
              <div className="d-flex justify-content-center align-items-center gap-1 divv normal">
                <FaMoneyBill1 className="text-white" />
                <h4 className="text-white text-center m-0">Cash On Delivery</h4>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-1 divv normal">
                <FaExchangeAlt className="text-white" />
                <h4 className="text-white text-center m-0">
                  Fast Delivery and exchange{" "}
                </h4>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-1 divv normal">
                <FaRegCheckCircle className="text-white" />
                <h4 className="text-white text-center m-0">100% Genuine</h4>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-1 divv dropdown-container">
                <FaMoneyCheckDollar className="text-white" />
                <h4 className="text-white text-center m-0">Money</h4>
                <div className="dropdown-content">
                  <div className="d-flex align-items-center gap-2">
                    <TbCoinTaka className="" />
                    <h5 className="m-0 text-dark">Taka</h5>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <HiOutlineCurrencyRupee className="" />
                    <h5 className="m-0 text-dark">Rupee</h5>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <BiDollarCircle className="" />
                    <h5 className="m-0 text-dark">Dollar</h5>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center gap-1 divv dropdown-container ">
                <TbMessageLanguage className="text-white" />
                <h4 className="text-white text-center m-0">Language</h4>
                <div className="dropdown-content">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <img width={30} height={20} src={eng} alt="" />
                    <h5 className="m-0">English</h5>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <img width={30} height={20} src={ban} alt="" />
                    <h5 className="m-0">Bangla</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    /* background-color: #a70000; */
  }
  .header h4 {
    font-size: 14px;
    text-align: center;
    font-style: inherit;
    text-transform: uppercase !important;
  }
  .header .main-header .divv {
    padding: 10px 0;
  }
  .header .dropdown-container {
    position: relative;
  }
  .header .dropdown-content {
    position: absolute;
    top: 25px;
    left: 5;
    background-color: #ffff;
    min-width: 100px;
    display: none;
    border-radius: 5px;
    padding: 10px 20px !important;
    z-index: 10000000 !important;
  }
  .header .dropdown-content div {
    padding: 5px;
  }
  .header .dropdown-content h5 {
    font-size: 14px;
    padding: 5px;
    border-radius: 5px;
    font-style: inherit;
    transition: 0.4s all ease-in;
    cursor: pointer;
    text-transform: uppercase !important;
  }
  .header .dropdown-content h5:hover {
    background-color: #a70000;
    color: #ffff;
  }
  .header .dropdown-container:hover .dropdown-content {
    display: block;
  }

  @media only screen and (max-width: 1024px) {
    .normal {
      display: none !important;
    }
  }
`;

export default Header;
