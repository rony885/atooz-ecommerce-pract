import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Footer from "../../components/Footer";
import { useApiContext } from "../../context/ApiContext";

const PurchaseView = () => {
  const { general_settings, fetchGeneralSettings } = useApiContext();

  useEffect(() => {
    fetchGeneralSettings();
  }, [fetchGeneralSettings]);

  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/purchase/${id}/`
      );
      setItem(data);
    };

    loadProducts();
  }, [id]);


  return (
    <Wrapper>
      <div className="layout">
        <div className="purchaseView_wrapper">
          <div className="purchase">
            <div className="">
              <div className="row d-flex justify-content-between align-items-center purchase_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center purchase_title">
                    <h4 className="m-0 fs-5">Purchase View</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_purchase">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">
                        <Link to="/purchase-add" className="purchase_link">
                          Add Purchase
                        </Link>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <header align="left">
                    <input
                      type="text"
                      placeholder="Search here"
                      class="w-100 form-control"
                      value=""
                    />
                  </header>

                  <div style={{ padding: "24px" }}>
                    <p class="text-center">There are no records to display</p>
                  </div>
                </div>
              </div>
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
  .purchaseView_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .purchase {
    padding: 20px 20px;
  }
  .purchase_row .purchase_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .purchase_row .add_purchase .buttn {
    background-color: #1d2634;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .add_purchase .buttn:hover {
    background-color: #424141;
  }

  .purchase_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .purchase_link {
    text-decoration: none;
    color: #fff;
  }
  .card:first-child {
    background-color: transparent;
  }
  /* Remove blue outline on focus */
  input:focus {
    outline: none;
    box-shadow: none;
  }
`;

export default PurchaseView;
