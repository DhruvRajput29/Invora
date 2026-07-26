import { Eye, Pencil, Trash2 } from "lucide-react";

const ProductListing = () => {
    const products = [
        {
            id: 1,
            name: "HP Laptop",
            sku: "HP-1001",
            category: "Electronics",
            purchasePrice: 42000,
            sellingPrice: 46500,
            stock: 18,
            status: "In Stock",
        },
        {
            id: 2,
            name: "Wireless Mouse",
            sku: "MS-2001",
            category: "Accessories",
            purchasePrice: 450,
            sellingPrice: 699,
            stock: 5,
            status: "Low Stock",
        },
        {
            id: 3,
            name: "USB Keyboard",
            sku: "KB-3001",
            category: "Accessories",
            purchasePrice: 550,
            sellingPrice: 799,
            stock: 0,
            status: "Out of Stock",
        },
    ];
    return (
      <>
        <div className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-5">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Product list
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-275 w-full">
              <thead className="border-b border-gray-200">
                <tr className="text-left text-gray-700">
                  <th className="py-4 px-3">#</th>
                  <th className="py-4 px-3">Product Name</th>
                  <th className="py-4 px-3">SKU</th>
                  <th className="py-4 px-3">Category</th>
                  <th className="py-4 px-3">Purchase</th>
                  <th className="py-4 px-3">Selling</th>
                  <th className="py-4 px-3">Stock</th>
                  <th className="py-4 px-3">Status</th>
                  <th className="py-4 px-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="py-5 px-3">{index + 1}</td>

                    <td className="py-5 px-3 font-medium">{item.name}</td>

                    <td className="py-5 px-3 text-gray-600">{item.sku}</td>

                    <td className="py-5 px-3">{item.category}</td>

                    <td className="py-5 px-3">
                      ₹{item.purchasePrice.toLocaleString()}
                    </td>

                    <td className="py-5 px-3 text-green-600 font-semibold">
                      ₹{item.sellingPrice.toLocaleString()}
                    </td>

                    <td className="py-8 px-4">{item.stock}</td>

                    <td className="py-5 px-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium
                                                ${
                                                  item.status === "In Stock"
                                                    ? "bg-green-100 text-green-700"
                                                    : item.status ===
                                                        "Low Stock"
                                                      ? "bg-yellow-100 text-yellow-700"
                                                      : "bg-red-100 text-red-700"
                                                }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-5 px-3">
                      <div className="flex justify-center gap-2">
                        <button className="rounded-lg p-2 hover:bg-red-50">
                          <Trash2 size={18} className="text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default ProductListing;