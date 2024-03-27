import { useState } from "react";

const Admin = () => {
  const [saveData, setSaveData] = useState({
    title: null,
    file: null,
    chips: [],
    category: null,
  });

  const [handleList, setHandleList] = useState(0);
  const list = [
    ["test1", "test2", "test3", "test4"],
    ["react", "vue", "javascript"],
    ["시뮬레이션", "라면", "치킨", "맥주"],
  ];

  const onChangeCategory = (e) => {
    const val = e.target.value;
    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      category: val,
    }));

    setHandleList(val === "tech" ? 0 : val === "algorithm" ? 1 : 2);
  };

  const onChangeTitle = (e) => {
    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      title: e.target.value,
    }));
  };

  const onChangeSelectChips = (e) => {
    console.log(e.target.value);
  };

  const onChangeInputFile = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className="admin-con">
      <article className="preview-con"></article>

      <article className="regist-con">
        <select onChange={onChangeCategory}>
          <option value="tech">TECH</option>
          <option value="algorithm">ALGO</option>
          <option value="portfolio">PORT</option>
        </select>

        <input type="text" onChange={onChangeTitle} />

        <button type="label">
          <p>File Upload</p>
          <input type="file" onChange={onChangeInputFile} />
        </button>
      </article>
    </div>
  );
};

export default Admin;
