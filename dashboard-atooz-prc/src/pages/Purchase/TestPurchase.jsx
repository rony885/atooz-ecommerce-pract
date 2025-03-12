import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import axios from "axios";
import { Formik, Form as FormikForm, Field } from "formik";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Footer from "../../components/Footer";
import PurchaseProductForm from "./PurchaseProductForm";
import { useApiContext } from "../../context/ApiContext";

const initialValues = {
  purchase_date: "",
  supplier: "",
  total_item: "",
  total_amount: "",
  discount: "",
  grand_total_amount: "",
};

const schema = yup.object().shape({
  // status: yup.boolean(),
  purchase_date: yup.string().required("Purchase Date is a required field!"),
  supplier: yup.string().required("supplier is a required field!"),
  total_item: yup.string(),
  total_amount: yup.string(),
  discount: yup.string(),
  grand_total_amount: yup.string(),
});

const validate = (values) => {
  let errors = {};

  return errors;
};

const PurchaseAdd = () => {
  const {
    unpaginate_product,
    unpaginate_supplier,
    c_user,
    fetchUnpaginateProduct,
    fetchUnpaginateSupplier,
  } = useApiContext();

  useEffect(() => {
    fetchUnpaginateProduct();
    fetchUnpaginateSupplier();
  }, [fetchUnpaginateProduct, fetchUnpaginateSupplier]);

  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const [supplierOptions, setSupplierOptions] = useState([]);
  // const [productOptions, setProductOptions] = useState([]);

  useEffect(() => {
    const userSupplierOptions = unpaginate_supplier.map((user) => ({
      value: user.id,
      label: user.name,
    }));

    setSupplierOptions(userSupplierOptions);

    //   const userProductOptions = unpaginate_product.map((user) => ({
    //     value: user.id,
    //     label: `${user.name}....${user.purchase_price}`,
    //   }));

    // setProductOptions(userProductOptions);
  }, [unpaginate_supplier]);

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

  const [productList, setProductList] = useState([
    {
      productId: null,
      quantity: 1,
      bdtRate: 0,
      linePrice: 0,
    },
  ]);

  const totalItem = productList.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalAmount = productList.reduce(
    (total, product) => total + product.linePrice,
    0
  );

  const [discount, setdiscount] = useState(0);
  const grandTotal = totalAmount - discount;

  const AddPurchaseFunc = async (values) => {
    let formfield = new FormData();

    // Convert purchase_details array to a JSON string
    values.purchase_details = JSON.parse(JSON.stringify(productList));
    values.total_item = totalItem;
    values.total_amount = totalAmount;
    values.discount = discount;
    values.grand_total_amount = grandTotal;

    // Append individual fields
    formfield.append("purchase_date", values.purchase_date);
    formfield.append("supplier", values.supplier);
    formfield.append("creator", Number(c_user && c_user.id));

    // Append purchase_details as separate items in FormData
    values.purchase_details.forEach((detail, index) => {
      formfield.append(
        `purchase_details[${index}][product]`,
        Number(detail.productId)
      );
      formfield.append(`purchase_details[${index}][bdtRate]`, detail.bdtRate);
      formfield.append(`purchase_details[${index}][quantity]`, detail.quantity);
      formfield.append(
        `purchase_details[${index}][linePrice]`,
        detail.linePrice
      );
    });

    // Append individual fields
    formfield.append("total_item", values.total_item);
    formfield.append("total_amount", values.total_amount);
    formfield.append("discount", values.discount);
    formfield.append("grand_total_amount", values.grand_total_amount);

    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/purchase/`,
      headers: {
        "Content-Type": "application/json; charset=UTF-8; text/plain",
      },
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Purchase is successfuly created...");
        navigate("/purchase");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message, "Error");
      });
  };

  const submitPurchaseForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddPurchaseFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="purchaseAdd_wrapper">
          <div className="purchase_add">
            <div className="">
              <h2 className="fs-5">Add Purchase</h2>

              <form className="mt-5">
                <div className="card_form">
                  <div class="row mb-4 card_resv">
                    <div class="col-12">
                      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Purchase Details</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={schema}
                  onSubmit={submitPurchaseForm}
                  validate={validate}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    isSubmitting,
                    values,
                    errors,
                    touched,
                  }) => (
                    <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
                      <div className="row justify-content-center">
                        <div className=" overflow-hidden">
                          <div className="card-body card-body z-1 position-relative">
                            <div className="row g-3">
                              <Form.Group className="form-outline col-lg-6 mb-2 divvv">
                                <Form.Label>
                                  Purchase Date
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    type="date"
                                    name="purchase_date"
                                    id="purchase_date"
                                    value={values.purchase_date}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.purchase_date &&
                                      !!errors.purchase_date
                                    }
                                    isValid={
                                      touched.purchase_date &&
                                      !errors.purchase_date
                                    }
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.purchase_date}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>

                              <Form.Group className="form-outline col-lg-6 mb-2 divvv">
                                <Form.Label>
                                  Supplier<span className="text-danger">*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <Field name="supplier">
                                    {({ field, form, meta }) => (
                                      <>
                                        <Select
                                          id="supplier"
                                          name="supplier"
                                          value={supplierOptions.find(
                                            (option) =>
                                              option.value === field.value
                                          )}
                                          onChange={(selectedOption) => {
                                            form.setFieldValue(
                                              field.name,
                                              selectedOption
                                                ? selectedOption.value
                                                : null
                                            );
                                          }}
                                          options={supplierOptions}
                                          isSearchable
                                          styles={customStyles}
                                          isInvalid={meta.touched && meta.error}
                                          isValid={meta.touched && !meta.error}
                                          onBlur={() =>
                                            form.setFieldTouched(
                                              field.name,
                                              true
                                            )
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

                            <PurchaseProductForm
                              productList={productList}
                              setProductList={setProductList}
                              unpaginate_product={unpaginate_product}
                            />

                            <div className="d-flex align-items-end justify-content-end flex-column mb-2">
                              <Form.Group className="form-outline mb-2">
                                <Form.Label>
                                  Total Amount
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    type="text"
                                    name="total_amount"
                                    id="total_amount"
                                    value={totalAmount}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.total_amount &&
                                      !!errors.total_amount
                                    }
                                    isValid={
                                      touched.total_amount &&
                                      !errors.total_amount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.total_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>

                              <Form.Group className="form-outline mb-2">
                                <Form.Label>
                                  Discount<span className="text-danger">*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    type="text"
                                    name="discount"
                                    id="discount"
                                    value={discount}
                                    onChange={(e) =>
                                      setdiscount(e.target.value)
                                    }
                                    isInvalid={
                                      !!touched.discount && !!errors.discount
                                    }
                                    isValid={
                                      touched.discount && !errors.discount
                                    }
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.discount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>

                              <Form.Group className="form-outline mb-2">
                                <Form.Label>
                                  Grand Total Amount
                                  <span className="text-danger">*</span>
                                </Form.Label>
                                <InputGroup hasValidation>
                                  <Form.Control
                                    type="text"
                                    name="grand_total_amount"
                                    id="grand_total_amount"
                                    value={grandTotal}
                                    onChange={handleChange}
                                    isInvalid={
                                      !!touched.grand_total_amount &&
                                      !!errors.grand_total_amount
                                    }
                                    isValid={
                                      touched.grand_total_amount &&
                                      !errors.grand_total_amount
                                    }
                                    readOnly
                                    className="form-control mb-0"
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors.grand_total_amount}
                                  </Form.Control.Feedback>
                                </InputGroup>
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hstack gap-2 justify-content-end mt-3 my-2">
                        <button type="reset" className="btn btn-danger">
                          Cancel
                        </button>

                        <button
                          disabled={
                            isSubmitting || productList[0].productId === null
                          }
                          type="submit"
                          className="btn btn-success"
                        >
                          <i className="ri-printer-line align-bottom me-1"></i>
                          Save
                        </button>
                      </div>

                      <div className="hstack gap-2 flex-wrap justify-content-end d-print-none my-4">
                        {/* message  */}
                        {message && (
                          <h2 className="text-center m-5">{message}</h2>
                        )}
                      </div>
                    </FormikForm>
                  )}
                </Formik>
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

  .purchaseAdd_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }
  .purchase_add {
    padding: 20px 20px;
  }
  .purchase_add h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .purchase_add h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .form-label {
    font-size: 13px;
    font-weight: 500;
  }
  .form-control,
  .form-select {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
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
  @media screen and (max-width: 425px) {
    .card_form .card_resv {
      margin-bottom: 5px !important;
    }
  }
`;

export default PurchaseAdd;
