import PracticeEtiquette from "assets/dress-rehearsal/Practice-etiquette";
import React from "react";
import {
  CenteredLogo,
  CollectionWrapperMoblie,
  MobileWrapper,
  TextWrapper,
} from "./styles";
import DressRehearsalShadow from "assets/dress-rehearsal/DressRehearsalShadow.svg";
import PracticeEtiquetteCoffee from "assets/dress-rehearsal/practice-etiquette-coffee.svg";
import { Carousel } from "components/core/carousel";
import {
  Button,
  CollectionCard,
  Footer,
  InlineWrapper,
  Spacer,
  Typography,
} from "components/core";
import ShoppingCartIcon from "assets/icons/common/shopping-cart-icon";
import TryLessFormalLogo from "assets/logo/TryLessFormalLogo";
import collectionTest3 from "assets/dress-rehearsal/collection-test3.jpeg";
import collectionTest2 from "assets/dress-rehearsal/collection-test2.jpeg";

export const HomeMobile = () => {
  const slides = [
    <CollectionCard
      title="Practice etiquette"
      color="systemLight"
      button={
        <Button
          type="button"
          variant="outlined"
          customColor="#fff"
          borderRadius="none"
        >
          <ShoppingCartIcon color="#fff" />
          <Spacer x={8} />
          <Typography color="systemLight"> {"Shop now"}</Typography>
        </Button>
      }
    />,
    <CollectionCard
      title="Practice etiquette"
      color="systemLight"
      backgroundUrl={collectionTest2}
      button={
        <Button
          type="button"
          variant="outlined"
          customColor="#fff"
          borderRadius="none"
        >
          <ShoppingCartIcon color="#fff" />
          <Spacer x={8} />
          <Typography color="systemLight"> {"Shop now"}</Typography>
        </Button>
      }
    />,
    <CollectionCard
      title="Practice etiquette"
      color="systemLight"
      backgroundUrl={collectionTest3}
      button={
        <Button
          type="button"
          variant="outlined"
          customColor="#fff"
          borderRadius="none"
        >
          <ShoppingCartIcon color="#fff" />
          <Spacer x={8} />
          <Typography color="systemLight"> {"Shop now"}</Typography>
        </Button>
      }
    />,
    <CollectionCard
      title="Practice etiquette"
      color="systemLight"
      button={
        <Button
          type="button"
          variant="outlined"
          customColor="#fff"
          borderRadius="none"
        >
          <ShoppingCartIcon color="#fff" />
          <Spacer x={8} />
          <Typography color="systemLight"> {"Shop now"}</Typography>
        </Button>
      }
    />,
  ];
  return (
    <>
      <MobileWrapper backgroundImage={PracticeEtiquetteCoffee}>
        <img
          style={{ width: "80%" }}
          src={DressRehearsalShadow}
          alt="divertimento-logo"
        />
      </MobileWrapper>
      <CollectionWrapperMoblie>
        <Typography variant="h1">Our Collection</Typography>
      </CollectionWrapperMoblie>
      <Carousel slides={slides}></Carousel>
      <Spacer y={24} />
      <div>
        <InlineWrapper justifyContent="center">
          <TryLessFormalLogo width={214} height={99} />
        </InlineWrapper>
      </div>
      <TextWrapper>
        <Spacer y={24} />
        <Typography color="primary" variant="p-articles">
          Our brand is like your favorite song in clothing form – rich in detail
          and full of soul. It's about waking up your spirit and letting the
          magic of what you wear transform your day.
        </Typography>
      </TextWrapper>
      <Footer></Footer>
    </>
  );
};

export default HomeMobile;
