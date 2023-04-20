import React from 'react'
import image1 from '../assets/🖼️ CardImage.jpg'
import image2 from '../assets/🖼️ CardImage2.jpg'
import image3 from '../assets/🖼️ CardImage3.jpg'
import threedot from '../assets/threedot.svg'
import threemark from '../assets/threemark.svg'
import Slider from '../assets/Slider.svg'
import Teardropdot from '../assets/Teardropdot.svg'
import linksimplehori from '../assets/linksimplehori.svg'
import image8mini from '../assets/image8mini.svg'
import plus2 from '../assets/plus2.svg'
import slidergreen from '../assets/slidergreen.svg'
import sliderred from '../assets/sliderred.svg'
const Maincontent = () => {
  return (
    <div>
           <main className='container  bg-[#FCFBFC] h-[800px] w-auto grid grid-cols-3 gap-6'>
                 <div>
                 <div className='grid1 relative mb-4'> 
                   <input type='text' placeholder='TO DO' className=' rounded-md py-3 ml-[299px] mt-4 px-9 w-50 bg-[#F4F6F8] text-[#858A93]'></input>
                   <span className=' grid place-content-center absolute rounded shadow-lg-white text-white left-[520px] -translate-x-1/2 top-[35%] w-9 h-9 bg-slate-950 '>2</span>
                 </div>

                  <div className=' absolute bg-white  rounded-xl p-4 w-[270px] left-[290px] h-[350px]'> 
                    <img src={image1} className=' relative' alt='cardimage'/>


                        <div className=' flex justify-between items-center mt-2 mb-2'>
                         <h6 className=' font-semibold text-[16px] text-[#000000]'>Highfidelity Design</h6>
                         <img src={threedot} className=' relative' alt='cardimage'/>
                        </div>
                     <div className=' text-gray '>
                      <p className=' text-sm text-[#B8B9BD] font-normal '> Make clear design and color</p>
                      <p className=' flex relative gap-2 text-[#B8B9BD] font-normal text-sm mt-3'>
                      <img src={threemark} className=' relative' alt='cardimage'/>
                      Progress
                      <span className=' text-md font-semibold ml-auto text-black '> 2
                        /10
                      </span>
                      </p>
                        <div>
                        <img src={ Slider} className=' relative top-2' alt='cardimage'/>
                         <div className='flex text-[#B8B9BD] gap-3 -mt-2'>
                          <p className='flex gap-1 font-light text-sm
                           mt-1'> 
                       <img src={ Teardropdot} className=' relative top-4' alt='cardimage'/>
                       <div className=' mt-8 ml-1'>7</div>             
                           </p>
                          <p className='flex gap-1 font-light text-sm mt-1'> 
                          <img src={linksimplehori} className=' relative top-4' alt='cardimage'/> 
                          <div className=' mt-8 ml-1  '>2</div>
                           </p>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[90px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[75px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[60px]' alt='cardimage'/></div>
                         </div>
                        </div>
                     </div>
                  </div>
  
                  </div>
             <div className=' absolute bg-white  rounded-xl p-4 w-[270px] left-[290px] h-[200px] -bottom-[240px]'>
                  

                  <div className=' flex justify-between items-center mt-2 mb-2'>
                         <h6 className=' font-semibold text-[16px] text-[#000000]'>Highfidelity Design</h6>
                         <img src={threedot} className=' relative' alt='cardimage'/>
                        </div>
                     <div className=' text-gray '>
                      <p className=' text-sm text-[#B8B9BD] font-normal '> Make clear design and color</p>
                      <p className=' flex relative gap-2 text-[#B8B9BD] font-normal text-sm mt-4'>
                      <img src={threemark} className=' relative' alt='cardimage'/>
                      Progress
                      <span className=' text-md font-semibold ml-auto text-black '> 2
                        /10
                      </span>
                      </p>
                        <div>
                        <img src={ Slider} className=' relative top-5' alt='cardimage'/>
                         <div className='flex text-[#B8B9BD] gap-3 mt-2'>
                          <p className='flex gap-1 font-light text-sm
                           mt-1'> 
                       <img src={ Teardropdot} className=' relative top-4' alt='cardimage'/>
                       <div className=' mt-8 ml-1'>7</div>             
                           </p>
                          <p className='flex gap-1 font-light text-sm mt-1'> 
                          <img src={linksimplehori} className=' relative top-4' alt='cardimage'/> 
                          <div className=' mt-8 ml-1  '>2</div>
                           </p>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[90px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[75px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[60px]' alt='cardimage'/></div>
                         </div>
                        </div>
                     </div>
                     <button className=' absolute bg-[#F2F4F5] -bottom-[80px] flex justify-center gap-3 w-full text-center border-dashed border-[1px] rounded-lg font-medium text-[20px] right-1 py-6 px-13 text-sm text-[#7D8088]'>
                     <img src={plus2} className=' relative text-[#7D8088]' alt='cardimage'/>
                      Add Task</button>

                 </div>
                 
                                  <div>





                 <div>
              <div className='grid2 relative mb-4'> 
                   <input type='text' placeholder='Inprogress' className=' rounded-md py-3 ml-[176px] mt-4 px-9 w-50 bg-[#F4F6F8] text-[#858A93]'></input>
                   <span className=' grid place-content-center absolute rounded shadow-lg-white text-white left-[400px] -translate-x-1/2 top-[35%] w-9 h-9 bg-slate-950 '>1</span>
                     </div>

                  <div className=' absolute bg-white  rounded-xl p-4 w-[270px] left-[600px] h-[350px]'> 
                    <img src={image2} className=' relative' alt='cardimage'/>


                        <div className=' flex justify-between items-center mt-2 mb-2'>
                         <h6 className=' font-semibold text-[16px] text-[#000000]'>Highfidelity Design</h6>
                         <img src={threedot} className=' relative' alt='cardimage'/>
                        </div>
                     <div className=' text-gray '>
                      <p className=' text-sm text-[#B8B9BD] font-normal '> Make clear design and color</p>
                      <p className=' flex relative gap-2 text-[#B8B9BD] font-normal text-sm mt-3'>
                      <img src={threemark} className=' relative' alt='cardimage'/>
                      Progress
                      <span className=' text-md font-semibold ml-auto text-black '> 2
                        /10
                      </span>
                      </p>
                        <div>
                        <img src={sliderred} className=' relative top-2' alt='cardimage'/>
                         <div className='flex text-[#B8B9BD] gap-3 -mt-2'>
                          <p className='flex gap-1 font-light text-sm
                           mt-1'> 
                    <img src={ Teardropdot} className=' relative top-4' alt='cardimage'/>
                    <div className=' mt-8 ml-1'>7</div>             
                           </p>
                          <p className='flex gap-1 font-light text-sm mt-1'> 
                          <img src={linksimplehori} className=' relative top-4' alt='cardimage'/> 
                          <div className=' mt-8 ml-1  '>2</div>
                           </p>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[90px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[75px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[60px]' alt='cardimage'/></div>
                         </div>
                         <button className=' absolute bg-[#F2F4F5] -bottom-[80px] flex justify-center gap-3 w-full text-center border-dashed border-[1px] rounded-lg font-medium text-[20px] right-1 py-6 px-13 text-sm text-[#7D8088]'>
                     <img src={plus2} className=' relative text-[#7D8088]' alt='cardimage'/>
                      Add Task</button>

                        </div>
                     </div>
                  </div>
                    
                 </div>





                  
                 </div>






                 <div>
                 <div>
              <div className='grid2 relative mb-3'> 
                   <input type='text' placeholder='Completed' className=' rounded-md py-3 ml-[45px] mt-4 px-9 w-50 bg-[#F4F6F8] text-[#858A93]'></input>
                   <span className=' grid place-content-center absolute rounded shadow-lg-white text-white left-[267px] -translate-x-1/2 top-[35%] w-9 h-9 bg-slate-950 '>2</span>
                     </div>


                     <div className=' absolute  mb-3'> 
                     
                     
                     
             <div className=' absolute bg-white  rounded-xl p-4 w-[270px] left-[30px] h-[200px] -bottom-[200px]'>
                  

                  <div className=' flex justify-between items-center mt-2 mb-2'>
                         <h6 className=' font-semibold text-[16px] text-[#000000]'>Usability testing</h6>
                         <img src={threedot} className=' relative' alt='cardimage'/>
                        </div>
                     <div className=' text-gray '>
                      <p className=' text-sm text-[#B8B9BD] font-normal '> Make clear design and color</p>
                      <p className=' flex relative gap-2 text-[#B8B9BD] font-normal text-sm mt-4'>
                      <img src={threemark} className=' relative' alt='cardimage'/>
                      Progress
                      <span className=' text-md font-semibold ml-auto text-black '> 2
                        /10
                      </span>
                      </p>
                        <div>
                        <img src={slidergreen} className=' relative top-5' alt='cardimage'/>
                         <div className='flex text-[#B8B9BD] gap-3 mt-2'>
                          <p className='flex gap-1 font-light text-sm
                           mt-1'> 
                       <img src={ Teardropdot} className=' relative top-4' alt='cardimage'/>
                       <div className=' mt-8 ml-1'>7</div>             
                           </p>
                          <p className='flex gap-1 font-light text-sm mt-1'> 
                          <img src={linksimplehori} className=' relative top-4' alt='cardimage'/> 
                          <div className=' mt-8 ml-1  '>2</div>
                           </p>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[90px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[75px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[60px]' alt='cardimage'/></div>
                         </div>
                        </div>
                     </div>
                    

                 </div>
                     
                     
                    </div>





                  <div className=' absolute bg-white -bottom-[226px]  rounded-xl p-4 w-[270px] left-[900px] h-[350px]'> 
                  <img src={image3} className=' relative' alt='cardimage'/>


                        <div className=' flex justify-between items-center mt-2 mb-2'>
                         <h6 className=' font-semibold text-[16px] text-[#000000]'>Highfidelity Design</h6>
                         <img src={threedot} className=' relative' alt='cardimage'/>
                        </div>
                     <div className=' text-gray '>
                      <p className=' text-sm text-[#B8B9BD] font-normal '> Make clear design and color</p>
                      <p className=' flex relative gap-2 text-[#B8B9BD] font-normal text-sm mt-3'>
                      <img src={threemark} className=' relative' alt='cardimage'/>
                      Progress
                      <span className=' text-md font-semibold ml-auto text-black '> 2
                        /10
                      </span>
                      </p>
                        <div>
                        <img src={slidergreen} className=' relative top-2' alt='cardimage'/>
                         <div className='flex text-[#B8B9BD] gap-3 -mt-2'>
                          <p className='flex gap-1 font-light text-sm
                           mt-1'> 
                 <img src={ Teardropdot} className=' relative top-4' alt='cardimage'/>
                  <div className=' mt-8 ml-1'>7</div>             
                           </p>
                          <p className='flex gap-1 font-light text-sm mt-1'> 
                          <img src={linksimplehori} className=' relative top-4' alt='cardimage'/> 
                          <div className=' mt-8 ml-1  '>2</div>
                           </p>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[90px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[75px]' alt='cardimage'/></div>
                          <div> <img src={image8mini} className=' relative rounded-[16px] mt-8 left-[60px]' alt='cardimage'/></div>
                         </div>
                         <button className=' absolute bg-[#F2F4F5] -bottom-[85px] flex justify-center gap-3 w-full text-center border-dashed border-[1px] rounded-lg font-medium text-[20px] right-1 py-6 px-13 text-sm text-[#7D8088]'>
                     <img src={plus2} className=' relative text-[#7D8088]' alt='cardimage'/>
                      Add Task</button>

                        </div>
                     </div>
                  </div>
                    
                 </div>
                 </div>
           </main>
    </div>
  )
}

export default Maincontent
