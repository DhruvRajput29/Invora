const ActivityFooter = ({
  currentPage,
  setCurrentPage,
  recordsPerPage,
  changeRecords,
  totalPages,
  firstIndex,
  lastIndex,
  activityData,
}) => {
  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4 rounded-b-xl">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Record Selector */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <span>Show</span>

          <select
            value={recordsPerPage}
            onChange={changeRecords}
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>

          <span>Records</span>
        </div>

        {/* Pagination */}
        <div className="flex items-center gap-2">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg font-medium transition ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>

        </div>

      </div>

      {/* Showing Entries */}
      <div className="mt-4 text-sm text-gray-600">
        Showing{" "}
        <span className="font-semibold">{firstIndex + 1}</span> to{" "}
        <span className="font-semibold">
          {Math.min(lastIndex, activityData.length)}
        </span>{" "}
        of{" "}
        <span className="font-semibold">{activityData.length}</span> entries
      </div>

    </div>
  );
};

export default ActivityFooter;