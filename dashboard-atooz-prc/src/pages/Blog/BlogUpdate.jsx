import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object().shape({
  title: yup.string().required("Blog title is a required field!"),
  status: yup.boolean(),
  subtitle: yup.string("Blog Subtitle is a required field!"),
  author: yup.string("Blog Author is a required field!"),
  pub_date: yup.string(),
  pub_time: yup.string(),
  description: yup.string(),
  image: yup.mixed(),
});

const validate = (values) => {
  let errors = {};
  return errors;
};

const BlogUpdate = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const editor = useRef(null);
  const [message, setMessage] = useState();
  const [item, setItem] = useState({});
  const [content, setContent] = useState("");

  const [showImage, setShowImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    const loadBlogs = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/blog_api/unpaginate_blog/${Number(
          blogId
        )}/`
      );

      setItem(data);
      setShowImage(data.image);
      setContent(data.description);
    };

    loadBlogs();
  }, [blogId]);

  // update values
  const updateValues = {
    title: item.title ? item.title : "",
    status: item.status ? item.status : "",
    subtitle: item.subtitle ? item.subtitle : "",
    pub_date: item.pub_date ? item.pub_date : "",
    pub_time: item.pub_time ? item.pub_time : "",
    author: item.author ? item.author : "",
    description: item.description ? item.description : "",
    image: item.image ? item.image : "",
  };

  // ======= update =======
  const AddUpdateFunc = async (values) => {
    let formfield = new FormData();

    formfield.append("title", values.title);
    formfield.append("status", values.status);
    formfield.append("subtitle", values.subtitle);
    formfield.append("author", values.author);
    formfield.append("pub_date", values.pub_date);
    formfield.append("pub_time", values.pub_time);
    formfield.append("description", values.description);

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_BASE_URL}/blog_api/unpaginate_blog/${item.id}/`,
      data: formfield,
    })
      .then((response) => {
        setMessage(response.success, "Product blog is successfully updated...");
        navigate("/blogs");
        window.location.reload(false);
      })
      .catch((error) => {
        setMessage(error.message, "Error");
      });
  };

  const submitUpdateBlogForm = async (
    values,
    { setErrors, setSubmitting, resetForm }
  ) => {
    try {
      AddUpdateFunc(values);
      setSubmitting(false);
      // resetForm();
    } catch (error) {
      setErrors({ error: error.message });
    }
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="blog-wrapper">
          <div className="add_blog">
            <h2 className="fs-5">Update Blog</h2>
            {/* <form action="">
              <div className="row">
                <div className="form-outline mb-4 col-lg-12">
                  <label className="form-label">
                    Blog Title<span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      name="title"
                      type="text"
                      id="title"
                      className="form-control"
                      value=""
                    />
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-12">
                  <label className="form-label" htmlFor="subtitle">
                    Blog Subtitle<span className="text-danger">*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      name="subtitle"
                      type="text"
                      id="subtitle"
                      className="form-control"
                      value=""
                    />
                    <div className="invalid-feedback">
                      Blog Subtitle is required!
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Status<span></span>
                  </label>
                  <div className="input-group">
                    <select
                      name="b_status"
                      className="form-control form-select"
                      id="b_status"
                    >
                      <option value="">Select</option>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                    <div className="invalid-feedback"></div>
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label">
                    Author<span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      name="author"
                      type="text"
                      id="author"
                      className="form-control"
                      value=""
                    />
                    <div className="invalid-feedback">Author is required!</div>
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-4">
                  <label className="form-label" htmlFor="pub_date">
                    Publication date<span className="text-danger">*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      name="pub_date"
                      type="date"
                      id="pub_date"
                      className="form-control"
                      value=""
                    />
                    <div className="invalid-feedback">
                      Publication Date is required!
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-12">
                  <label className="form-label">Description</label>
                  <div className="input-group">
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-outline mb-4 col-lg-12">
                  <label className="form-label">
                    Gallery Images<span></span>
                  </label>
                  <input
                    name="gal_image"
                    multiple
                    type="file"
                    id="gal_image"
                    className="form-control"
                  />
                  <div
                    id="image-container"
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  ></div>
                </div>
              </div>

              <div className="d-flex gap-2 justify-content-end mt-5 mb-2">
                <button type="reset" className="bttn">
                  Cancel
                </button>
                <button type="submit" className="bttn1">
                  Add Blog
                </button>
              </div>
            </form> */}

            <Formik
               enableReinitialize={true}
              initialValues={updateValues}
              validationSchema={schema}
              onSubmit={submitUpdateBlogForm}
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
                  <div className="row mb-4">
                    <Form.Group className="form-outline mb-0 col-lg-12">
                      <Form.Label>
                        Blog Title<span className="text-danger">*</span>
                      </Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="title"
                          id="title"
                          value={values.title}
                          onChange={handleChange}
                          isInvalid={!!touched.title && !!errors.title}
                          isValid={touched.title && !errors.title}
                          className="form-control mb-0"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </div>

                  <div className="row mb-4">
                    <Form.Group className="form-outline mb-0 col-lg-12">
                      <Form.Label>
                        Blog Subtitle<span className="text-danger">*</span>
                      </Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          name="subtitle"
                          id="subtitle"
                          value={values.subtitle}
                          onChange={handleChange}
                          isInvalid={!!touched.subtitle && !!errors.subtitle}
                          isValid={touched.subtitle && !errors.subtitle}
                          className="form-control mb-0"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.subtitle}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </div>

                  <div className="row mb-4">
                    <div className="col-lg-4">
                      <Form.Group className="form-outline mb-0">
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
                    </div>

                    <div className="col-lg-4">
                      <Form.Group className="form-outline mb-0">
                        <Form.Label>
                          Author<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            name="author"
                            id="author"
                            value={values.author}
                            onChange={handleChange}
                            isInvalid={!!touched.author && !!errors.author}
                            isValid={touched.author && !errors.author}
                            className="form-control mb-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.author}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </div>

                    <div className="col-lg-4">
                      <Form.Group className="form-outline mb-0">
                        <Form.Label>
                          Publication Date<span></span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="date"
                            name="pub_date"
                            id="pub_date"
                            value={values.pub_date}
                            onChange={handleChange}
                            isInvalid={!!touched.pub_date && !!errors.pub_date}
                            isValid={touched.pub_date && !errors.pub_date}
                            className="form-control mb-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.pub_date}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <Form.Group className="form-outline mb-0 col-lg-12">
                      <Form.Label>
                        Description<span></span>
                      </Form.Label>
                      <InputGroup hasValidation>
                        <JoditEditor
                          name="description"
                          id="description"
                          ref={editor}
                          value={content}
                          onChange={(newContent) => setContent(newContent)}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.description}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </div>

                  <div className="row mb-4">
                    <Form.Group className="form-outline mb-0 imgDiv divv col-lg-12">
                      <Form.Label>
                        Blog Image<span></span>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        id="image"
                        onChange={(event) => {
                          setFieldValue("image", event.currentTarget.files[0]);
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
                      Add Blog
                    </button>
                  </div>

                  {/* message  */}
                  {message && <h2 className="text-center m-5">{message}</h2>}
                </FormikForm>
              )}
            </Formik>
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
  .add_blog {
    padding: 20px 20px;
  }

  .footer {
    flex-shrink: 0;
    overflow-x: hidden;
    padding: 10px 20px;
  }

  .add_blog h2 {
    text-align: center;
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
`;

export default BlogUpdate;
