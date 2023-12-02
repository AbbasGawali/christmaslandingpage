import React from "react";
import bells from "../assets/imgs/bell.png";
import candle from "../assets/imgs/candle.png";
import tree from "../assets/imgs/tree.png";
const Decoration = () => {
  return (
    <div className="decoration paddingSide">
      <div className="text-center">
        <h1 className="heading">
          Give Christmas Decorations <br /> For Your Home
        </h1>
      </div>
      <div className="items">
        <div className="item">
          <div className="img"></div>
          <img src={bells} alt="" />
          <h2>Christmas Bells</h2>
          <button>Go Shopping</button>
        </div>
        <div className="item">
          <div className="img"></div>
          <img src={candle} alt="" />
          <h2>Christmas Bells</h2>
          <button>Go Shopping</button>
        </div>
        <div className="item">
          <div className="img"></div>
          <img src={tree} alt="" />
          <h2>Christmas Bells</h2>
          <button>Go Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Decoration;
