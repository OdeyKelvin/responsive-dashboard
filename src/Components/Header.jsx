import React from 'react';
import image8 from '../assets/image8.svg'
import bordview from '../assets/bordview.svg'
import listview from '../assets/listview.svg'
import participantview from '../assets/participantview.svg'
import powerview from '../assets/powerview.svg'

import plus from '../assets/plus2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {

  const Handlenav = () => {
    props.sidemenuHandler()
  }
  return (
    <div className='md:px-14 px-6 space-y-10 py-5 md:py-12 z-10 sticky top-0 backdrop-blur-md'>
      <div className='md:flex justify-between h-fit'>

        <div className=' absolute md:hidden right-4 top-32'>
        <FontAwesomeIcon icon={faBars} onClick={Handlenav} />
          </div>
        <div>
          <h1 className='text-4xl font-semibold'>New Campaign Run</h1>
          <p className='my-2 text-[#B8B9BD]'>A new campaign launch work for brand new feature in May month.</p>
        </div>
        <button className='bg-black rounded-lg md:self-start px-2 md:px-5 py-2.5 whitespace-nowrap self-center text-white'>ADD MEMBERS</button>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2 h-full '>
          <div className='flex -space-x-4'>
            <img src={image8} className='rounded-full h-8 w-8' alt='' />
            <img src={image8} className='rounded-full h-8 w-8' alt='' />
            <img src={image8} className='rounded-full h-8 w-8' alt='' />
            <img src={image8} className='rounded-full h-8 w-8' alt='' />
          </div >
          <div className='self-center text-[#B8B9BD]  font-normal text-[14px]'>8 memeber</div>
        </div>
        <div className='flex space-x-6 text-[#B8B9BD] font-medium text-md'>
          <div className='flex gap-4'>
            <img src={participantview} className='' alt='' />
            <label className=' hidden xl:block whitespace-nowrap self-center'>Participants View</label>
          </div>
          <div className='flex gap-4'>
            <img src={bordview} className='' alt='' />
            <label className=' hidden xl:block whitespace-nowrap self-center'>Board View</label>
          </div>
          <div className='flex gap-4'>
            <img src={listview} className='' alt='' />
            <label className=' hidden xl:block whitespace-nowrap self-center'>List View</label>
          </div>
          <div className='flex gap-4'>
            <img src={powerview} className='' alt='' />
            <label className=' hidden xl:block whitespace-nowrap self-center'>Power View</label>
          </div>
          <img src={plus} alt="plus" className='w-5' />

        </div>

      </div >
    </div >
  )
}
