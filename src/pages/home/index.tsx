import React, { useState } from "react";
import DressRehearsalLogo from "assets/dress-rehearsal/DressRehearsalLogo";
import { FirstSectionWrapper, Wrapper } from "./styles";
import CloseIcon from "assets/icons/common/close";
import Modal from "components/core/modal";

const Home = () => {
  return (
    <Wrapper>
      <FirstSectionWrapper>
        <DressRehearsalLogo />
      </FirstSectionWrapper>
      <DressRehearsalLogo />
      <DressRehearsalLogo />
    </Wrapper>
  );
};

export default Home;
