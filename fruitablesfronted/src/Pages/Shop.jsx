import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import FruitShopFilter from "../Components/FruitShopFilter";
import { Helmet } from 'react-helmet-async';

function Shop({props}) {
  return (
    <>
      <Helmet>
        <title>Shop - My App</title> {/* Set your desired title here */}
      </Helmet>
      {/* Navbar */}
      
      <SinglePageHeader one={{ title: "Shop" }} />
      <FruitShopFilter  props={props}/>
      {/* <h1>Shop</h1> */}
      <Footer />
    </>
  );
}

export default Shop;
