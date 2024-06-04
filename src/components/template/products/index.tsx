import React from "react";
import ProductCard from "../product-card";
import { Wrapper } from "./styles";
import MockProduct2 from "assets/mock-pic/mock_product2.png";
import MockProduct3 from "assets/mock-pic/mock_product3.png";
import MockProduct4 from "assets/mock-pic/mock_product4.png";
import { GET_ALL_PRODUCTS, Product } from "graphql/product/getProducts";
import { useQuery } from "@apollo/client";
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
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  console.log("this is data", data);

  return (
    <>
      Collection
      <Wrapper>
        {data?.getAllProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.imageUrl}
            colorOptions={[
              { value: "black-practive-etiquette", color: "#0C0C0C" },
              { value: "green-practive-etiquette", color: "#909225" },
              { value: "dark-green-practive-etiquette", color: "#748C70" },
            ]}
            detailText="Detail"
            shirtTitle={product.name}
            sizeText="Size: Over size"
            priceText={`THB ${product.price}`}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default Products;
