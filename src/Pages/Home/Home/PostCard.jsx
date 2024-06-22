import React from 'react';
import { FaRegComment, FaShare, FaRegThumbsUp } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { BiSad } from 'react-icons/bi';

const PostCard = ({ news }) => {

    const { content, author } = news;
    return (
        <div>
            <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg mb-4">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <img
                            className="w-12 h-12 rounded-full mr-3"
                            // src={user.avatar}
                            alt={`${author} profile`}
                        />
                        <div>
                            <div className="flex items-center">
                                <span className="font-semibold">{author}</span>
                                {/* {user.verified && (
                                    <MdVerified className="w-4 h-4 text-blue-500 ml-1" />
                                )} */}
                            </div>
                            <span className="text-gray-400 text-sm">2 houres ago</span>
                        </div>
                    </div>
                    <BsThreeDots className="text-gray-400" />
                </div>
                <p className="mb-2">{content}</p>
                <div className="flex items-center mb-2">
                    <span className="flex items-center mr-4">
                        <BiSad className="w-6 h-6 text-yellow-400 mr-1" />
                        {/* {user.reactions}K */}dsfdsf
                    </span>
                    <span className="flex items-center mr-4">
                        <FaRegComment className="w-5 h-5 text-gray-400 mr-1" />
                        {/* {user.comments} */}dsff
                    </span>
                    <span className="flex items-center mr-4">
                        <FaShare className="w-5 h-5 text-gray-400 mr-1" />
                        {/* {user.shares} */}sdfsdfs
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
        </div>
    );
};

export default PostCard;
//sdfsdfysifsyaif

