import React from "react";
import styled from "styled-components";
// import "./wishlist.css";
import wishlistImg from "../../images/categoryImg-1.jpg";
const Wishlist = () => {
  return (
    <Wrapper>
      <div className="wishlist mt-4">
        <div className="Container_margin">
          <h2 className="">Your Wishlist Items</h2>
          <div className="wishlist_product">
            <div className="d-flex justify-content-between align-items-center  wishlist_product_header mt-2 mb-0">
              <div className="text-center" style={{ width: "25%" }}>
                <h5>Remove</h5>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <h5>Product</h5>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <h5>Price</h5>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <h5>Action</h5>
              </div>
            </div>
            <hr className="mx-2 mt-1 mb-3" />
            <div className="d-flex justify-content-between align-items-center mb-3 wishlist_product_info">
              <div
                className="text-center fs-4 delete_icon"
                style={{ width: "25%" }}
              >
                <i className="fas fa-trash-alt" aria-hidden="true"></i>
              </div>
              <div
                className="d-flex justify-content-start align-items-center gap-3 text-end imgg_textt"
                style={{ width: "25%" }}
              >
                <div className="">
                  <img
                    src={wishlistImg}
                    alt=""
                    className="imggg"
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div className="">
                  <h4>premium-bamboo-silk-...</h4>
                </div>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <h4 className="text-uppercase">AED 2350</h4>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <button className="wishlist_btn">Add to cart</button>
              </div>
            </div>
            <hr className="mx-2 mt-1 mb-3" />
            <div className="d-flex justify-content-between align-items-center mb-3 wishlist_product_info">
              <div
                className="text-center fs-4 delete_icon"
                style={{ width: "25%" }}
              >
                <i className="fas fa-trash-alt" aria-hidden="true"></i>
              </div>
              <div
                className="d-flex justify-content-start align-items-center gap-3 text-end imgg_textt"
                style={{ width: "25%" }}
              >
                <div className="">
                  <img
                    src={wishlistImg}
                    alt=""
                    className="imggg"
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div className="">
                  <h4>premium-bamboo-silk-...</h4>
                </div>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <h4 className="text-uppercase">AED 2350</h4>
              </div>
              <div className="text-center" style={{ width: "25%" }}>
                <button className="wishlist_btn">Add to cart</button>
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

  .wishlist h2 {
    font-size: 23px;
    font-weight: 600;
    font-family: serif;
    text-transform: capitalize;
  }
  .wishlist .wishlist_product {
    border: 1px solid #00000041;
    border-radius: 4px;
  }
  .wishlist .wishlist_product_header h5,
  .wishlist_product_info h4 {
    font-size: 18px;
    font-weight: 700;
    font-family: serif;
  }
  .wishlist .wishlist_btn {
    border: none;
    background: #f80000;
    border-radius: 4px;
    padding: 4px 10px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .wishlist_product_info .delete_icon {
    color: #f80000;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .wishlist_product_info .imgg_textt {
      flex-direction: column;
    }
    .wishlist {
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 425px) {
    .wishlist_product_info h4 {
      font-size: 15px;
    }
    .wishlist .wishlist_btn {
      padding: 4px 10px;
      font-size: 13px;
    }
  }
  @media only screen and (max-width: 375px) {
    .wishlist_product_info h4 {
      font-size: 12px;
    }
    .wishlist .wishlist_btn {
      font-size: 10px;
    }
  }
  @media only screen and (max-width: 320px) {
    .wishlist .wishlist_product_header h5 {
      font-size: 15px;
    }
    .wishlist_product_info .imggg {
      width: 60px !important;
      height: 60px !important;
    }
    .wishlist .wishlist_btn {
      font-size: 10px;
    }
  }
`;
export default Wishlist;
