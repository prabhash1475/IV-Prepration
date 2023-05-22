import { Box, Button } from "@chakra-ui/react";
import React from "react";

export const Pagination = ({ page, setPage, totalPages }) => {
  return (
    <Box className="btn-group" gap={4}>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </Button>
      <Button>{page}</Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
    </Box>
  );
};
