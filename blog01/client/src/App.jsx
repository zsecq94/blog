import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Detail from "@/components/Detail";

import Main from "@/pages/Main";
import Algo from "@/pages/Algo";
import Tech from "@/pages/Tech";
import Portfolio from "@/pages/Portfolio";
import Layout from "@/pages/Layout";
import Admin from "@/pages/Admin";
import Search from "@/pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="con">
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/algo" element={<Algo />}></Route>
            <Route path="/tech" element={<Tech />}></Route>
            <Route path="/port" element={<Portfolio />}></Route>
            <Route path="/layout" element={<Layout />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
