import { Button, InlineWrapper, Spacer, Typography } from "components/core";
import React from "react";
import {
  ChatBox,
  Container,
  FAQSection,
  HeaderWrapper,
  LeftSection,
  RightSection,
  Wrapper,
} from "./styles";
import { ContactForm } from "components/form/contact-form";
import { BubbleChat } from "assets/icons";
import { FAQ } from "./detail";
import {
  FacebookIcon,
  InstragramIcon,
  LineIcon,
  TiktokIcon,
} from "assets/icons/social";
import MainLogo from "assets/logo/MainLogo";
import DressRehearsalMain from "assets/dress-rehearsal/DressRehearsalMain";
import ChatBot from "chat";

export const ContactPage = () => {
  return (
    <Wrapper>
      <Spacer y={24} />
      <HeaderWrapper>
        <Typography variant="h4" color="systemDark">
          Contact us
        </Typography>
      </HeaderWrapper>

      <Container>
        <LeftSection>
          <ContactForm />
        </LeftSection>

        {/* <RightSection>
          <Spacer x={40}></Spacer>
          <ChatBox>
            <InlineWrapper justifyContent="center">
              <BubbleChat size={48}></BubbleChat>
            </InlineWrapper>

            <h3>CHAT with us</h3>
            <p>
              You can ask our chatbot for help - it's available 24/7.
              <br />
              Our customer service team is also happy to assist. Agent chat
              support: Mon to Sun, 5 am to 8 pm PT.
            </p>
            <Spacer y={32} />
            <Button>Open Chat</Button>
          </ChatBox>
        </RightSection> */}
        <FAQSection>
          <div>
            <DressRehearsalMain />
            <Spacer y={16} />
            <Typography> Stay Connected with us!</Typography>
            <Spacer y={16} />
            <InlineWrapper justifyContent="center">
              <FacebookIcon fill="#6D4E39" color="#FFFAF1" />
              <Spacer x={16} />
              <LineIcon fill="#6D4E39" color="#FFFAF1" />
              <Spacer x={16} />
              <InstragramIcon fill="#6D4E39" color="#FFFAF1" />
              <Spacer x={16} />
              <TiktokIcon fill="#6D4E39" color="#FFFAF1" />
            </InlineWrapper>
          </div>
        </FAQSection>
      </Container>

      <Spacer y={40} />
      <Container>
        <FAQ></FAQ>
      </Container>
      <ChatBot></ChatBot>
    </Wrapper>
  );
};

export default ContactPage;
