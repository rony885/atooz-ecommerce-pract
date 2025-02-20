import React, { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import styled from "styled-components";
import Footer from "../../components/Footer";
import CustomersDataTable from "./CustomersDataTable";

const Customers = () => {
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
        <div className="customers_wrapper">
          <div className="customers">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center customers_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center customers_title">
                    <h4 className="m-0 fs-5">Customers</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_customers">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn" onClick={openAddModal}>
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">Add Customers</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <div className="table-responsive">
                  <CustomersDataTable data={sampleData} />
                </div>
              </div>
            </div>
          </div>

          {/*==== modal ==== */}
          {isAddModalOpen && (
            <div className="custom-modal">
              <div className="modal-content">
                <span className="close" onClick={closeAddModal}>
                  &times;
                </span>
                <h2 className="">Add Category</h2>

                <form>
                  <label>
                    Category Name<span className="text-danger">*</span>
                  </label>
                  <input type="text" placeholder="Enter category name" />

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
                      Add Category
                    </button>
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
  .customers_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .customers {
    padding: 20px 20px;
  }
  .customers_row .customers_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .customers_row .add_customers .buttn {
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
  .customers_row .buttn:hover {
    background-color: #424141;
  }
  .customers_row .bttn_title {
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
`;

export default Customers;
