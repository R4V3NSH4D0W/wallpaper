import React from 'react'
import {FaRegClock,FaRandom,FaUpload} from 'react-icons/fa'
import {GrDiamond} from 'react-icons/gr'
const IconNav = () => {
  return (
    <>
     {/* icon section */}
     <div className='flex justify-center gap-3 cursor-pointer p-2'>
  <div className='container w-[6rem] py-4'>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-green-600'>
      <FaRegClock className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Latest</h3>
    </div>
  </div>
  <div className='container w-[6rem] py-4'>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-purple-600'>
      <GrDiamond className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Toplist</h3>
    </div>
  </div>
  <div className='container w-[6rem] py-4'>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-orange-500'>
      <FaRandom className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Random</h3>
    </div>
  </div>
  <div className='container w-[6rem] py-4'>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-red-500'>
      <FaUpload className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Upload</h3>
    </div>
  </div>
</div>
  {/* end of icon section */}
    </>
  )
}

export default IconNav