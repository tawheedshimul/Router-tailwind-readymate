import React from 'react'
import PostCard from './PostCard'

function PostCardData() {
  return (
    <div>
        <PostCard 
    username="Jane Doe"
    handle="janedoe"
    profileImage="https://www.example.com/profileImage.jpg"
    content="This is a sample tweet. #react #tailwindcss"
    interactions={{ replies: 15, retweets: 5, likes: 20 }}
/>


    </div>
  )
}

export default PostCardData