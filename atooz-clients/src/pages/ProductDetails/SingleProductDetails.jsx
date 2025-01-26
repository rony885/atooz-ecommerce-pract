import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoShareSocial } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import productsArray from "../../productsData.js";

const SingleProductDetails = () => {
  const [activeItem, setActiveItem] = useState("one");
  const [showComponent, setshowComponent] = useState("one");
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const [productDetails, setProductDetails] = useState([]);
  const { prodId } = useParams();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    setProductDetails(productsArray);
  }, []);

  const allFindProducts = productDetails.find(
    (prod) => prod.id === parseInt(prodId)
  );

  if (!allFindProducts) return null;

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  const getActiveImage = () => {
    switch (activeSlideIndex) {
      case 0:
      case 3: // Handles the first and fourth slide
        return allFindProducts.sliderImg1;
      case 1:
      case 4: // Handles the second and fifth slide
        return allFindProducts.sliderImg2;
      case 2:
      case 5: // Handles the third and sixth slide
        return allFindProducts.sliderImg3;
      default:
        return allFindProducts.sliderImg1;
    }
  };

  return (
    <Wrapper>
      <div className="singProd_details mt-5">
        <div
          style={{ backgroundColor: "#ffff" }}
          className="Container_margin rounded shadow-sm px-4 py-4"
        >
          {/* <div className="d-flex justify-content-start align-items-center gap-3 main_singProd mb-4">
            <div style={{ width: "27%" }} className="tShirtImg">
              <img
                src={allFindProducts.img}
                className="w-100 mt-0 imggg"
                style={{ height: "348px" }}
                alt=""
              />
            </div>

            <div style={{ width: "73%" }} className="left-item">
              <Swiper
                className="swiper-wrapper"
                modules={[Autoplay, Pagination, Navigation]}
                rewind={true}
                navigation={true}
                loop={true}
                spaceBetween={5}
                speed={1000}
                centeredSlides={true}
                mousewheel
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
              >
                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg1}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg2}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg3}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg1}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg2}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg3}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div> */}

          <div className="d-flex justify-content-start align-items-center gap-3 main_singProd mb-4">
            <div style={{ width: "27%" }} className="tShirtImg">
              <img
                src={getActiveImage()}
                className="w-100 mt-0 imggg"
                style={{ height: "348px" }}
                alt=""
              />
            </div>

            <div style={{ width: "73%" }} className="left-item">
              <Swiper
                className="swiper-wrapper"
                modules={[Autoplay, Pagination, Navigation]}
                rewind={true}
                navigation={true}
                loop={true}
                spaceBetween={5}
                speed={1000}
                centeredSlides={true}
                mousewheel
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSlideChange={handleSlideChange} // Add this line
              >
                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg1}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg2}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg3}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg1}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg2}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <img
                    src={allFindProducts.sliderImg3}
                    alt=""
                    className="img-fluid"
                    style={{ height: "348px", width: "985px" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="product_content">
            <div className="">
              <h2 className="fs-3 text-start">
                {allFindProducts.name}{" "}
                <small className="fs-6">{allFindProducts.stokes}</small>
              </h2>
              <h2 className="mb-3 text-start">
                Product Id:{allFindProducts.id}
              </h2>
            </div>

            <div className="d-flex justify-content-start align-items-start gap-2 flexxCC">
              <div className="d-flex justify-content-between align-items-center gap-2 icon_star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="d-flex justify-content-start align-items-center gap-2">
                <h5 className="fs-6">
                  {allFindProducts.rating.totalRatings} Ratings
                </h5>
                <div
                  style={{
                    height: "14px",
                    width: "1px",
                    backgroundColor: "black",
                  }}
                  className="mb-0"
                ></div>
                <h5 className="fs-6">
                  {allFindProducts.rating.reviews} Reviews
                </h5>
              </div>
            </div>

            <div className="mt-2">
              <h2 className="mb-3 text-start">
                Category:{" "}
                <span
                  style={{ backgroundColor: "#FB9900", color: "#fff" }}
                  className="p-1 rounded"
                >
                  {allFindProducts.category}
                </span>
              </h2>
            </div>

            <div className="">
              <h2 className="text-start">
                Brand:{" "}
                <strong
                  style={{
                    fontFamily: "r",
                    backgroundColor: "#FF5F00",
                    color: "#fff",
                  }}
                  className="p-1 rounded"
                >
                  {allFindProducts.brand}
                </strong>
              </h2>
            </div>

            <div className="price">
              <h3 className="text-start">
                Regular Price: &nbsp;
                <small className="fs-4 tkk">
                  {allFindProducts.regularPrice.amount}&nbsp;
                  <span style={{ fontSize: "15px" }} className="">
                    {allFindProducts.regularPrice.currency}
                  </span>
                </small>
              </h3>
              <h3 className="text-start">
                Special Price: &nbsp;
                <small className="fs-4 specialPrice">
                  {allFindProducts.specialPrice.amount}&nbsp;
                  <span style={{ fontSize: "15px" }} className="">
                    {allFindProducts.specialPrice.currency}
                  </span>
                </small>
              </h3>
            </div>
          </div>

          <div className="select_size d-flex justify-content-start align-items-center my-3">
            <div className="d-flex justify-content-center align-items-center">
              <h2 style={{ width: "100px" }} className="mb-0 text-start">
                Select-Size:
              </h2>
            </div>

            <ul className="d-flex justify-content-center align-items-center gap-3 wrappp mb-0">
              <li>
                <div className="d-flex justify-content-center align-items-center sizze">
                  <span>M</span>
                </div>
              </li>

              <li>
                <div className="d-flex justify-content-center align-items-center sizze">
                  <span>L</span>
                </div>
              </li>

              <li>
                <div className="d-flex justify-content-center align-items-center sizze">
                  <span>XL</span>
                </div>
              </li>

              <li>
                <div className="d-flex justify-content-center align-items-center sizze">
                  <span>XLL</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="select_color d-flex justify-content-start align-items-center my-3">
            <div className="d-flex justify-content-center align-items-center">
              <h2 style={{ width: "100px" }} className="mb-0 text-align: left;">
                Select-Color:
              </h2>
            </div>

            <ul className="d-flex justify-content-center align-items-center gap-3 wrappp mb-0">
              <li>
                <div className="colorr d-flex justify-content-center align-items-center">
                  <span>Red</span>
                </div>
              </li>

              <li>
                <div className="colorr d-flex justify-content-center align-items-center">
                  <span>Yellow</span>
                </div>
              </li>

              <li>
                <div className="colorr d-flex justify-content-center align-items-center">
                  <span>Black</span>
                </div>
              </li>

              <li>
                <div className="colorr d-flex justify-content-center align-items-center">
                  <span>White</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="button d-flex justify-content-start align-items-center gap-2 my-3">
            <button className="btnMinus fs-4">-</button>
            <input
              value={1}
              className="btnOnne fs-5"
              style={{ width: "80px" }}
            />
            <button className="btnPluss fs-4">+</button>
          </div>

          <div className="order_cart d-flex justify-content-start align-items-center gap-2 my-3 resOdrCrt">
            <div className="d-flex justify-content-start align-items-center gap-2">
              <div className="">
                <button className="bttn">Add to Cart</button>
              </div>

              <div className="">
                <button className="bttn">Order Now</button>
              </div>
            </div>

            <div className="d-flex justify-content-start align-items-center gap-2 respBtn">
              <div className="">
                <button className="bttn2">
                  <GoHeart className="fs-4" />
                </button>
              </div>

              <div className="">
                <button className="bttn2">
                  <IoShareSocial className="fs-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="details">
            <div className="row d-flex justify-content-start align-items-start m-0">
              <div className="col-lg-12 col-md-12 col-sm-12 left d-flex justify-content-start align-items-center p-0">
                <ul className="mb-0 d-flex justify-content-start align-items-center nnaavv">
                  <li
                    className={`nav-item ${
                      activeItem === "one" ? "active" : ""
                    }`}
                  >
                    <Link
                      onClick={() => {
                        handleItemClick("one");
                        setshowComponent("one");
                      }}
                      className="nav-link"
                    >
                      <h4 className="mb-0">Details</h4>
                    </Link>
                  </li>

                  <li
                    className={`nav-item ${
                      activeItem === "two" ? "active" : ""
                    }`}
                  >
                    <Link
                      onClick={() => {
                        handleItemClick("two");
                        setshowComponent("two");
                      }}
                      className="nav-link"
                    >
                      <h4 className="mb-0">Specification</h4>
                    </Link>
                  </li>

                  <li
                    className={`nav-item ${
                      activeItem === "three" ? "active" : ""
                    }`}
                  >
                    <Link
                      onClick={() => {
                        handleItemClick("three");
                        setshowComponent("three");
                      }}
                      className="nav-link"
                    >
                      <h4 className="mb-0">Q & A</h4>
                    </Link>
                  </li>

                  <li
                    className={`nav-item ${
                      activeItem === "four" ? "active" : ""
                    }`}
                  >
                    <Link
                      onClick={() => {
                        handleItemClick("four");
                        setshowComponent("four");
                      }}
                      className="nav-link"
                    >
                      <h4 className="mb-0">Review</h4>
                    </Link>
                  </li>
                </ul>
              </div>

              <hr className="text-dark" />

              <div className="col-lg-12 col-md-12 col-sm-12 right p-0">
                <ul className="mb-0">
                  {showComponent === "one" && (
                    <li>
                      <div className="">
                        <h5 className="fs-6 text-justify">
                          {allFindProducts.description.details}
                        </h5>
                      </div>
                    </li>
                  )}

                  {showComponent === "two" && (
                    <li>
                      <div className="">
                        <h5 className="fs-6 text-justify">
                          {allFindProducts.description.specification}
                        </h5>
                      </div>
                    </li>
                  )}

                  {showComponent === "three" && (
                    <li>
                      <div className="">
                        <h5 className="fs-6 text-justify">
                          {allFindProducts.description.qAndA}
                        </h5>
                      </div>
                    </li>
                  )}

                  {showComponent === "four" && (
                    <li>
                      <div className="">
                        <h5 className="fs-6 text-justify">
                          {allFindProducts.description.review}
                        </h5>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;

  .singProd_details .details .left .nav-item .nav-link {
    background-color: #fff;
    color: #ff0000;
    border-right: 1px solid #bfbfbf;
    padding: 10px 15px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .singProd_details .details .nav-item .nav-link:hover {
    background-color: #ff0000;
    color: white;
    border-bottom: 1px solid #bfbfbf;
  }

  .singProd_details .details .left .nav-item.active .nav-link {
    background-color: #ff0000;
    color: white;
    border-bottom: 1px solid #ff1616;
  }

  .singProd_details .swiper {
    height: 100% !important;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  .singProd_details .swiper-button-next {
    color: #000 !important;
  }
  .singProd_details .swiper-button-prev {
    color: #000 !important;
  }
  /* *********************************** */
  .singProd_details .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  .singProd_details .swiper-slide-active .swiper-img {
    width: 100%;
    height: 348px;
    opacity: 1;
  }

  .singProd_details .swiper-slide-next .swiper-img,
  .singProd_details .swiper-slide-prev .swiper-img {
    width: 50%;
    height: 348px;
    opacity: 0.5;
  }

  .singProd_details .swiper-slide:not(.swiper-slide-active) {
    transform: scale(0.6);
    opacity: 0.3;
  }
  /* *********************************** */
  .singProd_details .product_content h2 {
    font-size: 15px;
  }
  .singProd_details .icon_star {
    color: #ff0000;
    border: 1px solid #0000;
  }
  .singProd_details .price h3 {
    font-size: 15px;
    font-weight: 600;
    font-family: sans-serif;
  }
  .singProd_details .select_size h2,
  .select_color h2 {
    font-size: 15px;
  }
  .singProd_details .tkk {
    color: #5f8670;
  }
  .singProd_details .specialPrice {
    color: #f52207;
  }
  .singProd_details .tkk span {
    color: #000;
  }
  .singProd_details ul {
    list-style-type: none;
  }
  .singProd_details .select_size .sizze {
    border: 1px solid #ff0000;
    height: 30px;
    width: 40px;
    text-align: center;
    border-radius: 4px;
    font-size: 15px;
  }
  .singProd_details .select_size .sizze:hover {
    border: 1px solid #ff5252;
    background-color: #ff5252;
    color: #fff;
  }
  .singProd_details .select_color .colorr {
    border: 1px solid #ff0000;
    height: 30px;
    width: 60px;
    text-align: center;
    border-radius: 4px;
    font-size: 15px;
  }
  .singProd_details .select_color .colorr:hover {
    border: 1px solid #ff5252;
    background-color: #ff5252;
    color: #fff;
  }

  .singProd_details .btnMinus,
  .singProd_details .btnPluss {
    /* border: none; */
    border: 1px solid #f80000;
    outline: none;
    /* background-color: #b80000; */
    /* color: #ffff; */
    color: #000;
    border-radius: 3px;
    padding: 0px 14px !important;
    text-align: center;
    cursor: pointer;
  }

  .singProd_details .btnOnne {
    /* border: none; */
    border: 1px solid #f80000;
    outline: none;
    /* background-color: #ee7214; */
    /* color: #ffff; */
    color: #000;
    border-radius: 3px;
    padding: 3px 16px !important;
    text-align: center;
    cursor: pointer;
  }
  .singProd_details .order_cart .bttn,
  .bttn2 {
    background-color: #ff5252;
    color: #ffff;
    padding: 8px 15px;
    font-family: serif !important;
    font-weight: 600;
    border: 1px solid #ff0000;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .singProd_details .order_cart .bttn:hover,
  .bttn:hover {
    background-color: #ff0000;
    color: #000;
  }
  .singProd_details .order_cart .bttn2:hover,
  .bttn2:hover {
    background-color: #f0e6e6;
    color: #000;
  }

  .singProd_details .details {
    border: 1px solid #bfbfbf8f;
  }
  .singProd_details .details ul {
    padding-left: 0 !important;
  }
  .singProd_details .details h4 {
    font-size: 15px;
    font-weight: 600;
  }
  .singProd_details .right ul li {
    min-height: 400px;
  }

  .singProd_details .details .right li {
    background-color: #fff;
    color: black;
    padding: 5px 5px;
    text-align: justify;
    width: 100%;
  }

  @media only screen and (max-width: 1440px) {
    .singProd_details .main_singProd .tShirtImg .imggg {
      height: 348px !important;
    }
  }
  @media only screen and (max-width: 1024px) {
    .singProd_details .main_singProd .tShirtImg .imggg {
      height: 265px !important;
    }
    .singProd_details .img-fluid {
      height: 265px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .singProd_details {
      margin-bottom: 28px;
    }
    .singProd_details .main_singProd .tShirtImg .imggg {
      height: 200px !important;
    }
    .singProd_details .img-fluid {
      height: 200px !important;
    }
    .singProd_details .nnaavv {
      flex-direction: column;
      width: 100%;
    }
    .singProd_details .nnaavv ul,
    .singProd_details .nnaavv li {
      width: 100%;
      text-align: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .singProd_details .main_singProd {
      flex-direction: column !important;
    }
    .left-item {
      width: 100% !important;
    }
    .tShirtImg {
      width: 100% !important;
    }

    /* nav  */
    .singProd_details .nnaavv {
      flex-direction: row;
      width: 100%;
    }
    .singProd_details .nnaavv ul,
    .singProd_details .nnaavv li {
      width: 100%;
      text-align: center !important;
    }
    .singProd_details .nnaavv li h4 {
      font-size: 14px !important;
    }
  }

  /* @media only screen and (max-width: 425px) { */
  @media (min-width: 425px) and (max-width: 530px) {
    /* .singProd_details .resOdrCrt .respBtn{
      flex-direction: column !important;
    } */
    .singProd_details .resOdrCrt .bttn {
      padding: 5px 15px;
      font-size: 12px !important;
    }
    .singProd_details .resOdrCrt .bttn2 {
      padding: 3px 15px;
      font-size: 12px !important;
    }
    .singProd_details .wrappp {
      /* flex-direction: column !important; */
      flex-direction: row !important;
      gap: 0px;
    }

    .singProd_details .select_size .sizze {
      /* border: 1px solid #000; */
      height: 22px;
      width: 30px;
      font-size: 12px;
    }

    .singProd_details .select_color .colorr {
      /* border: 1px solid #000; */
      height: 22px;
      width: 32px;
      font-size: 10px;
    }

    /* nav  */
    .singProd_details .details .left .nav-item .nav-link {
      padding: 8px !important;
    }
    .singProd_details .nnaavv {
      flex-direction: row;
      width: 100%;
    }
    .singProd_details .nnaavv ul,
    .singProd_details .nnaavv li {
      width: 100%;
      text-align: center !important;
    }
    .singProd_details .nnaavv li h4 {
      font-size: 12px !important;
    }
  }
  /* @media only screen and (max-width: 375px) { */
  @media (min-width: 375px) and (max-width: 424px) {
    .singProd_details .resOdrCrt {
      flex-direction: column !important;
    }
    .singProd_details .resOdrCrt .bttn {
      padding: 5px 15px;
      font-size: 10px !important;
    }
    .singProd_details .flexxCC {
      flex-direction: column !important;
      margin-bottom: 4px !important;
    }

    .singProd_details .wrappp {
      gap: 5px !important;
      align-items: start !important;
      margin-left: 0px !important;
    }

    .singProd_details .select_size .sizze {
      height: 20px;
      width: 28px;
      font-size: 12px;
    }

    .singProd_details .select_color .colorr {
      height: 20px;
      width: 28px;
      font-size: 9px;
    }

    /* nav  */
    .singProd_details .details .left .nav-item .nav-link {
      padding: 6px !important;
    }
    .singProd_details .nnaavv {
      flex-direction: row;
      width: 100%;
    }
    .singProd_details .nnaavv ul,
    .singProd_details .nnaavv li {
      width: 90%;
      text-align: center !important;
      padding: 0px !important;
    }
    .singProd_details .nnaavv li h4 {
      font-size: 10px !important;
    }
  }

  /* @media only screen and (max-width: 320px) { */
  @media (min-width: 320px) and (max-width: 376px) {
    .flexxCC {
      flex-direction: column !important;
    }

    .singProd_details .resOdrCrt {
      flex-direction: column !important;
    }
    .singProd_details .resOdrCrt .bttn {
      padding: 5px 15px;
      font-size: 12px !important;
    }
    .singProd_details .wrappp {
      gap: 4px !important;
    }
    .singProd_details .select_size .sizze {
      height: 16px;
      width: 20px;
      font-size: 10px;
    }

    .singProd_details .select_color .colorr {
      height: 16px;
      width: 20px;
      font-size: 7px;
    }

    /* nav  */
    .singProd_details .nnaavv {
      flex-direction: column;
      width: 100%;
      padding: 0px !important;
    }
    .singProd_details .nnaavv ul,
    .singProd_details .nnaavv li {
      width: 100%;
      text-align: start !important;
    }
    .singProd_details .nnaavv li h4 {
      font-size: 12px !important;
    }
  }
`;

export default SingleProductDetails;
