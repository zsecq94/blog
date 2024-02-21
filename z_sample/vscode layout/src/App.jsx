import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "@/layout/Footer/Index";
import Header from "@/layout/Header/Index";
import Sidebar from "@/layout/Sidebar/Index";

import Main from "@/pages/Main/Index";
import Algo from "@/pages/Algo/Index";
import Port from "@/pages/Port/Index";
import Component from "@/pages/Component/Index";
import Admin from "@/pages/Admin/Index";
import Develop from "@/pages/Develop/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="con">
        <Sidebar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/algo" element={<Algo />}></Route>
            <Route path="/dev" element={<Develop />}></Route>
            <Route path="/port" element={<Port />}></Route>
            <Route path="/component" element={<Component />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
