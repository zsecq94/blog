import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="con">
      <div className="header"></div>
      <div className="menu"></div>
    </div>
  );
};

export default Header;
