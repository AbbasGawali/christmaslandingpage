import React from "react";
import gift1 from "../assets/imgs/gift1.png";
const Content1 = () => {
  return (
    <div className="content paddingSide">
      <div className="details">
        <h1>Send A GIFT FOR CHRISTMAS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          exercitationem dolore temporibus iusto dicta impedit omnis velit nam
          sit, labore eum!
        </p>
        <button className="cbtn">Get Started</button>
      </div>
      <div className="cimg">
        <img className="gift" src={gift1} alt="" />
      </div>
    </div>
  );
};

export default Content1;
