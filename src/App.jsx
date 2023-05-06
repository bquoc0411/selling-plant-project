import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./features/home/HomePage"));
const Product = loadable(() => import("./features/product/Product"));
const Blog = loadable(() => import("./features/blog/Blog"));
const NoPage = loadable(() => import("./components/errorpages/NoPage"));
const LogIn = loadable(() => import("./features/login/LogIn"));
import Loading from "./components/loading/Loading";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn fallback={<Loading/>} />} />
          <Route path="/homepage" element={<HomePage fallback={<Loading/>} />} />
          <Route path="/product" element={<Product fallback={<Loading/>} />} />
          <Route path="/blog" element={<Blog fallback={<Loading/>} />} />
          <Route path="*" element={<NoPage fallback={<Loading/>} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
