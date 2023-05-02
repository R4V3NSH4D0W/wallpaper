import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const HomeImage = ({fetchURL,id}) => {
    // const [image,setImage]=useState('')
    useEffect(() => {
       async function fetchImage(){
        try{
            const response =await axios.get(fetchURL);
            const imageUrl = response.data.url;
            console.log(imageUrl);
        }catch(error){
            console.log(error)
        }
       }
      }, [fetchURL]);
      
  return (
   <>
 
  </>
  )
}

export default HomeImage
