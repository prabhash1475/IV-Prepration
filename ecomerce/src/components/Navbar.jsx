import { Box, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Box
      p={6}
      display={"flex"}
      fontSize={"lg"}
      fontWeight={"extrabold"}
      justifyContent={"space-evenly"}
      bg={"teal.400"}
    >
      <Box>
        <Link to="/">Products </Link>
      </Box>
      <Box>
        <Link to="/order">Order</Link>
      </Box>
      <Box>
        <Link to="/cart">Cart</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
