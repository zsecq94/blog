import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";

import Main from "@/pages/Main";
import Tech from "@/pages/Tech";
import Algo from "@/pages/Algo";
import Portfolio from "@/pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/algo" element={<Algo />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/port" element={<Portfolio />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
