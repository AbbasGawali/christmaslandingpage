import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const setNav = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className="navbar">
      <div className="logo">Christmas Gift</div>
      <div onClick={setNav} className="toggleNavigation">
        {isActive ? <RxCross2 /> : <RxHamburgerMenu />}
 
      </div>
      <div className={isActive ? "navItems toggleNav" : "navItems "}>
        <li>Home</li>
        <li>Share</li>
        <li>Decorations</li>
        <li>Accessory</li>
        <li>rb</li>
      </div>
    </div>
  );
};

export default Header;
