import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Reducer/action";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { Pagination } from "../components/Pagination";
import { Functionality } from "../components/Functionality";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product);
  const filteredData = useSelector((store) => store.filteredData);

  // pagination
  const [page, setPage] = useState(1);
  const perPage = 12;
  const totalPages = Math.ceil(filteredData.length / perPage);

  let end = page * perPage;
  let start = end - perPage;

  let paginatedProducts = filteredData.slice(start, end);

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
    <>
      <Functionality />
      <SimpleGrid columns={4} gap={2}>
        {paginatedProducts.map((el, index) => {
          return <ProductCard product={el} />;
        })}
      </SimpleGrid>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default Products;
