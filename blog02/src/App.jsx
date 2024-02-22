import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header/Index";
import Footer from "@/components/Footer/Index";

import Main from "@/pages/Main/Index";
import Tech from "@/pages/Tech/Index";
import Algo from "@/pages/Algo/Index";
import Port from "@/pages/Port/Index";
import Admin from "@/pages/Admin/Index";
import Search from "@/pages/Search/Index";
import Detail from "@/pages/Detail/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="app">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/algo" element={<Algo />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
