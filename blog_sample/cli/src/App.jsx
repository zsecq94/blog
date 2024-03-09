import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Main from "@/pages/Main";
import Admin from "@/pages/Admin";
import Portfolio from "@/pages/Portfolio";
import Tech from "@/pages/Tech";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main id="app">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/port" element={<Portfolio />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
