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
    ["tech", "algorithm", "portfolio"],
    ["react", "vue", "javascript"],
    ["시뮬레이션", "라면", "치킨", "맥주"],
  ];

  const onChangeCategory = (e) => {
    const val = e.target.value;
    setSaveData((prevSaveData) => ({
      ...prevSaveData,
      category: val,
    }));

    console.log(val);
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
      <section className="preview-con">
        <h2>hi</h2>
      </section>

      <section className="regist-con">
        <select onChange={onChangeCategory}>
          {list[0].map((V, index) => (
            <option value={V} key={index}>
              {V}
            </option>
          ))}
        </select>

        <input type="text" onChange={onChangeTitle} />

        <button htmlFor="file">
          <label htmlFor="file">File Upload</label>
          <input type="file" id="file" onChange={onChangeInputFile} />
        </button>
      </section>
    </div>
  );
};

export default Admin;
