import React from "react";
import DressRehearsalLogo from "assets/dress-rehearsal/DressRehearsalLogo";

import { CollectionCard } from "components/core/card/collection-card";
import Spacer from "components/core/spacer";
import Button from "components/core/button";
import ShoppingCartIcon from "assets/icons/common/shopping-cart-icon";
import { Typography } from "components/core/typography";
import collectionTest2 from "assets/dress-rehearsal/collection-test2.jpeg";

import {
  FirstSectionWrapper,
  Wrapper,
  CollectionWrapper,
  CardWrapper,
} from "./styles";
const Home = () => {
  return (
    <Wrapper>
      <FirstSectionWrapper>
        <DressRehearsalLogo />
      </FirstSectionWrapper>

      <CollectionWrapper>
        <Typography variant="h1">Our Collection</Typography>
        <Spacer y={32} />
        <CardWrapper>
          <CollectionCard
            title="Practice etiquette"
            color="#fff"
            button={
              <Button
                type="button"
                variant="outlined"
                customColor="#fff"
                borderRadius="large"
              >
                <ShoppingCartIcon color="#fff" />
                <Spacer x={8} />
                <Typography customColor="#fff"> {"Shop now"}</Typography>
              </Button>
            }
          />
          <CollectionCard
            title="Practice etiquette"
            backgroundUrl={collectionTest2}
            color="#fff"
            button={
              <Button
                type="button"
                variant="outlined"
                customColor="#fff"
                borderRadius="large"
              >
                <ShoppingCartIcon color="#fff" />
                <Spacer x={8} />
                <Typography customColor="#fff"> {"Shop now"}</Typography>
              </Button>
            }
          />
        </CardWrapper>
      </CollectionWrapper>
    </Wrapper>
  );
};

export default Home;
