// UserList.jsx
import UserCard from "./UserCard";

function UserList() {
  const users = [
    { id: 1, name: "Kamal", age: 20 },
    { id: 2, name: "Priya", age: 22 },
    { id: 3, name: "Arun", age: 24 }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h2>User List</h2>
      {users.map(user => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;
