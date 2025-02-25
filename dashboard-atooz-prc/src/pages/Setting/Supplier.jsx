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
  // supplier_id: yup.string(),
  name: yup.string().required("Supplier Name is a required field!"),
  status: yup.boolean(),
  address: yup.string().required("Address is a required field!"),
  phone: yup.string().required("Phone is a required field!"),
  email: yup.string(),
  logo: yup.mixed(),
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

  if (values.email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) === false) {
      errors.email = "Invalid Email!";
    }
  }

  return errors;
};

const Supplier = () => {
  // data fetching
  const { supplier, fetchSupplier } = useApiContext();
  console.log(supplier);

  useEffect(() => {
    fetchSupplier();
  }, [fetchSupplier]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const openEditModal = () => setIsEditModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);

  const closeAddModal = () => setIsAddModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const [receivedId, setReceivedId] = useState(null);

  const [showLogo, setShowLogo] = useState(null);
  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  // ===== add =====
  const AddSupplierFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);

    if (values.logo) {
      formfield.append("logo", values.logo);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_supplier/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Product Supplier is successfuly created..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddSupplierForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddSupplierFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  // update
  const updatedValues = {
    name: item.name ? item.name : "",
    status: item.status ? item.status : "",
    address: item.address ? item.address : "",
    phone: item.phone ? item.phone : "",
    email: item.email ? item.email : "",
    logo: item.logo ? item.logo : "",
  };

  const UpdateSupplierFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);
    formfield.append("address", values.address);
    formfield.append("phone", values.phone);
    formfield.append("email", values.email);

    if (values.logo !== item.logo) {
      formfield.append("logo", values.logo);
    }

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_supplier/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Product supplier is successfully updated..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateSupplierForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      UpdateSupplierFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const updateSupplier = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_supplier/${id}/`
    );
    setItem(data);
    setShowLogo(data.logo);
  };

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteSupplier = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_supplier/${id}/`
    );
    window.location.reload(false);
  };

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
                <SupplierDataTable
                  data={supplier}
                  openEditModal={openEditModal}
                  updateSupplier={updateSupplier}
                  openDeleteModal={openDeleteModal}
                  getId={getId}
                />
              </div>
            </div>
          </div>

          {/*==== Add modal ==== */}
          {isAddModalOpen && (
            <div className="custom-modal">
              <div className="modal-content">
                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={submitAddSupplierForm}
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
                      <div className="modal-header">
                        <h5
                          className="modal-title fs-6"
                          id="SupplierAddModalLabel"
                        >
                          Add Supplier
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={closeAddModal}
                        ></button>
                      </div>

                      <div className="modal-body">
                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Supplier Name<span className="text-danger">*</span>
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

                        <Form.Group className="form-outline mb-2">
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

                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Address<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              as="textarea"
                              name="address"
                              id="address"
                              value={values.address}
                              onChange={handleChange}
                              isInvalid={!!touched.address && !!errors.address}
                              isValid={touched.address && !errors.address}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.address}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Phone<span>*</span>
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

                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Email<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="email"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={!!touched.email && !!errors.email}
                              isValid={touched.email && !errors.email}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-3 imgDiv divv">
                          <Form.Label>
                            Logo<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="logo"
                            id="logo"
                            onChange={(event) => {
                              setFieldValue(
                                "logo",
                                event.currentTarget.files[0]
                              );
                              onLogoChange(event);
                            }}
                            isInvalid={!!touched.logo && !!errors.logo}
                            isValid={touched.logo && !errors.logo}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.logo}
                          </Form.Control.Feedback>

                          {showLogo && (
                            <div>
                              <img
                                alt="product preview img"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "20px",
                                  borderRadius: "50%",
                                }}
                                src={showLogo}
                              />
                            </div>
                          )}
                        </Form.Group>
                      </div>

                      <div className="modal-footer">
                        <div className="hstack gap-2 justify-content-end">
                          <button type="reset" className="bttn">
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bttn1"
                            disabled={isSubmitting}
                          >
                            Add Supplier
                          </button>
                        </div>
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

          {/*==== Edit modal ==== */}
          {isEditModalOpen && (
            <div className="modal">
              <div className="modal-contentt">
                <Formik
                  enableReinitialize={true}
                  initialValues={updatedValues}
                  validationSchema={schema}
                  onSubmit={submitUpdateSupplierForm}
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
                      <div className="modal-header">
                        <h5
                          className="modal-title fs-6"
                          id="SupplierAddModalLabel"
                        >
                          Edit Supplier
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={closeEditModal}
                        ></button>
                      </div>

                      <div className="modal-body">
                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Supplier Name<span className="text-danger">*</span>
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

                        <Form.Group className="form-outline mb-2">
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

                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Address<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              as="textarea"
                              name="address"
                              id="address"
                              value={values.address}
                              onChange={handleChange}
                              isInvalid={!!touched.address && !!errors.address}
                              isValid={touched.address && !errors.address}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.address}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Phone<span className="text-danger">*</span>
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

                        <Form.Group className="form-outline mb-2">
                          <Form.Label>
                            Email<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="email"
                              name="email"
                              id="email"
                              value={values.email}
                              onChange={handleChange}
                              isInvalid={!!touched.email && !!errors.email}
                              isValid={touched.email && !errors.email}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        <Form.Group className="form-outline mb-3 imgDiv divv">
                          <Form.Label>
                            Logo<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="logo"
                            id="logo"
                            onChange={(event) => {
                              setFieldValue(
                                "logo",
                                event.currentTarget.files[0]
                              );
                              onLogoChange(event);
                            }}
                            isInvalid={!!touched.logo && !!errors.logo}
                            isValid={touched.logo && !errors.logo}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.logo}
                          </Form.Control.Feedback>

                          {showLogo && (
                            <div>
                              <img
                                alt="product preview img"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "20px",
                                  borderRadius: "50%",
                                }}
                                src={showLogo}
                              />
                            </div>
                          )}
                        </Form.Group>
                      </div>

                      <div className="modal-footer">
                        <div className="hstack gap-2 justify-content-end">
                          <button type="reset" className="bttn">
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bttn1"
                            disabled={isSubmitting}
                          >
                            Edit Supplier
                          </button>
                        </div>
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

          {/* ====== Delete Modal ====== */}
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
                      onClick={() => deleteSupplier(receivedId)}
                    >
                      Yes, Delete It!
                    </button>
                  </div>
                </div>
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

  /* ===== modal ==== */
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

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    position: relative;
  }

  .modal-contentt {
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    max-width: 550px;
    height: 550px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  /* Remove blue outline on focus */
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }
  .bttn {
    background-color: #ff6e6c;
    padding: 8px 14px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
  }
  .bttn1 {
    background-color: #3e61e4;
    padding: 8px 14px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
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
    .supplier_row .add_supplier .buttn {
      padding: 5px;
    }
    .supplier_row .bttn_title {
      font-size: 12px;
    }
    .modal-content {
      max-width: 300px !important;
    }
  }
`;

export default Supplier;
