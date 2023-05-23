import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, sortProduct } from "../Reducer/action";

export const Functionality = () => {
  const dispatch = useDispatch();
  let products = useSelector((store) => store.product);
  let filteredData = useSelector((store) => store.filteredData);

  function handleFilter(e) {
    let filteredData = products.filter((el) => {
      return el.category === e.target.value;
    });
    dispatch(filterProduct(filteredData));
  }

  //   /SORTING

  function handleSort(e) {
    const query = e.target.value;

    if (query === "asc") {
      filteredData.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      filteredData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    let sortedArray = [...filteredData];
    dispatch(sortProduct(sortedArray));
  }

  return (
    <Box>
      <Box>
        <Select placeholder="Seleclt option" onChange={handleFilter}>
          <option value="kids">Kids</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="homedecor">Homedecore</option>
        </Select>
      </Box>
      <Box>
        <Select placeholder="Seleclt option" onChange={handleSort}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </Box>
    </Box>
  );
};
