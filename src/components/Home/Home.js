import React, { useEffect, useState } from "react";
import Posts from "../Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0px 40px" }}>
        The Site User's Posts
      </h1>
      {posts.map((post) => (
        <Posts post={post} key={post.id}></Posts>
      ))}
    </div>
  );
};

export default Home;
