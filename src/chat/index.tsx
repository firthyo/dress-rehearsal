import { BubbleChat, BubbleSquare } from "assets/icons";
import { InlineWrapper, Spacer, Typography } from "components/core";
import React, { useState, useEffect, useRef } from "react";
import { ChatButton } from "./styles";

export const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat bubble visibility
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!message) return;

    setChat([...chat, { sender: "You", text: message }]);

    try {
      const result = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              generateResponse(message: "${message}")
            }
          `,
        }),
      });

      const data = await result.json();
      setChat((prevChat) => [
        ...prevChat,
        { sender: "Bot", text: data.data.generateResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setChat((prevChat) => [
        ...prevChat,
        {
          sender: "Bot",
          text: "An error occurred while processing your request.",
        },
      ]);
    }

    setMessage("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div>
      {/* Toggle Button */}
      <ChatButton onClick={() => setIsChatOpen(!isChatOpen)}>
        <BubbleSquare size={32} color="#FFFAF1" />
      </ChatButton>

      {/* Chat Bubble */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "70px",
            right: "20px",
            width: "300px",
            maxWidth: "100%",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            zIndex: 999,
          }}
        >
          <div
            ref={chatContainerRef}
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px 10px 0 0",
              padding: "10px",
              display: "flex",
              flexDirection: "column-reverse",
              height: "300px",
              overflowY: "scroll",
            }}
          >
            {chat
              .slice(0)
              .reverse()
              .map((entry, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent:
                      entry.sender === "You" ? "flex-end" : "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "60%",
                      padding: "10px",
                      borderRadius: "10px",
                      backgroundColor:
                        entry.sender === "You" ? "#DCF8C6" : "#FFFFFF",
                      boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "#888" }}>
                      {entry.sender}
                    </div>
                    <div style={{ fontSize: "14px" }}>{entry.text}</div>
                  </div>
                </div>
              ))}
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              style={{
                flexGrow: 1,
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                marginRight: "10px",
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
