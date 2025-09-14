import React from "react";

const SearchBar = ({ suggestion, setSuggestion }) => {
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();

    // Example: Fake suggestions (you can replace with API)
    const cities = ["Mumbai", "Delhi", "London", "Paris", "Tokyo", "Sydney"];
    const filtered = cities.filter((city) =>
      city.toLowerCase().startsWith(value)
    );

    setSuggestion(filtered);
  };

  return (
    <div className="w-full md:w-auto relative">
      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Enter city"
          onChange={handleChange}
          className="px-4 py-2 w-full bg-white/30 border-2 border-gray-300 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-white/50 transition duration-300"
        />
        <button className="cursor-pointer px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition duration-300 shadow-md">
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </button>
      </div>
      {suggestion.length > 0 && (
        <ul className="absolute shadow-xl z-10 w-full rounded-xl mt-1 max-h-48 overflow-y-auto bg-white/80 backdrop-blur-sm">
          {suggestion.map((s, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-purple-500 hover:text-white cursor-pointer rounded-sm m-1 transition duration-200"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
