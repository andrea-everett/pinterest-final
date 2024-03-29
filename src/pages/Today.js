import { useState, useEffect } from "react";
import axios from 'axios';
import Image from '../components/Image.js';


export default function Home() {
  const [images, setImages] = useState([]);
  const [isBackgroundVisible, setBackgroundVisible] = useState(true);

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    axios.get(`https://api.unsplash.com/photos/?page=30&per_page=50&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      .then((res) => setImages([...images, ...res.data]))
  }

  const hideBackground = () => {
    setBackgroundVisible(prevState => !prevState);
  };

  return (
    <>

      <div className="absolute text-white md:text-black text-4xl md:text-8xl text-center">
        <div className="p-10">
          <h1>Stay Inspired</h1>
        </div>


        {isBackgroundVisible ?
          <div className="relative text-base items-center top-1 columns-1 gap-x-0 text-center md:columns-2 w-full md:w-6/12 m-auto">
            {images.map(image =>
              <Image key={image.id}
                fullImageUrl={image.urls.full}
                imageUrl={image.urls.thumb}
                userName={image.user.name}
              />)}
          </div>
          : null}
      </div>
    </>
  )
}

