import Vector from '../assets/Vector.svg'
import dashboard from '../assets/dashboard.svg'
import sethings from '../assets/sethings.svg'
import users from '../assets/users.svg'
import addeduser from '../assets/addeduser.svg'
import affiliate from '../assets/affiliate.svg'
import Line1 from '../assets/line1.svg'
import plus from '../assets/plus.svg'

import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <div className='fixedSideNavbar fixed flex-col w-[240px] min-h-screen bg-[#1D1042]'>
      <section className='contents flex-none order-none self-stretch flex-grow-0 text-white '>
      <img src={Vector} className=' relative top-[50px] left-[40px]' alt=''/>
        <div className='welcomemessage flex flex-row justify-center items-center ml-3 pl-9 mt-4 gap-8 w-[208px] h-[46px] bg-[#45269C] rounded-[8px] '>
      Welcome Keerthi 
        </div>
        <div className='nav relative  left-[70px] flex flex-col space-y-4'>
          <div>  <img src={dashboard} className=' relative top-[35px] right-7' alt=''/>  </div>
         <a className=' hover::-[]' href='#dashboard'> Dashboard</a>
         <div>  <img src={sethings} className=' relative top-[15px] right-7' alt=''/>  </div>
         <a className=' relative bottom-5' href='#Sethings'>Sethings</a>
         <a className=' relative bottom-9' href='#Activities'>
          <div><img src={Vector} className='vector2 relative top-6 right-7' alt=''/></div>
          Activities</a>
          <div>  <img src={users} className=' relative bottom-5 right-7' alt=''/>  </div>
         <a className=' relative bottom-14' href='#Users'>Users</a>
         <div>  <img src={addeduser} className=' relative bottom-11 right-7' alt=''/>  </div>
         <a className=' relative bottom-20' href='#Added User'>Added User</a>
         <div>  <img src={affiliate} className=' relative bottom-[60px] right-7' alt=''/>  </div>
         <a className=' relative bottom-24' href='#Affilate'>Affiliate</a>
         <img src={ Line1} className=' relative bottom-[90px] right-7' alt=''/>
         <div><img src={Vector} className=' relative bottom-[80px] right-7' alt=''/></div>
         <a className=' relative bottom-[120px]' href='#Profile'>Profile</a>
         <div>  <img src={users} className=' relative bottom-[105px] right-7' alt=''/>  </div>

         <a className=' relative bottom-[140px]' href='#Logout'>Logout</a>
         
         <div>
         </div>
        </div>
          <div className='CTA relative  flex flex-row justify-center items-center p-[16px] gap-8 w-[208px] h-[54px]  bg-[#703EFE] left-4 bottom-16 rounded-[8px]'>
          <div>  <img src={plus} className=' relative left-6' alt=''/>  </div>
            <div className='insideCTA flex-none order-1 self-stretch'>NEW PROJECT

            </div>
         </div>
         
      </section>
      
      </div>
    </div>
  )
}
