import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className='flex justify-between items-center fixed top-0 w-full z-50'>
      <div className='bg-black w-6/12 py-3.5 font-bold md:border-r border-b '> <span className='px-2'>TAWHEED</span>  </div>
      <div className='border-b backdrop-blur-lg bg-black/25 w-full py-3.5 flex justify-around  font-bold  outline-none'>
        <div>
          My Story
        </div>
        <div>
          Friend Story
        </div>
      </div>
      <div className='bg-black w-9/12 py-1.5 hidden md:block relative border-l'>
        <div className='w-9/12 mx-auto relative'>
          <div className='flex items-center'>
            <span className='absolute left-3 text-gray-400' style={{ color: '#9CA3AF' }}>
              <IoSearchOutline className='text-xl' />
            </span>
            <input
              className='w-full h-10 pl-10 pr-3 rounded-full bg-[#303030] text-white focus:outline-none focus:ring-1 focus:ring-sky-400'
              type="search"
              placeholder='Search'
              name=""
              id=""
              onFocus={(e) => e.target.previousElementSibling.style.color = '#7DD3FC'}
              onBlur={(e) => e.target.previousElementSibling.style.color = '#9CA3AF'}
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
