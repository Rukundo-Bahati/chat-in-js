import { useState } from "react";
import LeftItem from "../LeftItem";
import img from "../../assets/prize.jpg";
import Button from "../Button";
import Friend from "../Friend";
import user from "../../assets/shimwa.jpg";
import { Link } from "react-router-dom";

const Left = ({ className }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(!open);
  };

  const leftItems = [
    { id: 1, icon: <i className="uil uil-home"></i>, name: "Home" },
    { id: 2, icon: <i className="uil uil-compass"></i>, name: "Explore" },
    {
      id: 3,
      icon: (
        <i className="uil uil-bell relative">
          <small className="bg-red-500 text-white rounded-md text-base absolute top-0 right-3 mt-1 mr-1">
            9+
          </small>
        </i>
      ),
      name: "Notifications",
      onClick: handleOpen,
    },
    {
      id: 4,
      icon: (
        <i className="uil uil-envelope-alt relative">
          <small className="bg-red-500 text-white rounded-md text-base absolute top-0 right-3 mt-1 mr-1 p-1">
            6
          </small>
        </i>
      ),
      name: "Messages",
    },
    { id: 5, icon: <i className="uil uil-bookmark"></i>, name: "Bookmarks" },
    {
      id: 6,
      icon: <Link to="/theme"><i className="uil uil-palette"></i></Link>,
      name: "Theme"
    },
    
    { id: 7, icon: <i className="uil uil-setting"></i>, name: "Settings" },
  ];

  return (
    <div
      className={`bg-${"light"} text-10xl bg-white rounded-lg p-card shadow-lg  shadow-slate-400 text-lg font-semibold`}
    >
      <div className={className}>
        <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-300">
          <div className="w-100">
            <img
              src={img}
              alt="profile-picture"
              style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%" }}
            />
          </div>

          <div className="" style={{ fontSize: "0.875rem" }}>
            <h4 className="text-lg">Eddy Ayi</h4>
            <p className="text-muted">@Ayi</p>
          </div>
        </div>

        <div className="sidebar relative">
          {leftItems.map((item) => (
            <LeftItem key={item.id} onClick={item.onClick}>
              {item.icon}
              <p>{item.name}</p>
            </LeftItem>
          ))}
          {open && (
            <div className="popups absolute top-full left-0 z-10 mx-5 mb-9">
              <Friend src={user} name="John Doe" notification="New message!" />
              {/* More Friend components */}
            </div>
          )}
        </div>
        <div className="p-3 w-60">
          <Button bg="bg-blue-600" text="Create" />
        </div>
      </div>
    </div>
  );
};

export default Left;
