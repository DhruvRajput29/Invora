import { Package, MoreVertical, Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [stock, setStock] = useState(product.stock);

  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-5">
      {/* Header */}

      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center">
            <Package className="text-blue-600" size={28} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">SKU : {product.sku}</p>
          </div>
        </div>

        <button className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Details */}

      <div className="grid grid-cols-6 gap-6 mt-6">
        <div>
          <p className="text-xs text-gray-400">Category</p>
          <p className="font-medium mt-1">{product.category}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">SKU</p>
          <p className="font-medium mt-1">{product.sku}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Purchase Price</p>
          <p className="font-medium mt-1">
            {product.purchasePrice.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Selling Price</p>
          <p className="font-semibold mt-1">
            ₹{product.sellingPrice.toLocaleString()}
          </p>
        </div>

        {/* Stock */}

        <div>
          <p className="text-xs text-gray-400 mb-2">Stock</p>

          <div className="flex items-center border rounded-lg overflow-hidden w-fit">
            <button
              onClick={() => setStock((prev) => Math.max(0, prev - 1))}
              className="w-9 h-9 flex items-center justify-center hover:bg-red-50 text-red-600 transition"
            >
              <Minus size={16} />
            </button>

            <input
              type="number"
              min={0}
              value={stock}
              onChange={(e) =>
                setStock(Math.max(0, Number(e.target.value) || 0))
              }
              className="w-14 h-9 text-center outline-none border-x border-gray-200"
            />

            <button
              onClick={() => setStock((prev) => prev + 1)}
              className="w-9 h-9 flex items-center justify-center hover:bg-green-50 text-green-600 transition"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Status */}

        <div className="flex items-center justify-end">
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              stock === 0
                ? "bg-red-100 text-red-700"
                : stock <= 10
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
            }`}
          >
            {stock === 0
              ? "Out of Stock"
              : stock <= 10
                ? "Low Stock"
                : "In Stock"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;