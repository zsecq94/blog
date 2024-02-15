import * as marked from "marked";
import React, { useState } from "react";
import { axiosInstance } from "@/service/config.js";

import AdminModal from "@/components/AdminModal";

import "./index.scss";

const Admin = () => {
  const [html, setHtml] = useState("");
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [file, setFile] = useState();
  const [thumb, setThumb] = useState();
  const [thumbFile, setThumbFile] = useState();
  const [title, setTitle] = useState("");

  const saveData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("md", file);
      formData.append("thumb", thumbFile);
      const res = await axiosInstance.post("/api/v1/board/save", formData);
      console.log(res);
    } catch (error) {
      console.log("error in saveData", error);
    }
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onThumbChange = (e) => {
    const file = e.target.files[0];
    setThumbFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumb(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onMdChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const markdown = e.target.result;
        const html = marked.parse(markdown);
        setHtml(html);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="marked">
      <img src={thumb} alt="" />
      <div className="inp-box">
        <input
          type="file"
          onChange={onThumbChange}
          accept="image/png, image/jpeg"
        />
        <input type="text" onChange={onTitleChange} />
        <input type="file" onChange={onMdChange} accept=".md" />

        <div className="btn-box">
          <button className="save-btn" onClick={saveData}>
            등록하기
          </button>
        </div>
      </div>

      <div className="md" dangerouslySetInnerHTML={{ __html: html }} />

      {adminModalOpen && (
        <div className="admin-modal">
          <AdminModal setAdminModalOpen={setAdminModalOpen} />
        </div>
      )}
    </div>
  );
};

export default Admin;
