import React from "react";
import { User } from "./User";
interface UserListProp {
  users: User[];
}
const UserList: React.FC<UserListProp> = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{++index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
