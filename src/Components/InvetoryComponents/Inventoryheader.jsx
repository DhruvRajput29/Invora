import { RefreshCw, Plus } from "lucide-react";

const InventoryHeader = () => {
  return (
    <div className="flex items-center justify-between mb-3">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold">
          Inventory
        </h1>

        <p className="text-gray-500 mt-1 mb-6">
          Manage all products in your inventory
        </p>
      </div>
    </div>
  );
};

export default InventoryHeader;