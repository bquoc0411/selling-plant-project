import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";
import BestSeller from "../../components/bestseller/BestSeller";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <BestSeller />
      <Footer />
    </>
  );
}
