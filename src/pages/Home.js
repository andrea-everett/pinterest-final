import { useState, useEffect } from "react";
import axios from 'axios';
import Image from '../components/Image.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const [images, setImages] = useState([]);
  const [isBackgroundVisible] = useState(true);

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    axios.get(`https://api.unsplash.com/photos/?page=30&per_page=50&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      .then((res) => setImages([...images, ...res.data]))
  }

  return (
    <>
      <InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={true} loader={<h3 style={{ color: "black", margin: "20px 0px" }}></h3>}>
        <div className='navigation-bar-mobile mt-5 mb-10 flex justify-center gap-x-5 hover:underline-offset-2 hover:underline decoration-white text-white sm:hidden'>
          <button>Browse</button>
          <button>Watch</button>
        </div>
        {isBackgroundVisible ?
          <div className="justify-center columns-2 gap-x-0 text-white w-full md:text-black text-center md:columns-6">
            {images.map(image =>
              <Image key={image.id}
                fullImageUrl={image.urls.full}
                imageUrl={image.urls.thumb}
                userName={image.user.name}
              />)}
          </div>
          : null}
      </InfiniteScroll>
    </>
  )
}