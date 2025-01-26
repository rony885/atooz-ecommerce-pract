import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./pages/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Error from "./components/Error/Error.jsx";
import SingleProductDetails from "./pages/ProductDetails/SingleProductDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import Login from "./pages/Login/Login.jsx";
import Products from "./pages/Products/Products.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Top from "./components/Top.js";
import BlogDetails from "./pages/BlogDetails/BlogDetails.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Top />
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/product-details/:prodId"
            element={<SingleProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
