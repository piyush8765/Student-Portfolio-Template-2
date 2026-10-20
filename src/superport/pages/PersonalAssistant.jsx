import { useState } from "react";

const PersonalAssistant = ({
  ownerName = "Your Name",
  role = "Full Stack Developer",
  skills = [],
  projects = [],
  experience = "2+ years",
  location = "India",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: `Hi 👋 I’m ${ownerName}'s personal AI assistant. Ask me about skills, projects, experience or hiring.`,
    },
  ]);

  /* 🔊 Text to Speech */
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    utterance.rate = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  /* 🧠 AI LOGIC */
  const generateReply = (question) => {
    const q = question.toLowerCase();

    if (["hi", "hello", "hey"].some((w) => q.includes(w)))
      return `Hello 👋 Welcome to ${ownerName}'s portfolio.`;

    if (q.includes("who") || q.includes("about"))
      return `${ownerName} is a ${role} based in ${location} with ${experience} of experience.`;

    if (q.includes("skill"))
      return `${ownerName} works with ${skills.join(", ")}.`;

    if (q.includes("project"))
      return `${ownerName} has built ${projects.map((p) => p.title).join(", ")}.`;

    if (q.includes("hire") || q.includes("contact"))
      return `${ownerName} is open for opportunities. Please use the contact section below.`;

    if (q.includes("thank")) return "You're welcome 😊";

    return `You can ask me about ${ownerName}'s skills, projects, experience or hiring.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const replyText = generateReply(input);
    const aiMsg = { from: "ai", text: replyText };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
    speak(replyText);
  };

  return (
    <>
      {/* ================= CSS ================= */}
      <style>{`
        .ai-float-btn {
          position: fixed;
          bottom: 30px;
          right: 24px;
          z-index: 9999;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #FFB900;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          animation: pulse 2s infinite;
        }

        .ai-float-btn img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,185,0,0.6); }
          70% { box-shadow: 0 0 0 18px rgba(255,185,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,185,0,0); }
        }

        .ai-chat {
          position: fixed;
          bottom: 110px;
          right: 24px;
          width: 360px;
          max-width: 90vw;
          background: #000;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 22px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          overflow: hidden;
          z-index: 9999;
        }

        .ai-header {
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .ai-body {
          height: 280px;
          overflow-y: auto;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.9rem;
        }

        .ai-msg {
          max-width: 80%;
          padding: 10px 12px;
          border-radius: 14px;
        }

        .ai-msg.user {
          align-self: flex-end;
          background: #FFB900;
          color: black;
        }

        .ai-msg.ai {
          align-self: flex-start;
          background: rgba(255,255,255,0.12);
          color: white;
        }

        .ai-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .ai-input input {
          flex: 1;
          padding: 10px 12px;
          border-radius: 10px;
          background: black;
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          outline: none;
        }

        .ai-input button {
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          background: #FFB900;
          color: black;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      {/* ================= FLOAT BUTTON ================= */}
      <div className="ai-float-btn" onClick={() => setIsOpen(!isOpen)}>
        <img
          src="/assistant.png"   /* 👈 apni image yaha rakho */
          alt="AI Assistant"
        />
      </div>

      {/* ================= CHAT ================= */}
      {isOpen && (
        <div className="ai-chat">
          <div className="ai-header">
            🤖 Personal AI Assistant
            <span style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>✕</span>
          </div>

          <div className="ai-body">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalAssistant;
