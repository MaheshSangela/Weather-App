// import React from "react";
// import SearchBar from "./SearchBar";

// const Header = ({ suggestion, setSuggestion }) => (
//   <div className="flex flex-col md:flex-row justify-between items-center shadow-lg p-5 rounded-2xl border border-gray-300 mb-6">
//     <h1 className="font-bold text-4xl text-gray-900 tracking-wide mb-4 md:mb-0">
//       Weather Now
//     </h1>
//     <SearchBar suggestion={suggestion} setSuggestion={setSuggestion} />
//   </div>
// );

// export default Header;

import React, { useState } from "react";

const Header = ({ suggestion, setSuggestion, setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setCity(input);   // ✅ update city in App.jsx
      setInput("");     // clear search box
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center shadow-xl p-5 rounded-lg border border-gray-400 bg-white/30 backdrop-blur-sm">
      <h1 className="font-bold text-3xl md:text-4xl text-black tracking-wide">Weather Now</h1>

      <form onSubmit={handleSearch} className="mt-4 md:mt-0 flex items-center space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city"
          className="px-4 py-2 bg-white/70 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300"
        />
        <button type="submit" className="px-4 py-2 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Header;

