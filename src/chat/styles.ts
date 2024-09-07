import { keyframes, styled } from "styled-components";

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
  position: fixed; /* This makes the chat container float */
  bottom: 70px; /* Adjusted to match the button position */
  right: 20px; /* Adjusted to match the button position */
  width: 330px;
  height: 620px; /* Fixed width */
  max-width: 100%; /* Ensures it doesn't overflow */
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #f9f9f9;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adds shadow for floating effect */
  z-index: 9999; /* Ensure it stays above other content */
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #6d4e39; /* Brown header color */
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const QuickMenu = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #f1f1f1; /* Light background for the quick menu */
  border-top: 1px solid #ddd;
`;

export const QuickMenuItem = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 5px;
  color: #6d4e39;

  &:hover {
    color: #5c3e32;
  }

  & svg {
    margin-bottom: 5px;
  }
`;

export const ChatBody = styled.div`
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #fafafa; /* Slightly lighter background */
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
  z-index: 1000; /* Ensure it's above other content */

  position: fixed;
  bottom: 32px;
  right: 62px;

  animation: ${pulse} 2s infinite; /* Apply the pulse animation */

  &:hover {
    background-color: #5c3e32; /* Darker shade for hover effect */
  }
`;



export const QuickRepliesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const QuickReplyButton = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 8px 12px;
  cursor: pointer;
  color: #5c3d2e;
  font-weight: bold;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f3e9e5;
  }
`;