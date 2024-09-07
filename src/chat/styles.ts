import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(109, 78, 57, 0.5);
  }
  50% {
    transform: scale(1.05); /* Slightly less scale */
    box-shadow: 0 0 0 10px rgba(109, 78, 57, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(109, 78, 57, 0);
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f9f9f9;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #7b4b94;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ChatBody = styled.div`
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 15px;
  position: relative;
  background-color: ${({ isUser }) => (isUser ? "#7b4b94" : "#f1f0f0")};
  color: ${({ isUser }) => (isUser ? "white" : "black")};
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

export const ChatFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #ffffff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  margin-right: 10px;
  font-size: 14px;
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #7b4b94;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #6a3b83;
  }
`;

export const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #6d4e39;
  border: none;
  cursor: pointer;
  z-index: 1000;

  position: fixed;
  bottom: 32px;
  right: 62px;

  animation: ${pulse} 2s infinite; /* Apply the pulse animation */

  &:hover {
    background-color: #5c3e32; /* Darker shade for hover effect */
  }
`;
