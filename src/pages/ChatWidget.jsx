import { useState } from "react";
import { MessageCircle } from "lucide-react";

function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    { text: "Hello 👋 How can I help you?", bot: true }
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    let reply = "";
    const msg = input.toLowerCase();

    if (msg.includes("time") || msg.includes("hours")) {
      reply =
        "🕒 We are open from 9 AM to 6 PM.\nYou can also book directly via WhatsApp 📲";
    } 
    else if (msg.includes("price") || msg.includes("cost")) {
      reply =
        "💰 Prices depend on the service.\nYou can contact us on WhatsApp for details.";
    } 
    else if (msg.includes("address") || msg.includes("location")) {
      reply =
        "📍 We are located in the city center.\nYou can view the map below or book via WhatsApp.";
    } 
    else if (msg.includes("book") || msg.includes("appointment")) {
      reply =
        "📅 You can easily book an appointment using the WhatsApp button on the website.";
    } 
    else {
      reply =
        "I can help you with:\n- Booking\n- Opening hours\n- Prices\n\n👉 You can also book directly via WhatsApp 😊";
    }

    setMessages([
      ...messages,
      { text: input, bot: false },
      { text: reply, bot: true }
    ]);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* Chat Box */}
      {open && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden mb-3">

          {/* Header */}
          <div className="bg-teal-600 text-white p-3 font-semibold">
            AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl text-sm max-w-[75%] ${
                  msg.bot
                    ? "bg-gray-100 text-left"
                    : "bg-teal-600 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-teal-600 text-white px-4"
            >
              Send
            </button>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700"
      >
        <MessageCircle />
      </button>
    </div>
  );
}

export default ChatWidget;