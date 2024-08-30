import React from "react";
import StoreImage from "assets/dress-rehearsal/store.png";
import TryLessFormalLogo from "assets/logo/TryLessFormalLogo";
import {
  Container,
  FormContainer,
  GridContainer,
  GridItem,
  ImageWrapper,
  OurStory,
  RowWrapper,
  Subscribe,
  Title,
  WhatWeStandFor,
  Wrapper,
} from "./styles";
import {
  Button,
  Footer,
  InlineWrapper,
  Spacer,
  TextFieldForm,
  Typography,
} from "components/core";
import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";

type SubscribeForm = {
  email: string;
};

export const AboutUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeForm>();

  return (
    <Wrapper>
      <Container>
        <Spacer y={48} />
        <WhatWeStandFor>
          <Typography variant="highlight-text" color="primary">
            About our store
          </Typography>

          <Divider />
          <Spacer y={32} />
          <ImageWrapper>
            <img src={StoreImage} alt="Store" />
          </ImageWrapper>
          <div style={{ display: "flex" }}>
            <Spacer y={12} />
            <OurStory>
              <Typography variant="highlight-text" color="surface">
                Our Story
              </Typography>
              <Typography variant="p-articles" color="surface">
                Dress Rehearsal is where the heartbeat of fashion meets the
                rhythm of music. These two worlds collide to create something
                that speaks directly to your soul.
              </Typography>
              <Typography variant="p-articles" color="surface">
                We believe in setting the stage for life's big moments, ensuring
                you're always dressed for an unforgettable performance.
              </Typography>
            </OurStory>
          </div>
        </WhatWeStandFor>
        <Spacer y={48} />

        <WhatWeStandFor>
          <Typography variant="highlight-text">What we stand for</Typography>

          <Divider />

          <GridContainer>
            <GridItem>
              <Typography variant="page-subtitle"> Feel Every Beat</Typography>
              <Spacer y={12} />
              <Typography variant="p-detail">
                Our clothes bring the vibe of your favorite tunes to life.
                Imagine feeling the beat of music with every move you make –
                that's what we offer.
              </Typography>
            </GridItem>

            <GridItem>
              <Typography variant="page-subtitle">
                Show Your True Colors
              </Typography>
              <Spacer y={12} />
              <Typography variant="p-detail">
                Wear your heart on your sleeve and let your style sing your
                personal anthem. Our clothes are more than just attire; they're
                a way to express your unique rhythm and connection to music.
              </Typography>
            </GridItem>
            <GridItem>
              <Typography variant="page-subtitle">
                Crafted with Passion
              </Typography>
              <Spacer y={12} />
              <Typography variant="p-detail">
                Every creation embodies a masterpiece of detail and dedication,
                emphasizing quality that both looks and feels outstanding.
              </Typography>
            </GridItem>
          </GridContainer>

          <Divider />
        </WhatWeStandFor>
      </Container>
      <div>
        <Spacer y={100} />
        <TryLessFormalLogo></TryLessFormalLogo>
        <Spacer y={100} />
      </div>

      <Subscribe>
        <Title>Stay in Style</Title>

        <Typography variant="p-detail">
          Join our newsletter for exclusive fashion tips, updates, and more.
        </Typography>
        <Typography variant="p-detail">
          Be the first to know about new arrivals and sales!
        </Typography>
        <Spacer y={24} />
        <FormContainer>
          <RowWrapper>
            <InlineWrapper>
              <TextFieldForm
                variant="outlined"
                label="Email"
                {...register("email", { required: true })}
                fullWidth
              />
              <Button type="button" borderRadius="none" width={120} height={56}>
                Submit
              </Button>
            </InlineWrapper>
          </RowWrapper>
        </FormContainer>
      </Subscribe>
      <Footer></Footer>
    </Wrapper>
  );
};

export default AboutUs;
