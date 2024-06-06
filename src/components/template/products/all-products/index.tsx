import React from "react";
import ProductCard from "../product-card";
import { Wrapper } from "./styles";

import { GET_PRODUCTS, Product } from "graphql/product/getProducts";
import { useQuery } from "@apollo/client";

export const AllProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log("this is data", data);

  return (
    <>
      Collection
      <Wrapper>
        {data?.getProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.productThumbnail}
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

export default AllProducts;
