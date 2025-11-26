

// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSearch) onSearch(query);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex justify-center items-center space-x-2 mt-6"
//     >
//       <input
//         type="text"
//         placeholder="Search for a genre (romance, history, fantasy...)"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-96 px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-500 bg-[#e9e1d4] text-brown-900 placeholder-brown-500"
//       />
//       <button
//         type="submit"
//         className="bg-[#6b4232] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#543429] transition"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
