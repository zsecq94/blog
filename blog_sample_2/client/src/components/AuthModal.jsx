const AuthModal = ({ onSubmit, onChangeId, onChangePw }) => {
  return (
    <section className="modal">
      <div className="modal-box">
        <form onSubmit={onSubmit}>
          <div className="inp-box">
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" placeholder="ID" onChange={onChangeId} />
          </div>

          <div className="inp-box">
            <label htmlFor="pw">비밀번호</label>
            <input
              type="password"
              id="pw"
              autoComplete="off"
              placeholder="PW"
              onChange={onChangePw}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    </section>
  );
};

export default AuthModal;
