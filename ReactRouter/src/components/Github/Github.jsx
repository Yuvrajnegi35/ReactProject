import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // If data is undefined, display a loading message or placeholder UI
  if (!data) {
    return <div className="text-center  p-4 text-2xl">Loading...</div>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <br />
      {data.avatar_url && <img src={data.avatar_url} alt="Git picture" width={300} />}
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Yuvrajnegi35')
    return response.json()
}