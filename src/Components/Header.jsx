import React from 'react'
import image8 from '../assets/image8.svg'
import bordview from '../assets/bordview.svg'
import listview from '../assets/listview.svg'
import participantview from '../assets/participantview.svg'
import powerview from '../assets/powerview.svg'
import plus2 from '../assets/plus2.svg'

export default function Header() {
  return (
    <div className=''>
            <div className='header first: w-[1230px] h-[220px] bg-white '>
                <div className=' relative text-black h-[46px] left-[300px] text-[36px] font-semibold w-[823px] top-[30px]'>New Campaign Run</div>
                <div className=' relative top-[40px] text-[#B8B9BD]  font-normal text-[14px] ml-[300px]  '>A new campaign launch work for brand new feature in May month</div>
               <div className=' absolute  bg-black text-white h-[42px] pt-2 pl-5 rounded-[8px]  w-[160px] left-[1100px] top-[35px] font-normal '>ADD MEMBERS</div>
               <div className='members mb-6 '>
               
               <div>  <img src={image8} className=' relative top-[100px] left-[300px] rounded-[15px]' alt=''/>  </div>
               <div>  <img src={image8} className=' relative top-[68px] left-[326px] rounded-[15px]' alt=''/>  </div>
               <div>  <img src={image8} className=' relative top-[36px] left-[353px] rounded-[15px]' alt=''/>  </div>
                <div className=' relative -top-[25px] text-[#B8B9BD]  font-normal text-[14px] ml-[400px] mt-9'>8 memeber</div>
               </div>
               <div className=' absolute flex left-[740px] top-[170px] space-x-4 text-[#B8B9BD] font-medium text-[14px]'>
                 <img src={participantview} className=' relative left-2 ' alt=''/>
                <a>Participants View</a>
                <img src={bordview} className=' relative left-2' alt=''/>

                <a>Board View</a>
                <img src={listview} className=' relative left-2' alt=''/>

                <a>list View</a>
                <img src={powerview} className=' relative left-2' alt=''/>

                <a>Power View</a>
                <img src={plus2} className='' alt=''/>

               </div>
            </div>
    </div>
  )
}
