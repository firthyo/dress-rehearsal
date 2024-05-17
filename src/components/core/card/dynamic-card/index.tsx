import React from "react";
import { Container } from "./styles";
import collectionTest from "assets/dress-rehearsal/collection-test.jpeg";
import { Typography } from "components/core/typography";
import { Spacer } from "components/core/spacer";
import { MyTheme } from "styles/Theme";

type Props = {
  backgroundUrl?: string;
  title?: string;
  button?: JSX.Element;
  color?: keyof MyTheme["colors"];
};

export const DCollectionCard: React.FC<Props> = ({
  backgroundUrl = collectionTest,
  title,
  button,
  color,
}) => {
  return (
    <Container backgroundUrl={backgroundUrl}>
      <Typography variant="h1" color={color}>
        {title}
      </Typography>
      <Spacer y={12} />
      {button}
    </Container>
  );
};

export default DCollectionCard;
