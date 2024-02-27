import Card from "../components/Card";

const Main = () => {
  const datas = [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      imgSrc: "/src/assets/images/test/card_1.png",
      date: "2024.02.27 13:27:09",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      imgSrc: "/src/assets/images/test/card_2.png",
      date: "2024.02.27 13:27:09",
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
      imgSrc: "/src/assets/images/test/card_3.png",
      date: "2024.02.27 13:27:09",
    },
    {
      id: 4,
      title: "제목4",
      content: "내용4",
      imgSrc: "/src/assets/images/test/card_1.png",
      date: "2024.02.27 13:27:09",
    },
  ];

  return (
    <div className="main-con">
      <div className="newly-con">
        <p>
          <strong>최근 등록 순</strong>
        </p>

        <div className="card-con">
          {datas.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
