import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Main from "@/pages/Main";
import Admin from "@/pages/Admin";
import Port from "@/pages/Port";
import Tech from "@/pages/Tech";
import Algo from "@/pages/Algo";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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

      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        // theme="light"
        // limit={1} // 알람 개수 제한
      />
    </BrowserRouter>
  );
};

export default App;
