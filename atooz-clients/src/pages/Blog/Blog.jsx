import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import blogImg1 from "../../images/categoryImg-1.jpg";
import { Link } from "react-router-dom";
import blogArray from "../../blogData.js";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogArray);
  }, []);

  return (
    <Wrapper>
      <div className="blogg mt-5">
        <div className=" Container_margin resvv_part">
          <div className="mb-5">
            {blogs.map((blog) => {
              return (
                <div
                  key={blog.id}
                  className="row d-flex justify-content-start align-items-start mb-4"
                >
                  <div className="col-lg-2 col-md-12 col-sm-12 blog_img">
                    <img
                      src={blog.image}
                      alt=""
                      // style={{ width: "250px", height: "300px" }}
                      className="img"
                    />
                  </div>
                  <div className="col-lg-10 col-md-12 col-sm-12 blog_textt align-self-end px-5">
                    <h4 className="fs-5">{blog.title}</h4>
                    <h4 className="fs-6">
                      {blog.date} & {blog.time}
                    </h4>
                    <p className="mb-0">
                      {blog.description.slice(0, 50)} &nbsp;
                      <span className="seemore">
                        <Link
                          to={`/blogdetails/${blog.id}`}
                          className="blog_link"
                        >
                          See More...
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-top: 180px !important;
  .img {
    width: 250px;
    height: 300px;
  }

  .blogg .blog_textt h4 {
    font-weight: 700;
    font-family: serif;
  }
  .blogg_textt {
    /* align-self: flex-end; */
  }
  .blogg .seemore {
    font-weight: 600;
    font-family: serif;
    cursor: pointer;
  }
  .blogg .seemore .blog_link {
    color: #000;
    text-decoration: none;
  }
  @media only screen and (max-width: 1440px) {
    .img {
      width: 220px !important;
      height: 250px !important;
    }
  }

  @media only screen and (max-width: 1024px) {
    .img {
      width: 170px !important;
      height: 220px !important;
    }
    .resvv_part {
      flex-direction: column !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .blogg {
      margin-bottom: 30px !important;
    }
    .blog_textt {
      padding: 8px !important;
    }
  }
  @media only screen and (max-width: 425px) {
    .resvv_part {
      flex-direction: column !important;
    }
    .blog_img img {
      width: 200px !important;
      height: 200px !important;
    }
    .blog .blog_textt h4 {
      font-size: 12px !important;
    }
    .blog_textt p {
      font-size: 14px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .blog_img img {
      width: 150px !important;
      height: 150px !important;
    }
    .blog .blog_textt h4 {
      font-size: 12px !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .blog_img img {
      width: 120px !important;
      height: 120px !important;
    }
    .blog .blog_textt h4 {
      font-size: 9px !important;
    }
    .blog_textt p {
      font-size: 10px !important;
    }
  }
`;
export default Blog;
