import React from "react";

function SingleUserComponent({ user, handleDelete }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default SingleUserComponent;

