import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
const HomePage = loadable(() => import("./features/home/HomePage"));
const Product = loadable(() => import("./features/product/Product"));
const Blog = loadable(() => import("./features/blog/Blog"));

const LogIn = loadable(() => import("./features/login/LogIn"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage fallback={<>Loading...</>} />} />
          <Route
            path="/product"
            element={<Product fallback={<>Loading...</>} />}
          />
          <Route path="/blog" element={<Blog fallback={<>Loading...</>} />} />
          <Route path="/login" element={<LogIn fallback={<>Loading...</>} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
