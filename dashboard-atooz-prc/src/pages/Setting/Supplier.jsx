import React, { useEffect, useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import styled from "styled-components";
import Footer from "../../components/Footer";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

import SupplierDataTable from "./SupplierDataTable";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  // supplier_id: "",
  name: "",
  status: "",
  address: "",
  phone: "",
  email: "",
  logo: "",
};

const schema = yup.object().shape({
  // supplier_id: yup.string().required("Address is a required field!"),
  name: yup.string().required("Supplier Name is a required field!"),
  status: yup.boolean(),
  address: yup.string().required("Address is a required field!"),
  phone: yup.string().required("Phone is a required field!"),
  email: yup.string(),
  logo: yup.mixed(),
});

const Supplier = () => {
  // data fetching
  const { supplier, fetchSupplier } = useApiContext();

  useEffect(() => {
    fetchSupplier();
  }, [fetchSupplier]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  // const sampleData = [
  //   { id: 1, name: "Gift", status: "Active" },
  //   { id: 2, name: "Book", status: "Inactive" },
  //   { id: 3, name: "Pen", status: "Active" },
  //   { id: 4, name: "Laptop", status: "Active" },
  //   { id: 5, name: "Notebook", status: "Inactive" },
  //   { id: 6, name: "Bag", status: "Active" },
  //   { id: 7, name: "Shoes", status: "Inactive" },
  //   { id: 8, name: "Watch", status: "Active" },
  //   { id: 9, name: "Phone", status: "Inactive" },
  //   { id: 10, name: "Tablet", status: "Active" },
  //   { id: 11, name: "Tablet1", status: "Active" },
  //   { id: 12, name: "Tablet2", status: "Active" },
  //   { id: 13, name: "Tablet3", status: "Active" },
  // ];

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
                    <button className="buttn" onClick={openAddModal}>
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">Add Supplier</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <SupplierDataTable data={sampleData} />
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
`;

export default Supplier;
