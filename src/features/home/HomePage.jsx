import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";
import BestSeller from "../../components/bestseller/BestSeller";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Testimonial from "./testimonial/Testimonial";
import HomeBlog from "./homeblog/HomeBlog";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <BestSeller />
      <Testimonial />
      <HomeBlog />
      <Footer />
    </>
  );
}
