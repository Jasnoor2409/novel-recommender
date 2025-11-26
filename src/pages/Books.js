// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import BookCard from "../components/BookCard";

// const Books = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null); // For modal

//   const books = [
//     {
//       id: 1,
//       title: "The Seven Husbands of Evelyn Hugo",
//       author: "Taylor Jenkins Reid",
//       genre: "Fiction",
//       year: 2017,
//       rating: 4.8,
//       image: "https://images-na.ssl-images-amazon.com/images/I/71Xz9rD9c+L.jpg",
//       description:
//         "A reclusive Hollywood icon finally tells her story to a young journalist, revealing secrets about her glamorous and scandalous life.",
//       link: "https://www.amazon.com/dp/9781501161933",
//     },
//     {
//       id: 2,
//       title: "The Silent Patient",
//       author: "Alex Michaelides",
//       genre: "Mystery",
//       year: 2019,
//       rating: 4.5,
//       image: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
//       description:
//         "A woman's act of violence against her husband and her refusal to speak sends shockwaves through London.",
//       link: "https://www.amazon.com/dp/1250301696",
//     },
//     {
//       id: 3,
//       title: "Where the Crawdads Sing",
//       author: "Delia Owens",
//       genre: "Fiction",
//       year: 2018,
//       rating: 4.6,
//       image: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg",
//       description:
//         "A mysterious and atmospheric novel about a young woman who raised herself in the marshes of North Carolina.",
//       link: "https://www.amazon.com/dp/0735219095",
//     },
//     {
//       id: 4,
//       title: "It Ends With Us",
//       author: "Colleen Hoover",
//       genre: "Romance",
//       year: 2016,
//       rating: 4.7,
//       image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
//       description:
//         "A heart-wrenching story about love, resilience, and the courage to break the cycle of abuse.",
//       link: "https://www.amazon.com/dp/1501110365",
//     },
//     {
//       id: 5,
//       title: "Atomic Habits",
//       author: "James Clear",
//       genre: "Self-Help",
//       year: 2018,
//       rating: 4.9,
//       image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
//       description:
//         "An easy and proven way to build good habits and break bad ones using small, consistent changes.",
//       link: "https://www.amazon.com/dp/0735211299",
//     },
//     {
//       id: 6,
//       title: "The Midnight Library",
//       author: "Matt Haig",
//       genre: "Fantasy",
//       year: 2020,
//       rating: 4.4,
//       image: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L.jpg",
//       description:
//         "Between life and death, there is a library containing infinite books about the lives you could have lived.",
//       link: "https://www.amazon.com/dp/0525559477",
//     },
//   ];

//   const filteredBooks = books.filter((book) =>
//     `${book.title} ${book.author} ${book.genre}`
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-8">
//       {/* Search Bar */}
//       <div className="flex justify-center mb-8">
//         <div className="flex items-center w-1/2 bg-white border-2 border-[#4B2E2E] rounded-full shadow-md overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search for books, authors, or genres..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-grow p-3 rounded-l-full focus:outline-none"
//           />
//           <button className="bg-[#4B2E2E] text-white px-5 py-3 rounded-r-full flex items-center gap-2 hover:bg-[#3A1F1F] transition duration-300">
//             <FaSearch />
//             <span className="hidden sm:inline">Search</span>
//           </button>
//         </div>
//       </div>

//       {/* Books Section */}
//       <h2 className="text-2xl font-bold mb-4 text-[#4B2E2E]">
//         Showing {filteredBooks.length} book
//         {filteredBooks.length !== 1 ? "s" : ""}
//       </h2>

//       {filteredBooks.length === 0 ? (
//         <p className="text-gray-600 text-center mt-6">No books found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredBooks.map((book) => (
//             <div key={book.id} onClick={() => setSelectedBook(book)}>
//               <BookCard book={book} />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Popup Modal */}
//       {selectedBook && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm"
//           onClick={() => setSelectedBook(null)}
//         >
//           <div
//             className="bg-[#3D2727]/95 rounded-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden p-8 relative animate-fadeIn"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-white text-2xl font-bold"
//               onClick={() => setSelectedBook(null)}
//             >
//               ✕
//             </button>

//             {/* Left: Image */}
//             <img
//               src={selectedBook.image}
//               alt={selectedBook.title}
//               className="w-full md:w-1/2 h-80 object-cover rounded-xl"
//             />

//             {/* Right: Details */}
//             <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-left text-white">
//               <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>
//               <p className="text-gray-300 mb-1">
//                 <strong>Author:</strong> {selectedBook.author}
//               </p>
//               <p className="text-gray-300 mb-1">
//                 <strong>Published:</strong> {selectedBook.year}
//               </p>
//               <p className="text-gray-300 mb-1">
//                 <strong>Genre:</strong> {selectedBook.genre}
//               </p>
//               <p className="mt-4 text-gray-200">{selectedBook.description}</p>

//               {/* Read/Buy Button */}
//               {selectedBook.link && (
//                 <a
//                   href={selectedBook.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-6 px-6 py-3 bg-[#5C3B3B] hover:bg-[#6D4A4A] rounded text-white font-semibold transition"
//                 >
//                   Read / Buy
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Books;




















// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import BookCard from "../components/BookCard";

// const Books = () => {
//   const [allBooks, setAllBooks] = useState([]);          // ALL books from backend
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);

//   // 🔥 Fetch books from your FastAPI backend
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/books");
//         const data = await res.json();
//         setAllBooks(data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // 🔥 Similar books logic
//   const getSimilarBooks = (currentBook) => {
//     return allBooks
//       .filter(
//         (b) =>
//           b.title !== currentBook.title &&
//           (b.genre_query === currentBook.genre_query ||
//             b.author === currentBook.author)
//       )
//       .slice(0, 4);
//   };

//   // 🔥 Apply search filter
//   const filteredBooks = allBooks.filter((book) =>
//     `${book.title} ${book.author} ${book.categories} ${book.genre_query}`
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );
  

  
//   return (
//     <div className="p-8">
//       {/* Search Bar */}
//       <div className="flex justify-center mb-8">
//         <div className="flex items-center w-1/2 bg-white border-2 border-[#4B2E2E] rounded-full shadow-md overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search for books, authors, or genres..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-grow p-3 rounded-l-full focus:outline-none"
//           />
//           <button className="bg-[#4B2E2E] text-white px-5 py-3 rounded-r-full flex items-center gap-2 hover:bg-[#3A1F1F] transition duration-300">
//             <FaSearch />
//             <span className="hidden sm:inline">Search</span>
//           </button>
//         </div>
//       </div>

//       {/* Books Section */}
//       <h2 className="text-2xl font-bold mb-4 text-[#4B2E2E]">
//         Showing {filteredBooks.length} books
//       </h2>

//       {filteredBooks.length === 0 ? (
//         <p className="text-gray-600 text-center mt-6">No books found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredBooks.map((book, index) => (
//             <div key={index} onClick={() => setSelectedBook(book)}>
//               <BookCard book={{
//                 id: index,
//                 title: book.title,
//                 author: book.author,
//                 genre: book.categories,
//                 year: book.publisheddate,
//                 rating: 4.5, // dataset has no rating → optional default
//                 image: book.image_url || book.image || "https://via.placeholder.com/150",
//                 description: book.description,
//                 link: "#"
//               }} />
//             </div>
//           ))}
//         </div>
//       )}


//       {/* Popup Modal */}
//       {selectedBook && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm"
//           onClick={() => setSelectedBook(null)}
//         >
//           <div
//             className="bg-[#3D2727]/95 rounded-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-white text-2xl font-bold"
//               onClick={() => setSelectedBook(null)}
//             >
//               ✕
//             </button>

//             {/* Left: Image */}
//             <img
//               src={selectedBook.image_url || selectedBook.image || "https://via.placeholder.com/200"}
//               alt={selectedBook.title}
//               className="w-full md:w-1/2 h-80 object-cover rounded-xl"
//             />

//             {/* Right: Details */}
//             <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-left text-white">
//               <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>

//               <p className="text-gray-300 mb-1">
//                 <strong>Author:</strong> {selectedBook.author}
//               </p>

//               <p className="text-gray-300 mb-1">
//                 <strong>Published:</strong> {selectedBook.publisheddate}
//               </p>

//               <p className="text-gray-300 mb-1">
//                 <strong>Genre:</strong> {selectedBook.categories}
//               </p>

//               <p className="mt-4 text-gray-200">{selectedBook.description}</p>

//               {/* --- Similar Books Section --- */}
//               <div className="mt-10">
//                 <h3 className="text-xl font-semibold text-white mb-4">
//                   You May Also Like
//                 </h3>

//                 <div className="grid grid-cols-2 gap-4">
//                   {getSimilarBooks(selectedBook).map((similar, index) => (
//                     <div
//                       key={index}
//                       onClick={() => setSelectedBook(similar)}
//                       className="cursor-pointer bg-[#4B2E2E]/40 p-3 rounded-lg hover:bg-[#4B2E2E]/60 transition"
//                     >
//                       <img
//                         src={similar.image_url || similar.image || "https://via.placeholder.com/100"}
//                         alt={similar.title}
//                         className="h-28 w-full object-cover rounded-md mb-2"
//                       />
//                       <p className="font-bold text-white text-sm">{similar.title}</p>
//                       <p className="text-gray-300 text-xs">{similar.author}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Books;

















// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import BookCard from "../components/BookCard";

// const Books = () => {
//   const [allBooks, setAllBooks] = useState([]);          
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);

//   // 🔥 Pagination state
//   const [page, setPage] = useState(1);
//   const booksPerPage = 20;

//   // 🔥 Fetch books from your FastAPI backend
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const res = await fetch("http://127.0.0.1:8000/books");
//         const data = await res.json();
//         setAllBooks(data);
//       } catch (error) {
//         console.error("Error fetching books:", error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   // 🔥 Similar books logic
//   const getSimilarBooks = (currentBook) => {
//     return allBooks
//       .filter(
//         (b) =>
//           b.title !== currentBook.title &&
//           (b.genre_query === currentBook.genre_query ||
//             b.author === currentBook.author)
//       )
//       .slice(0, 4);
//   };

//   // 🔥 Apply search filter
//   const filteredBooks = allBooks.filter((book) =>
//     `${book.title} ${book.author} ${book.categories} ${book.genre_query}`
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase())
//   );

//   // 🔥 Pagination calculations
//   const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

//   const paginatedBooks = filteredBooks.slice(
//     (page - 1) * booksPerPage,
//     page * booksPerPage
//   );

//   // Reset to page 1 on search
//   useEffect(() => {
//     setPage(1);
//   }, [searchTerm]);

//   return (
//     <div className="p-8">
//       {/* Search Bar */}
//       <div className="flex justify-center mb-8">
//         <div className="flex items-center w-1/2 bg-white border-2 border-[#4B2E2E] rounded-full shadow-md overflow-hidden">
//           <input
//             type="text"
//             placeholder="Search for books, authors, or genres..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-grow p-3 rounded-l-full focus:outline-none"
//           />
//           <button className="bg-[#4B2E2E] text-white px-5 py-3 rounded-r-full flex items-center gap-2 hover:bg-[#3A1F1F] transition duration-300">
//             <FaSearch />
//             <span className="hidden sm:inline">Search</span>
//           </button>
//         </div>
//       </div>

//       {/* Books Section */}
//       <h2 className="text-2xl font-bold mb-4 text-[#4B2E2E]">
//         Showing {filteredBooks.length} books
//       </h2>

//       {filteredBooks.length === 0 ? (
//         <p className="text-gray-600 text-center mt-6">No books found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {paginatedBooks.map((book, index) => (
//             <div key={index} onClick={() => setSelectedBook(book)}>
//               <BookCard
//                 book={{
//                   id: index,
//                   title: book.title,
//                   author: book.author,
//                   genre: book.categories,
//                   year: book.publisheddate,
//                   rating: 4.5,
//                   image:
//                     book.image_url ||
//                     book.image ||
//                     "https://via.placeholder.com/150",
//                   description: book.description,
//                   link: "#",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 📌 PAGINATION BUTTONS */}
//       {filteredBooks.length > 20 && (
//         <div className="flex justify-center mt-10 space-x-3">
//           <button
//             className="px-4 py-2 bg-[#4B2E2E] text-white rounded disabled:opacity-50"
//             disabled={page === 1}
//             onClick={() => {
//               setPage(page - 1);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//           >
//             Prev
//           </button>

//           <span className="text-[#4B2E2E] font-bold">
//             Page {page} / {totalPages}
//           </span>

//           <button
//             className="px-4 py-2 bg-[#4B2E2E] text-white rounded disabled:opacity-50"
//             disabled={page === totalPages}
//             onClick={() => {
//               setPage(page + 1);
//               window.scrollTo({ top: 0, behavior: "smooth" });
//             }}
//           >
//             Next
//           </button>
//         </div>
//       )}

//       {/* Popup Modal */}
//       {selectedBook && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm"
//           onClick={() => setSelectedBook(null)}
//         >
//           <div
//             className="bg-[#3D2727]/95 rounded-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-4 right-4 text-white text-2xl font-bold"
//               onClick={() => setSelectedBook(null)}
//             >
//               ✕
//             </button>

//             <img
//               src={
//                 selectedBook.image_url ||
//                 selectedBook.image ||
//                 "https://via.placeholder.com/200"
//               }
//               alt={selectedBook.title}
//               className="w-full md:w-1/2 h-80 object-cover rounded-xl"
//             />

//             <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-left text-white">
//               <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>

//               <p className="text-gray-300 mb-1">
//                 <strong>Author:</strong> {selectedBook.author}
//               </p>

//               <p className="text-gray-300 mb-1">
//                 <strong>Published:</strong> {selectedBook.publisheddate}
//               </p>

//               <p className="text-gray-300 mb-1">
//                 <strong>Genre:</strong> {selectedBook.categories}
//               </p>

//               <p className="mt-4 text-gray-200">{selectedBook.description}</p>

//               {/* --- Similar Books Section --- */}
//               <div className="mt-10">
//                 <h3 className="text-xl font-semibold text-white mb-4">
//                   You May Also Like
//                 </h3>

//                 <div className="grid grid-cols-2 gap-4">
//                   {getSimilarBooks(selectedBook).map((similar, idx) => (
//                     <div
//                       key={idx}
//                       onClick={() => setSelectedBook(similar)}
//                       className="cursor-pointer bg-[#4B2E2E]/40 p-3 rounded-lg hover:bg-[#4B2E2E]/60 transition"
//                     >
//                       <img
//                         src={
//                           similar.image_url ||
//                           similar.image ||
//                           "https://via.placeholder.com/100"
//                         }
//                         alt={similar.title}
//                         className="h-28 w-full object-cover rounded-md mb-2"
//                       />
//                       <p className="font-bold text-white text-sm">
//                         {similar.title}
//                       </p>
//                       <p className="text-gray-300 text-xs">{similar.author}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Books;












import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import BookCard from "../components/BookCard";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const booksPerPage = 20;

  // Fetch books from FastAPI backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/books");
        const data = await res.json();
        setAllBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // Similar books filter
  const getSimilarBooks = (currentBook) => {
    return allBooks
      .filter(
        (b) =>
          b.title !== currentBook.title &&
          (b.genre_query === currentBook.genre_query ||
            b.author === currentBook.author)
      )
      .slice(0, 4);
  };

  // Search filter
  const filteredBooks = allBooks.filter((book) =>
    `${book.title} ${book.author} ${book.categories} ${book.genre_query}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const paginatedBooks = filteredBooks.slice(
    (page - 1) * booksPerPage,
    page * booksPerPage
  );

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  return (
    <div className="p-8">
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-1/2 bg-white border-2 border-[#4B2E2E] rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search for books, authors, or genres..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 rounded-l-full focus:outline-none"
          />
          <button className="bg-[#4B2E2E] text-white px-5 py-3 rounded-r-full flex items-center gap-2 hover:bg-[#3A1F1F] transition duration-300">
            <FaSearch />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Books Section */}
      <h2 className="text-2xl font-bold mb-4 text-[#4B2E2E]">
        Showing {filteredBooks.length} books
      </h2>

      {filteredBooks.length === 0 ? (
        <p className="text-gray-600 text-center mt-6">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedBooks.map((book, index) => (
            <div key={index} onClick={() => setSelectedBook(book)}>
              <BookCard
                book={{
                  id: index,
                  title: book.title,
                  author: book.author,
                  genre: book.categories,
                  year: book.publisheddate,
                  rating: 4.5,
                  image:
                    book.image_url ||
                    book.image ||
                    "https://via.placeholder.com/150",
                  description: book.description,
                  link: book.link || null,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {filteredBooks.length > 20 && (
        <div className="flex justify-center mt-10 space-x-3">
          <button
            className="px-4 py-2 bg-[#4B2E2E] text-white rounded disabled:opacity-50"
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Prev
          </button>

          <span className="text-[#4B2E2E] font-bold">
            Page {page} / {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-[#4B2E2E] text-white rounded disabled:opacity-50"
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Next
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-[#3D2727]/95 rounded-2xl max-w-5xl w-full flex flex-col md:flex-row overflow-hidden p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={() => setSelectedBook(null)}
            >
              ✕
            </button>

            {/* LEFT — image + buy button */}
            <div className="md:w-1/2 flex flex-col items-center">
              <img
                src={
                  selectedBook.image_url ||
                  selectedBook.image ||
                  "https://via.placeholder.com/200"
                }
                alt={selectedBook.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />

              {/* BUY BUTTON BELOW IMAGE */}
              {selectedBook.buy_link && (
                <a
                  href={selectedBook.buy_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 bg-[#5C3B3B] hover:bg-[#6D4A4A] rounded-xl text-white font-semibold transition shadow-md"
                >
                  📖 Buy / Read This Book
                </a>
              )}
            </div>

            {/* RIGHT — details */}
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-left text-white">
              <h2 className="text-3xl font-bold mb-2">{selectedBook.title}</h2>

              <p className="text-gray-300 mb-1">
                <strong>Author:</strong> {selectedBook.author}
              </p>

              <p className="text-gray-300 mb-1">
                <strong>Published:</strong> {selectedBook.publisheddate}
              </p>

              <p className="text-gray-300 mb-1">
                <strong>Genre:</strong> {selectedBook.categories}
              </p>

              <p className="mt-4 text-gray-200">{selectedBook.description}</p>

              {/* Similar books */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  You May Also Like
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {getSimilarBooks(selectedBook).map((similar, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedBook(similar)}
                      className="cursor-pointer bg-[#4B2E2E]/40 p-3 rounded-lg hover:bg-[#4B2E2E]/60 transition"
                    >
                      <img
                        src={
                          similar.image_url ||
                          similar.image ||
                          "https://via.placeholder.com/100"
                        }
                        alt={similar.title}
                        className="h-28 w-full object-cover rounded-md mb-2"
                      />
                      <p className="font-bold text-white text-sm">
                        {similar.title}
                      </p>
                      <p className="text-gray-300 text-xs">{similar.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;