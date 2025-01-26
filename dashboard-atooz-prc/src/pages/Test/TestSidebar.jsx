// import React, { useState } from "react";
// import {
//   BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
//   BsChevronDown,
// } from "react-icons/bs";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (index) => {
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <BsCart3 className="icon_header" /> SHOP
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </a>
//         </li>

//         <li className="sidebar-list-item">
//           <a href="#" onClick={() => toggleSubmenu(1)} className="">
//             <BsFillArchiveFill className="icon" /> Products <BsChevronDown className="submenu-icon ttt" />
//           </a>
//           {openSubmenu === 1 && (
//             <ul className="submenu">
//               <li><a href="#">All Products</a></li>
//               <li><a href="#">Add New Product</a></li>
//               <li><a href="#">Categories</a></li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <a href="#" onClick={() => toggleSubmenu(2)}>
//             <BsFillGrid3X3GapFill className="icon" /> Categories <BsChevronDown className="submenu-icon" />
//           </a>
//           {openSubmenu === 2 && (
//             <ul className="submenu">
//               <li><a href="#">All Categories</a></li>
//               <li><a href="#">Add New Category</a></li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsPeopleFill className="icon" /> Customers
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsListCheck className="icon" /> Inventory
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsMenuButtonWideFill className="icon" /> Reports
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//         <li className="sidebar-list-item">
//           <a href="#">
//             <BsFillGearFill className="icon" /> Setting
//           </a>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import {
//   BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
//   BsChevronDown,
// } from "react-icons/bs";
// import "./sidebar.css";
// import { Link } from "react-router-dom";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (index) => {
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <BsCart3 className="icon_header" /> SHOP
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={() => toggleSubmenu(1)}>
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-textt">Products</span>
//             <BsChevronDown className="submenu-icon " />
//           </Link>
//           {openSubmenu === 1 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/">All Products</Link>
//               </li>
//               <li>
//                 <Link to="/">Add New Product</Link>
//               </li>
//               <li>
//                 <Link to="/">Categories</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={() => toggleSubmenu(2)}>
//             <BsFillGrid3X3GapFill className="icon" />
//             <span className="menu-textt">Categories</span>
//             <BsChevronDown className="submenu-icon" />
//           </Link>
//           {openSubmenu === 2 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/">All Categories</Link>
//               </li>
//               <li>
//                 <Link to="/">Add New Category</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsPeopleFill className="icon" /> Customers
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsListCheck className="icon" /> Inventory
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsMenuButtonWideFill className="icon" /> Reports
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsFillGearFill className="icon" /> Setting
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsFillGearFill className="icon" /> Setting
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsFillGearFill className="icon" /> Setting
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import {
//   BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
//   BsChevronDown,
//   BsChevronRight,
// } from "react-icons/bs";
// import "./sidebar.css";
// import { Link } from "react-router-dom";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (index) => {
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <BsCart3 className="icon_header" /> SHOP
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={() => toggleSubmenu(1)}>
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-textt">Products</span>
//             {openSubmenu === 1 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </Link>
//           {openSubmenu === 1 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/categoryprod">Category</Link>
//               </li>
//               <li>
//                 <Link to="/unit">Unit</Link>
//               </li>
//               <li>
//                 <Link to="/productlists">Product List</Link>
//               </li>
//               <li>
//                 <Link to="/productadd">Create Product</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={() => toggleSubmenu(2)}>
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-textt">Order</span>
//             {openSubmenu === 2 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </Link>
//           {openSubmenu === 2 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/">ListView</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsPeopleFill className="icon" /> Add New Product
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={() => toggleSubmenu(3)}>
//             <BsFillGrid3X3GapFill className="icon" />
//             <span className="menu-textt">Categories</span>
//             {openSubmenu === 3 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </Link>
//           {openSubmenu === 3 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/">All Categories</Link>
//               </li>
//               <li>
//                 <Link to="/">Add New Category</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsPeopleFill className="icon" /> Customers
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsListCheck className="icon" /> Inventory
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsMenuButtonWideFill className="icon" /> Reports
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/setting">
//             <BsFillGearFill className="icon" /> Setting
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import {
//   BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
//   BsChevronDown,
//   BsChevronRight,
// } from "react-icons/bs";
// import "./sidebar.css";
// import { Link } from "react-router-dom";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (index, event) => {
//     event.preventDefault(); // Prevents redirection to the dashboard
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   return (
//     <aside
//       id="sidebar"
//       className={openSidebarToggle ? "sidebar-responsive" : ""}
//     >
//       <div className="sidebar-title">
//         <div className="sidebar-brand">
//           <BsCart3 className="icon_header" /> SHOP
//         </div>
//         <span className="icon close_icon" onClick={OpenSidebar}>
//           X
//         </span>
//       </div>

//       <ul className="sidebar-list">
//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsGrid1X2Fill className="icon" /> Dashboard
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={(e) => toggleSubmenu(1, e)}>
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-textt">Products</span>
//             {openSubmenu === 1 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </Link>
//           {openSubmenu === 1 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/categoryprod">Category</Link>
//               </li>
//               <li>
//                 <Link to="/unit">Unit</Link>
//               </li>
//               <li>
//                 <Link to="/productlists">Product List</Link>
//               </li>
//               <li>
//                 <Link to="/productadd">Create Product</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={(e) => toggleSubmenu(2, e)}>
//             <BsFillArchiveFill className="icon" />
//             <span className="menu-textt">Order</span>
//             {openSubmenu === 2 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </Link>
//           {openSubmenu === 2 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/orders">ListView</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsPeopleFill className="icon" /> Add New Product
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/" onClick={(e) => toggleSubmenu(3, e)}>
//             <BsFillGrid3X3GapFill className="icon" />
//             <span className="menu-textt">Categories</span>
//             {openSubmenu === 3 ? (
//               <BsChevronDown className="submenu-icon" />
//             ) : (
//               <BsChevronRight className="submenu-icon" />
//             )}
//           </Link>
//           {openSubmenu === 3 && (
//             <ul className="submenu">
//               <li>
//                 <Link to="/">All Categories</Link>
//               </li>
//               <li>
//                 <Link to="/">Add New Category</Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsPeopleFill className="icon" /> Customers
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsListCheck className="icon" /> Inventory
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/">
//             <BsMenuButtonWideFill className="icon" /> Reports
//           </Link>
//         </li>

//         <li className="sidebar-list-item">
//           <Link to="/setting">
//             <BsFillGearFill className="icon" /> Setting
//           </Link>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Sidebar;


// import React, { useState } from "react";
// import styled from "styled-components";
// import "./sidebar.css";
// import { Link } from "react-router-dom";
// import {
//   // BsCart3,
//   BsGrid1X2Fill,
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsPeopleFill,
//   BsListCheck,
//   BsMenuButtonWideFill,
//   BsFillGearFill,
//   BsChevronDown,
//   BsChevronRight,
// } from "react-icons/bs";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//   const [openSubmenu, setOpenSubmenu] = useState(null);

//   const toggleSubmenu = (index, event) => {
//     event.preventDefault(); // Prevents redirection to the dashboard
//     setOpenSubmenu(openSubmenu === index ? null : index);
//   };

//   const handleLinkClick = () => {
//     // Close the sidebar only for medium and small devices (<= 768px)
//     if (window.innerWidth <= 768) {
//       OpenSidebar();
//     }
//   };

//   return (
//     <Wrapper>
//       <aside
//         id="sidebar"
//         className={openSidebarToggle ? "sidebar-responsive" : ""}
//       >
//         <div className="sidebar-title">
//           <div className="sidebar-brand">
//             {/* <BsCart3 className="icon_header" /> SHOP */}
//             <span className="">Menu</span>
//           </div>
//           <span className="icon close_icon" onClick={OpenSidebar}>
//             X
//           </span>
//         </div>

//         <ul className="sidebar-list">
//           <li className="sidebar-list-item">
//             <Link to="/">
//               <BsGrid1X2Fill className="icon" /> Dashboard
//             </Link>
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/" onClick={(e) => toggleSubmenu(1, e)}>
//               <BsFillArchiveFill className="icon" />
//               <span className="menu-textt">Products</span>
//               {openSubmenu === 1 ? (
//                 <BsChevronDown className="submenu-icon" />
//               ) : (
//                 <BsChevronRight className="submenu-icon" />
//               )}
//             </Link>
//             {openSubmenu === 1 && (
//               <ul className="submenu">
//                 <li>
//                   <Link to="/categoryprod" onClick={handleLinkClick}>
//                     Category
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/unit" onClick={handleLinkClick}>
//                     Unit
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/productlists" onClick={handleLinkClick}>
//                     Product List
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/productadd" onClick={handleLinkClick}>
//                     Create Product
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/" onClick={(e) => toggleSubmenu(2, e)}>
//               <BsFillArchiveFill className="icon" />
//               <span className="menu-textt">Order</span>
//               {openSubmenu === 2 ? (
//                 <BsChevronDown className="submenu-icon" />
//               ) : (
//                 <BsChevronRight className="submenu-icon" />
//               )}
//             </Link>
//             {openSubmenu === 2 && (
//               <ul className="submenu">
//                 <li>
//                   <Link to="/orders" onClick={handleLinkClick}>
//                     ListView
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/">
//               <BsPeopleFill className="icon" /> Add New Product
//             </Link>
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/" onClick={(e) => toggleSubmenu(3, e)}>
//               <BsFillGrid3X3GapFill className="icon" />
//               <span className="menu-textt">Categories</span>
//               {openSubmenu === 3 ? (
//                 <BsChevronDown className="submenu-icon" />
//               ) : (
//                 <BsChevronRight className="submenu-icon" />
//               )}
//             </Link>
//             {openSubmenu === 3 && (
//               <ul className="submenu">
//                 <li>
//                   <Link to="/" onClick={handleLinkClick}>
//                     All Categories
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" onClick={handleLinkClick}>
//                     Add New Category
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/">
//               <BsPeopleFill className="icon" /> Customers
//             </Link>
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/">
//               <BsListCheck className="icon" /> Inventory
//             </Link>
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/">
//               <BsMenuButtonWideFill className="icon" /> Reports
//             </Link>
//           </li>

//           <li className="sidebar-list-item">
//             <Link to="/setting">
//               <BsFillGearFill className="icon" /> Setting
//             </Link>
//           </li>
//         </ul>
//       </aside>
//      </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .sidebar-list-item {
//     position: relative;
//   }

//   .submenu {
//     list-style: none;
//     padding-left: 20px;
//     margin-top: 10px;
//   }

//   .submenu li {
//     padding: 5px 0;
//   }

//   .submenu a {
//     /* color: #fff; */
//     color: #9e9ea4;
//     text-decoration: none;
//     font-size: 14px;
//     transition: 0.4 all ease-in-out;
//   }
//   .submenu a:hover {
//     color: #fff;
//   }

//   .submenu-icon {
//     float: right;
//     margin-top: 4px;
//     margin-left: 20px;
//   }

//   .menu-textt {
//     margin-top: 40px !important;
//   }
// `;

// export default Sidebar;



import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillGearFill,
  BsChevronDown,
  BsChevronRight,
} from "react-icons/bs";
import { PiStorefront } from "react-icons/pi";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index, event) => {
    event.preventDefault(); // Prevents redirection to the dashboard
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const handleLinkClick = () => {
    // Close the sidebar only for medium and small devices (<= 768px)
    if (window.innerWidth <= 768) {
      OpenSidebar();
    }
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          {/* <BsCart3 className="icon_header" /> SHOP */}
          <span className="">Menu</span>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/" onClick={(e) => toggleSubmenu(1, e)}>
            <BsFillArchiveFill className="icon" />
            <span className="menu-textt">Products</span>
            {openSubmenu === 1 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </Link>
          {openSubmenu === 1 && (
            <ul className="submenu">
              <li>
                <Link to="/categoryprod" onClick={handleLinkClick}>
                  Category
                </Link>
              </li>
              <li>
                <Link to="/unit" onClick={handleLinkClick}>
                  Unit
                </Link>
              </li>
              <li>
                <Link to="/productlists" onClick={handleLinkClick}>
                  Product List
                </Link>
              </li>
              <li>
                <Link to="/productadd" onClick={handleLinkClick}>
                  Create Product
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <Link to="/" onClick={(e) => toggleSubmenu(2, e)}>
            <BsFillArchiveFill className="icon" />
            <span className="menu-textt">Order</span>
            {openSubmenu === 2 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </Link>
          {openSubmenu === 2 && (
            <ul className="submenu">
              <li>
                <Link to="/orders" onClick={handleLinkClick}>
                  ListView
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <Link to="/">
            <BsPeopleFill className="icon" /> Add New Product
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/" onClick={(e) => toggleSubmenu(3, e)}>
            <BsCart3 className="icon" />
            <span className="menu-textt">Purchase</span>
            {openSubmenu === 3 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </Link>
          {openSubmenu === 3 && (
            <ul className="submenu">
              <li>
                <Link to="/purchaseview" onClick={handleLinkClick}>
                  List View
                </Link>
              </li>
              <li>
                <Link to="/purchase-add" onClick={handleLinkClick}>
                  Create Purchase
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <Link to="/" onClick={(e) => toggleSubmenu(4, e)}>
            <BsFillGrid3X3GapFill className="icon" />
            <span className="menu-textt">Categories</span>
            {openSubmenu === 4 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </Link>
          {openSubmenu === 4 && (
            <ul className="submenu">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  Add New Category
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <Link to="/" onClick={(e) => toggleSubmenu(5, e)}>
            <PiStorefront className="icon" />
            <span className="menu-textt">Blog</span>
            {openSubmenu === 5 ? (
              <BsChevronDown className="submenu-icon" />
            ) : (
              <BsChevronRight className="submenu-icon" />
            )}
          </Link>
          {openSubmenu === 5 && (
            <ul className="submenu">
              <li>
                <Link to="/blogs" onClick={handleLinkClick}>
                  List View
                </Link>
              </li>
              <li>
                <Link to="/blog-add" onClick={handleLinkClick}>
                  Create Blog
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="sidebar-list-item">
          <Link to="/setting">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;