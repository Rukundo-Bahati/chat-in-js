
const Friend = ({ src, name, notification }) => {
  return (
    <div className="left notifications-popup absolute left-0 w-80 shadow-lg shadow-blue-400 p-5">
      <div>
      <div className="profile-picture">
        <img
          src={src}
          alt="profile-picture"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="notification-body">
        <b>{name}</b>
        <div className="text-muted">{notification}</div>
      </div>
      </div>
      <div>
      <div className="profile-picture">
        <img
          src={src}
          alt="profile-picture"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="notification-body">
        <b>{name}</b>
        <div className="text-muted">{notification}</div>
      </div>
      </div>
    </div>
  );
};

export default Friend;
