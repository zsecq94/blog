import React, { useState } from "react";
import { axiosInstance } from "@/service/config.js";

const AdminModal = ({ setAdminModalOpen }) => {
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const goHome = () => {
    window.location.assign("/");
  };

  const goLogin = async () => {
    if (loginData) {
      const res = await axiosInstance.post("/admin/login", loginData);
      if (res.data) {
        setAdminModalOpen(false);
      } else {
        window.location.assign("/");
      }
    }
  };

  return (
    <div className="modal">
      <div className="box">
        <p>아이디</p>
        <input
          type="id"
          name="id"
          value={loginData.id}
          onChange={handleChange}
        />
      </div>
      <div className="box">
        <p>비밀번호</p>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
      </div>
      <div className="btn-box">
        <button onClick={goLogin}>로그인</button>
        <button onClick={goHome}>뒤로가기</button>
      </div>
    </div>
  );
};

export default AdminModal;
