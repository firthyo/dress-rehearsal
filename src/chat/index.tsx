import React, { useState, useEffect, useRef } from "react";
import {
  ChatContainer,
  ChatHeader,
  QuickMenu,
  QuickMenuItem,
  ChatBody,
  ChatFooter,
  Input,
  SendButton,
  ChatButton,
  QuickRepliesContainer,
  QuickReplyButton,
} from "./styles";
import { BubbleSquare } from "assets/icons"; // Assuming you have icons

export const ChatBot = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<{ sender: string; text: string }[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat bubble visibility
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickReplies = ["What is WappGPT?", "Pricing", "FAQs"];

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || message; // Use the provided messageText, or fall back to the current state
    if (!textToSend) return;

    setChat([...chat, { sender: "You", text: textToSend }]);

    try {
      const result = await fetch("http://localhost:4000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              generateResponse(message: "${textToSend}")
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

    setMessage(""); // Clear the input after sending
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  const handleQuickReplyClick = (reply: string) => {
    sendMessage(reply);
  };

  return (
    <div>
      {/* Toggle Button */}
      <ChatButton onClick={() => setIsChatOpen(!isChatOpen)}>
        <BubbleSquare size={32} color="#FFFAF1" />
      </ChatButton>

      {/* Chat Bubble */}
      {isChatOpen && (
        <ChatContainer>
          <ChatHeader>
            <span>WappGPT</span> {/* Replace with your bot's name */}
            <span>Online</span> {/* Online status or similar */}
          </ChatHeader>

          <ChatBody ref={chatContainerRef}>
            {chat.map((entry, index) => (
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
                      entry.sender === "You" ? "#7b4b94" : "#f1f0f0",
                    color: entry.sender === "You" ? "white" : "black",
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
          </ChatBody>
          <QuickRepliesContainer>
            {quickReplies.map((reply, index) => (
              <QuickReplyButton
                key={index}
                onClick={() => handleQuickReplyClick(reply)}
              >
                {reply}
              </QuickReplyButton>
            ))}
          </QuickRepliesContainer>
          <ChatFooter>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <SendButton onClick={() => sendMessage()}>Send</SendButton>
          </ChatFooter>
        </ChatContainer>
      )}
    </div>
  );
};

export default ChatBot;
