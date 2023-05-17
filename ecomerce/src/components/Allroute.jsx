import React from "react";
import { Box} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Order from "../pages/Order";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";

const Allroute = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<SingleProduct />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Box>
  );
};

export default Allroute;
