import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Loader from "./components/Loader";
import TopUp from "./components/TopUp";
import Top from "./components/Top";
import ErrorPages from "./ErrorPages";

import Home from "./pages/Home/Home";
import CategoryProd from "./pages/Products/CategoryProd";
import Brand from "./pages/Products/Brand";
import Unit from "./pages/Products/Unit";
import ProductLists from "./pages/Products/ProductLists";
import ProductsUpdate from "./pages/Products/ProductsUpdate";
import ProductsAdd from "./pages/Products/ProductsAdd";
import ProductPriceStock from "./pages/Products/ProductPriceStock";

import OrderList from "./pages/Order/OrderList";
import OrderAdd from "./pages/Order/OrderAdd";

import PurchaseAdd from "./pages/Purchase/PurchaseAdd";
import PurchaseList from "./pages/Purchase/PurchaseList";
import PurchaseView from "./pages/Purchase/PurchaseView";

import BlogListView from "./pages/Blog/BlogListView";
import CreateBlogs from "./pages/Blog/CreateBlogs";
import BlogUpdate from "./pages/Blog/BlogUpdate";

import Supplier from "./pages/Setting/Supplier";
import Customers from "./pages/Setting/Customers";
import Courier from "./pages/Setting/Courier";
import Delivery from "./pages/Setting/Delivery";
import Clients from "./pages/Setting/Clients";
import ManageBalance from "./pages/Setting/ManageBalance";
import GeneralSetting from "./pages/Setting/GeneralSetting";
import SignIn from "./pages/SignIn/SignIn";
import { useApiContext } from "./context/ApiContext";


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { c_user } = useApiContext();
  const aT = localStorage.getItem("atoozSuperuserandstaffAccessToken");
  const rT = localStorage.getItem("atoozSuperuserandstaffRefreshToken");

  const dhandleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/custom_user/logout/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aT}`,
          },
          body: JSON.stringify({
            refresh_token: rT,
          }),
        }
      );
      const data = await response.json();
      console.log("Logout response:", data);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid-container">
      {isLoading ? (<Loader />) : (
        <BrowserRouter>
          <Top />
          <Header OpenSidebar={OpenSidebar} c_user={c_user} dhandleLogout={dhandleLogout} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product-category" element={<CategoryProd />}></Route>
            <Route path="/brand" element={<Brand />}></Route>
            <Route path="/unit" element={<Unit />}></Route>
            <Route path="/products" element={<ProductLists />}></Route>
            <Route
              path="/product-update/:productId"
              element={<ProductsUpdate />}
            ></Route>
            <Route path="/product-add" element={<ProductsAdd />}></Route>
            <Route
              path="/product-price-stock/:productId"
              element={<ProductPriceStock />}
            ></Route>

            <Route path="/orders" element={<OrderList />}></Route>
            <Route path="/order-add" element={<OrderAdd />}></Route>
            <Route path="/login" element={<SignIn />}></Route>

            <Route path="/purchase-add" element={<PurchaseAdd />}></Route>
            <Route path="/purchase" element={<PurchaseList />}></Route>
            <Route path="/purchase-view/:id" element={<PurchaseView />}></Route>

            <Route path="/blogs" element={<BlogListView />}></Route>
            <Route path="/blog-add" element={<CreateBlogs />}></Route>
            <Route path="/blog-update/:blogId" element={<BlogUpdate />}></Route>

            <Route path="/supplier" element={<Supplier />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/courier" element={<Courier />}></Route>
            <Route path="/delivery-type" element={<Delivery />}></Route>
            <Route path="/clients" element={<Clients />}></Route>
            <Route path="/manage-balance" element={<ManageBalance />}></Route>
            <Route path="/general-setting" element={<GeneralSetting />}></Route>
            <Route path="*" element={<ErrorPages />}></Route>
          </Routes>
          {/* Adding more content to ensure the page is scrollable */}
          {/* <div style={{ height: "1500px" }}>Extra Content for Scroll</div> */}
          <TopUp />
        </BrowserRouter>
      )}

    </div>
  );
}

export default App;
