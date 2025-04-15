import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <>
      <h2>{data?.login || "No Username"}</h2>
      <h2>{data?.followers ?? "0"} Followers</h2>
      <img src={data?.avatar_url} alt={`${data?.login}'s avatar`} />
    </>
  );
}

export default Github; 

export const githubData = async () => {
  try {
    const resp = await fetch("https://api.github.com/users/IshantAhuja0");

    if (!resp.ok) {
      throw new Error(`GitHub API Error: ${resp.status} ${resp.statusText}`);
    }

    return await resp.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return { login: "Error", followers: "N/A", avatar_url: "" };
  }
};
