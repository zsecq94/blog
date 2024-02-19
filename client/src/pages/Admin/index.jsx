import * as marked from "marked";
import React, { useState } from "react";
import { axiosInstance } from "@/service/config.js";

import AdminModal from "@/components/AdminModal";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import "./index.scss";

const Admin = () => {
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const [html, setHtml] = useState("");
  const [thumb, setThumb] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(undefined);
  const [thumbFile, setThumbFile] = useState(undefined);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const saveData = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("md", file);
      formData.append("thumb", thumbFile);

      console.log(title, category, file, thumbFile);
      const res = await axiosInstance.post("/api/v1/board/save", formData);
      if (res.data.state) {
        alert(res.data.message);
        setHtml("");
        setThumb("");
        setTitle("");
        setCategory("");
        setFile();
        setThumbFile();
      } else {
        alert(res.data.message);
      }
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
        <input type="file" value={thumbFile} onChange={onThumbChange} accept="image/png, image/jpeg" />
        <input type="text" value={title} onChange={onTitleChange} />
        <input type="file" value={file} onChange={onMdChange} accept=".md" />

        <FormControl>
          <RadioGroup value={category} row name="row-radio-buttons-group" onChange={handleChange}>
            <FormControlLabel value="algo" control={<Radio />} label="algo" />
            <FormControlLabel value="layout" control={<Radio />} label="layout" />
            <FormControlLabel value="tech" control={<Radio />} label="tech" />
          </RadioGroup>
        </FormControl>

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
