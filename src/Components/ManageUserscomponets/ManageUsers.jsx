import React from "react";
import { useState } from "react";
import ManageUsers_Header from "./ManageUsersHeader";
import UserList from "./UserList";
import AddUserModal from "./AddUserModal";
import UpdateUserModal from "./UpdateUserModal";

const ManageUsers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <ManageUsers_Header setOpenModal={setOpenModal} />
      <UserList
        setOpenUpdateModal={setOpenUpdateModal}
        setSelectedUser={setSelectedUser}
      />

      {openModal && <AddUserModal setOpenModal={setOpenModal} />}

      {openUpdateModal && (
        <UpdateUserModal
          setOpenModal={setOpenUpdateModal}
          user={selectedUser}
        />
      )}
    </>
  );
};

export default ManageUsers;
