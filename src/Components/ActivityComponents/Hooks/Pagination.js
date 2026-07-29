import { useState } from "react";

const usePagination = (data, defaultRecords = 5) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(defaultRecords);

  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = firstIndex + recordsPerPage;

  const currentRecords = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const changeRecords = (e) => {
  setRecordsPerPage(Number(e.target.value));
  setCurrentPage(1);
};
  return {
    currentPage,
    setCurrentPage,
    recordsPerPage,
    changeRecords,
    setRecordsPerPage,
    firstIndex,
    lastIndex,
    currentRecords,
    totalPages,
  };
};

export default usePagination;