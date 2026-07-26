export const basicFields = [
  {
    type: "input",
    label: "Product Name",
    name: "productName",
    inputType: "text",
    placeholder: "Enter Product Name",
  },
  {
    type: "input",
    label: "SKU",
    name: "sku",
    inputType: "text",
    placeholder: "SKU should be unique",
  },
  {
    type: "select",
    label: "Category",
    name: "category",
    options: [
      "Electronics",
      "Accessories",
      "Furniture",
      "Clothing",
      "Books",
      "Other",
    ],
  },
  {
    type: "select",
    label: "Unit",
    name: "unit",
    options: ["Piece", "Box", "Pack", "Kg", "Liter"],
  },
];

export const pricingFields = [
  {
    label: "Purchase Price",
    name: "purchasePrice",
    type: "number",
    placeholder: "₹0",
  },
  {
    label: "Selling Price",
    name: "sellingPrice",
    type: "number",
    placeholder: "₹0",
  },
   {
    label: "GST Rate",
    name: "tax",
    type: "select",
    options: [
      "0%",
      "0.25%",
      "3%",
      "5%",
      "12%",
      "18%",
      "28%",
    ],
  },
  {
    label: "Discount %",
    name: "discount",
    type: "number",
    placeholder: "10",
  },
];

export const inventoryFields = [
  {
    type: "input",
    label: "Stock Quantity",
    name: "stock",
    inputType: "number",
    placeholder: "Enter Stock Quantity",
  },
  {
    type: "select",
    label: "Status",
    name: "status",
    options: [
      "In Stock",
      "Low Stock",
      "Out of Stock",
    ],
  },
];