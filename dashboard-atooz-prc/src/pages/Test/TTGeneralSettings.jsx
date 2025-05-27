import React, { useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import Footer from "../../components/Footer";




const GeneralSetting = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);



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



                        <form>

                            <div className="">
                                <div className="row">
                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Product Name<span></span>
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

                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Company Phone<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name="phone"
                                                type="phone"
                                                id="phone"
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Company Email<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name="email"
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Company Address<span></span>
                                        </label>
                                        <div className="input-group">
                                            <textarea type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Company Logo<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Map Url<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name=""
                                                type=""
                                                id=""
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Facebook Url<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name=""
                                                type=""
                                                id=""
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Instagram Url<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name=""
                                                type=""
                                                id=""
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Twitter Url<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name=""
                                                type=""
                                                id=""
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-4">
                                        <label className="form-label">
                                            Linkedin Url<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input
                                                name=""
                                                type=""
                                                id=""
                                                className="form-control"
                                                value=""
                                            />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-4">
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Text in the Receipt Header<span></span>
                                        </label>
                                        <div className="input-group">
                                            <textarea type="text" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Text in the Receipt Footer<span></span>
                                        </label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Home Banner Image1<span></span>
                                        </label>
                                        <input type="file" className="form-control" />
                                    </div>

                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Home Banner Image2<span></span>
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
                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Home Banner Image3<span></span>
                                        </label>
                                        <input type="file" className="form-control" />
                                    </div>

                                    <div className="form-outline mb-4 col-lg-6">
                                        <label className="form-label">
                                            Home Banner Cover Image<span></span>
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
