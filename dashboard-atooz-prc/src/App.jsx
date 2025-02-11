import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TopUp from "./components/TopUp";
import Top from "./components/Top";

import Home from "./pages/Home/Home";
import CategoryProd from "./pages/Products/CategoryProd";
import Brand from "./pages/Products/Brand";
import Unit from "./pages/Products/Unit";
import ProductLists from "./pages/Products/ProductLists";
import ProductsUpdate from "./pages/Products/ProductsUpdate";
import ProductsAdd from "./pages/Products/ProductsAdd";

import OrderList from "./pages/Order/OrderList";
import OrderAdd from "./pages/Order/OrderAdd";

import PurchaseView from "./pages/Purchase/PurchaseView";
import PurchaseAdd from "./pages/Purchase/PurchaseAdd";

import BlogListView from "./pages/Blog/BlogListView";
import CreateBlogs from "./pages/Blog/CreateBlogs";

import Supplier from "./pages/Setting/Supplier";
import Customers from "./pages/Setting/Customers";
import Courier from "./pages/Setting/Courier";
import ManageBalance from "./pages/Setting/ManageBalance";
import Delivery from "./pages/Setting/Delivery";
import ErrorPages from "./ErrorPages";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <BrowserRouter>
        <Top />
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-category" element={<CategoryProd />}></Route>
          <Route path="/brand" element={<Brand />}></Route>
          <Route path="/unit" element={<Unit />}></Route>
          <Route path="/productlists" element={<ProductLists />}></Route>
          <Route path="/product-update/:productId" element={<ProductsUpdate />}></Route>
          <Route path="/productadd" element={<ProductsAdd />}></Route>

          <Route path="/orders" element={<OrderList />}></Route>
          <Route path="/orderadd" element={<OrderAdd />}></Route>

          <Route path="/purchaseview" element={<PurchaseView />}></Route>
          <Route path="/purchase-add" element={<PurchaseAdd />}></Route>

          <Route path="/blogs" element={<BlogListView />}></Route>
          <Route path="/blog-add" element={<CreateBlogs />}></Route>

          <Route path="/supplier" element={<Supplier />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/courier" element={<Courier />}></Route>
          <Route path="/manage-balance" element={<ManageBalance />}></Route>
          <Route path="/delivery-type" element={<Delivery />}></Route>
          <Route path="*" element={<ErrorPages />}></Route>
        </Routes>
        {/* Adding more content to ensure the page is scrollable */}
        {/* <div style={{ height: "1500px" }}>Extra Content for Scroll</div> */}
        <TopUp />
      </BrowserRouter>
    </div>
  );
}

export default App;
