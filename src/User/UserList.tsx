import React from "react";
import { User } from "./User";
import { Table } from "react-bootstrap";
interface UserListProp {
  users: User[];
}
const UserList: React.FC<UserListProp> = ({ users }) => {
  return (
    <div className="container">
      <div className="col-md-6 mt-4">
        <h5>User List</h5>
        <div className="card">
          <div className="card-body">
            <Table bordered responsive hover variant="info">
              <thead className="bg-info">
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
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserList;
