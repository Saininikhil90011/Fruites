import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import { Helmet } from "react-helmet-async";
function Cart() {
  return (
    <>
       <Helmet>
            <title>Cart</title> {/* Set your desired title here */}
          </Helmet>
      {/* navbar */}
      {/* <Navbar /> */}
      {/* single page header */}
      <SinglePageHeader one={{title:"Cart"}}/>
      {/* <BannerSection /> */}
      {/* cartpage */}
      <CartPage />
      {/* footer  */}
      <Footer />
    </>
  );
}

export default Cart;
