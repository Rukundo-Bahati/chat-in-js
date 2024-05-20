import React from "react";

const LeftItem = ({ children, onClick }) => {
  return (
    <div className="menu-item flex items-center gap-4 p-2 cursor-pointer" onClick={onClick}>
      {children}
    </div>
  );
};

export default LeftItem;
