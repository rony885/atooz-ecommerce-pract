import React, { useState } from "react";
import styled from "styled-components";
import { TbCirclePlus } from "react-icons/tb";
import ProdListTable from "./ProdListTable";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaTrashAlt } from "react-icons/fa";

const ProductLists = () => {
  const sampleData = [
    {
      id: 1,
      name: "Gift",
      status: "Active",
      unit: "Piece",
      quantity: "750",
      discount: "250.00",
      buyingPrice: "450.00",
      sellingPrice: "1000.00",
      image:
        "https://e7.pngegg.com/pngimages/596/587/png-clipart-t-shirt-gildan-activewear-sleeve-clothing-crew-neck-pure-cotton-tshirt-blue.png",
    },
    {
      id: 2,
      name: "Book",
      status: "Inactive",
      unit: "Piece",
      quantity: "200",
      discount: "50.00",
      buyingPrice: "100.00",
      sellingPrice: "200.00",
      image: "images/book.jpg",
    },
    {
      id: 3,
      name: "Pen",
      status: "Active",
      unit: "Piece",
      quantity: "1500",
      discount: "5.00",
      buyingPrice: "10.00",
      sellingPrice: "20.00",
      image: "images/pen.jpg",
    },
    {
      id: 4,
      name: "Laptop",
      status: "Active",
      unit: "Piece",
      quantity: "50",
      discount: "500.00",
      buyingPrice: "1500.00",
      sellingPrice: "2000.00",
      image: "images/laptop.jpg",
    },
    {
      id: 5,
      name: "Notebook",
      status: "Inactive",
      unit: "Piece",
      quantity: "300",
      discount: "20.00",
      buyingPrice: "50.00",
      sellingPrice: "100.00",
      image: "images/notebook.jpg",
    },
    {
      id: 6,
      name: "Bag",
      status: "Active",
      unit: "Piece",
      quantity: "400",
      discount: "100.00",
      buyingPrice: "200.00",
      sellingPrice: "300.00",
      image: "images/bag.jpg",
    },
    {
      id: 7,
      name: "Shoes",
      status: "Inactive",
      unit: "Pair",
      quantity: "150",
      discount: "75.00",
      buyingPrice: "100.00",
      sellingPrice: "200.00",
      image: "images/shoes.jpg",
    },
    {
      id: 8,
      name: "Watch",
      status: "Active",
      unit: "Piece",
      quantity: "100",
      discount: "200.00",
      buyingPrice: "500.00",
      sellingPrice: "1000.00",
      image: "images/watch.jpg",
    },
    {
      id: 9,
      name: "Phone",
      status: "Inactive",
      unit: "Piece",
      quantity: "80",
      discount: "150.00",
      buyingPrice: "300.00",
      sellingPrice: "600.00",
      image: "images/phone.jpg",
    },
    {
      id: 10,
      name: "Tablet",
      status: "Active",
      unit: "Piece",
      quantity: "60",
      discount: "100.00",
      buyingPrice: "200.00",
      sellingPrice: "500.00",
      image: "images/tablet.jpg",
    },
    {
      id: 11,
      name: "Tablet1",
      status: "Active",
      unit: "Piece",
      quantity: "55",
      discount: "110.00",
      buyingPrice: "220.00",
      sellingPrice: "530.00",
      image: "images/tablet1.jpg",
    },
    {
      id: 12,
      name: "Tablet2",
      status: "Active",
      unit: "Piece",
      quantity: "70",
      discount: "120.00",
      buyingPrice: "250.00",
      sellingPrice: "550.00",
      image: "images/tablet2.jpg",
    },
    {
      id: 13,
      name: "Tablet3",
      status: "Active",
      unit: "Piece",
      quantity: "65",
      discount: "130.00",
      buyingPrice: "240.00",
      sellingPrice: "520.00",
      image: "images/tablet3.jpg",
    },
  ];

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = (item) => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

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
                      <Link to="/productadd" className="buttn_link">
                        <TbCirclePlus className="fs-6" />{" "}
                        <span className="bttn_title">Add Product</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-12">
                  <ProdListTable
                    data={sampleData}
                    openDeleteModal={openDeleteModal}
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
                        <button type="button" className="delete_btn">
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
