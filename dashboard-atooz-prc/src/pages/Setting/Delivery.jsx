import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import Footer from "../../components/Footer";
import { FaTrashAlt } from "react-icons/fa";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

import DeliveryDataTable from "./DeliveryDataTable";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  name: "",
  status: "",
  amount: "",
  duration: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Delivery Type is a required field!"),
  status: yup.boolean(),
  amount: yup.string().required("Amount is a required field!"),
  duration: yup.string(),
});

const validate = (values) => {
  let errors = {};

  if (!values.amount) {
    errors.amount = "Amount is required!";
  } else if (/^[0-9.\b]+$/.test(values.amount) === false) {
    errors.amount = "Only number!";
  } else if (/^\d{0,8}(\.\d{0,2})?$/.test(values.amount) === false) {
    errors.amount =
      "Maximum 8 digits before the decimal point & Maximum 2 digits after the decimal point!";
  }

  return errors;
};

const Delivery = () => {
  // data fetch
  const { deliveryType, fetchDeliveryType } = useApiContext();

  useEffect(() => {
    fetchDeliveryType();
  }, [fetchDeliveryType]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const openEditModal = () => setIsEditModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);

  const closeAddModal = () => setIsAddModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const [item, setItem] = useState({});
  const [message, setMessage] = useState();
  const [receivedId, setReceivedId] = useState(null);

  // ===== add =====
  const AddDeliveryTypeFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);
    formfield.append("amount", values.amount);
    formfield.append("duration", values.duration);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_deliveryType/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Delivery type is successfuly created...");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitDeliveryTypeForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddDeliveryTypeFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  // ===== Update =====
  const updatedValues = {
    name: item.name ? item.name : "",
    status: item.status ? item.status : "",
    amount: item.amount ? item.amount : "",
    duration: item.duration ? item.duration : "",
  };

  const updateDeliveryTypeFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);
    formfield.append("amount", values.amount);
    formfield.append("duration", values.duration);

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_deliveryType/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Delivery type is successfully updated..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateDeliveryTypeForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      updateDeliveryTypeFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const updateDeliveryType = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_deliveryType/${id}/`
    );
    setItem(data);
  };

  // ====== delete ======
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteCourier = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_deliveryType/${id}/`
    );
    window.location.reload(false);
  };

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
                  <DeliveryDataTable
                    data={deliveryType}
                    openEditModal={openEditModal}
                    openDeleteModal={openDeleteModal}
                    updateDeliveryType={updateDeliveryType}
                    getId={getId}
                  />
                </div>
              </div>
            </div>

            {/* ====== Add Modal ====== */}
            {isAddModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeAddModal}>
                    &times;
                  </span>
                  <h2>Add Delivery Type</h2>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitDeliveryTypeForm}
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
                            Delivery Type Name
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="name"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              isInvalid={!!touched.name && !!errors.name}
                              isValid={touched.name && !errors.name}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.name}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                          <Form.Label>
                            Status<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Select
                              name="status"
                              id="status"
                              value={values.status}
                              onChange={handleChange}
                              isInvalid={!!touched.status && !!errors.status}
                              isValid={touched.status && !errors.status}
                              className="form-control mb-0"
                            >
                              <option value="">Select</option>
                              <option value={`${true}`}>Active</option>
                              <option value={`${false}`}>Inactive</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.status}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Amount
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="amount"
                              id="amount"
                              value={values.amount}
                              onChange={handleChange}
                              isInvalid={!!touched.amount && !!errors.amount}
                              isValid={touched.amount && !errors.amount}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.amount}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Duration
                            <span className="text-danger"></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="duration"
                              id="duration"
                              value={values.duration}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.duration && !!errors.duration
                              }
                              isValid={touched.duration && !errors.duration}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.duration}
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
                            Add Delivery Type
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

            {/* ===== Edit Modal ===== */}
            {isEditModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeEditModal}>
                    &times;
                  </span>
                  <h2>Update Category</h2>

                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateDeliveryTypeForm}
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
                            Delivery Type Name
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="name"
                              id="name"
                              value={values.name}
                              onChange={handleChange}
                              isInvalid={!!touched.name && !!errors.name}
                              isValid={touched.name && !errors.name}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.name}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-4">
                          <Form.Label>
                            Status<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Select
                              name="status"
                              id="status"
                              value={values.status}
                              onChange={handleChange}
                              isInvalid={!!touched.status && !!errors.status}
                              isValid={touched.status && !errors.status}
                              className="form-control mb-0"
                            >
                              <option value="">Select</option>
                              <option value={`${true}`}>Active</option>
                              <option value={`${false}`}>Inactive</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.status}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Amount
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="amount"
                              id="amount"
                              value={values.amount}
                              onChange={handleChange}
                              isInvalid={!!touched.amount && !!errors.amount}
                              isValid={touched.amount && !errors.amount}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.amount}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Duration
                            <span className="text-danger"></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="duration"
                              id="duration"
                              value={values.duration}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.duration && !!errors.duration
                              }
                              isValid={touched.duration && !errors.duration}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.duration}
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
                            Update Delivery Type
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

            {/* ===== Delete Modal ===== */}
            {isDeleteModalOpen && (
              <div className="custom-modal">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close no-hover-border ms-auto"
                        onClick={closeDeleteModal}
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body p-md-5">
                      <div className="text-center">
                        <div className="text-danger fs-1">
                          <FaTrashAlt />
                        </div>
                        <div className="mt-4">
                          <h3 className="mb-2 fs-5">Are you sure?</h3>
                          <p className="text-muted fs-lg mx-3 mb-0">
                            Are you sure you want to remove this record?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                      <button
                        type="button"
                        className="close_btn"
                        onClick={closeDeleteModal}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="delete_btn"
                        onClick={() => {
                          deleteCourier(receivedId);
                        }}
                      >
                        Yes, Delete It!
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
  /* ===== Delete Modal ===== */
  .close_btn {
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
    background-color: #d3d4d5;
  }
  .delete_btn {
    background-color: #dc3546;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
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
`;

export default Delivery;
