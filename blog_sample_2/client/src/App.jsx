import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import Main from "@/pages/Main";
import Admin from "@/pages/Admin";
import Port from "@/pages/Port";
import Tech from "@/pages/Tech";
import Algo from "@/pages/Algo";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark");

    return () => {
      document.body.classList.remove("dark");
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/algo" element={<Algo />}></Route>
          <Route path="/port" element={<Port />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
