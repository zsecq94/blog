import React from "react";
import Header from "./layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Algorithm from "@/pages/Algorithm";
import Main from "@/pages/Main";
import About from "@/pages/About";
import Tech from "@/pages/Tech";
import Portfolio from "@/pages/Portfolio";
import Detail from "@/components/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/algo" element={<Algorithm />}></Route>
            <Route path="/tech" element={<Tech />}></Route>
            <Route path="/port" element={<Portfolio />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
