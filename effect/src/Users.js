import { useEffect, useState } from "react";
import UsersCard from "./UsersCard";

function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api/?results=9");
    const response = await data.json();
    console.log(response);

    setUsers(response.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UsersCard key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

export default Users;
