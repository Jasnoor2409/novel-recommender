// Importing React library to use JSX (HTML-like syntax inside JavaScript)
import React from "react";

// Importing 'Link' from react-router-dom to move between pages without reloading
import { Link } from "react-router-dom";
// Creating a React component called 'Home'
const Home = () => {
  // This 'return' part shows what will appear on the web page
  return (
    // Main container (div) that covers the full screen height and centers everything
    <div className="min-h-screen bg-[#f5f0e6] flex flex-col items-center justify-center text-center p-6">
      
      {/* Heading of the homepage */}
      <h1 className="text-4xl font-bold text-[#5a413b] mb-6">
        📚 Welcome to Novel Recommender
      </h1>

      {/* A short description or tagline below the heading */}
      <p className="text-lg text-[#7b5e57] mb-8 max-w-2xl">
        Discover new books, read summaries, and find your next favourite novel.
      </p>

      {/* A clickable button that takes user to the 'Books' page */}
      <Link
        to="/books" // Page to navigate to when clicked
        className="bg-[#7b5e57] text-white px-6 py-3 rounded-lg shadow hover:bg-[#5a413b] transition"
      >
        Browse Books →
      </Link>
    </div>
  );
};

// Exporting the 'Home' component so it can be used in other files
export default Home;

