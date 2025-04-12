import React from "react";

const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
  const totalPage = Math.ceil(blogs.length / pageSize);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPage) onPageChange(currentPage + 1);
  };

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPage }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={`px-3 py-1 border ${
            pageNumber === currentPage ? "bg-orange-500 text-white" : ""
          }`}
          key={pageNumber}
        >
          <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
        </li>
      )
    );
  };

  return (
    <div className="mt-6 flex justify-center">
      <ul className="flex items-center gap-2">
        <li>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
        </li>

        {renderPaginationLinks()}

        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPage}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
