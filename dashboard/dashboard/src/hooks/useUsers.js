import { useEffect, useState } from "react";
 
export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    let mounted = true;
 
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("API Error");
        const data = await res.json();
        if (mounted) setUsers(data);
      } catch (err) {
        if (mounted) setError(err.message);
      } finally {
        if (mounted) setLoading(false);
      }
    }
 
    fetchUsers();
    return () => (mounted = false);
  }, []);
 
  return { users, loading, error };
}
 