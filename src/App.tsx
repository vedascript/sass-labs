import { useState } from "react";
import "./App.css";
import useFetchData from "./useFetchData";
import LoadingSpinner from "./LoadingSpinner";
import PaginationControl from "./PaginationControl";
import ErrorMessage from "./ErrorMessage";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const App = () => {
  const { data, errorMessage, isLoading } = useFetchData();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recordsPerPage = 5;

  const lastRecordIndex = currentPage * recordsPerPage;
  const firstRecordIndex = lastRecordIndex - recordsPerPage;
  const currentRecords = data.slice(firstRecordIndex, lastRecordIndex);

  const totalPages = Math.ceil(data.length / recordsPerPage);

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="table-container">
      <table className="styled-table">
        <TableHeader />

        {isLoading ? (
          <LoadingSpinner />
        ) : errorMessage ? (
          <ErrorMessage errorMessage={errorMessage} />
        ) : (
          <TableBody rows={currentRecords} />
        )}
      </table>

      <PaginationControl
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default App;
