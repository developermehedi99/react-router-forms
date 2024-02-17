import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate(-1);
  };

  return (
    <div className="border border-blue-400">
      <h2>Page is not found</h2>
      <Link className="text-2xl" to="/">
        Go Back
      </Link>
      <button onClick={handleHome}>Home</button>
    </div>
  );
};

export default ErrorPage;
