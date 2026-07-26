import { RefreshCw, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InvoiceHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mb-3">
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold">Invoices</h1>

        <p className="text-gray-500 mt-1 mb-6">
          Manage billing in your Invoice
        </p>
      </div>

      {/* Right */}

      <div className="flex gap-4">
        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            px-3
            h-11
            rounded-lg
            font-medium
            border
            border-gray-300
            hover:bg-gray-100
            transition-all
            duration-200
            cursor-pointer
          "
        >
          <RefreshCw size={18} />
          <span>Refresh</span>
        </button>

        <button
          onClick={() => navigate("/invoice/create")}
          className="
            flex
            justify-center
            items-center
            gap-2
            bg-blue-600
            text-white
            px-3
            h-11
            rounded-lg
            font-medium
            hover:bg-blue-700
            transition-all
            duration-200
            cursor-pointer
          "
        >
          <Plus size={18} />
          Add Invoice
        </button>
      </div>
    </div>
  );
};

export default InvoiceHeader;