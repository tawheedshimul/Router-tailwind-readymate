import React, { useState } from 'react';
import PostBox from './PostBox';
import Left from './Left';
import { useLoaderData } from 'react-router-dom';
import PostCard from './PostCard';
import { ImCrying } from 'react-icons/im'; // Ensure this import is correct

function Home() {
  const news = useLoaderData();
  console.log(news)
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  return (
    <div className='flex justify-between w-full bg-black text-white'>
      <div className='w-6/12 border-r hidden md:block'>
        <div className='h-[calc(100vh-30px)] mt-14 overflow-auto px-2 mr-1'>
          <Left />
        </div>
      </div>
      <div className='w-full'>
        <div className='h-screen overflow-auto no-scrollbar px-1'>
          <div className='mt-[53px]'>
            <PostBox />
          </div>
          <div>
            {news.slice(0, visibleCount).map(aNews => (
              <PostCard key={aNews._id} news={aNews} />
            ))}
            {visibleCount < news.length ? (
              <button onClick={handleShowMore} className="bg-red-500 text-white p-2 m-4 w-full mx-auto rounded">
                Show More
              </button>
            ) : (
              <p className="mt-4 w-full bg-red-500 mx-auto text-white p-2">
                No more stories... <ImCrying />
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='w-9/12 border-l hidden md:block mt-[53px]'>right</div>
    </div>
  );
}

export default Home;
