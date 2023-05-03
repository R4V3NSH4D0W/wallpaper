import React, { useState, useEffect } from 'react';
import axios from 'axios';
import request from '../Request';

const HomeImage = ({ searchResult }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchImage() {
      try {
        if (searchResult.length > 0) {
          setImage(searchResult);
        } else {
          const response = await axios.get(request.requestImage);
          setImage(response.data.hits);
        }
      } catch (error) {
        // console.log(error);
      }
    }

    fetchImage();
  }, [searchResult]);

  return (
    <>
      <div className="pt-4 m-2 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 lg:m-4">
        {image.map((img) => (
          <div key={img.id} className="h-64 relative">
            <img
              src={img.webformatURL}
              alt="Your image"
              className="rounded-lg shadow-lg h-full object-fit-cover object-cover"
            />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity">
              <img
                src={img.webformatURL}
                alt="Your image"
                className="rounded-lg shadow-lg h-full object-fit-cover object-cover transform hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeImage;
