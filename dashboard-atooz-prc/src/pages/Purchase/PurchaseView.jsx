import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import FractionDigits from "../../components/FractionDigits";
import Footer from "../../components/Footer";
import { useApiContext } from "../../context/ApiContext";

const PurchaseView = () => {
  const { general_settings, fetchGeneralSettings } = useApiContext();

  useEffect(() => {
    fetchGeneralSettings();
  }, [fetchGeneralSettings]);

  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/purchase/${id}/`
      );
      setItem(data);
    };

    loadProducts();
  }, [id]);

  // for time
  const dateString = item.created_at;
  const dateObject = new Date(dateString);
  const timeString = dateObject.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Wrapper>
      <div className="layout">
        <div className="purchaseView_wrapper">
          <div className="purchase">
            {/* <div className="">
              <div className="row d-flex justify-content-between align-items-center purchase_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center purchase_title">
                    <h4 className="m-0 fs-5">Purchase View</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_purchase">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">
                        <Link to="/purchase-add" className="purchase_link">
                          Add Purchase
                        </Link>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <header align="left">
                    <input
                      type="text"
                      placeholder="Search here"
                      className="w-100 form-control"
                      value=""
                    />
                  </header>

                  <div style={{ padding: "24px" }}>
                    <p className="text-center">
                      There are no records to display
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center purchase_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center catry_title">
                    <Link to="/" className="text-dark">
                      <ImHome className="fs-3 mb-0" />
                    </Link>
                    <span className="fs-4 mx-1 mt-2">/</span>
                    <h4 className="m-0 fs-5 mb-0 mt-2">Purchase Overview</h4>
                  </div>
                </div>

                <div className="col-6 d-flex justify-content-end align-items-center">
                  <div className="d-flex justify-content-end align-items-center add_purchase">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      {/* <span className="bttn_title" onClick={openInvoiceModal}> */}
                      <span className="bttn_title">Invoice</span>
                    </button>
                  </div>

                  <div className="d-flex justify-content-end align-items-center add_purchase">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      {/* <span className="bttn_title" onClick={openReceiptModal}> */}
                      <span className="bttn_title">Receipt</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-12">
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <div className="card bg-white">
                        <div className="card-body d-flex align-items-center flex-wrap gap-3">
                          <div className="flex-grow-1">
                            <p className="text-muted mb-2">Purchase Number</p>
                            <h6 className="fs-md mb-0">{item.purchase_no}</h6>
                          </div>

                          <div className="flex-shrink-0 text-end">
                            <h6 className="fs-md mb-2">
                              {item.purchase_date}
                              <i className="bi bi-calendar4-event align-baseline ms-1"></i>
                            </h6>

                            <p className="text-muted mb-0">
                              {timeString}
                              <i className="bi bi-clock align-baseline ms-1"></i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-xxl-6 col-md-6">
                      <div className="card border-bottom border-2 border-light bg-white">
                        <div className="card-body d-flex gap-3">
                          <div className="flex-grow-1">
                            <h6 className="card-title mb-3">Supplier Info</h6>
                            <p className="fw-medium fs-md mb-1">
                              {item.supplier && item.supplier.name}
                            </p>
                            <p className="text-muted mb-1">
                              {item.supplier && item.supplier.phone}
                            </p>
                            <p className="text-muted mb-0">
                              {item.supplier && item.supplier.address}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-md-6">
                      <div className="card border-bottom border-2 border-light bg-white">
                        <div className="card-body d-flex gap-3 bg-white">
                          <div className="flex-grow-1">
                            <h6 className="card-title mb-3">Payment Info</h6>
                            <p className="fw-medium fs-md mb-1">
                              Purchase Number: <b>{item.purchase_no}</b>
                            </p>
                            <p className="text-muted mb-1">
                              Invoice Number: <b>{item.invoice_no}</b>
                            </p>
                            <p className="text-muted mb-0">
                              {/* Payment Method: <b>{item.payment_method}</b> */}
                              &nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xxl-9">
                      <div className="card bg-white">
                        <div className="card-header d-flex align-items-center gap-3">
                          <h6 className="card-title mb-0 flex-grow-1">
                            Product Items
                          </h6>
                        </div>

                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-borderless">
                              <thead className="table-active">
                                <tr>
                                  <th className="text-start">Products</th>
                                  <th className="text-end">Item Price</th>
                                  <th>Quantity</th>
                                  <th className="text-end">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.purchase_details &&
                                  item.purchase_details.map((item, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>
                                          <div className="product-item d-flex align-items-center gap-2">
                                            <div className="avatar-sm flex-shrink-0">
                                              <div className="avatar-title bg-light rounded">
                                                <img
                                                  src={
                                                    item.product.mainImage &&
                                                    `${
                                                      process.env
                                                        .REACT_APP_BASE_URL
                                                    }${item.product.mainImage.replace(
                                                      "server/",
                                                      ""
                                                    )}`
                                                  }
                                                  alt={item.product.name}
                                                  className="avatar-xs"
                                                  width={50}
                                                  height={50}
                                                />
                                              </div>
                                            </div>

                                            <div className="flex-grow-1">
                                              <h6 className="fs-md text-start">
                                                {item.product.name}
                                              </h6>

                                              <p className="text-muted mb-0 text-start">
                                                #{item.product.product_id}
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="text-end">
                                          {FractionDigits(item.bdtRate)}
                                        </td>
                                        <td>{item.quantity}</td>
                                        <td className="fw-medium text-end">
                                          {FractionDigits(item.linePrice)}
                                        </td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>

                          <div className="row gy-3">
                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">Purchase No</p>
                                <h6 className="fs-md mb-0">
                                  {item.purchase_no}
                                </h6>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">Purchase Date</p>
                                <h6 className="fs-md mb-0">
                                  {item.purchase_date}
                                </h6>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">Purchase Time</p>
                                <h6 className="fs-md mb-0">{timeString}</h6>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">
                                  Purchase Amount
                                </p>
                                <h6 className="fs-md mb-0 fw-bold">
                                  {FractionDigits(item.total_amount)}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-3">
                      <div className="row">
                        <div className="col-xxl-12 col-lg-6 mb-3">
                          <div className="card bg-white">
                            <div className="card-header">
                              <h6 className="card-title mb-0">
                                Total Purchase Amount
                              </h6>
                            </div>
                            <div className="card-body pt-4">
                              <div className="table-responsive table-card">
                                <table className="table table-borderless mb-0">
                                  <tbody>
                                    <tr>
                                      <td className="text-start">
                                        Sub Total : 
                                      </td>
                                      <td className="text-end">
                                        {FractionDigits(item.total_amount)}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-start">Discount :</td>
                                      <td className="text-end">
                                        (-) &nbsp;{item.discount}
                                      </td>
                                    </tr>

                                    <tr className="border-top border-top-dashed">
                                      <th className="text-start" scope="row">
                                        Total (BDT) :
                                      </th>
                                      <th className="text-end">
                                        {FractionDigits(
                                          item.grand_total_amount
                                        )}
                                      </th>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-xxl-12 col-lg-6">
                          <div className="card bg-white">
                            <div className="card-body border-top border-dashed">
                              <div>
                                <h6 className="text-muted float-end mb-0">
                                  {item.purchase_no}
                                </h6>

                                <p className="text-muted mb-2 mb-md-0">
                                  Scan barcode to track
                                </p>

                                <div className="text-center p-3 pb-0">
                                  {/* <BarcodeGenerator value={item.purchase_no} /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  .purchaseView_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .purchase {
    padding: 20px 20px;
  }
  .purchase_row .purchase_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .purchase_row .add_purchase .buttn {
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
  .add_purchase .buttn:hover {
    background-color: #424141;
  }

  .purchase_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .purchase_link {
    text-decoration: none;
    color: #fff;
  }
  .card:first-child {
    background-color: transparent;
  }
  /* Remove blue outline on focus */
  input:focus {
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

  /* ===== Delete Modal ===== */
  .close_btn {
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding: 4px 12px;
    background-color: #d3d4d5;
  }
  .delete_btn {
    background-color: #dc3546;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    padding: 4px 12px;
  }
  .no-hover-border {
    outline: none;
    box-shadow: none;
  }

  .no-hover-border:focus,
  .no-hover-border:hover {
    outline: none;
    box-shadow: none;
    border-color: transparent;
  }

  //formik css
  .invalid-feedback {
    font-size: 10px;
    color: red;
  }

  input,
  select,
  textarea {
    background-color: white;
    color: black;
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 3px;

    &:focus {
      outline: none;
      border-color: #000;
    }
  }

  option {
    font-size: 12px;
  }

  label {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    margin: 5px 0;

    span {
      color: red;
    }
  }

  .imgDiv {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  section,
  .divv,
  .css-b62m3t-container,
  .css-3iigni-container {
    width: 100%;
  }
  //formik css

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
    .purchase_row .add_purchase .buttn {
      padding: 5px;
    }
    .purchase_row .bttn_title {
      font-size: 12px;
    }
    .modal-content {
      max-width: 300px !important;
    }
  }
`;

export default PurchaseView;
