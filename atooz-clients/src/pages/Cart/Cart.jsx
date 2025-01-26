import React from "react";
import styled from "styled-components";
// import "./cart.css";
import cartImg from "../../images/categoryImg-1.jpg";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <Wrapper>
      <div className="cart my-4">
        <div className="Container_margin">
          {/* <div className="cart_home d-flex justify-content-start align-items-center">
          <div className="">
          <i class="fa fa-home" aria-hidden="true"></i>
          </div>
          <div className="">
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
          <div className="">
            <h2 className="fs-6">Cart</h2>
          </div>
        </div> */}
          <div className="row d-flex justify-content-between align-items-start resvvv">
            <div className="col-lg-8 col-md-12 col-sm-12 cart_detail_column">
              <div className="cart_left py-1 px-2">
                <div className="cart_header d-flex justify-content-between align-items-center p-2">
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="d-flex justify-content-start align-items-center gap-5 check_all">
                      <input type="checkbox" id="checkAll" />
                      <h5 className="mb-0">Check All</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm-12">
                    <div className="have_item">
                      <h5 className="m-0">You have (1) items in your cart</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-12">
                    <div
                      className="d-flex justify-content-end align-items-center gap-1 icon_tittle"
                      style={{ color: "#72BF44" }}
                    >
                      <div className="headset_icon">
                        <i className="fas fa-headset" aria-hidden="true"></i>
                      </div>
                      <div className="help">
                        <h5 className="mb-0 text-end">Need Help?</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart_body mt-3 mx-2">
                  <div className="row resv_margin">
                    <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <input type="checkbox" />
                        <img
                          src={cartImg}
                          alt=""
                          style={{
                            width: "75px",
                            height: "75px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 cart-product-content">
                      <div className="name">
                        <h4>
                          <span>T-Shirt</span>
                        </h4>
                      </div>
                      <div className="brand">
                        <h4>
                          Brand: <span>Lotto</span>
                        </h4>
                      </div>
                      <div className="color">
                        <h4>
                          Color: <span>Black</span>
                        </h4>
                      </div>
                      <div className="size">
                        <h4>
                          Size: <span>XL</span>
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-4 item_input">
                      <div className="d-flex justify-content-between align-items-center gap-2 input_group">
                        <button className="btnMinus fs-4">-</button>
                        <input
                          type="text"
                          value={1}
                          style={{ width: "50px" }}
                          className="btnOne fs-5"
                        />
                        <button className="btnPlus fs-4">+</button>
                      </div>
                      <div className="taka mb-0">
                        <h4 className="text-center mb-0">
                          Tk&nbsp;<span className="tkk">50000</span>
                        </h4>
                      </div>
                      <div className="delete_icon">
                        <i className="fas fa-trash-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row resv_margin">
                    <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center gap-5">
                        <input type="checkbox" />
                        <img
                          src={cartImg}
                          alt=""
                          style={{
                            width: "75px",
                            height: "75px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 cart-product-content">
                      <div className="name">
                        <h4>
                          <span>T-Shirt</span>
                        </h4>
                      </div>
                      <div className="brand">
                        <h4>
                          Brand: <span>Lotto</span>
                        </h4>
                      </div>
                      <div className="color">
                        <h4>
                          Color: <span>Black</span>
                        </h4>
                      </div>
                      <div className="size">
                        <h4>
                          Size: <span>XL</span>
                        </h4>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-4 item_input">
                      <div className="d-flex justify-content-between align-items-center gap-2 input_group">
                        <button className="btnMinus fs-4">-</button>
                        <input
                          type="text"
                          value={1}
                          style={{ width: "50px" }}
                          className="btnOne fs-5"
                        />
                        <button className="btnPlus fs-4">+</button>
                      </div>
                      <div className="taka mb-0">
                        <h4 className="text-center mb-0">
                          Tk&nbsp;<span className="tkk">50000</span>
                        </h4>
                      </div>
                      <div className="delete_icon">
                        <i className="fas fa-trash-alt" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 cart_summary_column">
              <div className="cart_right py-1 px-2">
                <div className="cart_header2 p-2">
                  <h2 style={{ fontSize: "15px" }} className="mb-0">
                    Price Details
                  </h2>
                </div>
                <div className="cart_body2">
                  <div className="d-flex justify-content-between align-items-center mt-3 mb-2 sub_total">
                    <h4>Sub Total</h4>
                    <h4>
                      Tk&nbsp;<span>500</span>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 discount">
                    <h4>Discount</h4>
                    <h4>
                      Tk&nbsp;<span>100</span>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 serv_charge">
                    <h4>Service Charge</h4>
                    <h4>
                      Tk&nbsp;<span>50</span>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between align-items-center serv_charge">
                    <h4>Payable Amount</h4>
                    <h4>
                      Tk&nbsp;<span>450</span>
                    </h4>
                  </div>
                  <div className="my-2">
                    <Link to="/checkout">
                      <button className="check_bttn">Checkout</button>
                    </Link>
                  </div>
                </div>
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
  .cart .row {
    --bs-gutter-x: 15px;
  }
  .cart .cart_left,
  .cart_right {
    border: 1px solid #00000041;
    border-radius: 4px;
  }
  .cart .cart_header,
  .cart_header2 {
    background-color: #fff;
    border-radius: 4px;
  }
  .cart .cart_header h5,
  h2 {
    font-size: 15px;
    font-weight: 700;
  }
  .cart .cart-product-content .name h4 {
    font-size: 15px;
    font-weight: 700;
  }
  .cart .cart-product-content .brand h4,
  .color h4,
  .size h4 {
    font-size: 13px;
  }
  .cart .btnMinus,
  .btnPlus {
    border: 1px solid black;
    outline: none;
    border-radius: 3px;
    padding: 0px 10px !important;
    text-align: center;
    cursor: pointer;
    font-size: 15px !important;
  }
  .cart .btnOne {
    border: 1px solid black;
    outline: none;
    border-radius: 3px;
    padding: 0px 5px !important;
    text-align: center;
    cursor: pointer;
    font-size: 15px !important;
  }
  .cart .taka h4 {
    font-size: 15px;
  }
  .cart .taka .tkk {
    font-size: 15px;
    font-weight: 700;
    font-family: serif;
  }
  .cart .delete_icon i {
    font-size: 20px;
    color: #f80000;
    cursor: pointer;
  }
  .cart .sub_total h4,
  .discount h4,
  .serv_charge h4 {
    font-size: 15px;
    font-weight: 700;
    font-family: serif;
  }
  .cart .check_bttn {
    width: 100%;
    background-color: #f05151;
    border: 1px solid #f80000;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    padding: 8px 0px;
    font-weight: 700;
    font-family: serif;
    transition: 0.4s all ease-in-out;
  }
  .cart .check_bttn:hover {
    background-color: #f50505;
  }
  @media only screen and (max-width: 768px) {
    .cart .resvvv {
      gap: 22px;
    }
  }
  @media only screen and (max-width: 425px) {
    .cart .headset_icon i {
      display: none;
    }
    .cart .cart_header {
      gap: 20px;
    }
    .cart .check_all {
      gap: 18px !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .cart .btnMinus,
    .btnPlus {
      padding: 0px 5px !important;
      font-size: 10px !important;
    }
    .cart .btnOne {
      width: 30px !important;
      padding: 0px 3px !important;
      font-size: 10px !important;
    }
    .cart .delete_icon i {
      font-size: 15px;
    }
    .cart .cart_header {
      gap: 10px !important;
    }
    .cart .check_all {
      gap: 10px !important;
    }
  }
`;
export default Cart;
