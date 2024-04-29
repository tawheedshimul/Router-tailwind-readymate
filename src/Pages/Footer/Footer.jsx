import React from 'react';
import { BiBell, BiHome, BiMessage } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <div className='fixed bottom-0 w-full md:hidden'>
      <div className='flex h-[60px] justify-around bg-black'>
        <Link
          to='/'
          className='flex items-center text-4xl space-x-2'
        >
          <BiHome className={` ${location.pathname === '/' ? 'border-t-2 ' : ''
            }`} />
        </Link>
        <div className='flex items-center text-4xl space-x-2'>
          <BiBell />
        </div>
        <Link
          to='/message'
          className='flex items-center text-4xl space-x-2'
        >
          <BiMessage className={` ${location.pathname === '/message' ? 'border-t-2 ' : ''
            }`} />
        </Link>
        <div className='flex items-center text-4xl space-x-2'>
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default Footer;
