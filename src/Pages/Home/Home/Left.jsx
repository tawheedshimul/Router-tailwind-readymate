import React from 'react'
import { BiBell, BiHome, BiMessage, BiNotification } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Left() {
    return (
        <div className='space-y-2'>
            <div className='flex items-center text-2xl space-x-2'>
                <BiHome />
                <span>Home</span>
            </div>
            <div className='flex items-center text-2xl space-x-2'>
                <BiBell/>
                <span>Notification</span>
            </div>
            <Link to='/message' className='flex hover:bg-gray-500 items-center text-2xl space-x-2'>
                <BiMessage/>
                <span>Message</span>
            </Link>
            <div className='flex items-center text-2xl space-x-2'>
                <CgProfile/>
                <span>Profile</span>
            </div>
        </div>
    )
}

export default Left