import React from 'react'
import PostBox from './PostBox';
import Left from './Left';
import PostCard from './PostCard/PostCard';

function Home() {
  return (
    <div className='flex justify-between  bg-black text-white'>
      <div className='w-6/12 border-r'>
        <div className='h-[calc(100vh-30px)] fixed top-[53px] overflow-auto px-2 mr-1'>
          <Left/>
        </div>
      </div>
      <div className='w-full '>
        <div className='h-screen overflow-auto no-scrollbar px-1'>
          <div className='mt-[53px]'>
            <PostBox/>
          </div>
          <div>
            <PostCard/>
          </div>
        </div>
      </div>
      <div className='w-9/12 border-l mt-[53px]'>right</div>
    </div>
  )
}

export default Home;