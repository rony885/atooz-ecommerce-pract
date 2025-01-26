import React, { useState } from "react";
import styled from "styled-components";
import {
  PiPencilLight,
  PiCaretLineLeftBold,
  PiCaretLineRightBold,
} from "react-icons/pi";
import { IoTrashOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProdListTable = ({ data, openDeleteModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "ascending" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // const handleDelete = (item) => {
  //   setIsDeleteModalOpen(true); // Open delete modal
  // };

  // const closeDeleteModal = () => {
  //   setIsDeleteModalOpen(false);
  // };

  return (
    <Wrapper>
      <div className="table-responsive">
        <header className="headerr">
          <input
            type="text"
            placeholder="Search here"
            className="w-100 form-control"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </header>
        <table className="table tablle">
          <thead>
            <tr className="tablle">
              <th>
                <input type="checkbox" aria-label="select-all-rows" />
              </th>
              <th className="texxt" onClick={() => handleSort("id")}>
                ID{" "}
                {sortConfig.key === "id"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("name")}>
                Name{" "}
                {sortConfig.key === "name"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th className="texxt" onClick={() => handleSort("status")}>
                Status{" "}
                {sortConfig.key === "status"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Buying Price</th>
              <th>Selling Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="tablle">
                <td>
                  <input type="checkbox" aria-label={`select-row-${item.id}`} />
                </td>
                <td className="texxt">{item.id}</td>
                <td className="texxt">{item.name}</td>
                <td className="texxt">{item.status}</td>
                <td className="texxt">{item.unit}</td>
                <td className="texxt">{item.quantity}</td>
                <td className="texxt">{item.discount}</td>
                <td className="texxt">{item.buyingPrice}</td>
                <td className="texxt">{item.sellingPrice}</td>
                {/* <td className="texxt">{item.image}</td> */}
                <td className="texxt">
                  <img src={item.image} alt="" className="imgg" />
                </td>
                <td>
                  <ul className="d-flex gap-2 list-unstyled mb-0">
                    <li>
                      <button className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn">
                        <Link to="/product-update">
                          <PiPencilLight />
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"
                        // onClick={() => handleDelete(item)}
                        onClick={openDeleteModal}
                      >
                        <IoTrashOutline />
                      </button>
                    </li>
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <span className="pagination_text text-black">Rows per page:</span>
            <div className="ms-2">
              <select
                aria-label="Rows per page:"
                className="form-select"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <span className="pagination-info">
            {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredData.length)} of{" "}
            {filteredData.length}
          </span>
          <div className="pagination-buttons d-flex">
            <button
              type="button"
              aria-label="First Page"
              className="btn btn-link"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <PiCaretLineLeftBold />
            </button>
            <button
              type="button"
              aria-label="Previous Page"
              className="btn btn-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next Page"
              className="btn btn-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
            <button
              type="button"
              aria-label="Last Page"
              className="btn btn-link"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <PiCaretLineRightBold />
            </button>
          </div>
        </div>

        {/* ===== Delete Confirmation Modal ===== */}
        {/* {isDeleteModalOpen && (
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
                  <button type="button" className="close_btn">
                    Close
                  </button>
                  <button type="button" className="delete_btn">
                    Yes, Delete It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
  .table th {
    cursor: pointer;
  }
  .table th,
  .table td {
    padding: 10px;
    text-align: left;
  }
  .table th {
    background-color: #f5f5f5;
  }
  .btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .btn-icon {
    padding: 5px;
  }
  .edit-item-btn {
    color: #007bff;
  }
  .remove-item-btn {
    color: #dc3545;
  }

  /* ===== pagination css ===== */
  .btn-link {
    background-color: #1d2634 !important;
    color: #fff !important;
    /* padding: 8px 16px; */
    border: none;
    cursor: pointer;
  }
  .btn-link:hover {
    background-color: #424141 !important;
    color: #fff;
  }

  .d-flex {
    display: flex;
  }

  .gap-2 {
    gap: 8px;
  }
  .imgg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    .texxt {
      font-size: 10px !important;
    }
    .pagination_text {
      display: none !important;
    }
    .pagination-info {
      font-size: 10px !important;
    }
    .btn-link {
      padding: 2px 8px !important;
    }
  }

  
  /* @media screen and (max-width: 425px) {
    .modal-content {
      max-width: 370px;
    }
  }
  @media screen and (max-width: 375px) {
    .modal-content {
      max-width: 340px;
    }
  }
  @media screen and (max-width: 320px) {
    .modal-content {
      max-width: 300px !important;
    }
  } */
`;

export default ProdListTable;
