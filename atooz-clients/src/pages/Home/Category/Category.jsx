/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import CategoryImg2 from "../../../images/categoryImg-2.jpg";
import CategoryImg3 from "../../../images/panjabi3.jpg";
import CategoryImg4 from "../../../images/categoryImg-bikes.jpg";
import CategoryImg5 from "../../../images/categoryImg-watch.jpeg";
import CategoryImg6 from "../../../images/categoryImg-Cemeras.jpg";
import CategoryImg7 from "../../../images/categoryImg-shoes.png";
import CategoryImg8 from "../../../images/categoryImg-headPhone.jpg";

const Category = () => {
  return (
    <>
      <Wrapper>
        <div
          style={{ backgroundColor: "#ffff" }}
          className="shadow-sm Container_margin mb-4 rounded category"
        >
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="modtitle px-3 py-2 pt-4 fs-5">
              <span>All Categories</span>
            </h3>
            <div className="d-flex justify-content-between align-items-center p-3">
              <FaAngleLeft className="category_left" />
              <FaAngleRight className="category_right" />
            </div>
          </div>

          <div className="modcontent px-4 py-2 pb-4">
            <div className="swiper brand-slider">
              <Swiper
                className="swiper-wrapper swiper-wrapperr"
                modules={[Autoplay, Pagination, Navigation]}
                // rewind={true}
                // navigation={true}
                navigation={{
                  nextEl: ".category_right",
                  prevEl: ".category_left",
                }}
                // loop={true}
                spaceBetween={30}
                speed={300}
                // centeredSlides={true}
                mousewheel
                // autoplay={{
                //   delay: 2000,
                //   disableOnInteraction: false,
                //   pauseOnMouseEnter: true,
                // }}
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
                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg2} alt="" />
                  <h5 className="text-center  text_size">T-Shirt</h5>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg3} alt="" />
                  <h5 className="text-center  text_size">Panjabi</h5>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg4} alt="" />
                  <h5 className="text-center  text_size">Bike</h5>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg5} alt="" />
                  <h5 className="text-center  text_size">Smart Watch</h5>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg6} alt="" />
                  <h5 className="text-center  text_size">Camera</h5>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg7} alt="" />
                  <h5 className="text-center  text_size">Shoe</h5>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img src={CategoryImg8} alt="" />
                  <h5 className="text-center  text_size">HeadPhone</h5>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .category .content-box {
    /* border: 1px solid green !important; */
    background-color: #ffff;
    padding-bottom: 10px;
    border-radius: 5px;
  }
  .category {
    margin-bottom: 1.5rem !important;
  }
  .category a {
    text-decoration: none;
    color: black;
  }
  .category .modtitle {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
  }
  .category .category_img {
    height: 200px !important;
    width: 100%;
  }
  .category .cat-title {
    margin-top: 10px;
  }
  .category .react-multi-carousel-item {
    margin-right: 10px !important;
  }
  .category .text_size {
    font-size: 15px;
    font-weight: 700;
    margin-top: 20px;
    text-transform: uppercase;
  }
  .category .swiper-slide {
    border-bottom: 1px solid rgb(197, 187, 187);
  }

  .category .swiper-slide img {
    width: 100%;
    /* height: 360px; */
    height: 100%;
  }
`;

export default Category;
