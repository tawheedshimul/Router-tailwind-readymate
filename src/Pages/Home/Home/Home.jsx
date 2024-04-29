import React from 'react'
import PostBox from './PostBox';
import Left from './Left';
import PostCard from './PostCard/PostCard';

function Home() {
  return (
    <div className='flex justify-between fixed w-full bg-black text-white'>
      <div className='w-6/12 border-r hidden md:block'>
        <div className='h-[calc(100vh-30px)] mt-14 overflow-auto px-2 mr-1'>
          <Left />
        </div>
      </div>
      <div className='w-full '>
        <div className='h-screen overflow-auto no-scrollbar px-1'>
          <div className='mt-[53px]'>
            <PostBox />
          </div>
          <div>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className='text-center '>
            <span className='bg-gray-700 p-2 rounded'>
              SEE MORE</span>
          </div>
          <div className='h-14'>

          </div>
        </div>
      </div>
      <div className='w-9/12 border-l hidden md:block mt-[53px]'>right</div>
    </div>
  )
}

export default Home;