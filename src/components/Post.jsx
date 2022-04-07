import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Post = ({ userId, name }) => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchPosts();
  }, [userId]);

  return (
    <>
      <h2>Post</h2>
      <h4>{name}</h4>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};
export default Post;
