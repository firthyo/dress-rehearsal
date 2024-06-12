import React from "react";
import ProductCard from "../product-card";
import { Wrapper } from "./styles";

import { GET_PRODUCTS, Product } from "graphql/product/getProducts";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

export const AllProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  console.log("this is data test", data);

  return (
    <Wrapper>
      {/* Collection */}
      <Grid container spacing={2} justifyContent="space-between">
        {data?.getProducts.map((product: Product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            justifyContent="center"
            style={{ display: "flex", justifyContent: "center" }}
          >
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
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default AllProducts;
