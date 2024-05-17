import React from "react";

import MailFill from "assets/icons/common/mail-fill";
import PaletteBankground from "./PaletteBankground";
import { Wrapper } from "./styles";

export const PaletteIcon = () => {
  return (
    <Wrapper>
      <PaletteBankground>
        <MailFill size="40" color="#684F3B"></MailFill>
      </PaletteBankground>
    </Wrapper>
  );
};

export default PaletteIcon;
