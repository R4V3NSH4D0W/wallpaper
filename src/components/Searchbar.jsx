import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState,useEffect } from 'react'
import axios from 'axios'
import request from '../Request'
import HomeImage from './HomeImage'
const Searchbar = () => {
    const [query,setQuery]=useState('')
    const [result,setResult]=useState([])
    const handelInputChange=(event)=>{
        setQuery(event.target.value)
    }
    const handelSubmit= async(event)=>{
      event.preventDefault();
      try{
        const response = await axios(`https://pixabay.com/api/?key=${request.api_key}&q=${query}&image_type=photo`)
        setResult(response.data.hits)
      }catch(error){
        console.log(error)
      }

    }


  return (
    <>
        <form onSubmit={handelSubmit}>
    <div className=' flex justify-center' >
      <input onChange={handelInputChange} className=' bg-gray-300 h-9 w-[20.5rem] rounded-l-md focus:outline-none lg:w-[35rem]' placeholder=' search...'></input>
        <button type="submit" className=" bg-blue-500 hover:bg-blue-700 rounded-r-md px-4">
        <FaSearch className="text-white" />
      </button>
    </div>
    </form>
    <HomeImage searchResult={result}/>
    </>
  )
}

export default Searchbar