import { Search } from "lucide-react";

const SearchFilter = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search */}

        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search product by name, SKU or barcode..."
            className="w-full h-12 rounded-lg border border-gray-300 pl-11 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters */}

        <div className="flex flex-wrap items-center gap-3">
          {/* Category */}
          <div className="relative">
            <select className="appearance-none h-11 w-48 rounded-lg border border-gray-300 bg-white px-4 pr-10 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 outline-none hover:border-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer">
              <option>Category</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Groceries</option>
              <option>Fashion</option>
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Warehouse */}
          <div className="relative">
            <select className="appearance-none h-11 w-48 rounded-lg border border-gray-300 bg-white px-4 pr-10 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 outline-none hover:border-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer">
              <option>Warehouse</option>
              <option>Main Store</option>
              <option>Warehouse A</option>
              <option>Warehouse B</option>
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Status */}
          <div className="relative">
            <select className="appearance-none h-11 w-44 rounded-lg border border-gray-300 bg-white px-4 pr-10 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 outline-none hover:border-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer">
              <option>Status</option>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Reset Button */}
          <button className="h-11 rounded-lg border border-gray-300 px-5 text-sm cursor-pointer font-medium text-gray-700 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-600">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
