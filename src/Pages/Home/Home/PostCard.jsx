import React, { useState, useEffect } from 'react';
import { FaRegComment, FaShare, FaRegThumbsUp } from 'react-icons/fa';
import { BiSad, BiXCircle } from 'react-icons/bi';

const PostCard = () => {
    const [blogs, setBlogs] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(5); // Number of posts initially visible
    const [loading, setLoading] = useState(false); // Flag to indicate loading state
    const [noMorePosts, setNoMorePosts] = useState(false); // Flag to indicate no more posts

    useEffect(() => {
        // Fetch initial posts
        fetchPosts();
        const interval = setInterval(fetchPosts, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const fetchPosts = () => {
        setLoading(true);
        fetch('https://blog-server-md-tawheed-shimuls-projects.vercel.app/blogs')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setLoading(false);
                // Check if all posts are loaded
                if (data.length <= visiblePosts) {
                    setNoMorePosts(true);
                } else {
                    setNoMorePosts(false);
                }
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    };

    const handleDelete = _id => {
        fetch(`https://blog-server-md-tawheed-shimuls-projects.vercel.app/blogs/${_id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = blogs.filter(blog => blog._id !== _id);
                    setBlogs(remaining);
                    // Check if all posts are loaded after deletion
                    if (remaining.length <= visiblePosts) {
                        setNoMorePosts(true);
                    } else {
                        setNoMorePosts(false);
                    }
                }
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    const handleSeeMore = () => {
        setVisiblePosts(prev => prev + 5); // Increase visible posts by 5
        // Check if all posts are loaded after clicking "See More"
        if (blogs.length <= visiblePosts + 5) {
            setNoMorePosts(true);
        }
    };

    return (
        <div>
            {blogs.slice(0, visiblePosts).map(blog => (
                <div key={blog._id} className="bg-gray-800 text-white rounded-lg p-4 shadow-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                            {/* Placeholder for user avatar */}
                            <img
                                className="w-12 h-12 rounded-full mr-3"
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(blog.author)}&size=128`}
                                alt={`${blog.author} profile`}
                            />
                            <div>
                                <div className="flex items-center">
                                    <span className="font-semibold">{blog.author}</span>
                                    {/* Example of displaying timestamp */}
                                    <span className="text-gray-400 text-sm ml-2">2 hours ago</span>
                                </div>
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
                            {/* Placeholder for reactions */}
                            {blog.reactions} Reactions
                        </span>
                        <span className="flex items-center mr-4">
                            <FaRegComment className="w-5 h-5 text-gray-400 mr-1" />
                            {blog.comments} Comments
                        </span>
                        <span className="flex items-center mr-4">
                            <FaShare className="w-5 h-5 text-gray-400 mr-1" />
                            {blog.shares} Shares
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

            {/* Show "See More" button when there are more posts to load */}
            {!loading && !noMorePosts && (
                <div className="text-center mt-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSeeMore}
                    >
                        See More
                    </button>
                </div>
            )}

            {/* Show message when there are no more posts to load */}
            {!loading && noMorePosts && (
                <div className="text-center mt-4 text-gray-500">
                    No more posts to show
                </div>
            )}

            {/* Show loading spinner while fetching posts */}
            {loading && (
                <div className="text-center mt-4">
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};

export default PostCard;
