import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const OrderAdd = () => {
  return (
    <Wrapper>
      <div className="layout">
        <div className="orderAdd_wrapper">
          <div className="orderAdd">
            <div className="">
              <h2 className="fs-5">Add Order</h2>
              <form className="mt-5">
                <div className="card_form">
                  <div className="row mb-4 card_resv">
                    <div className="col-12">
                      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">Order Details</h4>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* <!-- Order Date --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Order Date<span>*</span>
                      </label>
                      <div className="input-group">
                        <input
                          name="order_date"
                          type="date"
                          id="order_date"
                          className="form-control"
                          value=""
                        />
                      </div>
                    </div>

                    {/* <!-- Payment Method --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Payment Method<span>*</span>
                      </label>
                      <div className="input-group">
                        <select
                          name="payment_method"
                          className="form-control form-select"
                          id="payment_method"
                        >
                          <option value="">Select</option>
                          <option value="Cash">Cash</option>
                          <option value="Bkash">Bkash</option>
                          <option value="Nagad">Nagad</option>
                          <option value="Cash On Delivery">
                            Cash On Delivery
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Courier --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Courier<span></span>
                      </label>
                      <div className="input-group">
                        <select
                          name="courier"
                          className="form-control form-select"
                          id="courier"
                        >
                          <option value="">Select</option>
                          <option value="1">Pathao</option>
                          <option value="2">Stead Fast</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Delivery Status --> */}
                    <div className="form-outline mb-4 col-lg-3">
                      <label className="form-label">
                        Delivery Status<span></span>
                      </label>
                      <div className="input-group ">
                        <select
                          name="delivery_status"
                          className="form-control form-select"
                          id="delivery_status"
                        >
                          <option value="">Select</option>
                          <option value="New">New</option>
                          <option value="Pending">Pending</option>
                          <option value="Approved">Approved</option>
                          <option value="Packaging">Packaging</option>
                          <option value="Shipment">Shipment</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* <!-- Note --> */}
                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Note<span></span>
                      </label>
                      <div className="input-group">
                        <textarea
                          name="note"
                          id="note"
                          className="form-control"
                        ></textarea>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    {/* <!-- Delivery Type --> */}
                    <div className="form-outline mb-4 col-lg-4">
                      <label className="form-label">
                        Delivery Type<span></span>
                      </label>
                      <div className="input-group has-validation">
                        <select
                          name="delivery_type"
                          className="form-control form-select"
                          id="delivery_type"
                        >
                          <option value="">Select</option>
                          <option value="1">
                            Free Shipping&nbsp;-&nbsp;0.00&nbsp;Tk
                          </option>
                          <option value="2">
                            Inside Dhaka&nbsp;-&nbsp;90.00&nbsp;Tk
                          </option>
                          <option value="3">
                            Outside Dhaka&nbsp;-&nbsp;140.00&nbsp;Tk
                          </option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>

                    {/* <!-- Customer Type --> */}
                    <div className="form-outline mb-4 col-lg-4">
                      <label className="form-label">
                        Customer Type<span></span>
                      </label>
                      <div className="input-group has-validation">
                        <select
                          name="customer_type"
                          className="form-control form-select"
                          id="customer_type"
                        >
                          <option value="">Select</option>
                          <option value="prev">Previous Customer</option>
                          <option value="new">New Customer</option>
                        </select>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <Footer className="footer" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .layout {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100vh - 60px);
  }
  .orderAdd_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .orderAdd {
    padding: 20px 20px;
  }
  .orderAdd h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .orderAdd h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .form-label {
    font-size: 13px;
    font-weight: 500;
  }
  .form-control {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 425px) {
    .card_form .card_resv {
      margin-bottom: 5px !important;
    }
  }
`;

export default OrderAdd;
