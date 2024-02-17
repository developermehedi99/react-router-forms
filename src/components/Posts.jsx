import { useLoaderData } from "react-router-dom";
import Post from "../components/post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>All posts : {posts.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
