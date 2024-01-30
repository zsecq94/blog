import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";

import Detail from "@/components/Detail";
import Main from "@/pages/Main";
import Portfolio from "@/pages/Portfolio";
import Tech from "@/pages/Tech";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />}></Route>
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
