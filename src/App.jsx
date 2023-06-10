import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
const HomePage = loadable(() => import("./features/home/HomePage"));
const Product = loadable(() => import("./features/product/Product"));
const Blog = loadable(() => import("./features/blog/Blog"));
const NoPage = loadable(() => import("./components/errorpages/NoPage"));
const UnauthoriedPage = loadable(() =>import("./components/errorpages/UnauthorizedPage"));
const LogIn = loadable(() => import("./features/login/LogIn"));
import Loading from "./components/loading/Loading";
import ScrollToTop from "./hooks/ScrollToTop";
import Items from "./features/product/items/Items";

import all from "./features/product/data/all";
import flowers from "./features/product/data/flowers";
import others from "./features/product/data/others";
import { herbs } from "./features/product/data/herbs";
import { homeplants } from "./features/product/data/homeplants";
import ProductDetail from "./features/product/details/ProductDetail";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={<HomePage fallback={<Loading />} />} />

            <Route path="/login" element={<LogIn fallback={<Loading />} />} />
            <Route path="/product" element={<Product fallback={<Loading />} />}>
              <Route path=":productId" element={<ProductDetail />}/>
              <Route path="all" element={<Items name={"All"} categories={all}/>} />
              <Route path="homeplants" element={<Items name={"Home Plants"} categories={homeplants}/>} />
              <Route path="flowers" element={<Items name={"Flowers"} categories={flowers}/>} />
              <Route path="herbs" element={<Items name={"Herbs"} categories={herbs}/>} />
              <Route path="others" element={<Items name={"Others"} categories={others}/>} />
            </Route>
            <Route path="/blog" element={<Blog fallback={<Loading />} />} />
            <Route path="*" element={<NoPage fallback={<Loading />} />} />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
      
    </>
  );
}

export default App;
