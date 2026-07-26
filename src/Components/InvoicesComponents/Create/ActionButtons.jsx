import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={() => navigate("/invoice")}
        className="px-6 h-11 rounded-lg border border-gray-300 hover:bg-gray-100"
      >
        Cancel
      </button>

      <button className="px-6 h-11 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        Save Invoice
      </button>
    </div>
  );
};

export default ActionButtons;
