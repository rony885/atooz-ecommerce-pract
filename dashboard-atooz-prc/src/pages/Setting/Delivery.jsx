import React, { useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import Footer from "../../components/Footer";
import DeliveryDataTable from "./DeliveryDataTable";

const Delivery = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const sampleData = [
    { id: 1, name: "Gift", status: "Active" },
    { id: 2, name: "Book", status: "Inactive" },
    { id: 3, name: "Pen", status: "Active" },
    { id: 4, name: "Laptop", status: "Active" },
    { id: 5, name: "Notebook", status: "Inactive" },
    { id: 6, name: "Bag", status: "Active" },
    { id: 7, name: "Shoes", status: "Inactive" },
    { id: 8, name: "Watch", status: "Active" },
    { id: 9, name: "Phone", status: "Inactive" },
    { id: 10, name: "Tablet", status: "Active" },
    { id: 11, name: "Tablet1", status: "Active" },
    { id: 12, name: "Tablet2", status: "Active" },
    { id: 13, name: "Tablet3", status: "Active" },
  ];

  return (
    <Wrapper>
      <div className="layout">
        <div className="delivery_wrapper">
          <div className="delivery">
            <div className="row d-flex justify-content-between align-items-center delivery_row mb-4">
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center delivery_title">
                  <h4 className="m-0 fs-5">Delivery Type</h4>
                </div>
              </div>

              <div className="col-6">
                <div className="d-flex justify-content-end align-items-center add_delivery">
                  <button className="buttn" onClick={openAddModal}>
                    <TbCirclePlus className="fs-6" />
                    <span className="bttn_title">Add Delivery</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <DeliveryDataTable data={sampleData} />
                </div>
              </div>
            </div>

            {/* ====== Modal ====== */}
            {isAddModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeAddModal}>
                    &times;
                  </span>
                  <h2>Add Delivery Type</h2>

                  <form>
                    <div className="form-outline mb-4">
                      <label>
                        Type Name<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type Name"
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label>
                        Type Price<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type Price"
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label>
                        Type Time<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type Time"
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label>Status</label>
                      <select className="form-control">
                        <option value="Select">Select</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
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

  .delivery_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .delivery {
    padding: 20px 20px;
  }
  .delivery_row .delivery_title h4 {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .add_delivery .buttn {
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
  .add_delivery .buttn:hover {
    background-color: #424141;
  }
  .delivery_row .bttn_title {
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

export default Delivery;
