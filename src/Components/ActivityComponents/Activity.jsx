import { Activity } from "lucide-react";
import activitydata from "./ActivityData"
import ActivityFooter from "./ActivityFooter";
import usePagination from "./Hooks/Pagination";

const Activity_log = () => {
  const {
    currentPage,
    setCurrentPage,
    recordsPerPage,
    changeRecords,
    firstIndex,
    lastIndex,
    currentRecords,
    totalPages,
  } = usePagination(activitydata);

  return (
    <>
      <div>
        {/* header  */}
        <div className="header flex gap-2 mb-3">
          <Activity />
          <h1 className="text-3xl font-bold">Activity log</h1>
        </div>

        {/* Action_log Table  */}
        <div className="main overflow-x-auto rounded-md">
          <table className="w-full ">

            {/* table head  */}

            <thead className="bg-gray-200">
              <tr className="text-left  text-gray-800">
                <th className="px-6 py-4">User</th>
                <th>Action</th>
                <th>Date</th>
              </tr>
            </thead>

            {/* tablebody  */}
            <tbody className="w-full rounded-md">

              {currentRecords.map((item, index) => (

                <tr
                  key={index}
                  className="hover:bg-gray-50 transition bg-white">
                  <td className="px-6 py-5">{item.user} </td>
                  <td>{item.action}</td>
                  <td>{item.date} </td>
                </tr>
              ))}
            </tbody>

          </table>
          {/* footer  */}

          <ActivityFooter
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            recordsPerPage={recordsPerPage}
            changeRecords={changeRecords}
            firstIndex={firstIndex}
            lastIndex={lastIndex}
            totalPages={totalPages}
            activityData={activitydata}
          />
        </div>
      </div>
    </>
  );
};
export default Activity_log;