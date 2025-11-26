// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Books from "./pages/Books";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-cream">
//         {/* Navbar always visible */}
//         <Navbar />

//         {/* Main content with padding from top so it doesn’t overlap */}
//         <div className="pt-20 px-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/books" element={<Books />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Books from "./pages/Books";
// import ChatBot from "./components/ChatBot";

// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/books" element={<Books />} />
//         </Routes>

//         <ChatBot />  {/* Teddy bear chatbot */}
//       </>
//     </Router>
//   );
// }

// export default App;





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";

import ChatbotTeddy from "./components/ChatbotTeddy";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>

      {/* Floating Teddy Chatbot */}
      <ChatbotTeddy />
    </Router>
  );
}

export default App;