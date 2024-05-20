import React from "react";

interface SearchBarProps {
  width?: string; // Optional width prop
}

const SearchBar: React.FC<SearchBarProps> = ({ width }) => {
  return (
    <div
      className="search-bar flex items-center bg-transparent rounded-lg px-3 py-2 shadow-md"
      style={{ width: width }}
    >
      <i className="uil uil-search text-gray-500"></i>
      <input
        type="search"
        placeholder="Search"
        className="flex-grow ml-2 outline-none placeholder-gray-500 bg-transparent"
        style={{ width: "100%", background: "transparent" }}
      />
    </div>
  );
};

export default SearchBar;
