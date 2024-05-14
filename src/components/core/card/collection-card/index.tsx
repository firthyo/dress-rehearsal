import React from "react";
import { Container } from "./styles";
import collectionTest from "assets/dress-rehearsal/collection-test.jpeg";
import { Typography } from "components/core/typography";
import { Spacer } from "components/core/spacer";

type Props = {
  backgroundUrl?: string;
  title?: string;
  button?: JSX.Element;
  color?: string;
};

export const CollectionCard: React.FC<Props> = ({
  backgroundUrl = collectionTest,
  title,
  button,
  color,
}) => {
  return (
    <Container backgroundUrl={backgroundUrl}>
      <Typography variant="h1" customColor={color}>
        {title}
      </Typography>
      <Spacer y={12} />
      {button}
    </Container>
  );
};

export default CollectionCard;
