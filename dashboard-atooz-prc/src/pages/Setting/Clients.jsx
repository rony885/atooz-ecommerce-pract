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

import ClientsDataTable from "./ClientsDataTable";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  name: "",
  status: "",
  phone: "",
  image: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Client is a required field!"),
  status: yup.boolean(),
  phone: yup.string().required("phone is a required field!"),
  image: yup.mixed(),
});

const validate = (values) => {
  let errors = {};

  if (!values.phone) {
    errors.phone = "Phone is required!";
  } else if (/^[0-9\b]+$/.test(values.phone) === false) {
    errors.phone = "Only number!";
  } else if (values.phone.length !== 11) {
    errors.phone = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const Clients = () => {
  // data fetch
  const { client, fetchcClient } = useApiContext();

  useEffect(() => {
    fetchcClient();
  }, [fetchcClient]);

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

  const [showImage, setShowImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // ===== add =====
  const AddClientFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);
    formfield.append("phone", values.phone);

    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_client/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Client is successfuly created...");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitClientForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddClientFunc(values);
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
    phone: item.phone ? item.phone : "",
    image: item.image ? item.image : "",
  };

  const updateClientFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);
    formfield.append("phone", values.phone);

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_client/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Client type is successfully updated...");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateClientForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      updateClientFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const updateClient = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_client/${id}/`
    );
    setItem(data);
  };

  // ====== delete ======
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteClient = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_client/${id}/`
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
                  <h4 className="m-0 fs-5">Client</h4>
                </div>
              </div>

              <div className="col-6">
                <div className="d-flex justify-content-end align-items-center add_delivery">
                  <button className="buttn" onClick={openAddModal}>
                    <TbCirclePlus className="fs-6" />
                    <span className="bttn_title">Add Client</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive">
                  <ClientsDataTable
                    data={client}
                    openEditModal={openEditModal}
                    updateClient={updateClient}
                    openDeleteModal={openDeleteModal}
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
                  <h2>Add Client</h2>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitClientForm}
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
                            Client Name
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
                            phone
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="phone"
                              id="phone"
                              value={values.phone}
                              onChange={handleChange}
                              isInvalid={!!touched.phone && !!errors.phone}
                              isValid={touched.phone && !errors.phone}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.phone}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-4 imgDiv divv">
                          <Form.Label>
                            Image<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="image"
                            id="image"
                            onChange={(event) => {
                              setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              );
                              onImageChange(event);
                            }}
                            isInvalid={!!touched.image && !!errors.image}
                            isValid={touched.image && !errors.image}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.image}
                          </Form.Control.Feedback>

                          {showImage && (
                            <div>
                              <img
                                alt="product preview img"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "20px",
                                  borderRadius: "50%",
                                }}
                                src={showImage}
                              />
                            </div>
                          )}
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
                            Add Client
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

            {/* ====== Edit Modal ====== */}
            {isEditModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeEditModal}>
                    &times;
                  </span>
                  <h2>Update Client</h2>

                  <Formik
                    enableReinitialize={true}
                    initialValues={updatedValues}
                    validationSchema={schema}
                    onSubmit={submitUpdateClientForm}
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
                            Client Name
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
                            phone
                            <span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="phone"
                              id="phone"
                              value={values.phone}
                              onChange={handleChange}
                              isInvalid={!!touched.phone && !!errors.phone}
                              isValid={touched.phone && !errors.phone}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.phone}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-4 imgDiv divv">
                          <Form.Label>
                            Image<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="image"
                            id="image"
                            onChange={(event) => {
                              setFieldValue(
                                "image",
                                event.currentTarget.files[0]
                              );
                              onImageChange(event);
                            }}
                            isInvalid={!!touched.image && !!errors.image}
                            isValid={touched.image && !errors.image}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.image}
                          </Form.Control.Feedback>

                          {showImage && (
                            <div>
                              <img
                                alt="product preview img"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "20px",
                                  borderRadius: "50%",
                                }}
                                src={showImage}
                              />
                            </div>
                          )}
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
                            Update Client
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
                        onClick={() => deleteClient(receivedId)}
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

export default Clients;
