import React, { useState } from "react";
// import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGearFill,
  BsChevronDown,
  BsChevronRight,
  BsCartDashFill,
} from "react-icons/bs";
import { PiStorefrontFill } from "react-icons/pi";
import "./sidebar.css";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index, event) => {
    event.preventDefault();
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      OpenSidebar();
    }
  };

  return (
    // <Wrapper>
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <span>Menu</span>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "" : "")}
            onClick={handleLinkClick}
          >
            <BsGrid1X2Fill className="icon" />
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>

        <li className="sidebar-list-item">
          <NavLink
            to="/"
            onClick={(e) => toggleSubmenu(1, e)}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <BsFillArchiveFill className="icon" />
            <span className="menu-text">Products</span>
            {openSubmenu === 1 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </NavLink>
          {openSubmenu === 1 && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/product-category"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brand"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Brand
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/unit"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Unit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Product List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product-add"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Create Product
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <NavLink
            to="/"
            onClick={(e) => toggleSubmenu(2, e)}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <BsFillArchiveFill className="icon" />
            <span className="menu-text">Order</span>
            {openSubmenu === 2 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </NavLink>
          {openSubmenu === 2 && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/orders"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  ListView
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <NavLink
            to="/"
            onClick={(e) => toggleSubmenu(3, e)}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <BsCartDashFill className="icon fs-4" />
            <span className="menu-text">Purchase</span>
            {openSubmenu === 3 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </NavLink>
          {openSubmenu === 3 && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/purchaseview"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  List View
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/purchase-add"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Create Purchase
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <NavLink
            to="/"
            onClick={(e) => toggleSubmenu(4, e)}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <PiStorefrontFill className="icon fs-4" />
            <span className="menu-text">Blog</span>
            {openSubmenu === 4 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </NavLink>
          {openSubmenu === 4 && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/blogs"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  List View
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog-add"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Create Blog
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <NavLink
            to="/"
            onClick={(e) => toggleSubmenu(5, e)}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <BsFillGearFill className="icon" />
            <span className="menu-text">Setting</span>
            {openSubmenu === 5 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </NavLink>
          {openSubmenu === 5 && (
            <ul className="submenu">
              <li>
                <NavLink
                  to="/supplier"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Supplier
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/customers"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Customers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courier"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Courier
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/delivery-type"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Delivery Type
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/clients"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/general-setting"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  General Setting
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manage-balance"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Manage Balance
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
    //  </Wrapper>
  );
};

// const Wrapper = styled.section`
// `;

export default Sidebar;
