import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { Link } from "react-router-dom";

const ColCard = ({ data }) => {
  const categoryData = ["Javascript", "React", "Scss"];

  const colorMap = {
    Javascript: "#ffae00",
    React: "#1e90ff",
    Scss: "#fd169d",
  };

  return (
    <Link to={`/detail/${data.id}`} className="col-card">
      <div className="img-box">
        <img src={data.imgSrc} alt="" />
        <div className="gradient-overlay"></div>
        <div className="category-box">
          {categoryData.map((category, index) => (
            <span key={index} style={{ backgroundColor: colorMap[category] }}>
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="text-box">
        <div className="top">
          <p className="title">
            <strong>{data.title}</strong>
          </p>
          <p className="content">{data.content}</p>
        </div>

        <div className="bot">
          <p>{data.date}</p>
          <div className="box">
            <div className="heart">
              <FcLike />
              <strong>
                <span>{data.view}</span>
              </strong>
            </div>

            <div className="message">
              <FcComments />
              <strong>
                <span>{data.comment}</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ColCard;
