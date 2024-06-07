import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

import { Button, InlineWrapper, Spacer, Typography } from "components/core";
import RadioColorSelector from "components/core/radioColorSelector";

import { useNavigate } from "react-router-dom";
import { ArrowRight } from "assets/icons";
import { useTheme } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";

// Define the props interface if using TypeScript
interface ProductCardProps {
  image: string;
  colorOptions: Array<{
    value: string;
    color: string;
  }>;
  detailText: string;
  shirtTitle: string;
  sizeText: string;
  priceText: string;
  id: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  colorOptions,
  detailText,
  shirtTitle,
  sizeText,
  priceText,
  id,
}) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = () => {
    navigate(`/shop/${id}`); // Navigate to product detail page
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div onClick={handleCardClick}>
      <Card
        sx={{
          width: isMobile ? "100%" : 345, // Responsive width
          boxShadow: isMobile ? 0 : 1, // Reduce shadow on smaller screens
        }}
      >
        <CardMedia
          component="img"
          height="380"
          image={image}
          alt="Product Image"
        />
        <CardContent>
          <InlineWrapper justifyContent="space-between">
            <RadioColorSelector options={colorOptions} />
            <Button type="button" variant="none">
              <InlineWrapper>
                <Typography variant="p-detail" color="systemGrey">
                  {detailText}
                </Typography>

                <ArrowRight />
              </InlineWrapper>
            </Button>
          </InlineWrapper>
          <Spacer y={8} />
          <InlineWrapper justifyContent="flex-start">
            <Typography variant="tags-medium" color="systemDark">
              {shirtTitle}
            </Typography>
          </InlineWrapper>
          <Spacer y={8} />
          <InlineWrapper justifyContent="flex-start">
            <Typography variant="label" color="systemDark">
              {sizeText}
            </Typography>
          </InlineWrapper>
          <Spacer y={16} />
          <InlineWrapper justifyContent="flex-start">
            <Typography variant="p-articles" color="systemDark">
              {priceText}
            </Typography>
          </InlineWrapper>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
