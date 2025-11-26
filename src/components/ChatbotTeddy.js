import React, { useState } from "react";
import teddy from "../assets/teddy.png.jpeg"; // place teddy image in src/assets/

const ChatbotTeddy = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Send user message → fetch response from FastAPI
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat?query=" + input);
      const data = await res.json();

      const botMessage = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMessage = {
        sender: "bot",
        text: "⚠️ Error contacting chatbot. Is backend running?",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Teddy Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src={teddy}
          alt="Chatbot Teddy"
          className="w-20 h-20 drop-shadow-xl hover:scale-110 transition-transform duration-300"
        />
      </button>

      {/* Popup Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-6 bg-white w-80 h-96 rounded-2xl shadow-2xl border border-[#4B2E2E] flex flex-col z-50">
          {/* Header */}
          <div className="bg-[#4B2E2E] text-white p-3 rounded-t-2xl flex justify-between items-center">
            <h3 className="text-lg font-semibold">🧸 Teddy Chat</h3>
            <button onClick={() => setOpen(false)} className="text-xl">✕</button>
          </div>

          {/* Messages Box */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-xl text-sm ${
                  msg.sender === "user"
                    ? "bg-[#4B2E2E] text-white self-end ml-auto max-w-[80%]"
                    : "bg-[#EADBC8] text-[#4B2E2E] max-w-[80%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-grow p-2 border rounded-lg focus:outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="bg-[#4B2E2E] text-white px-4 py-2 rounded-lg hover:bg-[#3A1F1F]"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotTeddy;