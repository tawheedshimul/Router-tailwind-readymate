import React from 'react';
import PostCard from './PostCard';

function PostCardData() {
  const post = {
    username: "John Doe",
    handle: "johndoe",
    content: "Hello, Twitter! This is my first tweet.",
    date: "April 13, 2024",
    retweets: "10",
    likes: "20"
  };

  console.log("Post object:", post); // Log the post object

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <PostCard post={post} />
    </div>
  );
}

export default PostCardData;
