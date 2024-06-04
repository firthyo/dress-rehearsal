import React from "react";
import DressRehearsalLogo from "assets/dress-rehearsal/DressRehearsalLogo";

import { CollectionCard } from "components/core/card/collection-card";
import Spacer from "components/core/spacer";
import Button from "components/core/button";
import ShoppingCartIcon from "assets/icons/common/shopping-cart-icon";
import { Typography } from "components/core/typography";
import collectionTest2 from "assets/dress-rehearsal/collection-test2.jpeg";
import TryLessFormalLogo from "assets/logo/TryLessFormalLogo";
import collectionTest3 from "assets/dress-rehearsal/collection-test3.jpeg";

import {
  FirstSectionWrapper,
  Wrapper,
  CollectionWrapper,
  CardWrapper,
} from "./styles";
import { InlineWrapper } from "components/core/inline-wrapper";
import Footer from "components/core/Footer";
import { CustomizedDialogs } from "components/core";

export const HomePage = () => {
  return (
    <Wrapper>
      <FirstSectionWrapper>
        <DressRehearsalLogo />
      </FirstSectionWrapper>
      <CollectionWrapper>
        <div
          style={{
            maxWidth: "1320px",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          <Typography variant="h1">Our Collection</Typography>
          <Spacer y={32} />
        </div>

        <CardWrapper>
          <CollectionCard
            title="Practice etiquette"
            color="systemLight"
            button={
              <Button
                type="button"
                variant="outlined"
                customColor="#fff"
                borderRadius="large"
              >
                <ShoppingCartIcon color="#fff" />
                <Spacer x={8} />
                <Typography color="systemLight"> {"Shop now"}</Typography>
              </Button>
            }
          />
          <Spacer x={40} />
          <CollectionCard
            title="Divertimento"
            backgroundUrl={collectionTest2}
            color="systemLight"
            button={
              <Button
                type="button"
                variant="outlined"
                customColor="#fff"
                borderRadius="large"
              >
                <ShoppingCartIcon color="#fff" />
                <Spacer x={8} />
                <Typography color="systemLight"> {"Shop now"}</Typography>
              </Button>
            }
          />
        </CardWrapper>
        <Spacer y={36} />
        <CardWrapper>
          <CollectionCard
            title="Virtuoso"
            backgroundUrl={collectionTest3}
            color="systemLight"
            fullWidth={true}
            button={
              <Button
                type="button"
                variant="outlined"
                customColor="#fff"
                borderRadius="large"
              >
                <ShoppingCartIcon color="#fff" />
                <Spacer x={8} />
                <Typography color="systemLight"> {"Shop now"}</Typography>
              </Button>
            }
          />
        </CardWrapper>
        <Spacer y={120} />
        <InlineWrapper justifyContent="center">
          <TryLessFormalLogo />
        </InlineWrapper>

        <Spacer y={90} />
        <Typography color="primary" variant="p-articles">
          Our brand is like your favorite song in clothing form – rich in detail
          and full of soul. It's about waking up your spirit and letting the
          magic of what you wear transform your day. Dive into what makes you
          unique and discover how music and style can dance together in perfect
          harmony.
        </Typography>
      </CollectionWrapper>
      <Spacer y={120} />
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
