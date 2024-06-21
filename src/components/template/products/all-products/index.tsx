import React from "react";
import ProductCard from "../product-card";
import { Wrapper } from "./styles";

import { GET_PRODUCTS, Product } from "graphql/product/getProducts";
import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { FilterDrawer, Spacer, Typography } from "components/core";

export const AllProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  return (
    <Wrapper>
      {/* Collection */}
      <Spacer y={20} />
      <Typography variant="titles" color={"primary"}>
        NEW COLLECTION
      </Typography>
      <Spacer y={20} />
      <FilterDrawer></FilterDrawer>

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
              colorOptions={product.variants.map((variant) => ({
                value: variant.value,
                color: variant.color,
              }))}
              detailText="Detail"
              shirtTitle={product.name}
              sizeText="Size: Over size"
              priceText={`THB ${product.price}`}
            />
          </Grid>
        ))}
      </Grid>
      <Spacer y={20}></Spacer>
    </Wrapper>
  );
};

export default AllProducts;
