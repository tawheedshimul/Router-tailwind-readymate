import React, { useState } from 'react';

function TwitterPostBox() {
  const [tweetContent, setTweetContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleTweetChange = (event) => {
    setTweetContent(event.target.value);
    setCharCount(event.target.value.length);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/postTweet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization headers if needed
        },
        body: JSON.stringify({ content: tweetContent }),
      });

      if (response.ok) {
        console.log('Tweet submitted successfully!');
        setTweetContent('');
        setCharCount(0);
      } else {
        console.error('Tweet submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting tweet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" py-2 border-b mb-2 border-gray-700">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-3"
          src="https://www.gravatar.com/avatar/?d=mp" 
          alt="Profile picture"
        />
        <form className="w-full" onSubmit={handleSubmit}>
          <textarea
            className="w-full resize-none outline-none bg-black border-b-2 border-gray-700 focus:border-sky-300  p-2"
            placeholder="What's happening?"
            value={tweetContent}
            onChange={handleTweetChange}
            rows={3}
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500">{charCount}/280</span>  
            <button
              className="bg-gray-700 px-4 py-2 rounded-full font-bold hover:bg-gray-800 cursor-pointer disabled:opacity-50"
              type="submit"
              disabled={tweetContent.trim().length === 0 || isLoading}
            >
              {isLoading ? 'Posting...' : 'POST'} 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TwitterPostBox;