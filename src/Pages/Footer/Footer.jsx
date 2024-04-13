import React from 'react';
import { BiBell, BiHome, BiMessage, BiNotification } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

function Footer() {
  return (
    <div className='fixed bottom-0 w-full md:hidden'>
      <div className='flex justify-around bg-black'>
            <div className='flex items-center text-4xl space-x-2'>
                <BiHome />
            </div>
            <div className='flex items-center text-4xl space-x-2'>
                <BiBell/>
            </div>
            <div className='flex items-center text-4xl space-x-2'>
                <BiMessage/>
            </div>
            <div className='flex items-center text-4xl space-x-2'>
                <CgProfile/>
            </div>
        </div>
    </div>
  )
}

export default Footer;