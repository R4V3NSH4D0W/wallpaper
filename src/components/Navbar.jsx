import React from 'react'
import {FaRegClock,FaRandom,FaUpload} from 'react-icons/fa'
import {GrDiamond} from 'react-icons/gr'
import Searchbar from './Searchbar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import HomeImage from './HomeImage'
import request from '../Request'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [clickicon,SetClickIcon]=useState('');
  const [image,SetImage]=useState([])
  const HandleClick = (iconname) => {
    SetClickIcon('')
    SetClickIcon(iconname)
  }
  useEffect(() => {
    window.history.replaceState(null, null, `/home/${clickicon}`);
    console.log(`clickicon updated: ${clickicon}`);
  }, [clickicon]);
  useEffect(()=>{
    const fetchData=async()=>{
     try{
       const response =await axios.get(`https://pixabay.com/api/?key=${request.api_key}&per_page=20&order=${clickicon}`);
       SetImage(response.data.hits)
      }catch(error){
       console.log(error)
      }
   }
   fetchData();
   },[clickicon])
   console.log(image)
   const handleLinkClick = () => {
    SetImage([]);
  };
  return (
   <>
  <Link to='/' onClick={handleLinkClick}>
 <div className='flex flex-wrap items-center justify-between p-6 z-[100] lg:absolute'>
 <div className='w-full lg:w-auto text-center'>
    <h1 className='text-blue-400 text-4xl font-bold- cursor-pointer'>Wallhaven</h1>
    <h3 className='text-white text-sm font-bold cursor-pointer'>The best wallpaper on the Net!</h3>
  </div>
</div>
</Link>
<div className='flex justify-center gap-3 cursor-pointer p-2'>
    
     <div className='container w-[6rem] py-4' onClick={() => HandleClick('latest')}>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-green-600'>
      <FaRegClock className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Latest</h3>
    </div>
  </div>
  <div className='container w-[6rem] py-4' onClick={() => HandleClick('toplist')} >
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-purple-600'>
      <GrDiamond className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Toplist</h3>
    </div>
  </div>
  <div className='container w-[6rem] py-4'onClick={() => HandleClick('random')}>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-orange-500'>
      <FaRandom className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Random</h3>
    </div>
  </div>
  <div className='container w-[6rem] py-4'onClick={() => HandleClick('upload')}>
    <div className='bg-gray-300 rounded p-4 flex flex-col justify-center items-center hover:bg-gray-500 text-red-500'>
      <FaUpload className='text-xl mb-2' />
      <h3 className='font-bold text-center'>Upload</h3>
    </div>
  </div>
</div>
 <Searchbar/>
 <HomeImage clickResult={image}/>
   </>
  )
}

export default Navbar