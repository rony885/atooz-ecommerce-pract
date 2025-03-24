import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import * as yup from "yup";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  courier: "",
  customer: "",
  customer_type: "",
  delivery_type: "",

  order_date: "",
  delivery_status: "",
  payment_method: "",
  note: "",

  total_item: "",
  total_amount: "",
  discount: "",
  payable_amount: "",
  paid_amount: "",
  due_amount: "",
  delivery_charge: "",
  grand_total_amount: "",

  name: "",
  email: "",
  password: "",
  district: "",
  upazila: "",
  address: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Phone or Username is required!";
  } else if (/^[0-9\b]+$/.test(values.email) === false) {
    errors.email = "Only number!";
  } else if (values.email.length !== 11) {
    errors.email = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const prevValidate = (values) => {
  let errors = {};

  return errors;
};

const OrderAdd = () => {
  const {
    unpaginate_product,
    unpaginate_courier,
    unpaginate_deliveryType,
    all_users,
    district,
    upazila,
    fetchUnpaginateProduct,
    fetchUnpaginateCourier,
    fetchUnpaginateDeliveryType,
    fetchAllUsers,
    fetchDistrict,
    fetchUpazila,
  } = useApiContext();

  useEffect(() => {
    fetchUnpaginateProduct();
    fetchUnpaginateCourier();
    fetchUnpaginateDeliveryType();
    fetchAllUsers();
    fetchDistrict();
    fetchUpazila();
  }, [
    fetchAllUsers,
    fetchDistrict,
    fetchUnpaginateCourier,
    fetchUnpaginateDeliveryType,
    fetchUnpaginateProduct,
    fetchUpazila,
  ]);

  const isActiveDeliveryType =
    unpaginate_deliveryType &&
    unpaginate_deliveryType.filter((item) => item.status === true);

  const [cus_type, set_cus_type] = useState();
  const [cus_state, setCusState] = useState();

  useEffect(() => {
    if (cus_type === "new") {
      setCusState(true);
    } else if (cus_type === "prev") {
      setCusState(false);
    } else {
      setCusState("");
    }
  }, [cus_type]);

  const [productList, setProductList] = useState([
    {
      productId: null,
      bdtRate: 0,
      quantity: 0,
      linePrice: 0,
      discount: 0,
    },
  ]);

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const handleDistrictChange = (e) => {
    const selectedDistrictName = e.target.value;
    setSelectedDistrict(
      district.find((district) => district.name === selectedDistrictName)
    );
    setSelectedUpazila("");
  };

  const handleUpazilaChange = (e) => {
    const selectedUpazilaName = e.target.value;
    setSelectedUpazila(
      upazila.find((upazila) => upazila.name === selectedUpazilaName)
    );
  };

  // Calculate totals
  const calculatedTotalitem = productList.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const calculatedTotalAmount = productList.reduce(
    (total, product) => total + product.linePrice,
    0
  );
  const calculatedTotalDiscount = productList.reduce(
    (total, product) => total + product.discount * product.quantity,
    0
  );

  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const handleDelTypeChange = (e) => {
    const selectedDeliveryTypeId = parseInt(e.target.value); // Assuming delivery type IDs are integers

    // Find the selected delivery type from the unpaginate_deliveryType array
    const selectedDeliveryType = unpaginate_deliveryType.find(
      (item) => item.id === selectedDeliveryTypeId
    );

    // Update the state with the selected delivery type's price
    if (selectedDeliveryType) {
      setDeliveryPrice(selectedDeliveryType.amount); // Update state with selected delivery type price
    } else {
      setDeliveryPrice(null); // Clear delivery price if no delivery type is selected
    }
  };

  const payableAmount =
    calculatedTotalAmount - calculatedTotalDiscount + Number(deliveryPrice);
  const [paidAmount, setPaidAmount] = useState(0);
  const dueAmount = payableAmount - paidAmount;
  const grandTotalAmount = Number(payableAmount);

  // function
  const AddCustomerFunc = async (values) => {
    let formfield = new FormData();

    // Append individual fields
    formfield.append("name", values.name);
    formfield.append("email", values.email);
    formfield.append("password", "123456");
    formfield.append("district", values.district);
    formfield.append("upazila", values.upazila);
    formfield.append("address", values.address);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/register/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Customer is successfuly created...");

        const AddOrderFunc = async () => {
          let formfield = new FormData();

          // Convert Order_details array to a JSON string
          values.order_details = JSON.parse(JSON.stringify(productList));

          // Update form values
          values.total_item = calculatedTotalitem;
          values.total_amount = calculatedTotalAmount;
          values.discount = calculatedTotalDiscount;
          values.payable_amount = payableAmount;
          values.paid_amount = paidAmount;
          values.due_amount = dueAmount;
          values.delivery_charge = deliveryPrice;
          values.grand_total_amount = grandTotalAmount;

          // Append individual fields
          values.courier && formfield.append("courier", values.courier);
          formfield.append("customer", Number(response.data.id));
          values.delivery_type &&
            formfield.append("delivery_type", values.delivery_type);

          formfield.append("order_date", values.order_date);
          values.delivery_status &&
            formfield.append("delivery_status", values.delivery_status);
          formfield.append("payment_method", values.payment_method);
          formfield.append("note", values.note);

          // Append Order_details as separate items in FormData
          productList.forEach((detail, index) => {
            formfield.append(
              `order_details[${index}][product]`,
              Number(detail.productId)
            );
            formfield.append(
              `order_details[${index}][bdtRate]`,
              detail.bdtRate
            );
            formfield.append(
              `order_details[${index}][quantity]`,
              detail.quantity
            );
            formfield.append(
              `order_details[${index}][linePrice]`,
              detail.linePrice
            );
          });

          // Append individual fields
          formfield.append("total_item", Number(values.total_item));
          formfield.append("total_amount", Number(values.total_amount));
          formfield.append("discount", Number(values.discount));
          formfield.append("payable_amount", Number(values.payable_amount));
          formfield.append("paid_amount", Number(values.paid_amount));
          formfield.append("due_amount", Number(values.due_amount));
          formfield.append("delivery_charge", Number(values.delivery_charge));
          formfield.append(
            "grand_total_amount",
            Number(values.grand_total_amount)
          );

          await axios({
            method: "POST",
            url: `${process.env.REACT_APP_BASE_URL}/order/`,
            headers: {
              "Content-Type": "application/json; charset=UTF-8; text/plain",
            },
            data: formfield,
          })
            .then((response) => {
              setMessage(response.success, "Order is successfuly created...");
              navigate("/orders");
              window.location.reload(false);
            })
            .catch((error) => {
              setMessage(error.message, "Error");
              console.log(error);
            });
        };

        AddOrderFunc();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AddOrderFunc = async (values) => {
    let formfield = new FormData();

    // Convert Order_details array to a JSON string
    values.order_details = JSON.parse(JSON.stringify(productList));

    // Update form values
    values.total_item = calculatedTotalitem;
    values.total_amount = calculatedTotalAmount;
    values.discount = calculatedTotalDiscount;
    values.payable_amount = payableAmount;
    values.paid_amount = paidAmount;
    values.due_amount = dueAmount;
    values.delivery_charge = deliveryPrice;
    values.grand_total_amount = grandTotalAmount;

    // Append individual fields
    values.courier && formfield.append("courier", values.courier);
    formfield.append("customer", values.customer);
    values.delivery_type &&
      formfield.append("delivery_type", values.delivery_type);

    formfield.append("order_date", values.order_date);
    values.delivery_status &&
      formfield.append("delivery_status", values.delivery_status);
    formfield.append("payment_method", values.payment_method);
    formfield.append("note", values.note);

    // Append Order_details as separate items in FormData
    productList.forEach((detail, index) => {
      formfield.append(
        `order_details[${index}][product]`,
        Number(detail.productId)
      );
      formfield.append(`order_details[${index}][bdtRate]`, detail.bdtRate);
      formfield.append(`order_details[${index}][quantity]`, detail.quantity);
      formfield.append(`order_details[${index}][linePrice]`, detail.linePrice);
    });

    // Append individual fields
    formfield.append("total_item", Number(values.total_item));
    formfield.append("total_amount", Number(values.total_amount));
    formfield.append("discount", Number(values.discount));
    formfield.append("payable_amount", Number(values.payable_amount));
    formfield.append("paid_amount", Number(values.paid_amount));
    formfield.append("due_amount", Number(values.due_amount));
    formfield.append("delivery_charge", Number(values.delivery_charge));
    formfield.append("grand_total_amount", Number(values.grand_total_amount));

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/order/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Order is successfuly created...");
        navigate("/orders");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="orderAdd_wrapper">
          <div className="orderAdd">
            <div className="">
              <h2 className="fs-5">Add Order</h2>
              <form className="mt-5">
                <div className="card_form">
                  <div className="row mb-4 card_resv">
                    <div className="col-12">
                      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">Order Details</h4>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* <!-- Order Date --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Order Date<span>*</span>
                      </label>
                      <div className="input-group">
                        <input
                          name="order_date"
                          type="date"
                          id="order_date"
                          className="form-control"
                          value=""
                        />
                      </div>
                    </div>

                    {/* <!-- Payment Method --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Payment Method<span>*</span>
                      </label>
                      <div className="input-group">
                        <select
                          name="payment_method"
                          className="form-control form-select"
                          id="payment_method"
                        >
                          <option value="">Select</option>
                          <option value="Cash">Cash</option>
                          <option value="Bkash">Bkash</option>
                          <option value="Nagad">Nagad</option>
                          <option value="Cash On Delivery">
                            Cash On Delivery
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Courier --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Courier<span></span>
                      </label>
                      <div className="input-group">
                        <select
                          name="courier"
                          className="form-control form-select"
                          id="courier"
                        >
                          <option value="">Select</option>
                          <option value="1">Pathao</option>
                          <option value="2">Stead Fast</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Delivery Status --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Delivery Status<span></span>
                      </label>
                      <div className="input-group ">
                        <select
                          name="delivery_status"
                          className="form-control form-select"
                          id="delivery_status"
                        >
                          <option value="">Select</option>
                          <option value="New">New</option>
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Packaging">Packaging</option>
                          <option value="Shipment">Shipment</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* <!-- Note --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Note<span></span>
                      </label>
                      <div className="input-group">
                        <textarea
                          name="note"
                          id="note"
                          className="form-control"
                        ></textarea>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* <!-- Delivery Type --> */}
                    <div className="form-outline mb-4 col-lg-4">
                      <label className="form-label">
                        Delivery Type<span></span>
                      </label>
                      <div className="input-group has-validation">
                        <select
                          name="delivery_type"
                          className="form-control form-select"
                          id="delivery_type"
                        >
                          <option value="">Select</option>
                          <option value="1">
                            Free Shipping&nbsp;-&nbsp;0.00&nbsp;Tk
                          </option>
                          <option value="2">
                            Inside Dhaka&nbsp;-&nbsp;90.00&nbsp;Tk
                          </option>
                          <option value="3">
                            Outside Dhaka&nbsp;-&nbsp;140.00&nbsp;Tk
                          </option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    {/* <!-- Customer Type --> */}
                    <div className="form-outline mb-4 col-lg-4">
                      <label className="form-label">
                        Customer Type<span></span>
                      </label>
                      <div className="input-group has-validation">
                        <select
                          name="customer_type"
                          className="form-control form-select"
                          id="customer_type"
                        >
                          <option value="">Select</option>
                          <option value="prev">Previous Customer</option>
                          <option value="new">New Customer</option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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
  .orderAdd_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .orderAdd {
    padding: 20px 20px;
  }
  .orderAdd h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .orderAdd h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
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
  @media screen and (max-width: 425px) {
    .card_form .card_resv {
      margin-bottom: 5px !important;
    }
  }
`;

export default OrderAdd;
