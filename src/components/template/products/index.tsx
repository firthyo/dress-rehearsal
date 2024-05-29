import React from "react";
import ProductCard from "../product-card";
import { Wrapper } from "./styles";
import MockProduct2 from "assets/mock-pic/mock_product2.png";
import MockProduct3 from "assets/mock-pic/mock_product3.png";
import MockProduct4 from "assets/mock-pic/mock_product4.png";
const colorOptions = [
  { value: "black-practive-etiquette", color: "#0C0C0C" },
  { value: "green-practive-etiquette", color: "#909225" },
  { value: "drak-green-practive-etiquette", color: "#748C70" },
];

const productDetails = {
  altText: "Practice Etiquette T-shirt",
  detailText: "Detail",
  descriptions: [
    { variant: "tags-medium", text: "Practice etiquette T-shirt", spacerY: 8 },
    { variant: "label", text: "Size: Over size", spacerY: 8 },
    { variant: "h4", text: "THB 900", spacerY: 16 },
  ],
};

export const Products = () => {
  return (
    <>
      Collection
      <Wrapper>
        <ProductCard
          image={MockProduct2}
          colorOptions={colorOptions}
          detailText="Detail"
          shirtTitle="Practice Etiquette T-shirt"
          sizeText="Size: Over size"
          priceText="THB 900"
        />
        <ProductCard
          image={MockProduct3}
          colorOptions={colorOptions}
          detailText="Detail"
          shirtTitle="Divertimento T-shirt"
          sizeText="Size: Over size"
          priceText="THB 900"
        />
        <ProductCard
          image={MockProduct4}
          colorOptions={colorOptions}
          detailText="Detail"
          shirtTitle="Virtoso T-shirt"
          sizeText="Size: Over size"
          priceText="THB 900"
        />
      </Wrapper>
    </>
  );
};

export default Products;
