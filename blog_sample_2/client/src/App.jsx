import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Main from "@/pages/Main";
import Admin from "@/pages/Admin";
import Port from "@/pages/Port";
import Tech from "@/pages/Tech";
import Algo from "@/pages/Algo";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/algo" element={<Algo />}></Route>
          <Route path="/port" element={<Port />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
