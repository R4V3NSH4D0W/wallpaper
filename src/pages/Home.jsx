import React from 'react'
import HomeImage from '../components/HomeImage'
import request from '../Request'
const Home = () => {
  return (
 <>
 <HomeImage id='1' fetchURL={request.requestImage}/>
 </>
  )
}

export default Home