import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import styled from "styled-components";
import mouseImg from "../../../images/product-mouseImg.jpg";
import laptopImg from "../../../images/product-laptopImg.jpg";
import headPhoneImg from "../../../images/product-headPhone.png";
import smartWatchImg from "../../../images/product-smartwatch.jpg";
import keyBoardImg from "../../../images/product-keyboardImg.jpg";
import phoneImg from "../../../images/product-phoneImg.jpg";
import shoeImg from "../../../images/product-shoeImg.jpeg";
import televisonImg from "../../../images/prodect-tvImg.jpg";
import SingleProd from "../../../components/SingleProd/SingleProd";
import { useProductContext } from "../../../context/ProductContext";

const NewArrivalProduct = () => {
    // data fetching
  const { unpaginate_product, fetchUnpaginateProduct } = useProductContext();

  useEffect(() => {
    fetchUnpaginateProduct();
  }, [fetchUnpaginateProduct]);

  const allNewArrivalProducs =
    unpaginate_product &&
    unpaginate_product.filter((prod) => prod.isNewArrivalProducts === true);


  return (
    <Wrapper>
      <div
        style={{ backgroundColor: "#ffff" }}
        className="Container_margin shadow-sm mb-4 px-4 py-4 rounded newarribal"
      >
        <div className="d-flex justify-content-between align-items-center gap-3 flex-column cooll">
          <div style={{ width: "100%", height: "310px" }} className="view_part">
            <h2 className="fs-4 text-center text-white">
              New Arrival Products
            </h2>
            <div className="text-center">
              <button className="bttn">View All</button>
            </div>
          </div>
          <div style={{ width: "100%" }} className="products">
            <div className="swiper brand-slider">
              <Swiper
                className="swiper-wrapper swiper-wrapperr"
                modules={[Autoplay, Pagination, Navigation]}
                // rewind={true}
                navigation={true}
                // loop={true}
                spaceBetween={15}
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
                    slidesPerView: 1,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                  {allNewArrivalProducs.map((product, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <SingleProd
                      id={product.id}
                      img={product.mainImage}
                      name={product.name}
                      price={`${product.specialPrice}BDT`}
                    />
                  </SwiperSlide>
                ))}
                {/* <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={televisonImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={shoeImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={phoneImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={keyBoardImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={smartWatchImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={headPhoneImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={laptopImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <SingleProd
                    img={mouseImg}
                    name={"Black T-Shirt"}
                    price={"6000Tk."}
                  />
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .newarribal .view_part {
    /* background-color: dodgerblue !important; */
    background-color: #e59866;
    transition: 0.4s ease-in-out;
  }
  .newarribal .view_part h2 {
    margin-top: 90px;
  }
  .newarribal .bttn {
    text-align: center;
    background-color: #ffff;
    font-size: 14px;
    font-weight: 700;
    border: none;
    outline: none;
    padding: 8px 20px;
    text-transform: uppercase;
    margin-top: 50px;
    transition: 0.4s ease-in-out;
  }
  .newarribal .view_part:hover .bttn {
    transform: scale(1.1);
  }
  .newarribal .bttn:hover {
    background-color: #000;
    color: #ffff;
  }
  /* ====== Swiper Part Start ====== */
  .newarribal .products .swiper-wrapper img {
    width: 100% !important;
    height: 260px !important;
  }
  .newarribal .products .swiper {
    height: auto !important;
  }
  .newarribal .products .swiper-button-next {
    color: #000 !important;
  }
  .newarribal .products .swiper-button-prev {
    color: #000 !important;
  }
  /* ====== Swiper Part End ====== */
  @media only screen and (min-width: 769px) {
    .newarribal .cooll {
      flex-direction: row !important;
    }
    .newarribal .view_part {
      width: 20% !important;
    }
    .newarribal .products {
      width: 80% !important;
    }
  }
  @media only screen and (max-width: 769px) {
    .newarribal {
      margin-bottom: 1.5rem !important;
    }
  }
`;
export default NewArrivalProduct;
