import React, { useState, useRef } from "react";
import { AccordionContent, AccordionTitle, AccordionWrapper } from "./styles";
import { ArrowDown, ArrowUp } from "assets/icons";
import { Typography } from "../typography";
import Spacer from "../spacer";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionTitle onClick={toggleAccordion}>
        <Typography variant="p-detail" color="systemDark">
          {title}
        </Typography>
        <div>{isOpen ? <ArrowUp></ArrowUp> : <ArrowDown></ArrowDown>}</div>
      </AccordionTitle>
      <Spacer y={8}></Spacer>
      <AccordionContent
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
      >
        {children}
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
