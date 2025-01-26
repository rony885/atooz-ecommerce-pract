import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const PurchaseAdd = () => {
  return (
    <Wrapper>
      <div className="layout">
        <div className="purchaseAdd_wrapper">
          <div className="purchase_add">
            <div className="">
              <h2 className="fs-5">Add Purchase</h2>
              <form className="mt-5">
                <div className="card_form">
                  <div class="row mb-4 card_resv">
                    <div class="col-12">
                      <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Purchase Details</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row g-3">
                  <div class="form-outline mb-4 col-lg-6">
                    <label class="form-label">
                      Purchase Date<span>*</span>
                    </label>
                    <div class="input-group has-validation">
                      <input
                        name="purchase_date"
                        type="date"
                        id="purchase_date"
                        class="form-control"
                        value=""
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>

                  <div class="form-outline mb-4 col-lg-6">
                    <label class="form-label">
                      Supplier<span>*</span>
                    </label>
                    <div class="input-group has-validation">
                      <select name="supplier" class="form-select" id="supplier">
                        <option value="">Select</option>
                        <option value="1">Ekattor IT</option>
                      </select>
                      <div class="invalid-feedback"></div>
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

  .purchaseAdd_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }
  .purchase_add {
    padding: 20px 20px;
  }
  .purchase_add h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .purchase_add h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .form-label {
    font-size: 13px;
    font-weight: 500;
  }
  .form-control,
  .form-select {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }
  @media screen and (max-width: 425px) {
    .card_form .card_resv {
      margin-bottom: 5px !important;
    }
  }
`;

export default PurchaseAdd;
