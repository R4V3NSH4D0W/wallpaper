import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState,useEffect } from 'react'
const Searchbar = () => {
    const [query,setQuery]=useState('')
    const handelInputChange=(event)=>{
        setQuery(event.target.value)
    }
  return (
    <>
    <div className=' flex justify-center'>
        <input onChange={handelInputChange} className=' bg-gray-300 h-9 w-[18rem] rounded-l-md focus:outline-none lg:w-[35rem]' placeholder=' search...'></input>
        <button type="submit" className=" bg-blue-500 hover:bg-blue-700 rounded-r-md px-4">
        <FaSearch className="text-white" />
      </button>
    </div>
    </>
  )
}

export default Searchbar