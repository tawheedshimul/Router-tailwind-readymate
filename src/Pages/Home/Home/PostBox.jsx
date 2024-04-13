import React from 'react';

const PostBox = () => {
    return (
        <div className="w-full max-w-xl mx-auto bg-white rounded-lg shadow-md p-4">
            {/* Header */}
            <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
                <span className="font-semibold text-gray-700">Username</span>
            </div>

            {/* Textarea */}
            <textarea placeholder="What's happening?" className="w-full p-2 mb-2 border rounded-md resize-none"></textarea>

            {/* Actions */}
            <div className="flex justify-between items-center">
                {/* Attachments */}
                <div className="flex items-center space-x-2">
                    <button className="text-blue-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v4h2v-4h-2zm0 6v2h2v-2h-2z"></path>
                        </svg>
                    </button>
                    <button className="text-blue-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13 2V6H4v16h16V8h-7V2h-1zm-2 16h-2v-2h2v2zm0-4h-2v-6h2v6z"></path>
                        </svg>
                    </button>
                </div>

                {/* Submit Button */}
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Tweet</button>
            </div>
        </div>
    );
};

export default PostBox;
