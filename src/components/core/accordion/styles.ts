import styled from "styled-components";

export const AccordionWrapper = styled.div`
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  margin: 10px 0;
  background: transparent;
  width: 100%;
`;

export const AccordionTitle = styled.button<{ titleDivider: boolean }>`
  padding: 10px 0px;
  /* font-size: 16px; */
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  ${(props) => props.titleDivider && "border-bottom: 1px solid #ccc;"}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionContent = styled.div`
  background: transparent;
  transition: max-height 0.3s ease, padding 0.3s ease;
  overflow: hidden;
`;
