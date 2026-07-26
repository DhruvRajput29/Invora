import { Trash2, Plus } from "lucide-react";
import Select from "react-select";
import products from "../../../data/Productdata";

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: 44,
    width: "100%",
    minWidth: "520px",
    overflow: "hidden",
    borderRadius: 8,
    borderColor: state.isFocused ? "#2563eb" : "#d1d5db",
    boxShadow: "none",
    "&:hover": {
      borderColor: "#2563eb",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0 10px",
    overflow: "hidden",
    flexWrap: "nowrap",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af",
  }),

  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,.12)",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#2563eb"
      : state.isFocused
        ? "#eff6ff"
        : "#fff",
    color: state.isSelected ? "#fff" : "#111827",
    cursor: "pointer",
    padding: "12px",
  }),

  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    width: 1,
    minWidth: 1,
  }),

  singleValue: (provided) => ({
    ...provided,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
  }),

  container: (provided) => ({
    ...provided,
    width: "100%",
    minWidth: 0,
  }),

  inputContainer: (provided) => ({
    ...provided,
    overflow: "hidden",
  }),
};

const ItemTable = ({ items, setItems }) => {

  const productOptions = products.map((product) => ({
    value: product.id,
    label: product.name,
    sku: product.sku,
    rate: product.sellingPrice,
    stock: product.stock,
    product,
  }));

  const addItem = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        itemName: "",
        quantity: 1,
        rate: 0,
        amount: 0,
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== id) return item;

        const updatedItem = {
          ...item,
          [field]: value,
        };

        updatedItem.amount =
          Number(updatedItem.quantity) * Number(updatedItem.rate);

        return updatedItem;
      }),
    );
  };

  const handleProductSelect = (rowId, selectedOption) => {
    if (!selectedOption) return;

    const selectedProduct = selectedOption.product;

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== rowId) return item;

        return {
          ...item,
          itemName: selectedProduct.name,
          rate: selectedProduct.sellingPrice,
          amount: selectedProduct.sellingPrice * item.quantity,
        };
      }),
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  
  return (
    <>
      <div className="bg-white w-full rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">Items</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Item Name</th>

                <th className="text-center py-3">Quantity</th>

                <th className="text-center py-3">Rate (₹)</th>

                <th className="text-center py-3">Amount (₹)</th>

                <th className="text-center py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-4">
                    <div className="overflow-hidden">
                      <Select
                        options={productOptions}
                        placeholder="Search product..."
                        isSearchable
                        menuPortalTarget={document.body}
                        menuPosition="fixed"
                        controlShouldRenderValue={!item.isTyping}
                        value={
                          productOptions.find(
                            (option) => option.label === item.itemName,
                          ) || null
                        }
                        onInputChange={(inputValue, actionMeta) => {
                          if (actionMeta.action === "input-change") {
                            // optional
                          }
                        }}
                        onChange={(selectedOption) =>
                          handleProductSelect(item.id, selectedOption)
                        }
                        styles={customSelectStyles}
                      />
                    </div>
                  </td>

                  <td className="px-3">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleChange(item.id, "quantity", e.target.value)
                      }
                      className="w-20 h-10 border rounded-lg px-3 text-center outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>

                  <td className="px-3">
                    <input
                      type="number"
                      min="0"
                      value={item.rate}
                      onChange={(e) =>
                        handleChange(item.id, "rate", e.target.value)
                      }
                      className="w-20 h-10 border rounded-lg px-3 text-center outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>

                  <td className="text-center font-medium">
                    ₹{item.amount.toLocaleString()}
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={addItem}
          className="mt-5 flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
        >
          <Plus size={18} />
          Add Item
        </button>
      </div>
    </>
  );
};

export default ItemTable;
