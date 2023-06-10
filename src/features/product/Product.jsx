import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Categories from "./categories/Categories";
import Items from "./items/Items";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
export default function Product() {
  return (
    <>
      <Navbar />
      <Categories />
      <Outlet />
      <Footer />
    </>
  );
}
