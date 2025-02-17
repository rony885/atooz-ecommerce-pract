import React, { useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import JoditEditor from "jodit-react";

const BlogUpdate = () => {
  return (
    <Wrapper>
      <div className="layout">
        <div className="blog-wrapper">
          <div className="add_blog">
            <h2 className="fs-5">UpdateBlog</h2>
            <form action="">
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
            </form>
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
