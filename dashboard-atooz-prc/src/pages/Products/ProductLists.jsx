import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import ProdListTable from "./ProdListTable";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useApiContext } from "../../context/ApiContext";

const ProductLists = () => {
  const { product, fetchProduct } = useApiContext();

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const [receivedId, setReceivedId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = (item) => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  // delete
  const getId = (id) => {
    setReceivedId(id);
  };

  const deleteProduct = async (id) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/product_api/unpaginate_product/${id}/`
    );
    window.location.reload(false);
  };

  return (
    <Wrapper>
      <div className="layout">
        <div className="ProductList_wrapper">
          <div className="ProductList">
            <div className="">
              <div className="row d-flex justify-content-between align-items-center catry_row mb-4">
                <div className="col-6">
                  <div className="d-flex justify-content-start align-items-center catry_title">
                    <h4 className="m-0 fs-5">Product</h4>
                  </div>
                </div>

                <div className="col-6">
                  <div className="d-flex justify-content-end align-items-center add_catry">
                    <i className="bi bi-plus-circle align-baseline me-1"></i>
                    <button className="buttn">
                      <Link to="/product-add" className="buttn_link">
                        <TbCirclePlus className="fs-6" />
                        <span className="bttn_title">Add Product</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-12">
                  <ProdListTable
                    data={product}
                    openDeleteModal={openDeleteModal}
                    getId={getId}
                  />
                </div>
              </div>

              {/* ===== Delete Modal ===== */}
              {isDeleteModalOpen && (
                <div className="custom-modal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close no-hover-border ms-auto"
                          onClick={closeDeleteModal}
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body p-md-5">
                        <div className="text-center">
                          <div className="text-danger fs-1">
                            <FaTrashAlt />
                          </div>
                          <div className="mt-4">
                            <h3 className="mb-2 fs-5">Are you sure?</h3>
                            <p className="text-muted fs-lg mx-3 mb-0">
                              Are you sure you want to remove this record?
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <button
                          type="button"
                          className="close_btn"
                          onClick={closeDeleteModal}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="delete_btn"
                          onClick={() => deleteProduct(receivedId)}
                        >
                          Yes, Delete It!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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

  .ProductList_wrapper {
    flex: 1;
  }

  .footer {
    padding: 10px 20px;
  }
  .ProductList {
    padding: 20px 20px;
  }
  .catry_row .catry_title h4 {
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .catry_row .add_catry .buttn {
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
  .add_catry .buttn:hover {
    background-color: #424141;
  }
  .buttn_link {
    text-decoration: none;
    color: #fff;
  }

  .catry_row .bttn_title {
    font-size: 14px;
    font-weight: 700;
    font-family: serif;
  }

  /* ===== Modal styles ===== */
  .custom-modal {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    position: relative;
  }
  .modal-content h2 {
    font-size: 18px;
    font-weight: 700;
  }
  .close_btn {
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
    background-color: #d3d4d5;
  }
  .delete_btn {
    background-color: #dc3546;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    padding: 6px 10px;
  }
  .no-hover-border {
    outline: none;
    box-shadow: none;
  }

  .no-hover-border:focus,
  .no-hover-border:hover {
    outline: none;
    box-shadow: none;
    border-color: transparent;
  }

  .modal-actions .cancel-btn:hover {
    background-color: #e77b79;
  }

  .modal-actions .add-btn:hover {
    background-color: #4497f0;
  }

  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 375px) {
  }
  @media screen and (max-width: 320px) {
    .catry_row .add_catry .buttn {
      padding: 5px;
    }
    .catry_row .bttn_title {
      font-size: 12px;
    }
  }
`;

export default ProductLists;
