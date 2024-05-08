import React from "react";
import DressRehearsalLogo from "assets/dress-rehearsal/DressRehearsalLogo";
import { FirstSectionWrapper, Wrapper } from "./styles";
import LoginForm from "components/form/login-form";
import SignUpForm from "components/form/sign-up-form";

const Home = () => {
  return (
    <Wrapper>
      <FirstSectionWrapper>
        {/* <DressRehearsalLogo /> */}

        <SignUpForm></SignUpForm>
        <LoginForm></LoginForm>
      </FirstSectionWrapper>
    </Wrapper>
  );
};

export default Home;
