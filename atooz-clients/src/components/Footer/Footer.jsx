import React from "react";
import styled from "styled-components";

import logoImg from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <section className="Container_margin contact_short px-3">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-2 col-md-0 col-sm-0"></div>

          <div className="col-lg-8 col-md-12 col-sm-12 d-flex justify-content-between align-items-center px-4 py-4 shadow short_part">
            <div className="textt">
              <h3 className="mb-0 my-1">
                <strong>Ready to get started....?</strong>
              </h3>
              <h3 className="mb-0 my-1">
                <strong>Let's talk....</strong>
              </h3>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-2 text-white rounded phone">
              <div className="d-flex justify-content-center align-items-center calll">
                <i className="fa fa-phone fs-5" aria-hidden="true"></i>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h4 className="fs-6 mb-0">01759506824</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-0 col-sm-0"></div>
        </div>
      </section>

      {/* ======================================= */}
      <footer className="footer py-4">
        <div className="Container_margin">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-2 col-md-0 col-sm-0"></div>

            <div className="row col-lg-8 col-md-12 col-sm-12 p-0">
              <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-between align-items-start p-1 ppp">
                <div className="content_part p-2 rounded ppp">
                  <div
                    style={{ backgroundColor: " #a70000" }}
                    className="p-3 rounded"
                  >
                    <img
                      src={logoImg}
                      style={{ width: "50px", height: "30px" }}
                      alt=""
                    />
                    <h4 className="mt-2 fs-5">Ekattor iT</h4>
                    <h4>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est quam recusandae sed hic. Eos, dolorem!
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-between align-items-start p-1 ppp">
                <div className="content_part p-2 rounded ppp">
                  <div
                    style={{ backgroundColor: " #a70000" }}
                    className="p-3 rounded"
                  >
                    <h2 className="">About</h2>
                    <h5 className="mt-2">About us</h5>
                    <h5 className="">Privacy & Terms</h5>
                    <h5 className="">T & C</h5>
                    <h5 className="">Contact us</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-between align-items-start p-1 ppp">
                <div className="content_part  p-2 rounded ppp">
                  <div
                    style={{ backgroundColor: " #a70000" }}
                    className="p-3 rounded"
                  >
                    <h2 className="">Features</h2>
                    <h5 className="mt-2">Home</h5>
                    <h5 className="">About</h5>
                    <h5 className="">Products</h5>
                    <h5 className="">Blog</h5>
                    <h5 className="">Contact</h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 d-flex justify-content-between align-items-start p-1 ppp">
                <div className="content_part p-2 rounded ppp">
                  <div
                    style={{ backgroundColor: " #a70000" }}
                    className="p-3 rounded"
                  >
                    <h2 className="">Others</h2>
                    <h4 className="mt-2">Ekattor iT</h4>
                    <h4 className="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est quam recusandae sed hic. Eos, dolorem!
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-0 col-sm-0"></div>
          </div>
        </div>

        <hr className="hrr" />

        <div className="Container_margin row d-flex justify-content-between align-items-center">
          <div className="col-lg-2 col-md-0 col-sm-0"></div>

          <div className="col-lg-8 col-md-0 col-sm-0">
            <div className="d-flex justify-content-between align-items-center icon_gap">
              <div className="col-lg-6 col-md-0 col-sm-0">
                <div className="ffootteerr">
                  <Link
                    to="/"
                    className="text-white text-decoration-none fw-semibold fs-6"
                  >
                    <small>
                      <small className="fs-9">&copy;Copyright {currentYear},</small>
                      &nbsp; Designed & Developed By{" "}
                      <span style={{ color: "red" }}>EKATTOR</span>
                      <span style={{ color: "green" }}> iT</span>
                    </small>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-0 col-sm-0">
                <div className="d-flex justify-content-end align-items-center gap-3 footer_icon eenndd">
                  <FaFacebook />
                  <FaXTwitter />
                  <FaLinkedin />
                  <FaInstagramSquare />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-0 col-sm-0"></div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .textt h3 strong {
    font-size: 18px;
    font-weight: 700;
    font-family: serif;
  }

  .contact_short {
    transform: translateY(50%);
    margin-bottom: 1rem;
  }
  .contact_short .short_part {
    background-color: #ffff;
    border-radius: 5px;
  }
  .contact_short .short_part h3 {
    font-size: 14px;
  }
  .contact_short .short_part .phone {
    background-color: #a70000;
    padding: 10px 18px;
    border: 1px solid #f00404;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }

  .footer {
    background-color: #a70000;
    /* background-color: #ff7b7b; */
    /* background-color: #ff5252; */
    /* background-color: #ffbaba; */
  }
  .footer .content_part h2 {
    font-size: 25px;
    color: #ffff;
    font-weight: 600;
    font-family: proxima-nova;
    transition: all.3s all ease-in-out;
  }
  .footer .content_part h4 {
    font-size: 14px;
    color: #ffff;
    transition: all.3s all ease-in-out;
  }
  .footer .content_part h5 {
    cursor: pointer;
    font-size: 14px;
    color: #ffff;
    transition: all.3s all ease-in-out;
  }
  .footer .content_part h5:hover {
    /* color: #ff9800; */
    color: #eea8a8;
  }
  .footer .hrr {
    color: #ffff;
  }
  .footer .footer_icon {
    color: #ffff;
    font-size: 30px;
    cursor: pointer;
  }
  .footer .footer_icon :hover {
    color: #eea8a8;
  }

  @media screen and (max-width: 768px) {
    .contact_short {
      transform: translateY(0);
      margin-bottom: 26px !important;
    }
    .icon_gap {
      gap: 10px !important;
      flex-direction: column-reverse !important;
    }
    .ppp {
      padding: 0 !important;
      margin: 0 !important;
    }

    .footer .footer_icon {
      color: #ffff;
      font-size: 20px;
    }

    .ffootteerr small {
      font-size: 8px;
    }

    .eenndd {
      justify-content: center;
    }
  }

  @media screen and (max-width: 425px) {
    .calll,
    .textt h3 {
      font-size: 12px !important;
    }
    .contact_short .short_part .phone {
      padding: 6px 12px;
    }
    .phone h4 {
      font-size: 12px !important;
    }
    .short_part strong {
      font-size: 15px !important;
    }
  }
  @media screen and (max-width: 375px) {
    .calll,
    .textt h3 {
      font-size: 8px !important;
    }
  }

  @media screen and (max-width: 320px) {
    .textt strong {
      font-size: 12px !important;
    }
    .contact_short .short_part .phone {
      padding: 4px 8px;
    }
  }
`;

export default Footer;
