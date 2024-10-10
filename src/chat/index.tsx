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
  mutation GenerateResponse($message: String!, $context: String!) {
    generateResponse(message: $message, context: $context)
  }
`;

export const ChatBot = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState<
    { sender: string; text: string; isBot: boolean }[]
  >([]);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat bubble visibility
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickReplies = ["Return policy", "Exchange policy", "FAQs"];
  const [generateResponse] = useMutation(GENERATE_RESPONSE);

  const sendMessage = async (messageText?: string, contextText?: any) => {
    const textToSend = messageText || message; // Use the provided messageText, or fall back to the current state
    const contextToSend =
      contextText ||
      "Our return policy allows returns within 30 days of purchase."; // You can set a more specific default context here

    if (!textToSend) return;

    setChat([...chat, { sender: "You", text: textToSend, isBot: false }]);

    try {
      const modelName = "gemini-1.5-flash"; // Set a default model name, or pass this dynamically if needed

      // Make the mutation call
      const { data } = await generateResponse({
        variables: {
          message: textToSend,
          context: contextToSend, // Ensure this is provided correctly
        },
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
    const context =
      "Provide the specific context related to the quick reply here";

    sendMessage(reply, context);
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
