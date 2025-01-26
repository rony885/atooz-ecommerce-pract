import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SlCalender } from "react-icons/sl";
import "swiper/css";
import blogArray from "../../../blogData.js";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogProducts, setBlogProducts] = useState([]);

  useEffect(() => {
    setBlogProducts(blogArray);
  }, []);

  return (
    <>
      <Wrapper>
        <div
          style={{ backgroundColor: "#ffff" }}
          className="shadow-sm Container_margin mb-4 rounded blog"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="blog_title px-3 py-2 pt-4 fs-5">
              <span>Our Latest Blogs</span>
            </h3>
            <div className="d-flex justify-content-between align-items-center p-3">
              <FaAngleLeft className="blog_left" />
              <FaAngleRight className="blog_right" />
            </div>
          </div>
          <div className="modcontent px-3 py-2 pb-4">
            <div className="swiper brand-slider">
              <Swiper
                className="swiper-wrapper swiper-wrapperr"
                modules={[Autoplay, Pagination, Navigation]}
                navigation={{ nextEl: ".blog_right", prevEl: ".blog_left" }}
                spaceBetween={15}
                speed={300}
                mousewheel
                breakpoints={{
                  1440: {
                    slidesPerView: 5,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  425: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                {blogProducts.map((blog) => (
                  <SwiperSlide
                    key={blog.id}
                    style={{ backgroundColor: "#e2e5e9" }}
                    className="swiper-slide rounded"
                  >
                    <Link to={`/blogdetails/${blog.id}`} className="blogLink">
                      <img src={blog.image} alt={blog.title} />
                      <div className="p-2">
                        <h5 className="text-left text_size">{blog.title}</h5>
                        <div className="d-flex justify-content-left align-items-center gap-1">
                          <div className="d-flex justify-content-center align-items-center mb-0">
                            <SlCalender className="date-icon" />
                          </div>
                          <div>
                            <h6 className="m-0 size-date">{blog.date}</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .blogLink {
    text-decoration: none;
    color: #212529;
  }
  .blog .blog_title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
  }
  .blog .text_size {
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
    text-transform: uppercase;
  }
  .blog .date-icon {
    font-size: 14px;
  }
  .blog .size-date {
    font-size: 12px;
  }
  .category .swiper-slide img {
    width: 100%;
  }

  /* ====== Swiper Part Start ====== */
  .blog .swiper-wrapper img {
    width: 100% !important;
  }

  .blog.swiper {
    height: auto !important;
  }

  /* ====== Swiper Part End ====== */

  @media only screen and (max-width: 769px) {
    .blog {
      margin-bottom: 1.5rem !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .blog {
      margin-bottom: 1.5rem !important;
    }
    .blog_title {
      font-size: 14px !important;
    }
  }
`;

export default Blogs;
