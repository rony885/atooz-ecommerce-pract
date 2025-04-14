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
                      <span className="text-dark fs-6">10</span>
                    </h4>
                    <p className="text-muted fw-medium text-uppercase mb-0 textt">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <OrderDataTable data={order} />
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
`;

export default OrderList;
