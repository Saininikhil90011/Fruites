import React from "react";
import Navbar from "../Components/Navbar";
import CartPage from "../Components/CartPage";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import ContactPage from "../Components/ContactPage";
import { Helmet } from "react-helmet-async";
function Contact() {
  return (
    <>
       <Helmet>
            <title>Contact</title> {/* Set your desired title here */}
          </Helmet>
      {/* navbar */}
      {/* <Navbar /> */}
      <SinglePageHeader one={{title:"Contact"}}/>
      <ContactPage/>
      {/* <h1>Contact</h1> */}
      <Footer />
    </>
  );
}

export default Contact;
