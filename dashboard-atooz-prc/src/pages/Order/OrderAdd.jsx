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
                  <div class="row mb-4 card_resv">
                    <div class="col-12">
                      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Order Details</h4>
                      </div>
                    </div>
                  </div>

                  <div class="row g-3">
                    {/* <!-- Order Date --> */}
                    <div class="form-outline mb-4 col-lg-3">
                      <label class="form-label">
                        Order Date<span>*</span>
                      </label>
                      <div class="input-group">
                        <input
                          name="order_date"
                          type="date"
                          id="order_date"
                          class="form-control"
                          value=""
                        />
                      </div>
                    </div>

                    {/* <!-- Payment Method --> */}
                    <div class="form-outline mb-4 col-lg-3">
                      <label class="form-label">
                        Payment Method<span>*</span>
                      </label>
                      <div class="input-group">
                        <select
                          name="payment_method"
                          class="form-control form-select"
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
                    <div class="form-outline mb-4 col-lg-3">
                      <label class="form-label">
                        Courier<span></span>
                      </label>
                      <div class="input-group">
                        <select
                          name="courier"
                          class="form-control form-select"
                          id="courier"
                        >
                          <option value="">Select</option>
                          <option value="1">Pathao</option>
                          <option value="2">Stead Fast</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Delivery Status --> */}
                    <div class="form-outline mb-4 col-lg-3">
                      <label class="form-label">
                        Delivery Status<span></span>
                      </label>
                      <div class="input-group ">
                        <select
                          name="delivery_status"
                          class="form-control form-select"
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

                  <div class="row g-3">
                    {/* <!-- Note --> */}
                    <div class="form-outline mb-4">
                      <label class="form-label">
                        Note<span></span>
                      </label>
                      <div class="input-group">
                        <textarea
                          name="note"
                          id="note"
                          class="form-control"
                        ></textarea>
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>

                  <div class="row g-3">
                    {/* <!-- Delivery Type --> */}
                    <div class="form-outline mb-4 col-lg-4">
                      <label class="form-label">
                        Delivery Type<span></span>
                      </label>
                      <div class="input-group has-validation">
                        <select
                          name="delivery_type"
                          class="form-control form-select"
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
                        <div class="invalid-feedback"></div>
                      </div>
                    </div>

                    {/* <!-- Customer Type --> */}
                    <div class="form-outline mb-4 col-lg-4">
                      <label class="form-label">
                        Customer Type<span></span>
                      </label>
                      <div class="input-group has-validation">
                        <select
                          name="customer_type"
                          class="form-control form-select"
                          id="customer_type"
                        >
                          <option value="">Select</option>
                          <option value="prev">Previous Customer</option>
                          <option value="new">New Customer</option>
                        </select>
                        <div class="invalid-feedback"></div>
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
