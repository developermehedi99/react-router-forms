import { Link } from "react-router-dom";

const post = ({ post }) => {
  const { title, id } = post;
  return (
    <div className="border border-green-400 p-5">
      <h1>post id : {id}</h1>
      <h2>{title}</h2>

      <Link to={`/post/${id}`}>
        <button>Show details</button>
      </Link>
    </div>
  );
};

export default post;
