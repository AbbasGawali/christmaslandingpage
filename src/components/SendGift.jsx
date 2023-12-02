import React from "react";
import sendGift from "../assets/imgs/sendGift.png";
const SendGift = () => {
  return (
    <div className="paddingSide">
      <div className="giftContainer ">
        <div className="gcontent allFlex ">
          <div className="gmainContent">
            <h1 className="heading ">Send Gift Now</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              architecto in suscipit nisi libero. Fugiat accusantium quos, quis
              repellat error repudiandae, laboriosam commodi minima unde earum
              quia maiores, aliquam eius!
            </p>
            <div className="ghouse">
              <input type="text" placeholder="House Address" />
              <button>Send</button>
            </div>
          </div>
        </div>
        <div className="gimg allFlex">
          <img src={sendGift} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SendGift;
