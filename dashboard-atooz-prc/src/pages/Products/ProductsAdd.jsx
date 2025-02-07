import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm, Field } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  product_type: "",
  name: "",
  status: "",
  product_code: "",
  category: "",
  brand: "",
  unit_type: "",
  unit_quantity: "",
  isFeatureProducts: "",
  isTopSellingProducts: "",
  isNewArrivalProducts: "",
  sizes: [],
  colors: [],
  mainImage: "",
  sliderImage1: "",
  sliderImage2: "",
  sliderImage3: "",
  sliderImage4: "",
  sliderImage5: "",
  details: "",
  specification: "",
  qa: "",
  review: "",
};

const schema = yup.object().shape({
  product_type: yup.string().required("Product Type is a required field!"),
  name: yup.string().required("Product Name is a required field!"),
  status: yup.boolean(),
  product_code: yup.string().required("Product Code is a required field!"),
  category: yup.string().required("Product Category is a required field!"),
  brand: yup.string().required("Product Brand is a required field!"),
  unit_type: yup.string().required("Product Unit Type is a required field!"),
  unit_quantity: yup
    .string()
    .required("Product Unit Quantity is a required field!"),
  isFeatureProducts: yup.boolean(),
  isTopSellingProducts: yup.boolean(),
  isNewArrivalProducts: yup.boolean(),
  sizes: yup.array(),
  colors: yup.array(),
  mainImage: yup.mixed(),
  sliderImage1: yup.mixed(),
  sliderImage2: yup.mixed(),
  sliderImage3: yup.mixed(),
  sliderImage4: yup.mixed(),
  sliderImage5: yup.mixed(),
  details: yup.string(),
  specification: yup.string(),
  qa: yup.string(),
  review: yup.string(),
});

const validate = (values) => {
  let errors = {};

  return errors;
};

const ProductsAdd = () => {
  const { category, fetchCategory, brand, fetchBrand, unit, fetchUnit } =
    useApiContext();

  useEffect(() => {
    fetchCategory();
    fetchBrand();
    fetchUnit();
  }, [fetchBrand, fetchCategory, fetchUnit]);

  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const [showImage, setShowImage] = useState(null);
  const [showImage1, setShowImage1] = useState(null);
  const [showImage2, setShowImage2] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage1(URL.createObjectURL(event.target.files[0]));
    }
  };

  const onImageChange2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage2(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [unitOptions, setunitOptions] = useState([]);

  useEffect(() => {
    // category
    const userCategoryOptions = category.map((user) => ({
      value: user.id,
      label: user.name,
    }));
    setCategoryOptions(userCategoryOptions);

    // brand
    const userBrandOptions = brand.map((user) => ({
      value: user.id,
      label: user.name,
    }));
    setBrandOptions(userBrandOptions);

    // unit
    const userUnitOptions = unit.map((user) => ({
      value: user.id,
      label: user.name,
    }));
    setunitOptions(userUnitOptions);
  }, [brand, category, unit]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid pink",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#009348" : "white",
      "&:hover": {
        backgroundColor: "#009348",
        color: "white",
      },
      padding: 10,
    }),
  };

  const [checkSizesArray, setCheckSizesArray] = useState([]);
  const [checkColorsArray, setCheckColorsArray] = useState([]);

  // add
  const AddProductFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("product_type", values.product_type);
    formfield.append("name", values.name);
    formfield.append("status", values.status);
    formfield.append("product_code", values.product_code);
    formfield.append("category", values.category);
    formfield.append("brand", values.brand);
    formfield.append("unit_type", values.unit_type);
    formfield.append("unit_quantity", values.unit_quantity);
    formfield.append("isFeatureProducts", values.isFeatureProducts);
    formfield.append("isTopSellingProducts", values.isTopSellingProducts);
    formfield.append("isNewArrivalProducts", values.isNewArrivalProducts);
    formfield.append("sizes", JSON.stringify(checkSizesArray));
    formfield.append("colors", JSON.stringify(checkColorsArray));

    if (values.mainImage) {
      formfield.append("mainImage", values.mainImage);
    }
    if (values.sliderImage1) {
      formfield.append("sliderImage1", values.sliderImage1);
    }
    if (values.sliderImage2) {
      formfield.append("sliderImage2", values.sliderImage2);
    }

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_product/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Product is successfuly created...");
        navigate("/products");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.response.data.product_code || error.message);
      });
  };

  const submitAddProductForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddProductFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="addProduct_wrapper">
          <div className="add_product">
            <div className="">
              <h2 className="fs-5">Add Product</h2>

              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={submitAddProductForm}
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
                    <div className="row mb-2">
                      <div className="form-outline col-lg-4 mb-0">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label>
                            Product Type<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Form.Select
                              name="product_type"
                              id="product_type"
                              value={values.product_type}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.product_type && !!errors.product_type
                              }
                              isValid={
                                touched.product_type && !errors.product_type
                              }
                              className="form-control mb-0"
                            >
                              <option value="">Select</option>
                              <option value={`standard`}>Standard</option>
                              <option value={`combination`}>Combination</option>
                              <option value={`raw_material`}>
                                Raw Material
                              </option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {errors.product_type}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline col-lg-4 mb-0">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label>
                            Product Code<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Form.Control
                              type="text"
                              name="product_code"
                              id="product_code"
                              value={values.product_code}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.product_code && !!errors.product_code
                              }
                              isValid={
                                touched.product_code && !errors.product_code
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.product_code}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline col-lg-4 mb-0">
                        <Form.Group className="form-outline mb-0">
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
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="form-outline col-lg-12 mb-0">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label>
                            Product Name<span>*</span>
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
                      </div>
                    </div>

                    <div className="row mb-2">
                      <div className="form-outline col-lg-6 mb-0">
                        <Form.Group className="form-outline mb-0 divv">
                          <Form.Label>
                            Category<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Field name="category">
                              {({ field, form, meta }) => (
                                <>
                                  <Select
                                    id="category"
                                    name="category"
                                    value={categoryOptions.find(
                                      (option) => option.value === field.value
                                    )}
                                    onChange={(selectedOption) => {
                                      form.setFieldValue(
                                        field.name,
                                        selectedOption
                                          ? selectedOption.value
                                          : null
                                      );
                                    }}
                                    options={categoryOptions}
                                    isSearchable
                                    styles={customStyles}
                                    isInvalid={meta.touched && meta.error}
                                    isValid={meta.touched && !meta.error}
                                    onBlur={() =>
                                      form.setFieldTouched(field.name, true)
                                    }
                                  />
                                  {meta.touched && meta.error && (
                                    <div className="invalid-feedback d-block">
                                      {meta.error}
                                    </div>
                                  )}
                                </>
                              )}
                            </Field>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline col-lg-6 mb-0">
                        <Form.Group className="form-outline mb-0 divv">
                          <Form.Label>
                            Brand<span>*</span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Field name="brand">
                              {({ field, form, meta }) => (
                                <>
                                  <Select
                                    id="brand"
                                    name="brand"
                                    value={brandOptions.find(
                                      (option) => option.value === field.value
                                    )}
                                    onChange={(selectedOption) => {
                                      form.setFieldValue(
                                        field.name,
                                        selectedOption
                                          ? selectedOption.value
                                          : null
                                      );
                                    }}
                                    options={brandOptions}
                                    isSearchable
                                    styles={customStyles}
                                    isInvalid={meta.touched && meta.error}
                                    isValid={meta.touched && !meta.error}
                                    onBlur={() =>
                                      form.setFieldTouched(field.name, true)
                                    }
                                  />
                                  {meta.touched && meta.error && (
                                    <div className="invalid-feedback d-block">
                                      {meta.error}
                                    </div>
                                  )}
                                </>
                              )}
                            </Field>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="row mb-2">
                        <div className="form-outline col-lg-6 mb-0 ">
                          <Form.Group className="form-outline mb-0 divv">
                            <Form.Label>
                              Unit Type<span>*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              {/* <InputGroup.Text>@</InputGroup.Text> */}
                              <Field name="unit_type">
                                {({ field, form, meta }) => (
                                  <>
                                    <Select
                                      id="unit_type"
                                      name="unit_type"
                                      value={unitOptions.find(
                                        (option) => option.value === field.value
                                      )}
                                      onChange={(selectedOption) => {
                                        form.setFieldValue(
                                          field.name,
                                          selectedOption
                                            ? selectedOption.value
                                            : null
                                        );
                                      }}
                                      options={unitOptions}
                                      isSearchable
                                      styles={customStyles}
                                      isInvalid={meta.touched && meta.error}
                                      isValid={meta.touched && !meta.error}
                                      onBlur={() =>
                                        form.setFieldTouched(field.name, true)
                                      }
                                    />
                                    {meta.touched && meta.error && (
                                      <div className="invalid-feedback d-block">
                                        {meta.error}
                                      </div>
                                    )}
                                  </>
                                )}
                              </Field>
                            </InputGroup>
                          </Form.Group>
                        </div>

                        <div className="form-outline col-lg-6 mb-0">
                          <Form.Group className="form-outline mb-0">
                            <Form.Label>
                              Unit Quantity
                              <span className="text-danger">*</span>
                            </Form.Label>
                            <InputGroup hasValidation>
                              {/* <InputGroup.Text>@</InputGroup.Text> */}
                              <Form.Select
                                name="unit_quantity"
                                id="unit_quantity"
                                value={values.unit_quantity}
                                onChange={handleChange}
                                isInvalid={
                                  !!touched.unit_quantity &&
                                  !!errors.unit_quantity
                                }
                                isValid={
                                  touched.unit_quantity && !errors.unit_quantity
                                }
                                className="form-control mb-0"
                              >
                                <option value="">Select</option>
                                <option value={`.5`}>.5</option>
                                <option value={`1`}>1</option>
                                <option value={`2`}>2</option>
                                <option value={`5`}>5</option>
                                <option value={`10`}>10</option>
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                {errors.unit_quantity}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </div>

                        <div className="row mb-2">
                          <div className="form-outline col-lg-4 mb-0">
                            <Form.Group className="form-outline mb-0">
                              <Form.Label>
                                Is Feature<span></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                {/* <InputGroup.Text>@</InputGroup.Text> */}
                                <Form.Select
                                  name="isFeatureProducts"
                                  id="isFeatureProducts"
                                  value={values.isFeatureProducts}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.isFeatureProducts &&
                                    !!errors.isFeatureProducts
                                  }
                                  isValid={
                                    touched.isFeatureProducts &&
                                    !errors.isFeatureProducts
                                  }
                                  className="form-control mb-0"
                                >
                                  <option value="">Select</option>
                                  <option value={`${true}`}>Active</option>
                                  <option value={`${false}`}>Inactive</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.isFeatureProducts}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="form-outline col-lg-4 mb-0">
                            <Form.Group className="form-outline mb-0">
                              <Form.Label>
                                Is Top Selling<span></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                {/* <InputGroup.Text>@</InputGroup.Text> */}
                                <Form.Select
                                  name="isTopSellingProducts"
                                  id="isTopSellingProducts"
                                  value={values.isTopSellingProducts}
                                  // onChange={handleChange}
                                  isInvalid={
                                    !!touched.isTopSellingProducts &&
                                    !!errors.isTopSellingProducts
                                  }
                                  isValid={
                                    touched.isTopSellingProducts &&
                                    !errors.isTopSellingProducts
                                  }
                                  className="form-control mb-0"
                                >
                                  <option value="">Select</option>
                                  <option value={`${true}`}>Active</option>
                                  <option value={`${false}`}>Inactive</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.isTopSellingProducts}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="form-outline col-lg-4 mb-0">
                            <Form.Group className="form-outline mb-0">
                              <Form.Label>
                                Is New Arrival<span></span>
                              </Form.Label>
                              <InputGroup hasValidation>
                                {/* <InputGroup.Text>@</InputGroup.Text> */}
                                <Form.Select
                                  name="isNewArrivalProducts"
                                  id="isNewArrivalProducts"
                                  value={values.isNewArrivalProducts}
                                  onChange={handleChange}
                                  isInvalid={
                                    !!touched.isNewArrivalProducts &&
                                    !!errors.isNewArrivalProducts
                                  }
                                  isValid={
                                    touched.isNewArrivalProducts &&
                                    !errors.isNewArrivalProducts
                                  }
                                  className="form-control mb-0"
                                >
                                  <option value="">Select</option>
                                  <option value={`${true}`}>Active</option>
                                  <option value={`${false}`}>Inactive</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                  {errors.isNewArrivalProducts}
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                          </div>

                          <div className="row mb-2">
                            <div className="form-outline col-lg-12 mb-0">
                              <Form.Group className="form-outline mb-0">
                                <Form.Label>
                                  Sizes
                                  <span className="text-danger"></span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <div
                                    role="group"
                                    aria-labelledby="checkbox-group"
                                    className="checkbox-group d-flex flex-column"
                                  >
                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                      <b>(Shirt & T-shirt sizes) : &nbsp;</b>

                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="M"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("M")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "M",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "M"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        M
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="L"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("L")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "L",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "L"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        L
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="XL"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("XL")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "XL",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "XL"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        XL
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="XXL"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("XXL")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "XXL",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "XXL"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        XXL
                                      </label>
                                    </div>

                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                      <b>(Pant sizes) : &nbsp;</b>

                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="30"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("30")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "30",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "30"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        30
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="32"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("32")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "32",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "32"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        32
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="34"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("34")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "34",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "34"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        34
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="36"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("36")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "36",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "36"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        36
                                      </label>
                                    </div>

                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                      <b>(Shoe sizes) : &nbsp;</b>

                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="38"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("38")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "38",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "38"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        38
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="39"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("39")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "39",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "39"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        39
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="40"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("40")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "40",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "40"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        40
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="sizes"
                                          value="41"
                                          onClick={() => {
                                            if (
                                              !checkSizesArray.includes("41")
                                            ) {
                                              setCheckSizesArray([
                                                ...checkSizesArray,
                                                "41",
                                              ]);
                                            } else {
                                              setCheckSizesArray(
                                                checkSizesArray.filter(
                                                  (size) => size !== "41"
                                                )
                                              );
                                            }
                                          }}
                                        />
                                        41
                                      </label>
                                    </div>
                                  </div>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.sizes}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>
                          </div>

                          <div className="row mb-2">
                            <div className="form-outline col-lg-12 mb-0">
                              <Form.Group className="form-outline mb-0">
                                <Form.Label>
                                  Colors
                                  <span className="text-danger"></span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <div
                                    role="group"
                                    aria-labelledby="checkbox-group"
                                    className="checkbox-group"
                                  >
                                    <label>
                                      <Field
                                        type="checkbox"
                                        className="text-capitalize"
                                        name="colors"
                                        value="red"
                                        onClick={() => {
                                          if (
                                            !checkColorsArray.includes("red")
                                          ) {
                                            setCheckColorsArray([
                                              ...checkColorsArray,
                                              "red",
                                            ]);
                                          } else {
                                            setCheckColorsArray(
                                              checkColorsArray.filter(
                                                (size) => size !== "red"
                                              )
                                            );
                                          }
                                        }}
                                      />
                                      red
                                    </label>
                                    <label>
                                      <Field
                                        type="checkbox"
                                        className="text-capitalize"
                                        name="colors"
                                        value="green"
                                        onClick={() => {
                                          if (
                                            !checkColorsArray.includes("green")
                                          ) {
                                            setCheckColorsArray([
                                              ...checkColorsArray,
                                              "green",
                                            ]);
                                          } else {
                                            setCheckColorsArray(
                                              checkColorsArray.filter(
                                                (size) => size !== "green"
                                              )
                                            );
                                          }
                                        }}
                                      />
                                      green
                                    </label>
                                    <label>
                                      <Field
                                        type="checkbox"
                                        className="text-capitalize"
                                        name="colors"
                                        value="black"
                                        onClick={() => {
                                          if (
                                            !checkColorsArray.includes("black")
                                          ) {
                                            setCheckColorsArray([
                                              ...checkColorsArray,
                                              "black",
                                            ]);
                                          } else {
                                            setCheckColorsArray(
                                              checkColorsArray.filter(
                                                (size) => size !== "black"
                                              )
                                            );
                                          }
                                        }}
                                      />
                                      black
                                    </label>
                                    <label>
                                      <Field
                                        type="checkbox"
                                        className="text-capitalize"
                                        name="colors"
                                        value="gray"
                                        onClick={() => {
                                          if (
                                            !checkColorsArray.includes("gray")
                                          ) {
                                            setCheckColorsArray([
                                              ...checkColorsArray,
                                              "gray",
                                            ]);
                                          } else {
                                            setCheckColorsArray(
                                              checkColorsArray.filter(
                                                (size) => size !== "gray"
                                              )
                                            );
                                          }
                                        }}
                                      />
                                      gray
                                    </label>
                                  </div>
                                  <Form.Control.Feedback type="invalid">
                                    {errors.colors}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="form-outline col-lg-6 mb-0">
                              <Form.Group className="form-outline mb-0  imgDiv divv">
                                <Form.Label>
                                  Main Image<span></span>
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="mainImage"
                                  id="mainImage"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "mainImage",
                                      event.currentTarget.files[0]
                                    );
                                    onImageChange(event);
                                  }}
                                  isInvalid={
                                    !!touched.mainImage && !!errors.mainImage
                                  }
                                  isValid={
                                    touched.mainImage && !errors.mainImage
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.mainImage}
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
                            </div>

                            <div className="form-outline col-lg-6 mb-0">
                              <Form.Group className="form-outline mb-0  imgDiv divv">
                                <Form.Label>
                                  Slider Image 1<span></span>
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="sliderImage1"
                                  id="sliderImage1"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "sliderImage1",
                                      event.currentTarget.files[0]
                                    );
                                    onImageChange1(event);
                                  }}
                                  isInvalid={
                                    !!touched.sliderImage1 &&
                                    !!errors.sliderImage1
                                  }
                                  isValid={
                                    touched.sliderImage1 && !errors.sliderImage1
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.sliderImage1}
                                </Form.Control.Feedback>

                                {showImage1 && (
                                  <div>
                                    <img
                                      alt="product preview img"
                                      style={{
                                        width: "150px",
                                        height: "150px",
                                        marginTop: "20px",
                                        borderRadius: "50%",
                                      }}
                                      src={showImage1}
                                    />
                                  </div>
                                )}
                              </Form.Group>
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="form-outline col-lg-6 mb-0">
                              <Form.Group className="form-outline mb-0  imgDiv divv">
                                <Form.Label>
                                  Slider Image 2<span></span>
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="sliderImage2"
                                  id="sliderImage2"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "sliderImage2",
                                      event.currentTarget.files[0]
                                    );
                                    onImageChange2(event);
                                  }}
                                  isInvalid={
                                    !!touched.sliderImage2 &&
                                    !!errors.sliderImage2
                                  }
                                  isValid={
                                    touched.sliderImage2 && !errors.sliderImage2
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.sliderImage2}
                                </Form.Control.Feedback>

                                {showImage2 && (
                                  <div>
                                    <img
                                      alt="product preview img"
                                      style={{
                                        width: "150px",
                                        height: "150px",
                                        marginTop: "20px",
                                        borderRadius: "50%",
                                      }}
                                      src={showImage2}
                                    />
                                  </div>
                                )}
                              </Form.Group>
                            </div>

                            {/* <div className="form-outline col-lg-6 mb-0">
                              <Form.Group className="form-outline mb-0  imgDiv divv">
                                <Form.Label>
                                  Slider Image 3<span></span>
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="sliderImage1"
                                  id="sliderImage1"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "sliderImage1",
                                      event.currentTarget.files[0]
                                    );
                                    onImageChange1(event);
                                  }}
                                  isInvalid={
                                    !!touched.sliderImage1 &&
                                    !!errors.sliderImage1
                                  }
                                  isValid={
                                    touched.sliderImage1 && !errors.sliderImage1
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.sliderImage1}
                                </Form.Control.Feedback>

                                {showImage1 && (
                                  <div>
                                    <img
                                      alt="product preview img"
                                      style={{
                                        width: "150px",
                                        height: "150px",
                                        marginTop: "20px",
                                        borderRadius: "50%",
                                      }}
                                      src={showImage1}
                                    />
                                  </div>
                                )}
                              </Form.Group>
                            </div> */}
                          </div>
                        </div>
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
                        Add Product
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

  .addProduct_wrapper {
    flex: 1;
  }

  .footer {
    padding: 10px 20px;
  }
  .add_product {
    padding: 20px 20px;
  }

  .add_product h2 {
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
  .checkbox-group {
    display: flex;
    gap: 10px;
  }
  //formik css
`;

export default ProductsAdd;
