import React from "react";
import styled from "styled-components";
import { IoLocationOutline } from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import contactBgImg from "../../images/contact-img.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <div className="contact mt-5">
        <div className="Container_margin">
          <div className="row d-flex justify-content-between algin-items-center  fromImg">
            <div className="col-lg-4 col-md-12 col-sm-12 px-3 mmbbb">
              <div className="contact_bg">
                <img
                  src={contactBgImg}
                  style={{ height: "515px", width: "100%" }}
                  className="rounded contactImg"
                  alt="Contact Background"
                />
                <div className="overlay">
                  <h2 className="mb-4 text-center">
                    Have Something in Write? <br />
                    Let's talk
                  </h2>
                  <h5 className="mb-4">
                    Ecommerce content is material businesses create to attract
                    and retain potential customers online.
                  </h5>

                  <div className="d-flex justify-content-start algin-items-center gap-2 mb-3">
                    <div className="d-flex justify-content-center algin-items-center">
                      <IoLocationOutline className="fs-5" />
                    </div>
                    <div className="d-flex justify-content-center algin-items-center">
                      <h5 className="">
                        Ga-27/2 A, Shahjadpur, Gulshan, Dhaka-1212
                      </h5>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start algin-items-center gap-2 mb-3">
                    <div className="d-flex justify-content-center algin-items-center">
                      <RiPhoneFill className="fs-5" />
                    </div>
                    <div className="d-flex justify-content-center algin-items-center">
                      <h5 className="">01624390843</h5>
                    </div>
                  </div>

                  <div className="d-flex justify-content-start algin-items-center gap-2">
                    <div className="d-flex justify-content-center algin-items-center">
                      <MdEmail className="fs-5" />
                    </div>
                    <div className="d-flex justify-content-center algin-items-center">
                      <h5>info@ekattorit.com</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-8 col-md-12 col-sm-12 px-3 rounded"
              // style={{ border: "1px solid gray" }}
            >
              <form className="form">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="inputt mb-2 "
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  className="inputt my-2 "
                />
                <br />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="inputt my-2 "
                />
                <br />
                <input
                  type="text"
                  placeholder="Subject"
                  className="inputt my-2 "
                />
                <br />
                <textarea
                  name="message"
                  placeholder="Message..."
                  className="inputt my-2 "
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
                <br />

                <button className="buttn ">Contact Us</button>
              </form>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-center respMap">
            <div className="col-lg-8 col-md-12 col-sm-12 px-3 map">
              <iframe
                className="rounded mb-0 mt-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7195091156145!2d90.42287557533726!3d23.793000578641422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f25f178fd%3A0x22726cf916252c05!2sEKATTOR%20iT!5e0!3m2!1sen!2sbd!4v1718015299847!5m2!1sen!2sbd"
                title="Dhaka, Bangladesh"
                width="100%"
                height="480"
                style={{ border: "0" }}
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 px-3 content ">
              <div style={{ height: "480px" }} className="text-height mb-0">
                <h2 className="fs-2 fw-semibold mb-4">Help Center</h2>
                <h5 className="fs-5 fw-semibold">We are here to help</h5>
                <h5 className="fs-5 fw-semibold">Call Us</h5>
                <h5 className="fs-5 fw-semibold">Email Us</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;

  .fromImg {
    margin-bottom: 60px;
  }
  .contact .form .inputt {
    width: 100%;
    padding: 12px 13px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline-color: #f80000;
  }
  .contact .form .buttn {
    margin-top: 38px;
    background-color: #f80000;
    border: none;
    color: #fff;
    padding: 12px 20px;
    font-weight: 600;
    font-family: serif;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
    border: 1px solid #f80000 !important;
  }
  .contact .form .buttn:hover {
    background-color: #fff;
    color: #f80000;
    border: 1px solid #f80000 !important;
  }

  .contact_bg {
    position: relative;
    width: 100%;
    height: 330px;
  }
  .contact_bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .contact_bg .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 475px; */
    height: 515px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .contact_bg .overlay h2 {
    margin: 0;
    font-size: 30px;
    font-weight: 600;
    font-family: serif;
  }
  .contact_bg .overlay h5 {
    font-size: 20px;
  }
  .text-height {
    background-color: #ee6464;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    border-radius: 4px;
    font-family: serif;
    cursor: pointer;
  }
  /* @media only screen and (max-width: 1440px) {
    .contactImg {
      width: 100%;
      height: 425px !important;
    }
    .contact_bg .overlay {
      width: 100%;
      height: 425px !important;
    }
  } */
  @media only screen and (max-width: 1024px) {
    /* .contactImg {
      width: 350px !important;
    }
    .overlay {
      width: 350px !important;
    } */

    .contact_bg .overlay h2 {
      font-size: 24px;
    }
    .contact_bg .overlay h5 {
      font-size: 15px;
    }
    .fromImg {
      margin-bottom: 40px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .contactImg {
      width: 100%;
      height: 475px !important;
    }
    .contact_bg .overlay {
      width: 100%;
      height: 475px !important;
    }
    .contact {
      margin-bottom: 25px !important;
    }
    .respMap {
      gap: 20px;
      margin-bottom: 40px !important;
    }
    .mmbbb {
      margin-bottom: 180px !important;
    }
  }
`;

export default Contact;
