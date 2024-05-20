import React from "react";

const RightItem = ({ img, name, msg }) => {
  return (
    <div>
      <div className="message flex items-center gap-4 mb-4">
        <div className="profile-picture relative overflow-visible">
          <img
            src={img}
            alt="profile-picture"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="active"></div>
        </div>
        <div className="message-body">
          <h5 className="font-semibold">{name}</h5>
          <p className="text-muted">{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default RightItem;
