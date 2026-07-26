import { useEffect, useState } from "react";

const InvoiceInfo = () => {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");

  useEffect(() => {
    // Temporary invoice number
    setInvoiceNo("INV-000001");

    // Today's date
    const today = new Date().toISOString().split("T")[0];
    setInvoiceDate(today);
  }, []);

  return (
    <div className="bg-white w-full rounded-xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Invoice Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Invoice Number */}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Invoice Number
          </label>

          <input
            type="text"
            value={invoiceNo}
            readOnly
            className="
                w-full
                h-11
                rounded-lg
                border
                border-gray-300
                bg-gray-100
                px-4
                outline-none
                cursor-not-allowed
            "
          />
        </div>

        {/* Invoice Date */}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Invoice Date
          </label>

          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            className="
                w-full
                h-11
                rounded-lg
                border
                border-gray-300
                px-4
                outline-none
                focus:ring-2
                focus:ring-blue-500
            "
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceInfo;
