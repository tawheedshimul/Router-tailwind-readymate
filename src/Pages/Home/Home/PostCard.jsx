import React, { useState, useEffect } from 'react';
import { FaRegComment, FaShare, FaRegThumbsUp } from 'react-icons/fa';
import { BiSad, BiXCircle } from 'react-icons/bi';

const PostCard = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch initial posts
        fetchPosts();

        // Polling interval (every 10 seconds, adjust as needed)
        const interval = setInterval(fetchPosts, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const fetchPosts = () => {
        fetch('https://blog-server-md-tawheed-shimuls-projects.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
            .catch(error => console.error('Error fetching posts:', error));
    };

    const handleDelete = _id => {
        fetch(`https://blog-server-md-tawheed-shimuls-projects.vercel.app/blogs/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = blogs.filter(blog => blog._id !== _id);
                    setBlogs(remaining);
                }
            })
            .catch(error => console.error('Error deleting post:', error));
    };

    return (
        <div>
            {blogs.map(blog => (
                <div key={blog._id} className="bg-gray-800 text-white rounded-lg p-4 shadow-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            <img
                                className="w-12 h-12 rounded-full mr-3"
                                // src={user.avatar}
                                alt={`${blog.author} profile`}
                            />
                            <div>
                                <div className="flex items-center">
                                    <span className="font-semibold">{blog.author}</span>
                                    {/* {user.verified && (
                                        <MdVerified className="w-4 h-4 text-blue-500 ml-1" />
                                    )} */}
                                </div>
                                <span className="text-gray-400 text-sm">2 hours ago {blog._id}</span>
                            </div>
                        </div>
                        <div onClick={() => handleDelete(blog._id)}>
                            <BiXCircle className="text-gray-400 text-2xl cursor-pointer" />
                        </div>
                    </div>
                    <p className="mb-2">{blog.content}</p>
                    <div className="flex items-center mb-2">
                        <span className="flex items-center mr-4">
                            <BiSad className="w-6 h-6 text-yellow-400 mr-1" />
                            {/* {user.reactions}K */}
                        </span>
                        <span className="flex items-center mr-4">
                            <FaRegComment className="w-5 h-5 text-gray-400 mr-1" />
                            {/* {user.comments} */}
                        </span>
                        <span className="flex items-center mr-4">
                            <FaShare className="w-5 h-5 text-gray-400 mr-1" />
                            {/* {user.shares} */}
                        </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-700 pt-2">
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <FaRegThumbsUp className="w-5 h-5 mr-1" /> Like
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <FaRegComment className="w-5 h-5 mr-1" /> Comment
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <FaShare className="w-5 h-5 mr-1" /> Share
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostCard;
