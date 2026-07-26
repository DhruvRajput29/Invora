import { X } from "lucide-react";
import { useState } from "react";

const AddUserModal = ({ setOpenModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // later you'll call API here

    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-1/2">
        {/* Header */}

        <div className="flex justify-between items-center border-b px-6 py-4">
          <div>
            <h2 className="text-xl font-bold">Add new user</h2>
            <p>write the information about New User</p>
          </div>

          <button onClick={() => setOpenModal(false)}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label>Name</label>

              <input
                name="name"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label>Email</label>

              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                name="phone"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div>
              <label>Role</label>

              <select
                name="role"
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1"
              >
                <option value="">Select Role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Staff</option>
              </select>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Save User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
