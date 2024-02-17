import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <div className="text-3xl">this is our users page</div>
      <h2> ours users: {users.length}</h2>
      <div className="grid grid-cols-3 gap-3">
        {" "}
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
