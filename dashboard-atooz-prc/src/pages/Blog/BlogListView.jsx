import React, { useEffect } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import BlogListDataTable from "./BlogListDataTable";
import { useApiContext } from "../../context/ApiContext";

const BlogListView = () => {
    // data fetching
    const { blog, fetchBlog } = useApiContext();

    useEffect(() => {
      fetchBlog();
    }, [fetchBlog]);

  return (
    <Wrapper>
      <div className="layout">
        <div className="blog-wrapper">
          <div className="blog">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center blog_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center blog_title">
                    <h4 className="m-0 fs-5">Blog List</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_blog">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">
                        <Link to="/blog-add" className="blog_link">
                          Add Blog
                        </Link>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-lg-12">
                    <BlogListDataTable data={blog} />
                  </div>
                </div>
              </div>
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

  .blog-wrapper {
    /* Take available height */
    flex: 1;
    /* Scroll only the blog layout */
    /* overflow-y: auto; */
  }

  .footer {
    padding: 10px 20px;
  }

  .blog {
    padding: 20px 20px;
  }

  .blog_row .blog_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .blog_row .add_blog .buttn {
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

  .add_blog .buttn:hover {
    background-color: #424141;
  }

  .blog_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  .blog_link {
    text-decoration: none;
    color: #fff;
  }
`;

export default BlogListView;
