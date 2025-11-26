// // src/components/Navbar.js
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-[#4B2E2E] sticky top-0 z-50 shadow-md">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Title Centered */}
//         <div className="absolute left-1/2 transform -translate-x-1/2">
//           <h1 className="text-3xl font-bold text-[#FDF5E6]">📚 Novel Recommender</h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="ml-auto flex space-x-6">
//           <Link
//             to="/"
//             className="text-[#FDF5E6] hover:underline transition duration-200"
//           >
//             Home
//           </Link>
//           <Link
//             to="/books"
//             className="text-[#FDF5E6] hover:underline transition duration-200"
//           >
//             Books
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }




// src/components/Navbar.js
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-[#4B2E2E] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Title Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-3xl font-bold text-[#FDF5E6]">📚 Novel Recommender</h1>
        </div>

        {/* Navigation Links */}
        <div className="ml-auto flex space-x-6">

          {/* HOME LINK */}
          <Link
            to="/"
            className={`text-[#FDF5E6] transition duration-200 ${
              location.pathname === "/" 
                ? "underline underline-offset-4 decoration-2" 
                : "hover:underline"
            }`}
          >
            Home
          </Link>

          {/* BOOKS LINK */}
          <Link
            to="/books"
            className={`text-[#FDF5E6] transition duration-200 ${
              location.pathname === "/books" 
                ? "underline underline-offset-4 decoration-2" 
                : "hover:underline"
            }`}
          >
            Books
          </Link>
        </div>
      </div>
    </nav>
  );
}