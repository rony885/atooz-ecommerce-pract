import React, { useRef, useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  company_name: yup.string(),
  company_phone: yup.string(),
  company_email: yup.string(),
  company_address: yup.string(),
  map_url: yup.string(),
  facebook_url: yup.string(),
  instagram_url: yup.string(),
  twitter_url: yup.string(),
  linkedin_url: yup.string(),
  receipt_header: yup.string(),
  receipt_footer: yup.string(),
  // theme: yup.string(),
  company_logo: yup.mixed(),
  homeBannerImage1: yup.mixed(),
  homeBannerImage2: yup.mixed(),
  homeBannerImage3: yup.mixed(),
  homeBannerCoverImage: yup.mixed(),
});

const validate = (values) => {
  let errors = {};

  if (!values.company_phone) {
    errors.company_phone = "Phone is required!";
  } else if (/^[0-9\b]+$/.test(values.company_phone) === false) {
    errors.company_phone = "Only number!";
  } else if (values.company_phone.length !== 11) {
    errors.company_phone = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const GeneralSetting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [message, setMessage] = useState();
  const [item, setItem] = useState({});

  // for image
  const [showLogo, setShowLogo] = useState(null);
  const [showImage1, setShowImage1] = useState(null);
  const [showImage2, setShowImage2] = useState(null);
  const [showImage3, setShowImage3] = useState(null);
  const [showCoverImage, setShowCoverImage] = useState(null);

  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowLogo(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImage1Change = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage1(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImage2Change = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage2(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImage3Change = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage3(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onCoverImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowCoverImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [contentHeader, setContentHeader] = useState("");
  const [contentFooter, setContentFooter] = useState("");
  const editorHeader = useRef(null);
  const editorFooter = useRef(null);

  return (
    <Wrapper>
      <div className="layout">
        <div className="balance_wrapper">
          <div className="balance">
            <div className="row d-flex justify-content-between align-items-center balance_row mb-4">
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center balance_title">
                  <h4 className="m-0 fs-5">General Setting</h4>
                </div>
              </div>

              <div className="col-6">
                <div className="d-flex justify-content-end align-items-center add_balance">
                  <button className="buttn" onClick={openModal}>
                    <TbCirclePlus className="fs-6" />
                    <span className="bttn_title">Add General Setting</span>
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <header align="left" className="headerr">
                    <input
                      type="text"
                      placeholder="Search here"
                      className="w-100 form-control"
                      value=""
                    />
                  </header>
                </div>
                <div style={{ padding: "24px" }}>
                  <p className="text-center">There are no records to display</p>
                </div>
              </div>
            </div> */}

            <form>
              <div className="form-outline mb-4 col-lg-12">
                <label className="form-label">
                  Product Name<span>*</span>
                </label>
                <div className="input-group">
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className="form-control"
                    value=""
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Category<span></span>
                  </label>
                  <div className="input-group">
                    <select className="form-control">
                      <option value="">Select</option>
                      <option value="1">Gift</option>
                      <option value="2">Table 02</option>
                    </select>
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Status<span></span>
                  </label>
                  <div className="input-group">
                    <select className="form-control">
                      <option value="">Select</option>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Feature<span></span>
                  </label>
                  <div className="input-group">
                    <select className="form-control">
                      <option value="">Select</option>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-6">
                  <label className="form-label">
                    Unit<span>*</span>
                  </label>
                  <div className="input-group">
                    <select className="form-control">
                      <option value="">Select</option>
                      <option value="1">Piece</option>
                    </select>
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-6">
                  <label className="form-label">
                    Initial Stock<span></span>
                  </label>
                  <div className="input-group">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-12">
                  <label className="form-label">Description</label>
                  <div className="input-group">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-6">
                  <label className="form-label">
                    Image<span></span>
                  </label>
                  <input type="file" className="form-control" />
                </div>

                <div className="form-outline mb-4 col-lg-6">
                  <label className="form-label">
                    Gallery Images<span></span>
                  </label>
                  <input
                    name="gal_image"
                    multiple
                    type="file"
                    id="gal_image"
                    className="form-control"
                  />
                  <div
                    id="image-container"
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  ></div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Buying Price<span>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">BDT</span>
                    <input
                      type="text"
                      id="buying_price"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Selling Price<span>*</span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">BDT</span>
                    <input
                      name="selling_price"
                      type="text"
                      id="selling_price"
                      className="form-control"
                      value=""
                    />
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Discount<span></span>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">BDT</span>
                    <input
                      name="discount"
                      type="text"
                      id="discount"
                      className="form-control"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </form>

            {/* ====== Add Modal ====== */}
            {isModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>Add General Setting</h2>

                  <form>
                    <label>
                      Courier Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Courier name"
                      className="form-control"
                    />

                    <label>Status</label>
                    <select className="form-control">
                      <option value="Select">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Account Type<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <select
                          name="acc_type"
                          className="form-control"
                          id="acc_type"
                        >
                          <option value="">Select</option>
                          <option value="bank">Bank</option>
                          <option value="bkash">Bkash</option>
                          <option value="nagad">Nagad</option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Account Number<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          name="acc_number"
                          type="text"
                          id="acc_number"
                          className="form-control"
                          placeholder="Enter Account Number"
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="modal-actions">
                      <button type="reset" className="cancel-btn">
                        Cancel
                      </button>
                      <button type="submit" className="add-btn">
                        Add Category
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <Footer className="footer" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .layout {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh - 60px);
  }

  .balance_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .balance {
    padding: 20px 20px;
  }
  .balance_row .balance_title h4 {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .add_balance .buttn {
    background-color: #1d2634;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  .add_balance .buttn:hover {
    background-color: #424141;
  }
  .balance_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    margin-left: 8px;
  }
  .form-label {
    font-size: 13px;
    font-weight: 500;
  }
  .form-control {
    font-size: 13px;
  }
  input:focus,
  select:focus {
    outline: none;
    box-shadow: none;
  }

  /* ===== Modal styles ===== */
  .custom-modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    position: relative;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .modal-content h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .modal-content form label {
    display: block;
    margin-bottom: 8px;
    font-size: 12px;
  }
  .modal-content form input,
  .modal-content form select {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .modal-actions {
    display: flex;
    justify-content: flex-end;
  }
  .cancel-btn {
    background-color: #ff6e6c;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  .add-btn {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default GeneralSetting;
