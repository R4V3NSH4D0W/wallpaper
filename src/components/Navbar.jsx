import React from 'react'
import IconNav from './IconNav'
import Searchbar from './Searchbar'
const Navbar = () => {
  return (
   <>
 <div className='flex flex-wrap items-center justify-between p-6 z-[100] lg:absolute'>
 <div className='w-full lg:w-auto text-center'>
    <h1 className='text-blue-400 text-4xl font-bold- cursor-pointer'>Wallhaven</h1>
    <h3 className='text-white text-sm font-bold cursor-pointer'>The best wallpaper on the Net!</h3>
  </div>
</div>

 <IconNav/>
 <Searchbar/>
   </>
  )
}

export default Navbar