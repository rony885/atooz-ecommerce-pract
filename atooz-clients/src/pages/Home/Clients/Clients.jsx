import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
// import "./clients.css";

import ClientImg1 from "../../../images/40.jpg";
import ClientImg2 from "../../../images/41.jpg";
import ClientImg3 from "../../../images/42.jpg";
import ClientImg4 from "../../../images/43.jpg";
import ClientImg5 from "../../../images/44.jpg";
import ClientImg6 from "../../../images/45.jpg";

const Clients = () => {
  return (
    <Wrapper>
      <div
        style={{ backgroundColor: "#ffff" }}
        className="Container_margin shadow-sm  mb-4 rounded client"
      >
        {/* <div className="d-flex justify-content-between align-items-center"> */}
        <div className="">
          <h3 className="client_title px-3 py-2 pt-4">
            <span>Trusted By 100+ Companies</span>
          </h3>
        </div>

        <div className="modcontent px-3 py-2 pb-4">
          <div className="swiper brand-slider">
            <Swiper
              className="swiper-wrapper swiper-wrapperr"
              modules={[Autoplay, Pagination, Navigation]}
              rewind={true}
              // navigation={true}
              loop={true}
              spaceBetween={30}
              speed={300}
              // centeredSlides={true}
              mousewheel
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
                <img src={ClientImg1} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg2} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg3} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg4} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg5} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg6} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg1} alt="" />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img src={ClientImg2} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .client .client_title {
    text-transform: uppercase !important;
    font-weight: 700;
    font-size: 22px;
  }
  .client .swiper-wrapper img {
    width: 100% !important;
    height: 150px !important;
  }

  .client .swiper {
    height: auto !important;
  }

  .client .swiper-button-next {
    color: #fff !important;
  }
  .client .swiper-button-prev {
    color: #fff !important;
  }

  @media only screen and (max-width: 769px) {
    .client {
      margin-bottom: 1.5rem !important;
    }
  }

  @media only screen and (max-width: 425px) {
    .client .client_title {
      font-size: 20px;
      text-align: center !important;
    }
  }

  @media only screen and (max-width: 375px) {
    .client .client_title {
      font-size: 17px;
      text-align: center !important;
    }
  }

  @media only screen and (max-width: 320px) {
    .client .client_title {
      font-size: 14px !important;
      text-align: center !important;
    }
  }
`;

export default Clients;
