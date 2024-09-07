import React, { useState } from "react";
import { Answer, FAQContainer, FAQItem, Icon, Question } from "./styles";
import { Spacer, Typography } from "components/core";
import { MinusSquare, PlusSquare } from "assets/icons";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order by logging into your account and checking the order status.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows for returns within 30 days of purchase. Please contact support for more details.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days depending on your location.",
    },
    {
      question: "How do I change or cancel my order?",
      answer:
        "To change or cancel your order, please contact us as soon as possible. Once an order is processed, we may not be able to make changes. Contact our support team via the form above or start a live chat to see if changes can be made.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <Typography variant="page-title">Frequently Asked Questions</Typography>
      <Spacer y={32} />
      {faqs.map((faq, index) => (
        <FAQItem key={index} isOpen={openIndex === index}>
          <Question
            onClick={() => handleToggle(index)}
            isOpen={openIndex === index}
          >
            <Typography variant="p-articles" color="systemDark">
              {faq.question}
            </Typography>
            <Icon isOpen={openIndex === index}>
              {openIndex === index ? <MinusSquare /> : <PlusSquare />}
            </Icon>
          </Question>
          {openIndex === index && (
            <Answer>
              <Typography variant="p-detail" color="systemDark">
                {faq.answer}
              </Typography>
            </Answer>
          )}
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
