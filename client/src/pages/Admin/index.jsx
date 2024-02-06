import React, { useEffect, useState } from "react";
import * as marked from "marked";

import AdminModal from "../../components/AdminModal";

import "./index.scss";

const Admin = () => {
  const [html, setHtml] = useState("");
  const [adminModalOpen, setAdminModalOpen] = useState(true);
  const saveData = async () => {
    // const res = await axiosInstance.post("/tech/save", {
    //   title: "타이틀 테스트",
    //   content: html,
    // });
    // console.log(res);
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const markdown = event.target.result;
        const html = marked.parse(markdown);
        setHtml(html);
      };
      reader.readAsText(file);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="con">
      {html && <button onClick={saveData}>등록하기</button>}
      <input type="file" onChange={onFileChange} accept=".md" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {adminModalOpen && (
        <div className="admin-modal">
          <AdminModal setAdminModalOpen={setAdminModalOpen} />
        </div>
      )}
    </div>
  );
};

export default Admin;
