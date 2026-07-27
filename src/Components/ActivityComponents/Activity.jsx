import React from "react";
import { Activity } from "lucide-react";

const Activity_log = ({ setOpenModal }) => {
    const activityData = [
        {
            id: 1,
            user: "admin@gmail.com",
            action: "User logged in",
            date: "2026-07-26 22:45:46",
        },
        {
            id: 2,
            user: "sandipdolar221@gmail.com",
            action: "User logged out",
            date: "2026-07-26 22:45:38",
        },
        {
            id: 3,
            user: "admin@gmail.com",
            action: "Added Manager",
            date: "2026-07-26 20:10:25",
        },
        {
            id: 4,
            user: "manager@gmail.com",
            action: "Updated Product",
            date: "2026-07-25 18:15:10",
        },
        {
            id: 5,
            user: "admin@gmail.com",
            action: "Deleted Product",
            date: "2026-07-25 17:30:40",
        },
    ];

    const actionStyle = (action) => {
        if (action.includes("logged in"))
            return "bg-green-100 text-green-700";

        if (action.includes("logged out"))
            return "bg-red-100 text-red-700";

        if (action.includes("Added"))
            return "bg-blue-100 text-blue-700";

        if (action.includes("Updated"))
            return "bg-yellow-100 text-yellow-700";

        if (action.includes("Deleted"))
            return "bg-gray-200 text-gray-700";

        return "bg-gray-100 text-gray-600";
    };

    return (
        <div className="mt-2">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <Activity size={22} className="text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Activity Log
                </h1>
            </div>

            {/* Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                User
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Action
                            </th>

                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                                Date
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {activityData.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <td className="px-6 py-5 font-medium text-gray-800">
                                    {item.user}
                                </td>

                                <td className="px-6 py-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${actionStyle(
                                            item.action
                                        )}`}
                                    >
                                        {item.action}
                                    </span>
                                </td>

                                <td className="px-6 py-5 text-gray-500">
                                    {item.date}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-4">
                    <p className="text-sm text-gray-500">
                        Showing 1 to {activityData.length} of {activityData.length} records
                    </p>

                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Activity_log;