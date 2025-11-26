// import React from "react";
// import { FaStar, FaBook } from "react-icons/fa";
// import { MdOutlineCalendarToday } from "react-icons/md";

// const BookCard = ({ book }) => {
//   return (
//     <div
//       className="bg-white rounded-xl shadow-md p-4 relative transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_8px_25px_rgba(75,46,46,0.3)] border border-transparent hover:border-[#4B2E2E]"
//     > 
//       {/* Rating Badge */}
//       <div className="absolute top-2 right-2 bg-[#4B2E2E] text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center shadow-md">
//         <FaStar className="mr-1" /> {book.rating}
//       </div>

//       {/* Book Image */}
//       <img
//         src={book.image_url}
//         alt={book.title}
//         className="w-full h-40 object-cover rounded-lg"
//       />

//       {/* Book Title */}
//       <h3 className="mt-3 text-lg font-bold text-[#4B2E2E]">{book.title}</h3>

//       {/* Author */}
//       <p className="text-sm text-gray-600 flex items-center gap-2">
//         <FaBook /> {book.author}
//       </p>

//       {/* Genre + Year */}
//       <div className="flex gap-3 mt-2 text-xs">
//         <span className="bg-[#D9C2A3] text-[#4B2E2E] px-2 py-1 rounded-lg">
//           {book.genre}
//         </span>
//         <span className="flex items-center gap-1 text-gray-500">
//           <MdOutlineCalendarToday /> {book.year}
//         </span>
//       </div>

//       {/* Short Description */}
//       <p className="mt-2 text-sm text-gray-700 line-clamp-3">
//         {book.description}
//       </p>
//     </div>
//   );
// };

// export default BookCard;









// import React from "react";
// import { FaStar, FaBook } from "react-icons/fa";
// import { MdOutlineCalendarToday } from "react-icons/md";

// const BookCard = ({ book }) => {
//   const image = book.image_url || book.image || "https://via.placeholder.com/200";

//   return (
//     <div
//       className="bg-white rounded-xl shadow-md p-4 relative transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_8px_25px_rgba(75,46,46,0.3)] border border-transparent hover:border-[#4B2E2E] h-[360px]
// "
//     >
//       {/* Rating Badge */}
//       <div className="absolute top-2 right-2 bg-[#4B2E2E] text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center shadow-md">
//         <FaStar className="mr-1" /> {book.rating || "4.5"}
//       </div>

//       {/* Book Image */}
//       <img
//         src={image}
//         alt={book.title}
//         className="w-full h-40 object-cover rounded-lg"
//       />

//       {/* Title */}
//       <h3 className="mt-3 text-lg font-bold text-[#4B2E2E]">{book.title}</h3>

//       {/* Author */}
//       <p className="text-sm text-gray-600 flex items-center gap-2">
//         <FaBook /> {book.author}
//       </p>

      

//             {/* {Genre + Year} */}{
//       <div className="flex gap-3 mt-2 text-xs">
//         <span className="bg-[#D9C2A3] text-[#4B2E2E] px-2 py-1 rounded-lg">
//           {book.genre}
//         </span>
//         <span className="flex items-center gap-1 text-gray-500">
//           <MdOutlineCalendarToday /> {book.year}
//         </span>
//       </div>}

//       {/* Description */}
//       <p className="mt-2 text-sm text-gray-700 line-clamp-3">
//         {book.description}
//       </p>
//     </div>
//   );
// };

// export default BookCard;






import React from "react";
import { FaStar, FaBook } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";

const BookCard = ({ book }) => {
  const image = book.image_url || book.image || "https://via.placeholder.com/200";

  return (
    <div
      className="bg-white rounded-xl shadow-md p-4 relative transform transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_8px_25px_rgba(75,46,46,0.3)] border border-transparent hover:border-[#4B2E2E] h-[360px]"
    >
      {/* Rating Badge */}
      <div className="absolute top-2 right-2 bg-[#4B2E2E] text-white text-sm font-semibold px-2 py-1 rounded-full flex items-center shadow-md">
        <FaStar className="mr-1" /> {book.rating || "4.5"}
      </div>

      {/* Book Image */}
      <img
        src={image}
        alt={book.title}
        className="w-full h-40 object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="mt-3 text-lg font-bold text-[#4B2E2E]">
        {book.title}
      </h3>

      {/* Author */}
      <p className="text-sm text-gray-600 flex items-center gap-2">
        <FaBook /> {book.author}
      </p>

      {/* Genre + Year */}
      <div className="flex gap-3 mt-2 text-xs">
        <span className="bg-[#D9C2A3] text-[#4B2E2E] px-2 py-1 rounded-lg">
          {book.genre}
        </span>
        <span className="flex items-center gap-1 text-gray-500">
          <MdOutlineCalendarToday /> {book.year}
        </span>
      </div>

      {/* Description (FIXED ✨) */}
      <p className="mt-2 text-sm text-gray-700 line-clamp-2 overflow-hidden text-ellipsis">
        {book.description}
      </p>
    </div>
  );
};

export default BookCard;