import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header/Index";
import Footer from "@/components/Footer/Index";

import Home from "@/pages/Home/Index";
import Admin from "@/pages/Admin/Index";
import Portfolio from "@/pages/Portfolio/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/port" element={<Portfolio />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
