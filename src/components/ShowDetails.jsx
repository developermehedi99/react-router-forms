import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const user = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl">{user.name}</h2>
      <h2>{user.website}</h2>
    </div>
  );
};

export default ShowDetails;
