import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import bannerImg1 from "../../../images/atooz-img-1.jpg";
import bannerImg2 from "../../../images/atooz-img-2.jpg";
import bannerImg3 from "../../../images/atooz-img-3.jpg";
import bannerImg from "../../../images/atooz-sell-img.jpg";
import { useEffect } from "react";
import { useProductContext } from "../../../context/ProductContext";

const Banner = () => {
  const { general_settings, fetchGeneralSettings } = useProductContext();

  useEffect(() => {
    fetchGeneralSettings();
  }, [fetchGeneralSettings]);

  return (
    <Wrapper>
      <div className=" mb-4 banner">
        <div className="d-flex justify-content-start align-items-center gap-3 main_banner">
          <div style={{ width: "73%" }} className="left-item">
            <Swiper
              className="swiper-wrapper"
              modules={[Autoplay, Pagination, Navigation]}
              rewind={true}
              navigation={true}
              loop={true}
              spaceBetween={30}
              speed={300}
              centeredSlides={true}
              mousewheel
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide className="swiper-slide">
                <img
                  // src={bannerImg1}
                  src={general_settings && general_settings.homeBannerImage1}
                  alt=""
                  className="img-fluid"
                  style={{ height: "448px", width: "100%" }}
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img
                  src={general_settings && general_settings.homeBannerImage2}
                  alt=""
                  className="img-fluid"
                  style={{ height: "448px", width: "100%" }}
                />
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <img
                  src={general_settings && general_settings.homeBannerImage3}
                  alt=""
                  className="img-fluid"
                  style={{ height: "448px", width: "100%" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div style={{ width: "27%" }} className="tShirtImg">
            <img
              src={general_settings && general_settings.homeBannerCoverImage}
              className="w-100 mt-0 imggg"
              style={{ height: "448px" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* margin-top: 138px !important; */
  .banner .swiper {
    height: 100% !important;
    /* margin-top: 138px !important; */
    margin-bottom: 0 !important;
  }
  .tShirtImg {
    /* margin-top: 138px !important; */
  }
  .banner .swiper-button-next {
    color: #000 !important;
  }
  .banner .swiper-button-prev {
    color: #000 !important;
  }

  @media only screen and (max-width: 1440px) {
    /* .main_banner .tShirtImg .imggg {
      height: 348px !important;
    } */
  }
  @media only screen and (max-width: 1024px) {
    .main_banner .tShirtImg .imggg {
      height: 265px !important;
    }
    .img-fluid {
      height: 265px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .main_banner .tShirtImg .imggg {
      height: 200px !important;
    }
    .img-fluid {
      height: 200px !important;
    }
  }

  @media only screen and (max-width: 767px) {
    .main_banner {
      flex-direction: column !important;
    }
    .left-item {
      width: 100% !important;
      padding: 0 30px;
    }
    .tShirtImg {
      width: 100% !important;
      padding: 0 30px;
      /* height: 100px !important; */
    }
  }

  @media (min-width: 300px) and (max-width: 425px) {
    .left-item {
      margin-top: -20px !important;
    }
  }
`;

export default Banner;
