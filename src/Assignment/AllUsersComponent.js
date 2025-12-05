import React, { useState } from "react";
import { users as allUsersData } from "./users";
import SingleUserComponent from "./SingleUserComponent";
function AllUsersComponent() {
  const [users, setUsers] = useState([]);
  const handleAddAll = () => setUsers(allUsersData);
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };
  const handleDeleteAll = () => setUsers([]);
  const toggleButton = users.length === 0 ? (
    <button onClick={handleAddAll}>Add All Users</button>
  ) : (
    <button onClick={handleDeleteAll}>Delete All Users</button>
  );
  return (
    <div>
      <h2>User Management</h2>
      {toggleButton}
      {users.length > 0 && (
        <table border="1" cellPadding="8" style={{ marginTop: "10px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <SingleUserComponent key={user.id} user={user} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default AllUsersComponent;
