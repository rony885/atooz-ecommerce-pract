import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SingleProd from "../../components/SingleProd/SingleProd";
import productsArray from "../../productsData.js";

const Products = () => {
  // Filter products based on search query
  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const [activeItem, setActiveItem] = useState("one");
  const [showComponent, setshowComponent] = useState("one");
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All"); // State for selected brand

  useEffect(() => {
    setProducts(productsArray);
  }, []);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getUniqueCategories = (products) => {
    return ["All", ...new Set(products.map((product) => product.category))];
  };

  const getUniqueBrands = (products) => {
    return ["All", ...new Set(products.map((product) => product.brand))];
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  // Filter products based on search query, selected category, and selected brand
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearchQuery;
  });

  const uniqueCategories = getUniqueCategories(productsArray);
  const uniqueBrands = getUniqueBrands(productsArray);

  return (
    <Wrapper>
      <div className="products mt-5">
        <div className="Container_margin">
          <div className="row d-flex justify-content-between align-items-center vieww mb-4">
            <div className="col-lg-3 col-md-12 col-sm-12 barrGrid">
              <div className="d-flex justify-content-start align-items-center gap-4">
                <button
                  className={`bttnn ${activeItem === "one" ? "active" : ""}`}
                  onClick={() => {
                    handleItemClick("one");
                    setshowComponent("one");
                  }}
                >
                  <BsGrid />
                </button>

                <button
                  className={`bttnn ${activeItem === "two" ? "active" : ""}`}
                  onClick={() => {
                    handleItemClick("two");
                    setshowComponent("two");
                  }}
                >
                  <FaBars />
                </button>
              </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="d-flex align-items-center searchContainerr">
                <form>
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    id="searchbar-item"
                    placeholder="Search Products"
                    value={searchQuery}
                    onChange={handleSearchChange} // Update search query on input change
                  />
                </form>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-between align-items-start catgProduct">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="filter_category">
                <h3 className="fs-5 text-dark mb-3">Categories</h3>
                <div className="d-flex justify-content-start align-items-start flex-column gap-2 mb-5">
                  {uniqueCategories.map((category) => (
                    <button
                      key={category}
                      className={`buttn ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="filter_brand mb-5">
                  <h3 className="fs-5 text-dark mb-3">Brand</h3>
                  <form action="#">
                    <select
                      name="brand"
                      id="brand"
                      className="px-3 py-1 selectt"
                      value={selectedBrand}
                      onChange={handleBrandChange}
                    >
                      {uniqueBrands.map((brand) => (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>

                <div className="filter_colors mb-5">
                  <h3 className="fs-5 text-dark mb-3">Colors</h3>
                  <div className="color_style">
                    <button className="bttn_all">All</button>
                    <button
                      style={{ backgroundColor: "#000" }}
                      className="bttn_color"
                    ></button>
                    <button
                      style={{ backgroundColor: "#FF0000" }}
                      className="bttn_color"
                    ></button>
                    <button
                      style={{ backgroundColor: "#01204E" }}
                      className="bttn_color"
                    ></button>
                    <button
                      style={{ backgroundColor: "#A91D3A" }}
                      className="bttn_color"
                    ></button>
                    <button
                      style={{ backgroundColor: "#FC4100" }}
                      className="bttn_color"
                    ></button>
                  </div>
                </div>

                <div className="filter_price mb-5">
                  <h3 className="fs-5 text-dark mb-3">Price</h3>
                  <p className="mb-0">৳৬০,০০০.০০</p>
                  <input
                    type="range"
                    name="price"
                    // min="0"
                    // max="6000000"
                    // value="6000000"
                  />
                </div>

                <div className="filter-clear">
                  <button className="clear_bttn">Clear Filters</button>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="short_filter d-flex justify-content-between align-items-start mb-4">
                <div className="">
                  {/* <h2 className="fs-5">{products.length} Product Available</h2> */}
                  <h2 className="fs-5">
                    {filteredProducts.length} Product(s) Available
                  </h2>
                </div>

                <form action="#">
                  <select name="" id="" className="px-1 py-1 shortSelect">
                    <option value="lowest">Price(lowest)</option>
                    <option value="#" disabled></option>
                    <option value="highest">Price(highest)</option>
                    <option value="#" disabled></option>
                    <option value="a-z">Price(a-z)</option>
                    <option value="#" disabled></option>
                    <option value="z-a">Price(z-a)</option>
                  </select>
                </form>
              </div>

              {/* ========== main products =========== */}
              {showComponent === "one" && (
                <div className="main_product">
                  <div
                    style={{ backgroundColor: "#ffff" }}
                    className="px-4 py-4 rounded services"
                  >
                    <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap mt-4 service_product">
                      {filteredProducts.map((product) => (
                        <div className="mb-4" key={product.id}>
                          <Link
                            to={`/product-details/${product.id}`}
                            className="linkk"
                          >
                            <SingleProd
                              id={product.id}
                              img={product.img}
                              name={product.name}
                              price={`${product.regularPrice.amount}${product.regularPrice.currency}`}
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ======== products row-part ======== */}
              {showComponent === "two" && (
                <div
                  style={{ backgroundColor: "#ffff" }}
                  className="px-5 py-5 rounded mt-4 products_roww_part"
                >
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="row d-flex justify-content-start align-items-center mb-5 resvv_part"
                    >
                      <div className="col-lg-3 col-md-12 col-sm-12 products_roww_img">
                        <img
                          id={product.id}
                          src={product.img}
                          alt={product.name}
                          style={{ width: "220px", height: "220px" }}
                        />
                      </div>

                      <div className="col-lg-9 col-md-12 col-sm-12 products_roww_textt">
                        <h4 className="fs-5">{product.name}</h4>
                        <h4 className="fs-6">
                          {product.regularPrice.amount}
                          {product.regularPrice.currency}
                        </h4>
                        <p className="mb-0">
                          {product.description.details.slice(0, 50)}&nbsp;
                          <span className="seemore">
                            <Link
                              to={`/product-details/${product.id}`}
                              className="proDetailsLink"
                            >
                              See More...
                            </Link>
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 180px !important;

  .proDetailsLink {
    text-decoration: none;
    color: #212529;
  }
  .bttnn.active {
    background-color: red;
  }
  .bttnn.active svg {
    color: white;
  }

  .products .vieww .bttnn {
    color: #f00808;
    border-radius: 4px;
    border-color: #fa0808;
    padding: 4px 10px;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .products .vieww .bttnn:hover {
    background-color: #f30808;
    color: #fff;
  }

  .products .searchContainerr form {
    width: 100%;
    border: 1px solid #f3080883;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    padding: 3px;
    margin-bottom: 3px;
  }
  .products .searchContainerr form i {
    padding: 5px 5px;
    font-size: 22px;
    color: #f7090983;
  }
  #searchbar-item::placeholder {
    color: #f80000;
    /* color: red; */
  }
  .products .searchContainerr form input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    font-weight: 700;
    font-family: serif;
    padding: 5px 5px;
    background: transparent;
    color: #000;
  }

  .products h3 {
    font-weight: 700;
    font-family: serif;
  }
  .products .filter_category .buttn {
    border: none;
    background-color: #e2e5e9;
    cursor: pointer;
  }
  .products .filter_brand .selectt {
    text-transform: capitalize;
    text-align: start;
    background-color: #eb5555;
    border-color: red;
    color: #fff;
    border-radius: 5px;
  }
  .products .filter_brand .option {
    text-align: start;
  }
  .products .filter_colors .bttn_all {
    border: none;
    background-color: #e9e7e2;
    text-transform: capitalize;
    font-size: 18px;
    cursor: pointer;
  }
  .products .filter_colors .bttn_color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 8px;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
  }
  .products .filter_price p {
    color: rgba(29, 29, 29, 0.8);
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    font-family: serif;
  }
  .products .filter_price input {
    cursor: pointer;
  }
  .products .filter-clear .clear_bttn {
    border: 1px solid #f80000;
    background-color: #f80000;
    color: #fff;
    padding: 10px 30px;
    font-size: 18px;
    font-family: serif;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.4s all ease-in-out;
  }
  .products .filter-clear .clear_bttn:hover {
    background-color: transparent;
    border: 1px solid #f80000;
    color: #f80000;
  }
  .products h2 {
    font-weight: 700;
    font-family: serif;
  }
  .products .linkk {
    text-decoration: none;
  }
  .short_filter .shortSelect {
    background-color: #eb5555;
    border-color: red;
    color: #fff;
    border-radius: 5px;
  }

  /* ======= products img-part ======= */
  .products .services .services_title {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 22px;
  }

  .products .services .service_product img {
    width: 220px !important;
    height: 260px !important;
  }
  /* Product description  */
  .products_roww_part .products_roww_textt h4 {
    font-weight: 700;
    font-family: serif;
    cursor: pointer;
  }
  .products_roww_part .seemore {
    font-weight: 700;
    font-family: serif;
    cursor: pointer;
  }

  @media only screen and (max-width: 769px) {
    .services {
      margin-bottom: 1.5rem !important;
    }
    .products {
      margin-bottom: 20px;
    }
    .barrGrid {
      margin-bottom: 25px;
    }
    .catgProduct {
      gap: 32px;
    }
  }
  /* Product description  */
  @media only screen and (max-width: 1440px) {
    .products_roww_img img {
      width: 200px !important;
      height: 200px !important;
    }
  }

  @media only screen and (max-width: 1024px) {
    .resvv_part {
      flex-direction: row !important;
    }
    .products_roww_img img {
      width: 150px !important;
      height: 150px !important;
    }

    .products_roww_part .products_roww_textt {
      padding: 25px;
    }
    .products_roww_part .products_roww_textt p {
      font-size: 14px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .products_roww_part {
      margin-bottom: 30px !important;
    }
    .resvv_part {
      flex-direction: row !important;
      /* gap: 8px; */
    }
  }
  @media only screen and (max-width: 425px) {
    .resvv_part {
      flex-direction: column !important;
    }
    .products_roww_img img {
      width: 200px !important;
      height: 200px !important;
    }
    .products_roww_part .blog_textt h4 {
      font-size: 12px !important;
    }
    .products_roww_textt p {
      font-size: 14px !important;
    }
  }
  @media only screen and (max-width: 375px) {
    .products_roww_img img {
      width: 150px !important;
      height: 150px !important;
    }
    .products_roww_part .products_roww_textt h4 {
      font-size: 12px !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .products_roww_img img {
      width: 120px !important;
      height: 120px !important;
    }
    .products_roww .products_roww_textt h4 {
      font-size: 9px !important;
    }
    .products_roww_textt p {
      font-size: 10px !important;
    }
  }
`;

export default Products;
