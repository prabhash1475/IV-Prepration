import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";

const SingleProduct = () => {
  const singleProduct = useSelector((store) => store.currentProduct);
  console.log(singleProduct);
  return (
    <Box>
      {/* {singleProduct.map((el, index) => {
        return <ProductCard product={el} />;
      })} */}
    </Box>
  );
};

export default SingleProduct;
