import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "graphql/product/getProducts";
import React from "react";
import { useParams } from "react-router-dom";
type colorOptionSchema = {
  value: String;
  color: String;
};

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.getProduct;
  return (
    <div>
      <div>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} />
        <p>{product.price}</p>
        <p>{product.description}</p>
        {/* Map through sizes and colors if available */}
        {product.sizes &&
          product.sizes.map((size: string) => <span key={size}>{size}</span>)}
        {product.colors &&
          product.colors.map((color: any) => (
            <span key={color.value} style={{ backgroundColor: color.color }}>
              {color.value}
            </span>
          ))}
        <p>{product.material}</p>
        <p>{product.stock ? "In Stock" : "Out of Stock"}</p>
      </div>
      {/* Display product details here */}
    </div>
  );
};

export default ProductDetail;
