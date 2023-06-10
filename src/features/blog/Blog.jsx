import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Overview from "./overview/Overview";
import TopBlog from "./top-2-blog/TopBlog";
import Content from "./content/Content";
import Footer from "../../components/footer/Footer"
export default function Blog() {
  return (
    <>
      <Navbar />
      <Overview />
      <TopBlog />
      <Content />
      <Footer />
    </>
  );
}
