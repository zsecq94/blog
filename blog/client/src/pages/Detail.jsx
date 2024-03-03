import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <div className="circle"></div>
      <h2>detail</h2>
    </div>
  );
};

export default Detail;
