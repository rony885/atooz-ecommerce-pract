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
                  to="/product-lists"
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
                  to="/manage-balance"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active-submenu-link" : ""
                  }
                >
                  Manage Balance
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
            </ul>
          )}
        </li>
      </ul>
    </aside>
    //  </Wrapper>
  );
};

// const Wrapper = styled.section`
//   .grid-container {
//     display: grid;
//     grid-template-columns: 250px 1fr;
//     grid-template-rows: 60px 1fr;
//     grid-template-areas:
//       "sidebar header"
//       "sidebar main";
//     height: 100vh;
//   }
//   #sidebar {
//     grid-area: sidebar;
//     height: 100%;
//     background-color: #263043;
//     overflow-y: auto;
//     transition: all 0.5s;
//     -webkit-transition: all 0.5s;
//   }

//   .sidebar-title {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     margin-bottom: 20px;
//     padding: 15px 14px;
//   }
//   .sidebar-title > span {
//     display: none;
//   }

//   .sidebar-brand {
//     margin-top: 15px;
//     font-size: 20px;
//     font-weight: 700;

//     color: #9e9ea4;
//   }

//   .sidebar-list {
//     padding: 0;
//     list-style-type: none;
//   }

//   .sidebar-list-item {
//     padding: 20px 20px 20px 20px;
//     font-size: 18px;
//   }

//   .sidebar-list-item:hover {
//     background-color: rgba(255, 255, 255, 0.2);
//     cursor: pointer;
//   }

//   .sidebar-list-item > a {
//     text-decoration: none;
//     color: #9e9ea4;
//     transition: 0.4s all ease-in-out;
//   }
//   .sidebar-list-item > a:hover {
//     color: #ffff;
//   }

//   .sidebar-responsive {
//     display: inline !important;
//     position: absolute;
//     z-index: 12 !important;
//   }
// `;

export default Sidebar;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGearFill,
//   BsChevronDown,
//   BsChevronRight,
//   BsCartDashFill,
// } from "react-icons/bs";
// import { PiStorefrontFill } from "react-icons/pi";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (index, event) => {
//     event.preventDefault();
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   const handleLinkClick = () => {
//     if (window.innerWidth <= 768) {
//       OpenSidebar();
//     }
//   };

//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <span>Menu</span>
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "" : "")}
//             onClick={handleLinkClick}
//           >
//             <BsGrid1X2Fill className="icon" />
//             <span className="menu-text">Dashboard</span>
//           </NavLink>
//         </li>

//         <li className="sidebar-list-item">
//           <NavLink
//             to="/"
//             onClick={(e) => toggleSubmenu(1, e)}
//             className={({ isActive }) => (isActive ? "" : "")}
//           >
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-text">Products</span>
//             {openSubmenu === 1 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </NavLink>
//           {openSubmenu === 1 && (
//             <ul className="submenu">
//               <li>
//                 <NavLink
//                   to="/categoryprod"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Category
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/unit"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Unit
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/productlists"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Product List
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/productadd"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Create Product
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <NavLink
//             to="/"
//             onClick={(e) => toggleSubmenu(2, e)}
//             className={({ isActive }) => (isActive ? "" : "")}
//           >
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-text">Order</span>
//             {openSubmenu === 2 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </NavLink>
//           {openSubmenu === 2 && (
//             <ul className="submenu">
//               <li>
//                 <NavLink
//                   to="/orders"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   ListView
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <NavLink
//             to="/"
//             onClick={(e) => toggleSubmenu(3, e)}
//             className={({ isActive }) => (isActive ? "" : "")}
//           >
//             <BsCartDashFill className="icon fs-4" />
//             <span className="menu-text">Purchase</span>
//             {openSubmenu === 3 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </NavLink>
//           {openSubmenu === 3 && (
//             <ul className="submenu">
//               <li>
//                 <NavLink
//                   to="/purchaseview"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   List View
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/purchase-add"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Create Purchase
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <NavLink
//             to="/"
//             onClick={(e) => toggleSubmenu(4, e)}
//             className={({ isActive }) => (isActive ? "" : "")}
//           >
//             <PiStorefrontFill className="icon fs-4" />
//             <span className="menu-text">Blog</span>
//             {openSubmenu === 4 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </NavLink>
//           {openSubmenu === 4 && (
//             <ul className="submenu">
//               <li>
//                 <NavLink
//                   to="/blogs"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   List View
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/blog-add"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Create Blog
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <NavLink
//             to="/"
//             onClick={(e) => toggleSubmenu(5, e)}
//             className={({ isActive }) => (isActive ? "" : "")}
//           >
//             <BsFillGearFill className="icon" />
//             <span className="menu-text">Setting</span>
//             {openSubmenu === 5 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </NavLink>
//           {openSubmenu === 5 && (
//             <ul className="submenu">
//               <li>
//                 <NavLink
//                   to="/supplier"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Supplier
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/customers"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Customers
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/courier"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Courier
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/manage-balance"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Manage Balance
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/delivery-type"
//                   onClick={handleLinkClick}
//                   className={({ isActive }) =>
//                     isActive ? "active-submenu-link" : ""
//                   }
//                 >
//                   Delivery Type
//                 </NavLink>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;
