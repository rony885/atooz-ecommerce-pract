import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../images/AtooZ-logo.png";
import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import cartViewImg from "../../images/cart-view-img.webp";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Wrapper>
      <div style={{ backgroundColor: "#f8f8f8" }} className="py-3 navbarr">
        <div className="Container_margin px-0 main">
          <div className="text-left px-0 logo">
            <Link to="/" className="link-dom">
              <img
                height={70}
                width={170}
                src={logo}
                className="logoImage"
                alt="logo"
              />
            </Link>
          </div>

          <div className="list-items d-flex justify-content-between align-items-center px-0 menu_item">
            <ul
              style={{ gap: "45px" }}
              className="d-flex justify-content-between align-items-center m-0 p-0 menu_item"
              onClick={() => setIsMobile(false)}
            >
              <li className="home">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="about">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="products">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Products
                </NavLink>
              </li>

              <li className="blog">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li className="contact">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center px-0 searchContainer">
            <form>
              <i className="fas fa-search"></i>
              <input
                type="text"
                id="searchbar-item"
                placeholder="Search Products"
                // onkeyup="searchbar()"
                className="placeholder"
              />
            </form>
          </div>

          <div className="text-white d-flex justify-content-end align-items-center m-0 p-0 list-items menu_item2 ">
            <ul className="text-white d-flex justify-content-end align-items-center m-0 p-0 ">
              <li className="text-end wishlistt">
                <Link
                  to="/wishlist"
                  className=" text-center"
                  style={{ color: "#fff" }}
                >
                  <FaRegHeart className="text-center fs-2  heart" />
                </Link>
              </li>

              <div className="cart-container">
                <li className="carttt">
                  <Link
                    className=""
                    onClick={toggleCart}
                    style={{ color: "#fff" }}
                  >
                    <TiShoppingCart className="fs-2 carrtt" />
                  </Link>
                </li>

                <div
                  className={`cart-background ${isCartOpen ? "show" : ""}`}
                  onClick={toggleCart}
                ></div>

                <div className={`cart ${isCartOpen ? "open" : ""}`}>
                  <div className="d-flex justify-content-between align-items-center mb-2 shipping_cart">
                    <div className="d-flex justify-content-center align-items-center mx-2">
                      <TiShoppingCart
                        className="fs-4"
                        style={{ color: "#f80000" }}
                      />
                      <h5 className="cart_textt mt-1">Cart(1)</h5>
                    </div>
                    <div className="fs-4 mx-2" onClick={toggleCart}>
                      <RxCross2 className="cart_cross" />
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-between flex-column"
                    style={{ minHeight: "90%" }}
                    // style={{ minHeight: "70%" }}
                  >
                    <div
                      style={{
                        overflowX: "auto",
                        overflowY: "auto",
                        // maxHeight: "75vh",
                        maxHeight: "64vh",
                      }}
                    >
                      <div className="cart_content d-flex justify-content-between align-items-center mx-2 cartImgSize">
                        <div
                          style={{ width: "20%" }}
                          className="text-dark cartImgSize"
                        >
                          <img
                            src={cartViewImg}
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </div>

                        <div
                          style={{ width: "66%" }}
                          className="cart_info text-dark "
                        >
                          <h5>
                            Dell Vostro 15 3530 Intel Core i3 1305U 8GB RAM,
                            512GB SSD 15.6 Inch FHD Display Titan Grey Laptop{" "}
                          </h5>
                          <p className="mb-0">Tk 67,500 X 1</p>
                        </div>

                        <div
                          style={{ width: "5%", color: "#f80000" }}
                          className="dellete"
                        >
                          <i
                            className="fas fa-trash-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <hr className="text-dark" />

                      <div className="cart_content d-flex justify-content-between align-items-center mx-2">
                        <div
                          style={{ width: "20%" }}
                          className="text-dark cartImgSize"
                        >
                          <img
                            src={cartViewImg}
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </div>

                        <div
                          style={{ width: "66%" }}
                          className="cart_info text-dark"
                        >
                          <h5>
                            Dell Vostro 15 3530 Intel Core i3 1305U 8GB RAM,
                            512GB SSD 15.6 Inch FHD Display Titan Grey Laptop{" "}
                          </h5>
                          <p className="mb-0">Tk 67,500 X 1</p>
                        </div>

                        <div
                          style={{ width: "5%", color: "#f80000" }}
                          className="dellete"
                        >
                          <i
                            className="fas fa-trash-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <hr className="text-dark" />

                      <div className="cart_content d-flex justify-content-between align-items-center mx-2">
                        <div
                          style={{ width: "20%" }}
                          className="text-dark cartImgSize"
                        >
                          <img
                            src={cartViewImg}
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </div>

                        <div
                          style={{ width: "66%" }}
                          className="cart_info text-dark"
                        >
                          <h5>
                            Dell Vostro 15 3530 Intel Core i3 1305U 8GB RAM,
                            512GB SSD 15.6 Inch FHD Display Titan Grey Laptop{" "}
                          </h5>
                          <p className="mb-0">Tk 67,500 X 1</p>
                        </div>

                        <div
                          style={{ width: "5%", color: "#f80000" }}
                          className="dellete"
                        >
                          <i
                            className="fas fa-trash-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <hr className="text-dark" />

                      <div className="cart_content d-flex justify-content-between align-items-center mx-2">
                        <div
                          style={{ width: "20%" }}
                          className="text-dark cartImgSize"
                        >
                          <img
                            src={cartViewImg}
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </div>

                        <div
                          style={{ width: "66%" }}
                          className="cart_info text-dark"
                        >
                          <h5>
                            Dell Vostro 15 3530 Intel Core i3 1305U 8GB RAM,
                            512GB SSD 15.6 Inch FHD Display Titan Grey Laptop{" "}
                          </h5>
                          <p className="mb-0">Tk 67,500 X 1</p>
                        </div>

                        <div
                          style={{ width: "5%", color: "#f80000" }}
                          className="dellete"
                        >
                          <i
                            className="fas fa-trash-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <hr className="text-dark" />

                      <div className="cart_content d-flex justify-content-between align-items-center mx-2">
                        <div
                          style={{ width: "20%" }}
                          className="text-dark cartImgSize"
                        >
                          <img
                            src={cartViewImg}
                            alt=""
                            style={{ width: "80px", height: "80px" }}
                          />
                        </div>

                        <div
                          style={{ width: "66%" }}
                          className="cart_info text-dark"
                        >
                          <h5>
                            Dell Vostro 15 3530 Intel Core i3 1305U 8GB RAM,
                            512GB SSD 15.6 Inch FHD Display Titan Grey Laptop{" "}
                          </h5>
                          <p className="mb-0">Tk 67,500 X 1</p>
                        </div>

                        <div
                          style={{ width: "5%", color: "#f80000" }}
                          className="dellete"
                        >
                          <i
                            className="fas fa-trash-alt"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                      <hr className="text-dark" />
                    </div>

                    <div className="hrr_view_cart">
                      <hr className="text-dark mb-1" />
                      <div className="">
                        <h6 className="fw-bold text-dark text-center">
                          Sub Total: Tk 0
                        </h6>
                      </div>

                      <div className="text-center mb-3 mx-2">
                        <div onClick={toggleCart}>
                          <Link to="/cart">
                            <button className="bttn_card">View Cart</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="menu-container">
                <li className="account">
                  <Link
                    onClick={toggleMenu}
                    className=""
                    style={{ color: "#fff" }}
                  >
                    <RiAccountCircleLine className="fs-2 m-0 accountCircleLine " />
                  </Link>
                </li>
                {isMenuVisible && (
                  <ul className="menu">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/registration">Settings</Link>
                    </li>
                    <li>
                      <Link to="/login">Logout</Link>
                    </li>
                  </ul>
                )}
              </div>
            </ul>

            <div className="text-right menu_btn">
              <button
                onClick={handleMobileMenuToggle}
                className="mobile-menu-icon"
              >
                {isMobile ? <RxCross2 /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* ===== responsive part ===== */}
        <div className={`nav-menu ${isMobile ? "show" : ""}`}>
          <div className="d-flex align-items-center mx-2 searchContainerr">
            <form>
              <i className="fas fa-search"></i>
              <input
                type="text"
                id="searchbar-item"
                placeholder="Search Products"
                // onkeyup="searchbar()"
              />
            </form>
          </div>

          <div className="list-items d-flex justify-content-between align-items-start px-0 menu_itemm">
            <ul
              className="d-flex justify-content-between align-items-start m-0 p-0 mx-2 menu_itemm gap-2"
              onClick={() => setIsMobile(false)}
            >
              <li className="home">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="about">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="products mb-0">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="blog">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="contact">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "link-dom active" : "link-dom"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 138px !important;
  .navbarr {
    position: fixed;
    top: 35px;
    width: 100%;
    z-index: 10;
  }

  .list-items ul {
    list-style-type: none;
  }
  .list-items ul li {
    font-size: 20px;
  }
  .link-dom {
    text-decoration: none;
    color: #ffff;
  }
  .link-dom.active {
    color: #f80000;
    border-bottom: 2px solid #a70000;
  }

  .header_search_input {
    position: relative;
    width: 100%;
    border: none;
    outline: none;
    padding: 10px 12px;
    border-radius: 20px;
    font-size: 14px;
  }
  .header_search_input_btn {
    position: absolute;
    top: 35px;
    right: 250px;
    font-size: 20px;
    margin-right: 25px;
    background: transparent;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  }
  .searchContainer form {
    width: 100%;
    border: 2px solid #f80000;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    padding: 6px;
    margin-bottom: 6px;
  }
  .searchContainer form i {
    padding: 5px 5px;
    font-size: 22px;
    color: #f80000;
  }
  .searchContainer form input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    /* font-weight: 700; */
    padding: 5px 15px;
    background: transparent;
    color: #f80000 !important;
  }

  #searchbar-item::placeholder {
    color: #f80000;
  }
  .searchContainerr form {
    width: 100%;
    border: 1px solid #f80000;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    padding: 3px;
    margin-bottom: 3px;
  }
  .searchContainerr form i {
    padding: 5px 5px;
    font-size: 22px;
    color: #f80000;
  }
  .searchContainerr form input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 11px;
    /* font-weight: 900; */
    padding: 5px 5px;
    background: transparent;
    color: #f80000 !important;
  }
  /* ===== responsive part start ===== */
  .menu_btn {
    display: none;
  }

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .menu_item {
    flex-direction: row !important;
  }

  .menu_itemm {
    flex-direction: column !important;
  }
  .menu_item2 {
    gap: 10px;
  }
  .menu_item2 ul {
    gap: 22px;
  }
  .menu_item li a {
    color: #f80000 !important;
    font-weight: 700;
    font-family: serif;
  }
  .nav-menu {
    display: none;
    position: absolute;
    right: 0;
    padding: 10px;
    width: 180px;
    background: #fff;
    color: #f80000;
    z-index: 9999;
    border-radius: 5px;
  }
  .nav-menu li a {
    color: #f80000 !important;
    font-weight: 700;
    font-family: serif;
  }
  /* ===== responsive part end ===== */

  /* ===== Account icon menu start ===== */
  .menu-container {
    position: relative;
  }
  .menu {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #f80000;
    list-style: none;
    padding: 5px 15px;
    margin: 0;
    text-align: center;
    border-radius: 5px;
    z-index: 999;
  }
  .menu li {
    padding: 5px 8px;
  }

  .menu li a {
    color: #f80000;
    text-decoration: none;
    font-weight: 700;
    font-family: serif;
    transition: 0.4s all ease-in-out;
  }
  .menu li a:hover {
    color: #ee4e4e;
  }
  /* ===== Account icon menu End ===== */

  /* ===== Cart Start ===== */
  .cart-container {
    position: relative;
  }
  .cart {
    position: fixed;
    /* top: 36px; */
    top: 18px;
    /* top: 0px; */
    right: -100%;
    width: 400px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    transition: right 0.3s ease;
    z-index: 1000000;
  }
  .cart.open {
    right: 0;
  }
  .cart_cross {
    cursor: pointer;
    color: #f80000;
  }
  .cart-container .cart-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    display: none;
  }
  .cart-container .cart-background.show {
    display: block;
  }
  .shipping_cart {
    background-color: #ccc;
    color: #000;
    padding: 12px 0;
  }
  .cart_content .cart_info h5,
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
  }
  .dellete {
    cursor: pointer !important;
  }
  .cart_textt {
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    color: #f80000;
  }
  .bttn_card {
    width: 100%;
    padding: 10px 0;
    background-color: #f35151;
    color: #fff;
    border: none;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    transition: all.4s all ease-in-out;
    margin-bottom: 10px;
  }
  .bttn_card:hover {
    background-color: #f50505;
  }
  /* ===== Cart End ===== */
  .account,
  .carttt,
  .wishlistt {
    border: 2px solid #f80000;
    padding: 6px 10px;
    border-radius: 4px;
    text-align: center;
    background-color: #f80000;
  }

  @media only screen and (max-width: 1024px) {
    .list-items ul li {
      font-size: 18px;
    }
    .menu_item2 {
      gap: 15px !important;
    }
    .menu_item2 ul {
      gap: 15px !important;
    }
    .menu_item {
      display: none !important;
    }

    .searchContainer {
      display: none !important;
    }
    .menu_btn {
      display: block !important;
      padding: 8px !important;
      /* background-color: #ffff !important; */
      background-color: #f80000 !important;
      color: #000 !important;
      border-radius: 10px !important;
    }

    .menu_btn button {
      padding: 6px !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      /* background-color: #000 !important; */
      background-color: #fff !important;
      /* color: #fff !important; */
      color: #f80000 !important;
      border-radius: 10px !important;
    }

    .menu_btn button i {
      background-color: #fff !important;
      color: #000 !important;
      font-weight: 700 !important;
    }

    .show {
      display: block !important;
    }
    .account,
    .carttt,
    .wishlistt {
      padding: 3px 5px;
    }
  }

  @media only screen and (max-width: 425px) {
    .logo img {
      width: 80px !important;
      height: 50px !important;
    }
    .menu_item2 {
      gap: 10px !important;
    }
    .menu_item2 ul {
      gap: 10px !important;
    }
    .cart {
      width: 300px;
    }
    .cart_info h5 {
      font-size: 10px !important;
      line-height: 15px !important;
    }
    .cartImgSize img {
      width: 60px !important;
      height: 60px !important;
    }
  }
  @media only screen and (max-width: 320px) {
    .logo img {
      width: 80px !important;
      height: 50px !important;
    }
    .menu_item2 {
      gap: 7px !important;
    }
    .menu_item2 ul {
      gap: 7px !important;
    }
    .cart {
      width: 260px;
    }
    .account,
    .carttt,
    .wishlistt {
      padding: 4px 5px !important;
    }
    .main {
      gap: 10px !important;
    }
  }
`;

export default Navbar;
