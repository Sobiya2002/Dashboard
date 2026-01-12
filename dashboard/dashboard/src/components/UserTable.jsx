import { useMemo, useState } from "react";
 
export default function UserTable({ users, onSelectUser }) {
  const [search, setSearch] = useState("");
 
  const filteredUsers = useMemo(() => {
    const term = search.toLowerCase();
    return users.filter(
      (u) => u.name.toLowerCase().includes(term) || u.email.toLowerCase().includes(term)
    );
  }, [users, search]);
 
  return (
    <div>
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => onSelectUser(user)}>Select User</button>
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="3">No results</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
 