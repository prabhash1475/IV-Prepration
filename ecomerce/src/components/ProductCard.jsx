import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <Box
      //   border={"1px solid red"}
      display={"flex"}
      justifyContent={"center"}
      textAlign={"left"}
      id="product-container"
    >
      <Box>
        <Image src={product.image} />
        <Heading fontSize={"15px"}>{product.title}</Heading>
        <Heading fontSize={"15px"}>{product.category}</Heading>
        <Heading fontSize={"15px"}>Price:{product.price}</Heading>
        <Heading fontSize={"15px"}>{product.title}</Heading>
      </Box>
    </Box>
  );
};
