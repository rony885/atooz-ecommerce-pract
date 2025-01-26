import React, { useEffect, useState } from "react";
import styled from "styled-components";
import blogArray from "../../blogData.js";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
    setBlog(blogArray);
  }, []);

  const findBlog = blog.find((blog) => blog.id === parseInt(blogId));

  if (!findBlog) {
    return <p>Loading...</p>; // Or handle the case differently
  }

  return (
    <Wrapper>
      <div className="blog mt-4">
        <div className="Container_margin">
          <h1 className="blog-title">{findBlog.title}</h1>
          <div className="blog-meta">
            <span className="blog-author">By {findBlog.author}</span>
            <span className="blog-date">Published on {findBlog.date}</span>
          </div>
          <img
            src={findBlog.image}
            className="blog-image"
            alt={findBlog.title}
          />
          <div className="blog-content">
            <p>{findBlog.description.slice(0, 50)}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;
  .blog-title {
    font-size: 2.5rem;
    color: #333;
    font-family: serif;
    margin-bottom: 10px;
    text-align: start;
  }

  .blog-meta {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 20px;
  }

  .blog-author {
    margin-right: 15px;
  }

  .blog-date {
    margin-left: 15px;
  }

  .blog-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .blog-content {
    line-height: 1.6;
    color: #444;
  }

  .blog-content p {
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 160px !important;
    .blog-title {
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 375px) {
    .blog-title {
      font-size: 25px;
    }
    .blog-meta {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .blog-date {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 320px) {
    .blog-title {
      font-size: 20px;
    }
  }
`;

export default BlogDetails;
