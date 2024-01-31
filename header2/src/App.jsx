import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";

import Main from "@/pages/Main";
import Tech from "@/pages/Tech";
import Algo from "@/pages/Algo";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />}></Route>
        <Route path="/algo" element={<Algo />}></Route>
        <Route path="/tech" element={<Tech />}></Route>
        <Route path="/port" element={<Portfolio />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
