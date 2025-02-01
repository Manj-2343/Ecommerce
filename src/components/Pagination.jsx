// components/Pagination.js
import React from "react";
import { Button } from "./card";

const Pagination = ({
  filteredProducts,
  productsPerPage,
  currentPage,
  handlePaginationClick,
}) => {
  return (
    <div className="flex justify-center mt-4">
      {[
        ...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys(),
      ].map((page) => (
        <Button
          key={page}
          onClick={() => handlePaginationClick(page + 1)}
          className="mx-1"
        >
          {page + 1}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
