import ColCard from "../components/ColCard";
import RowCard from "../components/RowCard";

const Main = () => {
  const datas = [
    {
      id: 1,
      title: "[AWS] 📚 EC2 linux 한국 날짜 시간으로 변경하고 장난 똥때리똥때리똥때리똥때리똥때리기",
      content:
        "EC2 Timezone KST 변경하기 Amazon Linux Ec2를 그대로 사용할 경우, 서버 날짜가 UTC로 기본 설정되어 있어서 한국 서버정되어 있어서 한국 서버정되어 있어서 한국 서버를 운용할 경우 서버 날짜를",
      imgSrc: "/src/assets/images/test/card_1.png",
      date: "2024.02.27 13:27:09",
      view: 8123,
      comment: 129,
    },
    {
      id: 2,
      title: "🌐 웹 애니메이션 최적화 requestAnimationFrame 가이드 웹 애니메이션 최적화 requestAnimationFrame 가이드 ",
      content: "내용2",
      imgSrc: "/src/assets/images/test/card_2.png",
      date: "2024.02.27 13:27:09",
      view: 24,
      comment: 11,
    },
    {
      id: 3,
      title: "🌐 html의 data-속성 사용법 완벽 가이드",
      content:
        "EC2 Timezone KST 변경하기 Amazon Linux Ec2를 그대로 사용할 경우, 서버 날짜가 UTC로 기본 설정되어 있어서 한국 서버정되어 있어서 한국 서버정되어 있어서 한국 서버를 운용할 경우 서버 날짜를 EC2 Timezone KST 변경하기 Amazon Linux Ec2를 그대로 사용할 경우, 서버 날짜가 UTC로 기본 설정되어 있어서 한국 서버정되어 있어서 한국 서버정되어 있어서 한국 서버를 운용할 경우 서버 날짜를",
      imgSrc: "/src/assets/images/test/bg1.png",
      date: "2024.02.27 13:27:09",
      view: 9,
      comment: 1,
    },
    {
      id: 4,
      title: "🌐 한눈에 이해하는 이벤트 흐름 제어 (버블링 & 캡처링)",
      content: "내용4",
      imgSrc: "/src/assets/images/test/card_1.png",
      date: "2024.02.27 13:27:09",
      view: 913,
      comment: 42,
    },
    {
      id: 5,
      title: "🌐 드래그 앤 드롭(Drag and Drop) 기능 이해 & 구현하기",
      content: "내용4",
      imgSrc: "/src/assets/images/test/card_3.png",
      date: "2024.02.27 13:27:09",
      view: 1773,
      comment: 1,
    },
  ];

  return (
    <div className="main-con">
      <div className="card-con">
        <p className="title">
          <strong>최근 등록</strong>
        </p>

        <div className="col-card-con">
          {datas.map((data) => (
            <ColCard data={data} key={data.id} />
          ))}
        </div>
      </div>

      <div className="card-con">
        <p className="title">
          <strong>TOP 5</strong>
        </p>
        <div className="row-card-con">
          {datas.map((data) => (
            <RowCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
