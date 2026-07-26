const Summary = ({ items }) => {
  const subtotal = items.reduce((total, item) => total + item.amount, 0);

  const discount = 0;

  const grandTotal = subtotal - discount;

  return (
    <div className="bg-white w-[400px] rounded-xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-5">Summary</h2>

      <div className="max-w-sm ml-auto space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>₹{subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>

          <span>₹{discount}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Grand Total</span>

          <span>₹{grandTotal.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
