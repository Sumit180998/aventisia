import React from 'react';

type paginationProps = {
    totalResults: number;
  resultsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const pagination: React.FC<paginationProps> = ({ totalResults, resultsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPageNumbers = () => {
    if (totalPages <= 7) {
      return pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {page}
        </button>
      ));
    }

    return (
      <>
        <button onClick={() => onPageChange(1)} className="px-3 py-1 rounded-md bg-gray-200">1</button>
        {currentPage > 4 && <span className="px-2">...</span>}
        {pageNumbers.slice(Math.max(currentPage - 2, 1), Math.min(currentPage + 1, totalPages)).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages - 3 && <span className="px-2">...</span>}
        <button onClick={() => onPageChange(totalPages)} className="px-3 py-1 rounded-md bg-gray-200">{totalPages}</button>
      </>
    );
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
      >
        &lt;
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-gray-200 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

export default pagination;
