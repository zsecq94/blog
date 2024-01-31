import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="con">
      <div className="header">
        <span className="title">테스트</span>
        <span className="menu">메뉴</span>
      </div>
      <div className="nav">
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
        <li>메뉴4</li>
      </div>
    </div>
  );
};

export default Header;
