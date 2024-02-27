const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="img-box">
        <img src={data.imgSrc} alt="" />
      </div>
      <div className="text-box">
        <p>
          <strong>{data.title}</strong>
        </p>
        <p className="content">{data.content}</p>
        <span>{data.date}</span>
      </div>
    </div>
  );
};

export default Card;
