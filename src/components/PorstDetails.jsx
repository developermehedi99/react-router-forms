import { useLoaderData } from "react-router-dom";

const PorstDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold">post name: {post.title}</h2>
      <div className="text-2xl">{post.body}</div>
    </div>
  );
};

export default PorstDetails;
