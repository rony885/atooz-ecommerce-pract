import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import GiftSpecial from "./GiftSpecial/GiftSpecial";
import NewArrivalProduct from "./NewArrivalProduct/NewArrivalProduct";
import TopSelling from "./TopSelling/TopSelling";
import Clients from "./Clients/Clients";
import Blogs from "./Blogs/Blogs";
import BannerTwo from "./BannerTwo/BannerTwo";
import FeatureProducts from "./FeatureProducts/FeatureProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <GiftSpecial></GiftSpecial>
      <NewArrivalProduct></NewArrivalProduct>
      <TopSelling></TopSelling>
      <FeatureProducts></FeatureProducts>
      <Clients></Clients>
      <Blogs></Blogs>
      <BannerTwo></BannerTwo>
    </div>
  );
};

export default Home;
