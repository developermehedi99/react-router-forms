import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { email, id, name, company, website } = user;
  return (
    <div className="border border-red-400 p-4">
      <h2> {name}</h2>
      <p>{email}</p>
      <p>{website}</p>
      <p>{company.name}</p>
      <Link to={`/user/${id}`}>Show details</Link>
    </div>
  );
};

export default User;
