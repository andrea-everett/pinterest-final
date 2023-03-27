import { useState, useEffect } from "react";
import axios from 'axios';
import Image from '../components/Image.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const [images, setImages, person] = useState([]);
  const [isBackgroundVisible, setBackgroundVisible] = useState(true);

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    axios.get(`https://api.unsplash.com/photos/?page=30&per_page=50&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
      .then((res) => setImages([...images, ...res.data]))
  }

  // const hideBackground = () => {
  //   setBackgroundVisible(prevState => !prevState);
  // };

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
              // profileImage={user.name.profile_image} 
              />)}
          </div>
          : null}

        {/* <div>
                    <className="w-20 rounded-full"></=>
                </div> */}

        {/* <div className="overlay relative">
                    {person.photos[0].urls.raw && (
                        <img
                        src={person.photos[0].urls.raw}
                        alt={person.name}
                        className="profile-image object-fit object-cover w-full"
                        />
                    )}
                    <h1 className="absolute bottom-5 left-5 uppercase text-white font-bold tracking-wide text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        {person.name}
                    </h1>
                </div> */}
      </InfiniteScroll>
    </>
  )
}