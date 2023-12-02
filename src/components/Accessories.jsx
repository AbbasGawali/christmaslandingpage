import React from "react";
import accessory1 from "../assets/imgs/accessory1.png";
import accessory2 from "../assets/imgs/accessory2.png";
import accessory3 from "../assets/imgs/accessory3.png";
import accessory4 from "../assets/imgs/accessory4.png";
import accessory5 from "../assets/imgs/accessory5.png";
import { FaRegHeart } from "react-icons/fa";
const items = [
  {
    id: 1,
    title: "Snow Globe",
    description: "Accessory",
    price: "9.45",
    img: accessory1,
  },
  {
    id: 2,
    title: "Candy",
    description: "Accessory",
    price: "2.35",
    img: accessory2,
  },
  {
    id: 3,
    title: "Angel",
    description: "Accessory",
    price: "12.5",
    img: accessory3,
  },
  {
    id: 4,
    title: "Sphere",
    description: "Accessory",
    price: "4.2",
    img: accessory4,
  },
  {
    id: 5,
    title: "Surprise Gift",
    description: "Accessory",
    price: "8.78",
    img: accessory5,
  },
];
const Accessories = () => {
  return (
    <div>
      {" "}
      <div className="decoration paddingSide">
        <div className="text-center">
          <h1 className="heading">
            New christmas <br /> Accessories
          </h1>
        </div>
        <div className="items accessoryWrap">
          {items.map((item) => (
            <div className="item accessoryItem">
              <img src={item.img} alt="" />
              <div className="accessoryData">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h1>${item.price}</h1>
                <button>
                  <FaRegHeart size="20px" fontWeight={"bold"} color="white" />
                </button>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Accessories;
