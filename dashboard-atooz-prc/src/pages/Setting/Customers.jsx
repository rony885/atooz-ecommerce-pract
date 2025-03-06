import React, { useEffect } from "react";
import { TbCirclePlus } from "react-icons/tb";
import styled from "styled-components";
import Footer from "../../components/Footer";
import CustomersDataTable from "./CustomersDataTable";
import { useApiContext } from "../../context/ApiContext";

const Customers = () => {
  const { all_users, fetAllUsers } = useApiContext();

  console.log(all_users)

  useEffect(() => {
    fetAllUsers();
  }, [fetAllUsers]);

  return (
    <Wrapper>
      <div className="layout">
        <div className="customers_wrapper">
          <div className="customers">
            <div className="mb-4">
              <div className="row d-flex justify-content-between align-items-center customers_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center customers_title">
                    <h4 className="m-0 fs-5">Customers</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_customers">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <TbCirclePlus className="fs-6" />
                      <span className="bttn_title">Add Customers</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <div className="table-responsive">
                  <CustomersDataTable data={all_users} />
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
  .customers_wrapper {
    flex: 1;
  }
  .footer {
    padding: 10px 20px;
  }

  .customers {
    padding: 20px 20px;
  }
  .customers_row .customers_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .customers_row .add_customers .buttn {
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
  .customers_row .buttn:hover {
    background-color: #424141;
  }
  .customers_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }
  .headerr {
    background-color: #333;
    padding: 10px 30px 1px 30px;
    box-shadow: 0 6px 7px -3px rgba(255, 255, 255, 0.35);
    border-radius: 4px;
  }
  .table-responsive {
    margin: 20px 0;
  }
  .headerr input {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 12px;
  }
`;

export default Customers;
