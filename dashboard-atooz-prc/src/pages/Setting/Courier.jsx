import React, { useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import DataTable from "../../components/DataTable/DataTable";
import Footer from "../../components/Footer";

const Courier = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <div className="courier_wrapper">
          <div className="courier">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center courier_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center courier_title">
                    <h4 className="m-0 fs-5">Courier</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_courier">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn" onClick={openModal}>
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">Add Courier</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-12">
                  <DataTable data={sampleData} />
                </div>
              </div>
            </div>

            {/* Custom Modal */}
            {isModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2 className="">Add Courier</h2>

                  <form>
                    <label>
                      Courier Name<span className="text-danger">*</span>
                    </label>
                    <input type="text" placeholder="Enter Courier name" />

                    <label>Status</label>
                    <select>
                      <option value="Select">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>

                    <div className="modal-actions">
                      <button type="reset" className="cancel-btn">
                        Cancel
                      </button>
                      <button type="submit" className="add-btn">
                        Add Courier
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr />
        <Footer />
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

  .courier_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .courier {
    padding: 20px 20px;
  }
  .courier_row .courier_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .courier_row .add_courier .buttn {
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
  .add_courier .buttn:hover {
    background-color: #424141;
  }

  .courier_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  /* ===== Modal styles ===== */
  .custom-modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
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
  .modal-content h2 {
    font-size: 18px;
    font-weight: 700;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 28px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
  }

  .close:hover {
    color: #000;
  }

  .modal-content h2 {
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
    outline: 1px solid #82a8d1 !important;
  }

  input,
  optgroup,
  select,
  textarea {
    font-size: 12px;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
  }

  .modal-actions .cancel-btn,
  .modal-actions .add-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
  }

  .modal-actions .cancel-btn {
    background-color: #ff6e6c;
    color: #fff;
  }

  .modal-actions .add-btn {
    background-color: #007bff;
    color: #fff;
  }

  .modal-actions .cancel-btn:hover {
    background-color: #e77b79;
  }

  .modal-actions .add-btn:hover {
    background-color: #4497f0;
  }
  @media screen and (max-width: 425px) {
    .modal-content {
      max-width: 370px;
    }
  }
  @media screen and (max-width: 375px) {
    .modal-content {
      max-width: 340px;
    }
  }
  @media screen and (max-width: 320px) {
    .courier_row .add_courier .buttn {
      padding: 5px;
    }
    .courier_row .bttn_title {
      font-size: 12px;
    }
    .modal-content {
      max-width: 300px !important;
    }
  }
`;

export default Courier;
