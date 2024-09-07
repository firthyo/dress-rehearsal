import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 100%;
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 20px;
  /* background-color: #fff9f5; */
  border-radius: 8px;
`;

export const FAQItem = styled.div<{ isOpen: boolean }>`
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: ${({ isOpen }) =>
    isOpen ? "0 2px 8px rgba(0, 0, 0, 0.1)" : "none"};
  background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#fff")};
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
`;

export const Question = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 16px 32px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ isOpen }) => (isOpen ? "#1b1b1b" : "#4a4a4a")};
  background-color: transparent;
  border-radius: 8px;
  transition: color 0.3s ease, background-color 0.3s ease;
`;

export const Answer = styled.div`
  padding: 0px 32px 32px 32px;
  color: #333;
  font-size: 0.9em;
  line-height: 1.6;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  text-align: left;
`;

export const Icon = styled.span<{ isOpen: boolean }>`
  font-size: 24px;
  color: #b58c6b;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;
