import { Users, Plus } from "lucide-react";
const ManageUsers_Header = ({ setOpenModal }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          Users
          <Users className="text-blue-600" />
        </h1>
        <p className="text-gray-500 mt-1 mb-6 ">Manage all Users</p>
        </div>
        <div className="flex justify-between items-center mb-5">
            <button 
              onClick={() => setOpenModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow">
              <Plus />
              Add User
            </button>
         
        </div>
      </div>
    </>
  );
};

export default ManageUsers_Header;
