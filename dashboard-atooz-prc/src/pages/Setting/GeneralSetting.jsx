import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";

import JoditEditor from "jodit-react";
import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  company_name: yup.string(),
  company_phone: yup.string(),
  company_email: yup.string(),
  company_address: yup.string(),
  map_url: yup.string(),
  facebook_url: yup.string(),
  instagram_url: yup.string(),
  twitter_url: yup.string(),
  linkedin_url: yup.string(),
  receipt_header: yup.string(),
  receipt_footer: yup.string(),
  // theme: yup.string(),
  company_logo: yup.mixed(),
  homeBannerImage1: yup.mixed(),
  homeBannerImage2: yup.mixed(),
  homeBannerImage3: yup.mixed(),
  homeBannerCoverImage: yup.mixed(),
});

const validate = (values) => {
  let errors = {};

  if (!values.company_phone) {
    errors.company_phone = "Phone is required!";
  } else if (/^[0-9\b]+$/.test(values.company_phone) === false) {
    errors.company_phone = "Only number!";
  } else if (values.company_phone.length !== 11) {
    errors.company_phone = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const GeneralSetting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [message, setMessage] = useState();
  const [item, setItem] = useState({});

  // for image
  const [showLogo, setShowLogo] = useState(null);
  const [showImage1, setShowImage1] = useState(null);
  const [showImage2, setShowImage2] = useState(null);
  const [showImage3, setShowImage3] = useState(null);
  const [showCoverImage, setShowCoverImage] = useState(null);

  const onLogoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowLogo(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImage1Change = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage1(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImage2Change = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage2(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onImage3Change = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage3(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onCoverImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowCoverImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [contentHeader, setContentHeader] = useState("");
  const [contentFooter, setContentFooter] = useState("");
  const editorHeader = useRef(null);
  const editorFooter = useRef(null);


  // update
  const updatedValues = {
    company_name: item.company_name ? item.company_name : "",
    company_phone: item.company_phone ? item.company_phone : "",
    company_email: item.company_email ? item.company_email : "",
    company_address: item.company_address ? item.company_address : "",
    map_url: item.map_url ? item.map_url : "",
    facebook_url: item.facebook_url ? item.facebook_url : "",
    instagram_url: item.instagram_url ? item.instagram_url : "",
    twitter_url: item.twitter_url ? item.twitter_url : "",
    linkedin_url: item.linkedin_url ? item.linkedin_url : "",
    receipt_header: item.receipt_header ? item.receipt_header : "",
    receipt_footer: item.receipt_footer ? item.receipt_footer : "",
    // theme: item.theme ? item.theme : "",
    company_logo: item.company_logo ? item.company_logo : "",
    homeBannerImage1: item.homeBannerImage1 ? item.homeBannerImage1 : "",
    homeBannerImage2: item.homeBannerImage2 ? item.homeBannerImage2 : "",
    homeBannerImage3: item.homeBannerImage3 ? item.homeBannerImage3 : "",
    homeBannerCoverImage: item.homeBannerCoverImage ? item.homeBannerCoverImage : "",
  }

  const UpdateGeneralSettingFunc = async (values) => {
    let formfield = new FormData();
    console.log(formfield)

    formfield.append("company_name", values.company_name);
    formfield.append("company_phone", values.company_phone);
    formfield.append("company_email", values.company_email);
    formfield.append("company_address", values.company_address);
    formfield.append("map_url", values.map_url);
    formfield.append("facebook_url", values.facebook_url);
    formfield.append("instagram_url", values.instagram_url);
    formfield.append("twitter_url", values.twitter_url);
    formfield.append("linkedin_url", values.linkedin_url);

    formfield.append("receipt_header", contentHeader);
    formfield.append("receipt_footer", contentFooter);
    // formfield.append("theme", values.theme);

    if (values.company_logo !== item.company_logo) {
      formfield.append("company_logo", values.company_logo);
    }
    if (values.homeBannerImage1 !== item.homeBannerImage1) {
      formfield.append("homeBannerImage1", values.homeBannerImage1);
    }
    if (values.homeBannerImage2 !== item.homeBannerImage2) {
      formfield.append("homeBannerImage2", values.homeBannerImage2);
    }
    if (values.homeBannerImage3 !== item.homeBannerImage3) {
      formfield.append("homeBannerImage3", values.homeBannerImage3);
    }
    if (values.homeBannerCoverImage !== item.homeBannerCoverImage) {
      formfield.append("homeBannerCoverImage", values.homeBannerCoverImage);
    }


    await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_generalSettings/1/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(
          response.success,
          "General setting is successfuly updated..."
        );
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitGeneralSettingForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      UpdateGeneralSettingFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  const updateGeneralSetting = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/settings_api/unpaginate_generalSettings/1/`
    );
    setItem(data && data);
    setContentHeader(data.receipt_header);
    setContentFooter(data.receipt_footer);
    setShowLogo(data.company_logo);
    setShowImage1(data.homeBannerImage1);
    setShowImage2(data.homeBannerImage2);
    setShowImage3(data.homeBannerImage3);
    setShowCoverImage(data.homeBannerCoverImage);
  };

  useEffect(() => {
    updateGeneralSetting();
  }, []);

  return (
    <Wrapper>
      <div className="layout">
        <div className="balance_wrapper">
          <div className="balance">
            <div className="row d-flex justify-content-between align-items-center balance_row mb-4">
              <div className="col-6">
                <div className="d-flex justify-content-start align-items-center balance_title">
                  <h4 className="m-0 fs-5">General Setting</h4>
                </div>
              </div>

              <div className="col-6">
                <div className="d-flex justify-content-end align-items-center add_balance">
                  <button className="buttn" onClick={openModal}>
                    <TbCirclePlus className="fs-6" />
                    <span className="bttn_title">Add General Setting</span>
                  </button>
                </div>
              </div>
            </div>

            <Formik
              enableReinitialize={true}
              initialValues={updatedValues}
              validationSchema={schema}
              onSubmit={submitGeneralSettingForm}
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
                  <div className="">
                    <div className="row">
                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Company Name<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="company_name"
                              id="company_name"
                              value={values.company_name}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.company_name && !!errors.company_name
                              }
                              isValid={
                                touched.company_name && !errors.company_name
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company_name}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Company Phone<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            {/* <InputGroup.Text>@</InputGroup.Text> */}
                            <Form.Control
                              type="text"
                              name="company_phone"
                              id="company_phone"
                              value={values.company_phone}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.company_phone &&
                                !!errors.company_phone
                              }
                              isValid={
                                touched.company_phone && !errors.company_phone
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company_phone}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Company Email<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="company_email"
                              id="company_email"
                              value={values.company_email}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.company_email &&
                                !!errors.company_email
                              }
                              isValid={
                                touched.company_email && !errors.company_email
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company_email}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-lg-6">
                        {/* <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Company Address<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="company_address"
                              id="company_address"
                              value={values.company_address}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.company_address &&
                                !!errors.company_address
                              }
                              isValid={
                                touched.company_address && !errors.company_address
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company_address}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group> */}
                         <Form.Group className="form-outline mb-2 imgDiv divv">
                            <Form.Label className="labelText">
                              Company Logo<span></span>
                            </Form.Label>
                            <Form.Control
                              type="file"
                              name="company_logo"
                              id="company_logo"
                              onChange={(event) => {
                                setFieldValue(
                                  "company_logo",
                                  event.currentTarget.files[0]
                                );
                                onLogoChange(event);
                              }}
                              isInvalid={
                                !!touched.company_logo && !!errors.company_logo
                              }
                              isValid={
                                touched.company_logo && !errors.company_logo
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company_logo}
                            </Form.Control.Feedback>
                          </Form.Group>

                          {showLogo && (
                            <div className="d-flex justify-content-end align-items-center">
                              <img
                                src={showLogo}
                                alt=""
                                style={{
                                  width: "50px",
                                  height: "60px",
                                  // border: "1px solid black",
                                  // borderRadius: "50%",
                                  // background: "green",
                                }}
                              />
                            </div>
                          )}
                      </div>

                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Company Logo<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="company_logo"
                              id="company_logo"
                              value={values.company_logo}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.company_logo &&
                                !!errors.company_logo
                              }
                              isValid={
                                touched.company_logo && !errors.company_logo
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.company_logo}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>

                        {showLogo && (
                          <div className="d-flex justify-content-end align-items-center">
                            <img
                              src={showLogo}
                              alt=""
                              style={{
                                width: "50px",
                                height: "60px",
                                // border: "1px solid black",
                                // borderRadius: "50%",
                                // background: "green",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Map Url<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="map_url"
                              id="map_url"
                              value={values.map_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.map_url &&
                                !!errors.map_url
                              }
                              isValid={
                                touched.map_url && !errors.map_url
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.map_url}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Facebook Url<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="facebook_url"
                              id="facebook_url"
                              value={values.facebook_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.facebook_url &&
                                !!errors.facebook_url
                              }
                              isValid={
                                touched.facebook_url && !errors.facebook_url
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.facebook_url}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Instagram Url<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="instagram_url"
                              id="instagram_url"
                              value={values.instagram_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.instagram_url &&
                                !!errors.instagram_url
                              }
                              isValid={
                                touched.instagram_url && !errors.instagram_url
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.instagram_url}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Twitter Url<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="twitter_url"
                              id="twitter_url"
                              value={values.twitter_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.twitter_url &&
                                !!errors.twitter_url
                              }
                              isValid={
                                touched.twitter_url && !errors.twitter_url
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.twitter_url}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-4">
                        <Form.Group className="form-outline mb-0">
                          <Form.Label className="labelText">
                            Linkedin Url<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="text"
                              name="linkedin_url"
                              id="linkedin_url"
                              value={values.linkedin_url}
                              onChange={handleChange}
                              isInvalid={
                                !!touched.linkedin_url &&
                                !!errors.linkedin_url
                              }
                              isValid={
                                touched.linkedin_url && !errors.linkedin_url
                              }
                              className="form-control mb-0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.linkedin_url}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-4">
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-2">
                          <Form.Label className="labelText">
                            Text in the Receipt Header<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <JoditEditor
                              name="receipt_header"
                              id="receipt_header"
                              ref={editorHeader}
                              value={contentHeader}
                              onChange={(newContent) =>
                                setContentHeader(newContent)
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.receipt_header}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-2">
                          <Form.Label className="labelText">
                            Text in the Receipt Footer<span></span>
                          </Form.Label>
                          <InputGroup hasValidation>
                            <JoditEditor
                              name="receipt_footer"
                              id="receipt_footer"
                              ref={editorFooter}
                              value={contentFooter}
                              onChange={(newContent) =>
                                setContentFooter(newContent)
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.receipt_footer}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-3 imgDiv divv">
                          <Form.Label>
                            Home Banner Image1<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="homeBannerImage1"
                            id="homeBannerImage1"
                            onChange={(event) => {
                              setFieldValue(
                                "homeBannerImage1",
                                event.currentTarget.files[0]
                              );
                              onImage1Change(event);
                            }}
                            isInvalid={
                              !!touched.homeBannerImage1 &&
                              !!errors.homeBannerImage1
                            }
                            isValid={
                              touched.homeBannerImage1 &&
                              !errors.homeBannerImage1
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.homeBannerImage1}
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

                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-3 imgDiv divv">
                          <Form.Label>
                            Home Banner Image2<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="homeBannerImage2"
                            id="homeBannerImage2"
                            onChange={(event) => {
                              setFieldValue(
                                "homeBannerImage2",
                                event.currentTarget.files[0]
                              );
                              onImage2Change(event);
                            }}
                            isInvalid={
                              !!touched.homeBannerImage2 &&
                              !!errors.homeBannerImage2
                            }
                            isValid={
                              touched.homeBannerImage2 &&
                              !errors.homeBannerImage2
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.homeBannerImage2}
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
                    </div>

                    <div className="row">
                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-3 imgDiv divv">
                          <Form.Label>
                            Home Banner Image3<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="homeBannerImage3"
                            id="homeBannerImage3"
                            onChange={(event) => {
                              setFieldValue(
                                "homeBannerImage3",
                                event.currentTarget.files[0]
                              );
                              onImage3Change(event);
                            }}
                            isInvalid={
                              !!touched.homeBannerImage3 &&
                              !!errors.homeBannerImage3
                            }
                            isValid={
                              touched.homeBannerImage3 &&
                              !errors.homeBannerImage3
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.homeBannerImage3}
                          </Form.Control.Feedback>

                          {showImage3 && (
                            <div>
                              <img
                                alt="product preview img"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "20px",
                                  borderRadius: "50%",
                                }}
                                src={showImage3}
                              />
                            </div>
                          )}
                        </Form.Group>
                      </div>

                      <div className="form-outline mb-4 col-lg-6">
                        <Form.Group className="form-outline mb-3 imgDiv divv">
                          <Form.Label>
                            Home Banner Image4<span></span>
                          </Form.Label>
                          <Form.Control
                            type="file"
                            name="homeBannerCoverImage"
                            id="homeBannerCoverImage"
                            onChange={(event) => {
                              setFieldValue(
                                "homeBannerCoverImage",
                                event.currentTarget.files[0]
                              );
                              onCoverImageChange(event);
                            }}
                            isInvalid={
                              !!touched.homeBannerCoverImage &&
                              !!errors.homeBannerCoverImage
                            }
                            isValid={
                              touched.homeBannerCoverImage &&
                              !errors.homeBannerCoverImage
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.homeBannerImage3}
                          </Form.Control.Feedback>

                          {showCoverImage && (
                            <div>
                              <img
                                alt="product preview img"
                                style={{
                                  width: "150px",
                                  height: "150px",
                                  marginTop: "20px",
                                  borderRadius: "50%",
                                }}
                                src={showCoverImage}
                              />
                            </div>
                          )}
                        </Form.Group>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end align-items-center text-left">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bbttnn add-btn"
                    >
                      {/* Save */}
                      {isSubmitting ? 'Submitting...' : 'Save'}
                    </button>
                  </div>

                  {/* message  */}
                  {message && (
                    <h2 className="text-center m-5 text-capitalize">
                      {message}
                    </h2>
                  )}
                </FormikForm>
              )}
            </Formik>


            {/* ====== Add Modal ====== */}
            {isModalOpen && (
              <div className="custom-modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>Add General Setting</h2>

                  <form>
                    <label>
                      Courier Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Courier name"
                      className="form-control"
                    />

                    <label>Status</label>
                    <select className="form-control">
                      <option value="Select">Select</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Account Type<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <select
                          name="acc_type"
                          className="form-control"
                          id="acc_type"
                        >
                          <option value="">Select</option>
                          <option value="bank">Bank</option>
                          <option value="bkash">Bkash</option>
                          <option value="nagad">Nagad</option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Account Number<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          name="acc_number"
                          type="text"
                          id="acc_number"
                          className="form-control"
                          placeholder="Enter Account Number"
                        />
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    <div className="modal-actions">
                      <button type="reset" className="cancel-btn">
                        Cancel
                      </button>
                      <button type="submit" className="add-btn">
                        Add Category
                      </button>
                    </div>
                  </form>
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

  .balance_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .balance {
    padding: 20px 20px;
  }
  .balance_row .balance_title h4 {
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .add_balance .buttn {
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
  .add_balance .buttn:hover {
    background-color: #424141;
  }
  .balance_row .bttn_title {
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
`;

export default GeneralSetting;
