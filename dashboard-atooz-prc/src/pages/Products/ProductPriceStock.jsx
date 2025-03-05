import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "../../components/Footer";
import FractionDigits from "../../components/FractionDigits";

const schema = yup.object().shape({
  initial_stock: yup.string(),
  regularPrice: yup.string(),
  discount: yup.string(),
  specialPrice: yup.string(),
});

const validate = (values) => {
  let errors = {};

  if (values.initial_stock) {
    if (/^[0-9.\b]+$/.test(values.initial_stock) === false) {
      errors.initial_stock = "Only number!";
    }
  }

  if (values.regularPrice) {
    if (/^[0-9.\b]+$/.test(values.regularPrice) === false) {
      errors.regularPrice = "Only number!";
    } else if (/^\d{0,8}(\.\d{0,2})?$/.test(values.regularPrice) === false) {
      errors.regularPrice =
        "Maximum 8 digits before the decimal point & Maximum 2 digits after the decimal point!";
    }
  }

  if (!values.discount) {
    errors.discount = "Product price is required!";
  } else if (/^[0-9.\b]+$/.test(values.discount) === false) {
    errors.discount = "Only number!";
  } else if (/^\d{0,8}(\.\d{0,2})?$/.test(values.discount) === false) {
    errors.discount =
      "Maximum 8 digits before the decimal point & Maximum 2 digits after the decimal point!";
  }

  return errors;
};

const ProductPriceStock = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [item, setItem] = useState({});

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `${
          process.env.REACT_APP_BASE_URL
        }/product_api/unpaginate_product/${Number(productId)}/`
      );

      setItem(data);
    };

    loadProducts();
  }, [productId]);

  // update
  const updatedValues = {
    initial_stock: 0,
    regularPrice: item.regularPrice ? item.regularPrice : "",
    discount: item.discount ? item.discount : "",
    specialPrice: item.specialPrice ? item.specialPrice : "",
  };

  const UpdateProductFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("initial_stock", values.initial_stock);
    formfield.append("regularPrice", values.regularPrice);
    formfield.append("discount", values.discount);
    formfield.append("specialPrice", values.regularPrice - values.discount);

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_product/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Product is successfully updated...");
        navigate("/products");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateProductForm = async (
    values,
    { setErrors, setSubmitting }
  ) => {
    try {
      UpdateProductFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="updateProd_wrapper">
          <div className="update_product">
            <div className="">
              <div className="d-flex justify-content-start align-items-center mb-4">
                <Link to="/" className="text-dark">
                  <ImHome className="fs-3 mb-0" />
                </Link>
                <span className="fs-4 mx-1 mt-2">/</span>
                <h4 className="m-0 fs-5 mt-2 fw-bold text-uppercase">
                  Update Product Stock & Price
                </h4>
              </div>

              <Formik
                enableReinitialize={true}
                initialValues={updatedValues}
                validationSchema={schema}
                onSubmit={submitUpdateProductForm}
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
                    <div className="card shadow-sm p-3 mb-3 bg-light rounded">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Product Name : </h6>
                              <h5 className="bold ">{item.name}</h5>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Product ID : </h6>
                              <h5 className="bold ">{item.product_id}</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Purchase Stock : </h6>
                              <h5 className="bold ">{item.purchase_stock}</h5>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Purchase Price : </h6>
                              <h5 className="bold ">
                                {FractionDigits(item.purchase_price)} BDT.
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Initial Stock : </h6>
                              <h5 className="bold ">{item.initial_stock}</h5>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Regular Price : </h6>
                              <h5 className="bold ">
                                {FractionDigits(item.regularPrice)} BDT.
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Discount : </h6>
                              <h5 className="bold ">
                                {FractionDigits(item.discount)} BDT.
                              </h5>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div
                              className="p-3 d-flex justify-content-center align-items-center gap-3 border rounded text-center"
                              style={{ backgroundColor: "#e9ecef" }}
                            >
                              <h6 className="text-muted">Special Price : </h6>
                              <h5 className="bold ">
                                {FractionDigits(item.specialPrice)} BDT.
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="form-outline col-lg-4 mb-0">
                        <Form.Group className="form-outline">
                          <Form.Label>
                            Initial Stock<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>                          
                            <Form.Control
                              type="text"
                              name="initial_stock"
                              id="initial_stock"
                              value={values.initial_stock}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.initial_stock &&
                                !!errors.initial_stock
                              }
                              isValid={
                                touched.initial_stock && !errors.initial_stock
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.initial_stock}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline col-lg-4 mb-0">
                        <Form.Group className="form-outline">
                          <Form.Label>
                            Regular Price<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="regularPrice"
                              id="regularPrice"
                              value={values.regularPrice}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.regularPrice && !!errors.regularPrice
                              }
                              isValid={
                                touched.regularPrice && !errors.regularPrice
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.regularPrice}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline col-lg-4 mb-0">
                        <Form.Group className="form-outline">
                          <Form.Label>
                            Discount<span className="text-danger">*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="discount"
                              id="discount"
                              value={values.discount}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.discount && !!errors.discount
                              }
                              isValid={touched.discount && !errors.discount}
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.discount}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="d-flex gap-2 justify-content-end mt-5 mb-2">
                      <button type="reset" className="bttn">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bttn1"
                        disabled={isSubmitting}
                      >
                        Edit Price & Stock
                      </button>
                    </div>

                    {/* message  */}
                    {message && <h2 className="text-center m-5">{message}</h2>}
                  </FormikForm>
                )}
              </Formik>
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

  .updateProd_wrapper {
    flex: 1;
  }

  .footer {
    padding: 10px 20px;
  }
  .update_product {
    padding: 20px 20px;
  }

  .update_product h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .form-outline {
    margin-bottom: 1.5rem;
  }

  .form-label {
    font-size: 13px;
    font-weight: 500;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }

  .form-control {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .input-group-text {
    font-size: 12px;
  }

  .has-validation .form-control:invalid {
    border-color: #dc3545;
  }
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

  .css-b62m3t-container,
  .css-3iigni-container {
    background-color: white;
    color: black;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .select {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    width: 100%;
  }
  .select option:checked {
    background-color: orange;
  }
  //formik css
`;

export default ProductPriceStock;
