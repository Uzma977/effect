function UsersCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid",
        margin: "10px",
        padding: "10px",
      }}
    >
      <img src={user.picture.medium} alt={user.name.first} />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>{user.email}</p>
      <p>{user.location.country}</p>
    </div>
  );
}

export default UsersCard;
