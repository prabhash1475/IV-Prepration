import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Reducer/action";
import { Box } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getProduct());
    // apiCall();
  }, []);

  /**  below method is without thunk **/
  // async function apiCall() {
  //   let data = await fetch(
  //     `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
  //   );
  //   data = await data.json();

  //   dispatch(getProduct(data.data));
  // }

  return (
    <Box>
      {products.map((el, index) => {
        return <ProductCard product={el} />;
      })}
    </Box>
  );
};

export default Products;
