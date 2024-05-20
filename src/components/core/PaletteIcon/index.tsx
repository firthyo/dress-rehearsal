import React from "react";

import MailFill from "assets/icons/common/mail-fill";
import PaletteBankground from "./PaletteBankground";
import { Wrapper } from "./styles";

type PaletteIconProps = {
  icon: JSX.Element;
};

export const PaletteIcon: React.FC<PaletteIconProps> = ({ icon }) => {
  return (
    <Wrapper>
      <PaletteBankground>{icon}</PaletteBankground>
    </Wrapper>
  );
};

export default PaletteIcon;
