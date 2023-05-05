import React from 'react'
import plus2 from '../assets/plus2.svg'
import Teardropdot from '../assets/Teardropdot.svg'
import linksimplehori from '../assets/linksimplehori.svg'
import image8mini from '../assets/image8mini.svg'
import threedot from '../assets/threedot.svg'
import threemark from '../assets/threemark.svg'
import image2 from '../assets/🖼️ CardImage2.jpg'
import sliderred from '../assets/sliderred.svg'
import bigimage2 from '../assets/bigimage2.jpg'

export default function Grid2() {
  return (
    <div className=''>
         <div
        className='flex justify-between bg-gray-100 rounded-lg md:self-start px-5 whitespace-nowrap self-center'>
        <label className='text-gray-400 self-center text-xl'>Inprogress</label>
        <button className='border-2 bg-black rounded-lg w-12  h-12 my-2 font-semibold text-xl whitespace-nowrap self-center text-white'>1</button>
      </div>
      <div className='w-full mt-8 bg-white rounded-xl py-5'>
        <div className='w-10/12 mx-auto space-y-3'>
          <img src={image2} className='w-full' />
          <div>

            <div className='text-[#B8B9BD] flex justify-between'>
              <div>
                <h5 className='text-black font-semibold '>Highfidelity Design</h5>
                <p >Make clear design and color</p>
              </div>
              <img src={threedot} className='self-start' />
            </div>
            <div className='text-[#B8B9BD] flex justify-between'>
              <div className='flex gap-3 '>
                <img src={threemark} />
                <p className='self-center'>Progress</p>
              </div>
              <h5 className='text-black font-semibold self-center my-2'>2/10</h5>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className=" bg-red-400 h-2.5 rounded-full dark:bg-blue-500 w-1/5"></div>
            </div>

            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <div className='flex'>
                  <img src={Teardropdot} className='self-center' alt='cardimage' />
                  <div className='self-center p-1'>7</div>
                </div>
                <div className='flex gap-1 font-light self-center'>
                  <img src={linksimplehori} className='' alt='cardimage' />
                  <div className='self-center'>2</div>
                </div>
              </div>
              <div className='flex -space-x-4'>
                <img src={image8mini} className='rounded-full h-8 w-8' alt='cardimage' />
                <img src={image8mini} className='rounded-full h-8 w-8' alt='cardimage' />
                <img src={image8mini} className='rounded-full h-8 w-8' alt='cardimage' />
              </div>
            </div>

            
          </div>
        </div>
      </div>

 <div className='Usability mt-5  '>
  <div className=''>
  <button className=' bg-[#F2F4F5] flex justify-center  gap-3 w-full text-center border-dashed rounded-lg font-medium text-[20px] right-1 py-4 border-2 px-13 text-sm text-[#7D8088]'>
        <img src={plus2} className=' relative text-[#7D8088]' alt='cardimage' />
        Add Task</button>
  </div>
         
              </div>

    </div>
  )
}
