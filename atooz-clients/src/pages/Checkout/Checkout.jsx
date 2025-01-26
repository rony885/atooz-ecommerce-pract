import React from "react";
import styled from "styled-components";
import checkoutImg from "../../images/categoryImg-1.jpg";
const Checkout = () => {
  return (
    <Wrapper>
      <div className="checkout mt-5">
        <div className="Container_margin">
          <div className="d-flex justify-content-between align-items-stretch ress_column h-100">
            <div
              className="details_form d-flex flex-column"
              style={{ width: "60%" }}
            >
              <h3 className="mb-4">Billing Details</h3>

              <form className="form">
                <div className="mb-3 ">
                  <div className="name_fields">
                    <div className="field w-100">
                      <label>
                        First Name <span className="star">*</span>
                      </label>
                      <input type="text" className="inputF" />
                    </div>
                    <div className="field w-100">
                      <label>
                        Last Name <span className="star">*</span>
                      </label>
                      <input type="text" className="inputL" />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label>
                    Email <span className="star">*</span>
                  </label>
                  <input type="text" className="inputt" />
                </div>
                <div className="mb-4">
                  <label>
                    Phone <span className="star">*</span>
                  </label>
                  <input type="text" className="inputt" />
                </div>
                <div className="mb-4">
                  <label>
                    District <span className="star">*</span>
                  </label>
                  <br />
                  <select name="" id="" className="inputt">
                    <option value="">Select an Option</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Rajshahi">Rajshahi</option>
                  </select>
                </div>
                <div>
                  <label>
                    Address <span className="star">*</span>
                  </label>
                  <br />
                  <textarea className="text_area"></textarea>
                </div>
              </form>
            </div>
            <div
              className="order_part d-flex flex-column mb-4"
              style={{ width: "35%" }}
            >
              <h3 className="mb-4">Your Order</h3>
              <div className="product">
                <div className="my-3 mx-2">
                  <div className="d-flex justify-content-between align-items-start p-2">
                    <div className="" style={{ width: "70%" }}>
                      <h4 className="">Product</h4>
                    </div>
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="text-end">Amount</h4>
                    </div>
                  </div>
                  <hr className="mt-0 mb-0" />
                  <div className="d-flex justify-content-between align-items-center mx-2 my-4">
                    <div
                      style={{ width: "70%" }}
                      className="d-flex justify-content-start align-items-center gap-2"
                    >
                      <div className="">
                        <img
                          src={checkoutImg}
                          alt=""
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="">
                        <h5 className="fs-6">T-shirt</h5>
                      </div>
                      <div className="">
                        <h5 className="fs-5">x 2</h5>
                      </div>
                    </div>
                    <div className="" style={{ width: "30%" }}>
                      <h5 className="fs-6 text-end">Tk&nbsp;580</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-2 mb-4">
                    <div
                      style={{ width: "70%" }}
                      className="d-flex justify-content-start align-items-center gap-2"
                    >
                      <div className="">
                        <img
                          src={checkoutImg}
                          alt=""
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>
                      <div className="">
                        <h5 className="fs-6">T-shirt</h5>
                      </div>
                      <div className="">
                        <h5 className="fs-5">x 2</h5>
                      </div>
                    </div>
                    <div className="" style={{ width: "30%" }}>
                      <h5 className="fs-6 text-end">Tk&nbsp;580</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-2">
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="fs-6">Subtotal</h4>
                    </div>
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="fs-6 text-end">Tk&nbsp;1160</h4>
                    </div>
                  </div>
                  <hr className="mt-0" />
                  <div className="d-flex justify-content-between align-items-center mx-2">
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="fs-6">Shipping</h4>
                    </div>
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="fs-6 text-end">Tk&nbsp;120</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mx-2">
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="fs-6">Total</h4>
                    </div>
                    <div className="" style={{ width: "30%" }}>
                      <h4 className="fs-6 text-end">Tk&nbsp;1280</h4>
                    </div>
                  </div>
                  <div className="my-3">
                    <button className="order_btnn">Place Order</button>
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
  .checkout .details_form h3,
  .order_part h3 {
    font-size: 20px;
    font-weight: 700;
    font-family: serif;
  }
  .checkout .forrm {
    display: flex;
    flex-direction: column;
  }
  .checkout .details_form .star {
    color: #f80000;
  }
  .checkout .name_fields {
    display: flex;
    gap: 20px;
  }
  .checkout .inputF,
  .inputL {
    flex: 1;
    width: 100%;
    padding: 8px 0;
    outline-color: #f80000;
    border: none;
  }
  .checkout .inputt {
    width: 100%;
    padding: 10px 0;
    outline-color: #f80000;
    border: none;
  }
  .checkout .text_area {
    width: 100%;
    outline-color: #f80000;
    border: none;
  }
  .checkout .product {
    border: 1px solid #00000041;
    border-radius: 4px;
  }
  .checkout .product h4 {
    font-size: 15px;
    font-weight: 700;
    font-family: serif;
  }
  .checkout .product .order_btnn {
    width: 100%;
    padding: 10px 0;
    border: 1px solid #f80000;
    background-color: #ec4a4a;
    text-align: center;
    color: #ffffff;
    font-weight: 700;
    font-family: serif;
    border-radius: 4px;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    .checkout .ress_column {
      flex-direction: column !important;
      gap: 20px;
    }
    .checkout .details_form {
      width: 100% !important;
    }
    .checkout .order_part {
      width: 100% !important;
    }
  }

  @media only screen and (max-width: 425px) {
    .form div {
      margin-bottom: 10px !important;
    }
    .checkout .inputF,
    .inputL {
      padding: 6px 0;
    }

    .checkout .inputt {
      padding: 6px 0;
    }
  }
`;
export default Checkout;
