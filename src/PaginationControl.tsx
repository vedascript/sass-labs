import { FC } from "react";

type PaginationControlProps = {
  currentPage: number;
  totalPages: number;
  handlePrevious: () => void;
  handleNext: () => void;
};

const PaginationControl: FC<PaginationControlProps> = ({
  currentPage,
  totalPages,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div className="pagination-controls">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
