import React, { useEffect, useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

import axios from "axios";
import * as yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Footer from "../../components/Footer";
import OrderDataTable from "./OrderDataTable";
import { useApiContext } from "../../context/ApiContext";

const schema = yup.object().shape({
  courier: yup.string(),
  delivery_status: yup.string(),
});

const validate = (values) => {
  let errors = {};

  return errors;
};

const OrderList = () => {
  // data fetching
  const { order, fetchOrder, unpaginate_courier, fetchUnpaginateCourier } =
    useApiContext();

  useEffect(() => {
    fetchOrder();
    fetchUnpaginateCourier();
  }, [fetchOrder, fetchUnpaginateCourier]);

  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const openEditModal = () => setisEditModalOpen(true);
  const closeEditModal = () => setisEditModalOpen(false);

  const [item, setItem] = useState({});
  const [message, setMessage] = useState();

  const updateOrder = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/order/${id}/`
    );
    setItem(data);
  };

  const updatedValues = {
    courier: item.courier ? item.courier.id : "",
    delivery_status: item.delivery_status ? item.delivery_status : "",
  };

  const UpdateOrderFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("courier", values.courier);
    formfield.append("delivery_status", values.delivery_status);

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/order/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Order is successfully updated...");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateOrderForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      UpdateOrderFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const newOrder = order && order.filter((o) => o.delivery_status === "New");
  const pendingOrder =
    order && order.filter((o) => o.delivery_status === "Pending");
  const approvedOrder =
    order && order.filter((o) => o.delivery_status === "Approved");
  const packagingOrder =
    order && order.filter((o) => o.delivery_status === "Packaging");
  const shipmentOrder =
    order && order.filter((o) => o.delivery_status === "Shipment");
  const deliveredOrder =
    order && order.filter((o) => o.delivery_status === "Delivered");
  const returnOrder =
    order && order.filter((o) => o.delivery_status === "Return");
  const cancelOrder =
    order && order.filter((o) => o.delivery_status === "Cancel");
  const wholesaleOrder =
    order && order.filter((o) => o.delivery_status === "Wholesale");

  return (
    <Wrapper>
      <div className="layout">
        <div className="orderList_wrapper">
          <div className="orderList">
            <div className="row d-flex justify-content-between align-items-center order_row mb-4">
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center order_title">
                  <h4 className="m-0 fs-5">Order</h4>
                </div>
              </div>

              <div className="col-6">
                <div className="d-flex justify-content-end align-items-center add_order">
                  <i className="bi bi-plus-circle align-baseline me-1"></i>
                  <button className="buttn">
                    <TbCirclePlus className="fs-6" />
                    <span className="bttn_title">
                      <Link to="/orderadd" className="order_link">
                        Add Order
                      </Link>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="row row-cols-xxl-5 row-cols-lg-5 row-cols-md-2 row-cols-1 carrd">
          {cardData.map((card, index) => (
            <div className="col" key={index}>
              <div
                className={`card border-bottom border-3 mb-4 card-animate ${card.borderClass}`}
                style={{ backgroundColor: "transparent" }}
              >
                <div className="card-boddy">
                  <h4 className="mb-4">
                    <span className="counter-value text-dark fs-6">
                      {card.count}
                    </span>
                  </h4>
                  <p className="text-muted fw-medium text-uppercase mb-0 textt">
                    {card.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div> */}

            <div className="row row-cols-xxl-5 row-cols-lg-5 row-cols-md-2 row-cols-1 mb-4 carrd">
              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-primary"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">6</span> */}
                      <span className="text-dark fs-6">{newOrder.length}</span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      New
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-warning"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">0</span> */}
                      <span className="text-dark fs-6">
                        {pendingOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Pending
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-info"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">3</span> */}
                      <span className="text-dark fs-6">
                        {approvedOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Approved
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-warning"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">0</span> */}
                      <span className="text-dark fs-6">
                        {packagingOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Packaging
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-warning"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">0</span> */}
                      <span className="text-dark fs-6">
                        {shipmentOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Shipment
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-success"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">1</span> */}
                      <span className="text-dark fs-6">
                        {deliveredOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Delivered
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-warning"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">0</span> */}
                      <span className="text-dark fs-6">
                        {returnOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Return
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-danger"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">0</span> */}
                      <span className="text-dark fs-6">
                        {cancelOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Cancel
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-warning"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">0</span> */}
                      <span className="text-dark fs-6">
                        {wholesaleOrder.length}
                      </span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Wholesale
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div
                  className="card border-3 mb-4 card-animate border-secondary"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className="card-boddy">
                    <h4 className="mb-4">
                      {/* <span className="text-dark fs-6">10</span> */}
                      <span className="text-dark fs-6">{order.length}</span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <OrderDataTable
              data={order}
              openEditModal={openEditModal}
              updateOrder={updateOrder}
            />

            {/* ===== Edit Modal ===== */}
            {isEditModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeEditModal}>
                    &times;
                  </span>
                  <h2>Update Order</h2>

                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateOrderForm}
                    validate={validate}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      setFieldValue,
                    }) => (
                      <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Courier<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Form.Select
                              name="courier"
                              id="courier"
                              value={values.courier}
                              onChange={handleChange}
                              isInvalid={!!touched.courier && !!errors.courier}
                              isValid={touched.courier && !errors.courier}
                              className="form-control mb-0"
                            >
                              <option value="">Select</option>
                              {unpaginate_courier &&
                                unpaginate_courier.map((item) => {
                                  return (
                                    <option key={item.id} value={item.id}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.courier}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                          <Form.Label>
                            Delivery Status<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Form.Select
                              name="delivery_status"
                              id="delivery_status"
                              value={values.delivery_status}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.delivery_status &&
                                !!errors.delivery_status
                              }
                              isValid={
                                touched.delivery_status &&
                                !errors.delivery_status
                              }
                              className="form-control mb-0"
                            >
                              <option value="">Select</option>
                              <option value="New">New</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Packaging">Packaging</option>
                              <option value="Shipment">Shipment</option>
                              <option value="Delivered">Delivered</option>
                              {/* <option value="Return">Return</option>
                              <option value="Cancel">Cancel</option>
                              <option value="Wholesale">Wholesale</option> */}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.delivery_status}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <div className="modal-actions mt-5">
                          <button type="reset" className="cancel-btn">
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="add-btn"
                            disabled={isSubmitting}
                          >
                            Edit Order
                          </button>
                        </div>

                        {/* message  */}
                        {message && (
                          <h2 className="text-center m-5">{message}</h2>
                        )}
                      </FormikForm>
                    )}
                  </Formik>
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

  .blog-wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .orderList {
    padding: 20px 20px;
  }
  .order_row .order_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .order_row .add_order .buttn {
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
  .add_order .buttn:hover {
    background-color: #424141;
  }
  .order_link {
    text-decoration: none;
    color: #fff;
  }
  .order_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .card-boddy {
    padding: 8px 0 !important;
  }
  .orderList .textt {
    font-size: 12px !important;
  }
  .card-animate {
    background-color: transparent;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  .card-animate:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  /* .search {
    font-size: 12px !important;
    padding: 14px 5px !important;
  } */
  .buttn_text {
    font-size: 12px;
  }
  /* ======= */
  .table-header {
    display: flex;
    align-items: center;
    margin-top: 40px;
    /* overflow: hidden !important;
    overflow: scroll !important; */
  }

  .table-col {
    flex: 1;
    padding: 8px;
    /* border: 1px solid #ccc; */
    /* overflow: hidden !important; */
  }

  .sortable {
    display: flex;
    /* justify-content: space-between; */
    cursor: pointer;
  }
  .input_text {
    font-size: 12px !important;
    cursor: pointer;
    padding: 0px;
    margin-top: 1px;
    vertical-align: middle;
    position: relative;
  }
  .ttext {
    font-size: 12px !important;
  }
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
`;

export default OrderList;
