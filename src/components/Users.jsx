import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("delete is done", data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1>Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Created Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className="btn bg-green-500 mr-3">Edit</button>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="btn bg-orange-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
