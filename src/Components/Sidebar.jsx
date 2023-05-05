import React from 'react'
import Vector from '../assets/Vector.svg'
import dashboard from '../assets/dashboard.svg'
import sethings from '../assets/sethings.svg'
import users from '../assets/users.svg'
import addeduser from '../assets/addeduser.svg'
import affiliate from '../assets/affiliate.svg'
import plus from '../assets/plus.svg'
function Sidebar() {
    return (
        <div className=' bg-[#1D1042] z-20 p-5 text-white w-full overflow-y-auto top-0 sticky h-screen'>
            <div className="flex gap-5 bg-[#45269C] px-8 py-3 my-5 rounded-lg">
                <img src={Vector} className='' alt='' />
                <h1 className=''>
                    Welcome Keerthi
                </h1>
            </div>
            <ul className='space-y-2 border-b py-2 '>
                <li className="flex gap-5 px-8 py-3 rounded-lg ">
                    <img src={dashboard} className='' alt='' />
                    <h1 className=''>
                        Dashboard
                    </h1>
                </li>
                <li className="flex gap-5 px-8 py-3 rounded-lg">
                    <img src={sethings} className='' alt='' />
                    <h1 className=''>
                        Settings
                    </h1>
                </li>
                <li className="flex gap-5 px-8 py-3 rounded-lg">
                    <img src={Vector} className='' alt='' />
                    <h1 className=''>
                        Activities
                    </h1>
                </li>
                <li className="flex gap-5 px-8 py-3 rounded-lg">
                    <img src={users} className='' alt='' />
                    <h1 className=''>
                        Users
                    </h1>
                </li>
                <li className="flex gap-5 px-8 py-3 rounded-lg">
                    <img src={addeduser} className='' alt='' />
                    <h1 className=''>
                        Added User
                    </h1>
                </li>
                <li className="flex gap-5 px-8 py-3 rounded-lg ">
                    <img src={affiliate} className='' alt='' />
                    <h1 className=''>
                        Affiliate
                    </h1>
                </li>
            </ul>
            <ul className='space-y-3 py-2 '>
                <li className="flex gap-5 px-8 py-3 rounded-lg">
                    <img src={Vector} className='' alt='' />
                    <h1 className=''>
                        Profile
                    </h1>
                </li>
                <li className="flex gap-5 px-8 py-3 rounded-lg">
                    <img src={users} className='' alt='' />
                    <h1 className=''>
                        Logout
                    </h1>
                </li>
            </ul>

            <button className='bg-[#703EFE]  my-8 px-8 py-3 flex gap-4 rounded-xl font-semibold'>
                <img src={plus} className='self-center' />
                <h1>NEW PROJECT</h1>
            </button>
        </div >
    )
}

export default Sidebar