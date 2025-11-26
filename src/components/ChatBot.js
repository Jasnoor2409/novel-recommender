// import React, { useState } from "react";

// export default function ChatBot() {
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const sendMessage = async () => {
//     if (!message.trim()) return;

//     // Add user message to chat
//     const newChat = [...chat, { sender: "user", text: message }];
//     setChat(newChat);

//     const res = await fetch("http://127.0.0.1:8000/chatbot", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query: message }),
//     });

//     const data = await res.json();

//     setChat([...newChat, { sender: "bot", text: data.response }]);
//     setMessage("");
//   };

//   return (
//     <>
//       {/* Teddy Bear Button */}
//       <button
//         onClick={() => setOpen(true)}
//         className="fixed bottom-6 right-6 z-50"
//       >
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/809/809522.png"
//           alt="teddy"
//           className="w-16 h-16 drop-shadow-xl hover:scale-110 transition"
//         />
//       </button>

//       {/* Chat Window */}
//       {open && (
//         <div className="fixed bottom-24 right-6 bg-white w-80 h-96 rounded-xl shadow-2xl p-4 flex flex-col z-50 border-2 border-[#4B2E2E]">
//           <button
//             onClick={() => setOpen(false)}
//             className="absolute top-2 right-3 text-xl text-[#4B2E2E] font-bold"
//           >
//             ✕
//           </button>

//           <h2 className="text-lg font-bold text-[#4B2E2E] mb-3">Chat with Teddy 🤎</h2>

//           <div className="flex-1 overflow-y-auto mb-3 space-y-2">
//             {chat.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`p-2 rounded-lg max-w-[85%] ${
//                   msg.sender === "user"
//                     ? "bg-[#4B2E2E] text-white self-end ml-auto"
//                     : "bg-[#F3E5D8] text-[#4B2E2E]"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           <div className="flex">
//             <input
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="flex-1 border p-2 rounded-l-lg focus:outline-none"
//               placeholder="Type…"
//             />
//             <button
//               onClick={sendMessage}
//               className="bg-[#4B2E2E] text-white px-4 rounded-r-lg"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }