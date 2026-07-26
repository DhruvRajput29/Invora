import { RefreshCw, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ProductHeader = () => {
const navigate = useNavigate();
  const reloadpage = () => {
    window.location.reload();
  }
  const addproduct = () => {
    navigate("./addproduct");
  }
  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-3xl font-bold">Products</h1>

        <p className="text-gray-500 mt-1 mb-6">Manage all products</p>
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
          onClick={reloadpage}
        >
          <RefreshCw size={18} />
          <span>Refresh</span>
        </button>

        <button
          className="
            flex
            items-center
            justify-center
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
          onClick={addproduct}
        >
          <Plus size={18} />
          Add product
        </button>
      </div>
    </div>
  );
};

export default ProductHeader;