import React, { useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Grid1 from './components/Grid1'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'
import Sidebar from './components/Sidebar'
function App() {
  const sideMenuContainer = useRef(null)
  const mainContainer = useRef(null)
  function sideMenuFn() {
    sideMenuContainer.current.classList.toggle("hidden")
    // mainContainer.current.classList.toggle("opacity-70")
  }

  return (

    <div className='flex'>
      <div className='xl:w-1/5 md:w-2/6  fixed border-red-900 md:relative z-30 border hidden md:block whitespace-nowrap' ref={sideMenuContainer}>
        <Sidebar />
      </div>

      <div className='md:w-5/6 w-full ' ref={mainContainer}>
        <Header sidemenuHandler={sideMenuFn} />
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-[#FCFBFC] gap-10 px-6 md:px-14 py-5 md:py-10'>
          <Grid1 />
          <Grid2/>
          <Grid3 />
        </div>
        {/* <Grid2 />
        <Grid3 /> */}
      </div>
    </div>



  )
}

export default App
