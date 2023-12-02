import React from "react";
import gift2 from "../assets/imgs/gift2.png";
const Content2 = () => {
  return (
    <div className="content paddingSide">
      <div className="cimg">
        <img className="gift" src={gift2} alt="" />
      </div>

      <div className="details">
        <h1>Sharing Is The Best Gift You Can Give</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          exercitationem dolore temporibus iusto dicta impedit omnis velit nam
          sit, labore eum!
        </p>
        <button className="cbtn">Send a Gift</button>
      </div>
    </div>
  );
};

export default Content2;
