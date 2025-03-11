import React, { useEffect } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";
import PurchaseDataTable from "./PurchaseDataTable";
import { useApiContext } from "../../context/ApiContext";

const PurchaseList = () => {
  // data fetching
  const { purchase, fetchPurchase } = useApiContext();

  useEffect(() => {
    fetchPurchase();
  }, [fetchPurchase]);

  return (
    <Wrapper>
      <div className="layout">
        <div className="purchaseView_wrapper">
          <div className="purchase">
            <div className="">
              <div className="row d-flex justify-content-between align-items-center purchase_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center purchase_title">
                    <Link to="/" className="text-dark">
                      <ImHome className="fs-3 mb-0" />
                    </Link>
                    <span className="fs-4 mx-1 mt-2">/</span>
                    <h4 className="m-0 fs-5 mt-2">Purchase</h4>
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

              <div className="row">
                <div className="col-lg-12">
                  <PurchaseDataTable data={purchase} />
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

export default PurchaseList;
