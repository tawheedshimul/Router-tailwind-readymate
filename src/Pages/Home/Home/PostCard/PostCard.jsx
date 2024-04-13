import React from 'react';

const PostCard = ({ username, handle, profileImage, content, interactions }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-3"
          src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'} // Placeholder if no image
          alt="Profile picture"
        />
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold">tawheed</h3>
            <span className="text-gray-500 text-sm ml-1">@tawheedfan</span>
          </div>
          <p className="mt-2">i am using tblof websit Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, explicabo?</p>
          <img
            className="w-full rounded mt-3"
            src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'} // Placeholder if no image
            alt="Profile picture"
          />
          <div className="flex items-center mt-3">
            <button className="text-blue-500 hover:underline mr-3 flex items-center">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {/* {interactions.replies}  */}
            </button>
            {/* Add more buttons for retweets, likes, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
