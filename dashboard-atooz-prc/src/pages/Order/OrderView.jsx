import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImHome } from "react-icons/im";

import FractionDigits from "../../components/FractionDigits";
import BarcodeGenerator from "../../components/BarcodeGenerator";
import Footer from "../../components/Footer";
import { useApiContext } from "../../context/ApiContext";

const OrderView = () => {
  const { general_settings, fetchGeneralSettings } = useApiContext();

  useEffect(() => {
    fetchGeneralSettings();
  }, [fetchGeneralSettings]);

  const [item, setItem] = useState({});
  const { id } = useParams();

  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const openInvoiceModal = () => setIsInvoiceModalOpen(true);
  const openReceiptModal = () => setIsReceiptModalOpen(true);

  const closeInvoiceModal = () => setIsInvoiceModalOpen(false);
  const closeReceiptModal = () => setIsReceiptModalOpen(false);

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/order/${id}/`
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

  const stages = [
    "New",
    "Pending",
    "Approved",
    "Packaging",
    "Shipment",
    "Delivered",
  ];

  const isStageActive = (index) => {
    const deliveryStatusIndex = stages.indexOf(item.delivery_status);
    return deliveryStatusIndex >= index;
  };

  const handleInvoicePDF = (invoice_no) => {
    const element = document.querySelector(".invoiceModal-body"); // Selecting modal body
    const currentDate = new Date();
    const fileName = `${invoice_no}_${currentDate
      .toLocaleDateString()
      .replaceAll("/", "_")}_${currentDate
        .toLocaleTimeString()
        .replace(/:/g, "-")}_invoice.pdf`;
    const opt = {
      margin: 1,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save(); // Generating PDF from modal body
  };

  const handleReceiptPDF = (invoice_no) => {
    const element = document.querySelector(".receiptModal-body"); // Selecting modal body
    const currentDate = new Date();
    const fileName = `${invoice_no}_${currentDate
      .toLocaleDateString()
      .replaceAll("/", "_")}_${currentDate
        .toLocaleTimeString()
        .replace(/:/g, "-")}_receipt.pdf`;
    const opt = {
      margin: 1,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save(); // Generating PDF from modal body
  };

  const handlePrint = () => {
    window.print(); // Print the current page
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="product_wrapper">
          <div className="categoryProd">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center catry_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center catry_title">
                    <Link to="/" className="text-dark">
                      <ImHome className="fs-3 mb-0" />
                    </Link>
                    <span className="fs-4 mx-1 mt-2">/</span>
                    <h4 className="m-0 fs-5 mb-0 mt-2">Order Overview</h4>
                  </div>
                </div>

                <div className="col-6 d-flex justify-content-end align-items-center">
                  <div className="d-flex justify-content-end align-items-center add_catry">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <span className="bttn_title" onClick={openInvoiceModal}>
                        Invoice
                      </span>
                    </button>
                  </div>

                  <div className="d-flex justify-content-end align-items-center add_catry">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <span className="bttn_title" onClick={openReceiptModal}>
                        Receipt
                      </span>
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
                            <p className="text-muted mb-2">Order Number</p>
                            <h6 className="fs-md mb-0">{item.order_no}</h6>
                          </div>
                          <div className="flex-shrink-0 text-end">
                            <h6 className="fs-md mb-2">
                              {item.order_date}
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
                      <div className="card bg-white border-bottom border-2 border-light">
                        <div className="card-body d-flex gap-3">
                          <div className="flex-grow-1">
                            <h6 className="card-title mb-3">Customer Info</h6>
                            <p className="fw-medium fs-md mb-1">
                              {item.customer && item.customer.name}
                            </p>
                            <p className="text-muted mb-1">
                              {item.customer && item.customer.email}
                            </p>
                            <p className="text-muted mb-0">{item.customer && item.customer.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-6 col-md-6">
                      <div className="card bg-white border-bottom border-2 border-light">
                        <div className="card-body d-flex gap-3">
                          <div className="flex-grow-1">
                            <h6 className="card-title mb-3">Payment Info</h6>
                            <p className="fw-medium fs-md mb-1">
                              Order Number: {item.order_no}
                            </p>
                            <p className="text-muted mb-1">
                              Invoice Nummber: {item.invoice_no}
                            </p>
                            <p className="text-muted mb-0">
                              Payment Method: {item.payment_method}
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
                          {/* <div className="flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              <i className="ph-x align-middle"></i> Cancel Order
                            </button>
                          </div> */}
                        </div>

                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table align-middle table-nowrap table-borderless">
                              <thead className="table-active">
                                <tr>
                                  <th className="text-start">Product</th>
                                  <th>Size</th>
                                  <th>Color</th>
                                  <th className="text-end">Item Price</th>
                                  <th>Quantity</th>
                                  <th className="text-end">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.order_details &&
                                  item.order_details.map((item, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>
                                          <div className="product-item d-flex  align-items-center gap-2">
                                            <div className="avatar-sm flex-shrink-0">
                                              <div className="avatar-title bg-light rounded">
                                                <img
                                                  src={
                                                    item.product.mainImage &&
                                                    `${process.env
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

                                              </h6>

                                              <p className="text-muted mb-0 text-start">
                                                #
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td></td>
                                        <td className="text-capitalize">

                                        </td>
                                        <td className="text-end">

                                        </td>
                                        <td>{item.quantity}</td>

                                        <td className="fw-medium text-end">

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
                                <p className="text-muted mb-2">Order Date</p>
                                <h6 className="fs-md mb-0">
                                  {item.order_date}
                                </h6>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">Order Time</p>
                                <h6 className="fs-md mb-0">{timeString}</h6>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">Order Status</p>
                                <span className="badge bg-danger-subtle text-danger mb-0">
                                  {item.delivery_status}
                                </span>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-6 col-xl-3">
                              <div className="text-center border border-dashed p-3 rounded">
                                <p className="text-muted mb-2">Delivery Type</p>
                                {item.delivery_type ? item.delivery_type.name : '-'}
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
                                Total Order Amount
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

                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-start">Discount :</td>
                                      <td className="text-end">
                                        (-) &nbsp;

                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-start">
                                        Delivery Charge :
                                      </td>
                                      <td className="text-end">
                                        (+)
                                      </td>
                                    </tr>
                                    <tr className="border-top border-top-dashed">
                                      <td className="text-start">
                                        Payable Amount :
                                      </td>
                                      <td className="text-end">

                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-start">
                                        Paid Amount :
                                      </td>
                                      <td className="text-end">

                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-start">
                                        Due Amount :
                                      </td>
                                      <td className="text-end">

                                      </td>
                                    </tr>

                                    <tr className="border-top border-top-dashed">
                                      <th scope="row" className="text-start">
                                        Total (BDT) :
                                      </th>
                                      <th className="text-end">

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

                                </h6>

                                <p className="text-muted mb-2 mb-md-0">
                                  Scan barcode to track
                                </p>

                                <div className="text-center p-3 pb-0">
                                  <BarcodeGenerator
                                  // value={item.order_no && item.order_no}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="card bg-white">
                        <div className="card-header d-flex align-items-center flex-wrap gap-2">
                          <h6 className="card-title flex-grow-1 mb-0">
                            Order Status
                          </h6>
                        </div>
                        <div className="card-body">
                          <div className="progress progress-step-arrow progress-info mb-4">
                            {/* {stages.map((stage, index) => (
                              <Link
                                to=""
                                key={stage}
                                className={`progress-bar ${
                                  isStageActive(index) ? "active " : ""
                                }`}
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                {stage}
                              </Link>
                            ))} */}
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== Invoice Modal ===== */}
            {isInvoiceModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="hideprint close" onClick={closeInvoiceModal}>
                    &times;
                  </span>
                  <h2 className="hideprint">Order Invoice</h2>

                  <div className="modal-body invoiceModal-body">
                    <Container>
                      <Row>
                        <Col>
                          <div
                            style={{ lineHeight: "4px", marginBottom: "30px" }}
                          >
                            <h6>Atooz Dashboard</h6>
                            <p>Tel: 123456789</p>
                          </div>
                          <div style={{ lineHeight: "0px", fontSize: "18px" }}>
                            <p>#</p>
                          </div>
                          <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                              width: "50%",
                              backgroundColor: "#415472",
                              textAlign: "center",
                              color: "#ffff",
                              fontWeight: "bold",
                              padding: "8px",
                              height: "35px",
                              border: "1px solid #415472",
                            }}
                          >
                            <h4 className="mb-0">INVOICE</h4>
                          </div>

                          <div
                            className="my-4"
                            style={{ lineHeight: "5px", padding: "0px 0px" }}
                          >
                            <p>
                              Customer:
                            </p>
                          </div>
                          <div
                            className="my-4"
                            style={{ lineHeight: "5px", padding: "0px 0px" }}
                          >
                            <p>
                              Date:{" "}

                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "10px",
                              justifyContent: "space-between",
                              backgroundColor: "#555555",
                              color: "#ffff",
                              padding: "5px 10px",
                              textAlign: "center",
                              alignItems: "center",
                              height: "30px",
                            }}
                          >
                            <div style={{ width: "100%" }}>
                              <h6 className="text-start">SL no</h6>
                            </div>
                            <div style={{ width: "100%" }}>
                              <h6 className="text-start">Product</h6>
                            </div>
                            <div style={{ width: "100%" }}>
                              <h6 className="text-center">Quantity</h6>
                            </div>
                            <div style={{ width: "100%" }}>
                              <h6 className="text-end">SubTotal</h6>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "end",
                              alignItems: "end",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "end",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#F9F9F9",
                                  textAlign: "left",
                                  lineHeight: "10px",
                                  padding: "10px",
                                }}
                              >
                                <div
                                  className="d-flex justify-content-between align-items-center gap-3"
                                  style={{ width: "100%" }}
                                >
                                  <p className="mt-2">
                                    Total{" "}

                                  </p>
                                  <p></p>
                                </div>
                                <div
                                  className="d-flex justify-content-between align-items-center gap-3"
                                  style={{ width: "100%" }}
                                >
                                  <p>Total:</p>
                                  <p> BDT</p>
                                </div>
                                <div
                                  className="d-flex justify-content-between align-items-center gap-3"
                                  style={{ width: "100%" }}
                                >
                                  <p>Discount: </p>
                                  <p> BDT</p>
                                </div>
                                <div
                                  className="d-flex justify-content-between align-items-center gap-3"
                                  style={{ width: "100%" }}
                                >
                                  <p>Delivery Charge: </p>
                                  <p> BDT</p>
                                </div>
                              </div>
                              <div
                                style={{
                                  width: "100%",
                                  backgroundColor: "#415472",
                                  textAlign: "center",
                                  alignItems: "center",
                                  padding: "5px",
                                  marginBottom: "20px",
                                  color: "#ffff",
                                }}
                              >
                                <p
                                  style={{
                                    margin: "0 auto",
                                    display: "inline-block",
                                    fontSize: "20px",
                                  }}
                                >
                                  {" "}
                                  BDT
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#EEEEEE",
                              textAlign: "center",
                              alignItems: "center",
                              padding: "10px",
                              marginBottom: "20px",
                              color: "#000",
                            }}
                          >
                            <p
                              style={{
                                margin: "0 auto",
                                display: "inline-block",
                                fontSize: "10px",
                                letterSpacing: "4px",
                              }}
                            >
                              Atooz Dashboard
                            </p>
                          </div>
                        </div>
                      </Row>
                    </Container>
                  </div>

                  <div className="modal-footer">
                    <div className="hstack gap-2 justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={closeInvoiceModal}
                      >
                        Cancel
                      </button>
                      <button
                        // onClick={() => handleInvoicePDF(item.invoice_no)}
                        type="submit"
                        className="btn btn-primary"
                      >
                        PDf
                      </button>
                      <button
                        // onClick={() => handlePrint()}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===== Receipt Modal ===== */}
            {isReceiptModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="hideprint close" onClick={closeReceiptModal}>
                    &times;
                  </span>
                  <h2 className="hideprint">Order Receipt</h2>

                  <div className="modal-body receiptModal-body">

                  </div>

                  <div className="modal-footer mt-5">
                    <div className="hstack gap-2 justify-content-end m-0">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={closeReceiptModal}
                      >
                        Cancel
                      </button>
                      <button
                        // onClick={}
                        type="submit"
                        className="btn btn-primary"
                      >
                        PDF
                      </button>
                      <button
                        // onClick={() => handlePrint()}
                        type="submit"
                        className="btn btn-primary"
                      >
                        Print
                      </button>
                    </div>
                  </div>
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
  .product_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }
  .categoryProd {
    padding: 20px 20px;
  }
  .catry_row .catry_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .catry_row .add_catry .buttn {
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
  .add_catry .buttn:hover {
    background-color: #424141;
  }

  .catry_row .bttn_title {
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

  .progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    color: #000;
    font-weight: 800;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    height: 100px;
    line-height: 100px;
    transition: background-color 0.3s, color 0.3s;
    position: relative;
    text-decoration: none;
  }

  .progress-bar.active {
    background-color: #d13429;
    color: #fff;
  }

  .progress-bar::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -15px;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 15px solid #d9d9d9;
    transform: translateY(-50%);
  }

  .progress-bar.active::after {
    border-left-color: #00aaff;
  }

  .progress-bar:last-child::after {
    display: none; /* Remove arrow for the last step */
  }

  .progress {
    display: flex;
    justify-content: space-between;
    height: 100px;
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
    .catry_row .add_catry .buttn {
      padding: 5px;
    }
    .catry_row .bttn_title {
      font-size: 12px;
    }
    .modal-content {
      max-width: 300px !important;
    }
  }
`;

export default OrderView;
