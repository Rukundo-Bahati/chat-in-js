import Button from "../Button";
import SearchBar from "../SearchBar";
import img from '../../assets/shimwa.jpg'

const Nav = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md z-40 mt-0 bg-white">
      <div className="flex items-center space-x-2">
        {/* Chat Map icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <span className="text-10xl font-semibold text-gray-800">Chat Map</span>
      </div>
      {/* Search field */}
        <SearchBar width="400px" />
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4 items-center">
          <Button bg="bg-blue-600" text="Create" />
          <div onClick={handleLogout}>
          <Button bg="bg-blue-600" text="Logout"  />
          </div>
          <img
            src={img}
            alt="profile-picture"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
