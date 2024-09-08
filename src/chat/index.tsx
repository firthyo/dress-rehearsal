import React, { useState, useEffect, useRef } from "react";
import { useMutation, gql } from "@apollo/client";

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
  MessageContainer,
  Avatar,
  MessageBubble,
  MessageWrapper,
} from "./styles";
import { BubbleSquare } from "assets/icons"; // Assuming you have icons
import { Typography } from "components/core";

const GENERATE_RESPONSE = gql`
  mutation GenerateResponse($message: String!) {
    generateResponse(message: $message)
  }
`;

export const ChatBot = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<
    { sender: string; text: string; isBot: boolean }[]
  >([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat bubble visibility
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickReplies = ["What is WappGPT?", "Pricing", "FAQs"];
  const [generateResponse] = useMutation(GENERATE_RESPONSE);

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || message; // Use the provided messageText, or fall back to the current state
    if (!textToSend) return;

    setChat([...chat, { sender: "You", text: textToSend, isBot: false }]);

    try {
      const { data } = await generateResponse({
        variables: { message: textToSend },
      });
      const botMessage = data?.generateResponse;

      setChat([
        ...chat,
        { sender: "You", text: textToSend, isBot: false },
        { sender: "Bot", text: botMessage, isBot: true },
      ]);
      setMessage(""); // Clear the input field after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
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
            <span>Dress Rehearsal</span> {/* Replace with your bot's name */}
            <span>Online</span> {/* Online status or similar */}
          </ChatHeader>

          <ChatBody ref={chatContainerRef}>
            {chat.map((entry, index) => (
              <MessageWrapper key={index} isUser={!entry.isBot}>
                {/* Render Avatar and Message Bubble in the correct order */}
                {entry.isBot && (
                  <Avatar isUser={false}>
                    {entry.sender.charAt(0).toUpperCase()}
                  </Avatar>
                )}
                <MessageBubble isUser={!entry.isBot}>
                  <div style={{ fontSize: "14px" }}>{entry.text}</div>
                </MessageBubble>
                {!entry.isBot && (
                  <Avatar isUser={true}>
                    {entry.sender.charAt(0).toUpperCase()}
                  </Avatar>
                )}
              </MessageWrapper>
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
