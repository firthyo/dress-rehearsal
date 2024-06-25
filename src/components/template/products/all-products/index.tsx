import React from "react";
import ProductCard from "../product-card";
import { Wrapper } from "./styles";
import { FILTER_PRODUCTS, Product } from "graphql/product/getProducts";
import { useQuery } from "@apollo/client";
import { Divider, Grid } from "@mui/material";
import {
  DropdownMenu,
  FilterDrawer,
  InlineWrapper,
  Spacer,
  Typography,
} from "components/core";
import { useFilters } from "../../../../context/FilterContext"; // Adjust the path as needed

export const AllProducts = () => {
  const { filters } = useFilters();

  const { loading, error, data } = useQuery(FILTER_PRODUCTS, {
    variables: { filters },
  });
  console.log("this is data", data);

  const handleClose = () => {
    // Close menu logic
  };

  const dropdownContent = [
    {
      title: <Typography>Newest</Typography>,
      action: handleClose,
    },
    {
      title: <Typography>Price: High - Low</Typography>,
      action: handleClose,
    },
    {
      title: <Typography>Price: Low - High</Typography>,
      action: handleClose,
    },
    {
      title: <Typography>Alphabetically, A-Z</Typography>,
      action: handleClose,
    },
    {
      title: <Typography>Alphabetically, Z-A</Typography>,
      action: handleClose,
    },
  ];

  return (
    <Wrapper>
      <Spacer y={20} />
      <Typography variant="h3" color={"primary"}>
        NEW COLLECTION
      </Typography>
      <InlineWrapper justifyContent="space-between">
        <FilterDrawer />
        <DropdownMenu
          buttonText={"Sort"}
          items={dropdownContent}
        ></DropdownMenu>
      </InlineWrapper>

      <Spacer y={16} />
      <Divider></Divider>
      <Spacer y={32} />
      <Grid container spacing={2} justifyContent="left">
        {data?.filterProducts.map((product: Product) => (
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
