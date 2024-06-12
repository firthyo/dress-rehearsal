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
  fullWidth?: boolean;
};

export const CollectionCard: React.FC<Props> = ({
  backgroundUrl = collectionTest,
  title,
  button,
  color,
  fullWidth = false,
}) => {
  return (
    <Container backgroundUrl={backgroundUrl} fullWidth={fullWidth}>
      <Typography variant="titles" color={color}>
        {title}
      </Typography>
      <Spacer y={12} />
      {button}
    </Container>
  );
};

export default CollectionCard;
