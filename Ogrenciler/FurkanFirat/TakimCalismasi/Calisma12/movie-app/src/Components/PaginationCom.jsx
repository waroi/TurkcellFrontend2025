import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationCom({
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <Pagination className="mt-3">
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {[...Array(totalPages).keys()].slice(0, Infinity).map((num) => (
        <Pagination.Item
          key={num + 1}
          active={num + 1 === currentPage}
          onClick={() => handlePageChange(num + 1)}
        >
          {num + 1}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
}
