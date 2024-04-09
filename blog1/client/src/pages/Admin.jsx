import { useState } from "react";

import Input from "@/components/Input.jsx";
import InputFile from "@/components/InputFile.jsx";
import Select from "@/components/Select.jsx";
import Button from "@/components/Button.jsx";

import list from "@/assets/json/list.json";

import ReactMarkdown from "react-markdown";

const Admin = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [markdown, setMarkdown] = useState("");

  const [saveData, setSaveData] = useState({
    title: null,
    thumb: null,
    md: null,
    sub: null,
    category: "tech",
  });

  const onChange = (e, name) => {
    const val = e.target.value;

    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      [name]: val,
    }));
  };

  const onChangeFile = (e, name) => {
    const file = e.target.files[0];

    if (name === "thumb") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMarkdown(e.target.result);
      };
      reader.readAsText(file);
    }

    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      [name]: file,
    }));
  };

  const check = () => {
    console.log(saveData);
  };

  return (
    <div className="admin-con">
      <section className="regist-con">
        <Select name="category" list={list.categoryList} onChange={onChange} />
        <Select
          name="sub"
          list={list.subList[saveData.category]}
          onChange={onChange}
        />
        <InputFile name="thumb" label="THUMB Upload" onChange={onChangeFile} />
        <Input name="title" placeholder="제목 입력" onChange={onChange} />

        <InputFile name="md" label="MD Upload" onChange={onChangeFile} />
        <Button onClick={check} label="SUBMIT" />
      </section>

      <section className="preview-con">
        {previewUrl !== null && <img src={previewUrl} alt="thumb" />}

        <p>{`[${saveData.sub}]${saveData.title}`}</p>

        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </div>
  );
};

export default Admin;
