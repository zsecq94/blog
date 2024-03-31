import { useState } from "react";
import Input from "@/components/Input.jsx";
import InputFile from "@/components/InputFile.jsx";
import Select from "@/components/Select.jsx";

import list from "@/assets/json/list.json";

const Admin = () => {
  const [saveData, setSaveData] = useState({
    title: null,
    thumb: null,
    md: null,
    chips: [],
    category: "tech",
  });

  const onChangeChips = (e) => {
    const val = e.target.value;
    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      chips: [...prevSaveData.chips, val],
    }));
  };

  const onChange = (e, name) => {
    const val = e.target.value;

    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      [name]: val,
    }));
  };

  const onChangeFile = (e, name) => {
    const file = e.target.files[0];

    console.log(name);
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
      <section className="preview-con">
        {saveData.chips.map((V, idx) => (
          <span key={idx}>{V}</span>
        ))}
      </section>

      <section className="regist-con">
        <Select name="category" list={list.selectList} onChange={onChange} />
        <InputFile name="thumb" label="THUMB Upload" onChange={onChangeFile} />
        <Input name="title" placeholder="제목 입력" onChange={onChange} />
        <Select
          list={list.chipsList[saveData.category]}
          onChange={onChangeChips}
        />
        <InputFile name="md" label="MD Upload" onChange={onChangeFile} />
        <button onClick={check}>SUBMIT</button>
      </section>
    </div>
  );
};

export default Admin;
