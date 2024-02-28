import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

const ColCard = ({ data }) => {
  return (
    <div className="col-card">
      <div className="img-box">
        <img src={data.imgSrc} alt="" />
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
              <FcComments color="yellow" />
              <strong>
                <span>{data.comment}</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColCard;
