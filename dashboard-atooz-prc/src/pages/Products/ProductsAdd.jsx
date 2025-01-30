import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const ProductsAdd = () => {
  return (
    <Wrapper>
      <div className="layout">
        <div className="addProduct_wrapper">
          <div className="add_product">
            <div className="">
              <h2 className="fs-5">Add Product</h2>
              <form>
                <div className="row">
                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                      Product Type<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="1">Standard</option>
                        <option value="2">Combination</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                      Product Code<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                      Feature<span></span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4 col-lg-12">
                  <label className="form-label">
                    Product Name<span>*</span>
                  </label>
                  <div className="input-group">
                    <input
                      name="name"
                      type="text"
                      id="name"
                      className="form-control"
                      value=""
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="form-outline mb-4 col-lg-6">
                    <label className="form-label">
                      Unit Type<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="1">Piece</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4 col-lg-6">
                    <label className="form-label">
                      Unit Quantity<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="1">.5</option>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">5</option>
                        <option value="1">10</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                    Is Feature<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="1">Standard</option>
                        <option value="2">Combination</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                    Is Top Selling<span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                    Is New Arrival<span></span>
                    </label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-outline mb-4 col-lg-12">
                    <label className="form-label">Description</label>
                    <div className="input-group">
                      <textarea className="form-control"></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-outline mb-4 col-lg-6">
                    <label className="form-label">
                      Image<span></span>
                    </label>
                    <input type="file" className="form-control" />
                  </div>
                  <div className="form-outline mb-4 col-lg-6">
                    <label className="form-label">
                      Gallery Images<span></span>
                    </label>
                    <input
                      name="gal_image"
                      multiple
                      type="file"
                      id="gal_image"
                      className="form-control"
                    />
                    <div
                      id="image-container"
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    ></div>
                  </div>
                </div>

                <div className="row">
                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                      Buying Price<span>*</span>
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">BDT</span>
                      <input
                        type="text"
                        id="buying_price"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                      Selling Price<span>*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">BDT</span>
                      <input
                        name="selling_price"
                        type="text"
                        id="selling_price"
                        className="form-control"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="form-outline mb-4 col-lg-4">
                    <label className="form-label">
                      Discount<span></span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">BDT</span>
                      <input
                        name="discount"
                        type="text"
                        id="discount"
                        className="form-control"
                        value=""
                      />
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

  .addProduct_wrapper {
    flex: 1;
  }

  .footer {
    padding: 10px 20px;
  }
  .add_product {
    padding: 20px 20px;
  }

  .add_product h2 {
    text-align: center;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .form-outline {
    margin-bottom: 1.5rem;
  }

  .form-label {
    font-size: 13px;
    font-weight: 500;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }

  .form-control {
    border-radius: 0.25rem;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .input-group-text {
    font-size: 12px;
  }

  .has-validation .form-control:invalid {
    border-color: #dc3545;
  }
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default ProductsAdd;
