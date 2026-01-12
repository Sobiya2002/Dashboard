import { useCallback, useState } from "react";
import { useUsers } from "../hooks/useUsers";
import UserTable from "./UserTable";
 
export default function UserDashboard() {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
 
  const handleSelectUser = useCallback((user) => {
    setSelectedUser(user);
  }, []);
 
  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
 
  return (
    <div className="container">
      <h1>User Dashboard</h1>
 
      {selectedUser && (
        <div className="selected">
          Selected User: <strong>{selectedUser.name}</strong>
        </div>
      )}
 
      <UserTable users={users} onSelectUser={handleSelectUser} />
    </div>
  );
}