import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addCurrent } from "../Reducer/action";
import { useNavigate } from "react-router";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function addCurrentProduct() {
    dispatch(addCurrent(product));
    navigate(`/product/${product.id}`);
  }

  return (
    <Box
      //   border={"1px solid red"}
      display={"flex"}
      justifyContent={"center"}
      textAlign={"left"}
      boxShadow={"lg"}
      id="product-container"
      onClick={addCurrentProduct}
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
