import { useEffect, useState } from "react";

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: null,
    pw: null,
  });

  const onChangeId = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      id: e.target.value,
    }));
  };

  const onChangePw = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      pw: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setIsLogin(true);
  };

  return (
    <article>
      {isLogin ? (
        <section>로그인</section>
      ) : (
        <section className="modal">
          <div className="modal-box">
            <form onSubmit={onSubmit}>
              <div className="inp-box">
                <label htmlFor="id">아이디</label>
                <input
                  type="text"
                  id="id"
                  placeholder="ID"
                  onChange={onChangeId}
                  value={userInfo.id}
                />
              </div>

              <div className="inp-box">
                <label htmlFor="pw">비밀번호</label>
                <input
                  type="password"
                  id="pw"
                  placeholder="PW"
                  onChange={onChangePw}
                  value={userInfo.pw}
                />
              </div>
              <button type="submit">로그인</button>
            </form>
          </div>
        </section>
      )}
    </article>
  );
};

export default Admin;
