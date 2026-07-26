import { Users, Pencil, Trash2, Plus } from "lucide-react";
import { users } from "../../Data/UsersData.js";
const UserList = ({setOpenUpdateModal, setSelectedUser,}) => {
  const roleColor = (role) => {
    switch (role) {
      case "admin":
        return "text-sky-500";
      case "manager":
        return "text-cyan-500";
      case "staff":
        return "text-teal-500";
      default:
        return "text-gray-500";
    }
  };
  const status = (status) => {
    switch (status) {
      case "Active":
        return "text-green-500";
      case "Inactive":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };
  return (
    <>
      {/* <div className="p-6 bg-[#FCFCFC] rounded-lg"> */}
      <div className="bg-white rounded-lg ">
        <div className="  px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">User List</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-white border-b border-gray-200 shrink-0 transition-all duration-300 ease-in-out overflow-hidden w-64">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Phone</th>
                <th className="px-6 py-4 text-left">Role</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created At</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-r border-gray-200  hover:bg-gray-50 transition"
                >
                  <td className="py-5 px-3">{user.id}</td>

                  <td className="py-5 px-3 font-medium">{user.name}</td>

                  <td className="py-5 px-3 text-gray-600">{user.email}</td>

                  <td className="py-5 px-3 text-gray-600">{user.phone}</td>

                  <td className="py-5 px-3">
                    <span
                      className={`${roleColor(user.role)} text-sm px-3 py-1 rounded-full capitalize`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`${status(user.status)} text-xs px-3 py-1 rounded-full`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">{user.createdAt}</td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setOpenUpdateModal(true);
                        }}
                        className="text-blue-400 hover:bg-blue-100  p-2 rounded"
                      >
                        <Pencil size={18} />
                      </button>

                      <button className="text-red-400 hover:bg-red-100  p-2 rounded">
                        <Trash2 size={18} />
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
};

export default UserList;
