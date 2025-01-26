import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

import Footer from "../../components/Footer";
import CategoryDataTable from "./CategoryDataTable";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  name: "",
  status: "",
  image: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Category Name is a required field!"),
  status: yup.boolean(),
  image: yup.mixed(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const CategoryProd = () => {
  // data fetching
  const { category, fetchCategory } = useApiContext();

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  //modal
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

  const [showImage, setShowImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  // add
  const AddCategoryFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);

    if (values.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_category/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Product Category is successfuly created..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitAddCategoryForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddCategoryFunc(values);
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
    image: item.image ? item.image : "",
  };

  const UpdateCategoryFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("name", values.name);
    formfield.append("status", values.status);

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_category/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "Product Category is successfully updated..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateCategoryForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      UpdateCategoryFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const updateCategory = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_category/${id}/`
    );
    setItem(data);
    setShowImage(data.image);
  };

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteCategory = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_category/${id}/`
    );
    window.location.reload(false);
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
                    <h4 className="m-0 fs-5 mt-2">Category</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_catry">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn" onClick={openAddModal}>
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">Add Category</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-12">
                  <CategoryDataTable
                    data={category}
                    openEditModal={openEditModal}
                    openDeleteModal={openDeleteModal}
                    updateCategory={updateCategory}
                    getId={getId}
                  />
                </div>
              </div>
            </div>

            {/* ===== Custom Modal ===== */}
            {isAddModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeAddModal}>
                    &times;
                  </span>
                  <h2 className="">Add Category</h2>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={submitAddCategoryForm}
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
                            Category Name<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
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

                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Status<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
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

                        <div className="modal-actions">
                          <button type="reset" className="cancel-btn">
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="add-btn"
                            disabled={isSubmitting}
                          >
                            Add Category
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
                    onSubmit={submitUpdateCategoryForm}
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
                            Category Name<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
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

                        <Form.Group className="form-outline mb-3">
                          <Form.Label>
                            Status<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
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

                        <div className="modal-actions">
                          <button type="reset" className="cancel-btn">
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="add-btn"
                            disabled={isSubmitting}
                          >
                            Edit Category
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

            {/* ===== Delete Confirmation Modal ===== */}
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
                        onClick={() => deleteCategory(receivedId)}
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
  .product_wrapper {
    /* Take available height */
    flex: 1;
    /* Scroll only the blog layout */
    /* overflow-y: auto; */
  }
  .footer {
    padding: 10px 20px;
  }
  .categoryProd {
    /* grid-area: main; */
    /* overflow-y: auto; */
    padding: 20px 20px;
    /* height: calc(100vh - 60px); */
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

export default CategoryProd;
