import { axiosInstance } from "@/service/config";
import { useState } from "react";

import { toast } from "react-toastify";
import AuthModal from "../components/AuthModal";
import Chips from "../components/Chips";
import SelectBox from "../components/SelectBox";

import Input from "@mui/joy/Input";

const Admin = () => {
  const isWeb = window.innerWidth > 768;
  const [isLogin, setIsLogin] = useState(true);

  const [userInfo, setUserInfo] = useState({
    username: null,
    password: null,
  });

  const [saveData, setSaveData] = useState({
    title: null,
    category: null,
    chips: [],
  });

  const onChangeId = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const onChangePw = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (userInfo.username !== null && userInfo.password !== null) {
      const res = await axiosInstance.post("/api/user/login", userInfo);

      if (res.data.state) {
        setIsLogin(true);
      } else {
        toast.error(res.data.msg);
      }
    } else {
      toast.error("모두 입력해 주세요!");
    }
  };

  const handleFile = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <article className={isWeb ? "admin-con" : "admin-con none"}>
      {isLogin ? (
        <section className="save-con">
          <div className="regist-con">
            <Input color="neutral" variant="outlined" placeholder="제목" />
            <SelectBox />
            <Chips />
            <div className="inp">
              <label htmlFor="file">MD 업로드</label>
              <input onChange={handleFile} type="file" id="file" />
            </div>
          </div>

          <h2>hi</h2>
        </section>
      ) : (
        <AuthModal
          onChangeId={onChangeId}
          onChangePw={onChangePw}
          onSubmit={onSubmit}
        />
      )}
    </article>
  );
};

export default Admin;
