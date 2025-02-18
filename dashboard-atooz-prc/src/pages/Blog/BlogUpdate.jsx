import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

import { Formik, Form as FormikForm } from "formik";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useParams } from "react-router-dom";

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
  const [item, setItem] = useState({});
  const editor = useRef(null);
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

  

  return (
    <Wrapper>
      <div className="layout">
        <div className="blog-wrapper">
          <div className="add_blog">
            <h2 className="fs-5">Update Blog</h2>
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
