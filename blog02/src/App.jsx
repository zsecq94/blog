import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Main from "@/pages/Main";
import Tech from "@/pages/Tech";
import Debug from "@/pages/Debug";
import Component from "@/pages/Component";
import Algo from "@/pages/Algo";
import Port from "@/pages/Port";
import Admin from "@/pages/Admin";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="app">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/debug" element={<Debug />}></Route>
          <Route path="/algo" element={<Algo />}></Route>
          <Route path="/component" element={<Component />}></Route>
          <Route path="/algo" element={<Algo />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/search/:inpVal" element={<Search />}></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
