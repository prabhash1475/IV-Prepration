import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <Box id="product-container">
      <Image src={product.image} />
      <Box>
        <Heading>{product.title}</Heading>
        <Heading>{product.category}</Heading>
        <Heading>{product.price}</Heading>
        <Heading>{product.title}</Heading>
      </Box>
    </Box>
  );
};
