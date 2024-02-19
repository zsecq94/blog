import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layout/Header/Index";
import Footer from "./layout/Footer/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          {/* <Route path="/" element={<Main />}></Route>
            <Route path="/algo" element={<Algo />}></Route> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
