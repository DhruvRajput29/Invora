import {
  Search,
  Filter,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

const invoices = [
  {
    id: 1,
    invoice: "INV-00001",
    customer: "Sandip",
    status: "Paid",
    date: "21/07/2026",
    dueDate: "21/07/2026",
    amount: "₹2,500",
  },
  {
    id: 2,
    invoice: "INV-00002",
    customer: "Dhruv",
    status: "Pending",
    date: "22/07/2026",
    dueDate: "25/07/2026",
    amount: "₹1,200",
  },
  {
    id: 3,
    invoice: "INV-00003",
    customer: "Yug",
    status: "Overdue",
    date: "18/07/2026",
    dueDate: "20/07/2026",
    amount: "₹5,800",
  },
];

const statusColor = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Overdue: "bg-red-100 text-red-700",
};

const InvoiceListing = () => {
    return(
        <>
           <div className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between p-5">

                    <div className="relative w-80">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search invoice..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    </div>

                    <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50">
                    <Filter size={18} />
                    Filter
                    </button>

                </div>

                {/* Table */}

                <div className="overflow-x-auto">

                    <table className="w-full">

                    <thead className="bg-gray-200">

                        <tr className="text-left text-sm text-gray-500">

                        <th className="px-6 py-4">
                            <input type="checkbox" />
                        </th>

                        <th className="px-6 py-4">Invoice #</th>

                        <th className="px-6 py-4">Customer</th>

                        <th className="px-6 py-4">Status</th>

                        <th className="px-6 py-4">Date</th>

                        <th className="px-6 py-4">Due Date</th>

                        <th className="px-6 py-4 text-right">Amount</th>

                        <th className="px-6 py-4 text-center">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {invoices.map((invoice) => (

                        <tr
                            key={invoice.id}
                            className="hover:bg-gray-50 transition"
                        >
                            <td className="px-6 py-5">
                            <input type="checkbox" />
                            </td>

                            <td className="px-6 py-5 font-medium text-blue-600">
                            {invoice.invoice}
                            </td>

                            <td className="px-6 py-5">
                            {invoice.customer}
                            </td>

                            <td className="px-6 py-5">

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[invoice.status]}`}
                            >
                                {invoice.status}
                            </span>

                            </td>

                            <td className="px-6 py-5">
                            {invoice.date}
                            </td>

                            <td className="px-6 py-5">
                            {invoice.dueDate}
                            </td>

                            <td className="px-6 py-5 text-right font-semibold">
                            {invoice.amount}
                            </td>

                            <td className="px-6 py-5">

                            <div className="flex justify-center gap-3">

                                <button className="text-blue-600 hover:text-blue-700">
                                <Eye size={18} />
                                </button>

                                <button className="text-red-600 hover:text-red-700">
                                <Trash2 size={18} />
                                </button>

                            </div>

                            </td>

                        </tr>

                        ))}

                    </tbody>

                    </table>

                </div>

                {/* Footer */}

                <div className="flex justify-between items-center p-5  text-sm text-gray-500">

                    <p>Showing 1-3 of 3 invoices</p>

                    <div className="flex gap-2">

                    <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                        Previous
                    </button>

                    <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                        1
                    </button>

                    <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
                        Next
                    </button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default InvoiceListing