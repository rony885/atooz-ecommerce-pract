import React, { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Supplier = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="supplier_wrapper">
          <div className="supplier">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center supplier_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center supplier_title">
                    <h4 className="m-0 fs-5">Supplier</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_supplier">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn" onClick={handleOpenModal}>
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">Add Supplier</span>
                    </button>
                  </div>
                </div>
              </div>

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
            </div>
          </div>

          {/*==== modal ==== */}
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <form action="#" noValidate>
                  <div className="modal-header">
                    <h5 className="modal-title fs-6" id="SupplierAddModalLabel">
                      Add Supplier
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Supplier Name<span>*</span>
                      </label>
                      <div className="input-group">
                        <input
                          name="name"
                          type="text"
                          id="name"
                          className="form-control"
                          value=""
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Status<span></span>
                      </label>
                      <div className="input-group">
                        <select
                          name="s_status"
                          className="form-control form-select"
                          id="s_status"
                        >
                          <option value="">Select</option>
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Address<span>*</span>
                      </label>
                      <div className="input-group">
                        <textarea
                          name="address"
                          id="address"
                          className="form-control"
                        ></textarea>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Phone<span>*</span>
                      </label>
                      <div className="input-group">
                        <input
                          name="phone"
                          type="text"
                          id="phone"
                          className="form-control"
                          value=""
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Email<span></span>
                      </label>
                      <div className="input-group">
                        <input
                          name="email"
                          type="text"
                          id="email"
                          className="form-control"
                          value=""
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Logo<span></span>
                      </label>
                      <input
                        name="logo"
                        type="file"
                        id="logo"
                        className="form-control"
                      />
                      <div className="invalid-feedback"></div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <div className="hstack gap-2 justify-content-end">
                      <button type="reset" className="bttn">
                        Cancel
                      </button>
                      <button type="submit" className="bttn1">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
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

  .supplier_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .supplier {
    padding: 20px 20px;
  }
  .supplier_row .supplier_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .supplier_row .add_supplier .buttn {
    background-color: #1d2634;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .supplier_row .buttn:hover {
    background-color: #424141;
  }
  .supplier_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .headerr {
    background-color: #333;
    padding: 10px 30px 1px 30px;
    box-shadow: 0 6px 7px -3px rgba(255, 255, 255, 0.35);
    border-radius: 4px;
  }
  .table-responsive {
    margin: 20px 0;
  }
  .headerr input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 12px;
  }

  /* ===== modal ==== */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    max-width: 550px;
    height: 550px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-label {
    font-size: 13px;
    font-weight: 500;
  }
  .form-control {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  /* Remove blue outline on focus */
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }
  .bttn {
    background-color: #ff6e6c;
    padding: 8px 14px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
  }
  .bttn1 {
    background-color: #3e61e4;
    padding: 8px 14px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
  }
`;

export default Supplier;
