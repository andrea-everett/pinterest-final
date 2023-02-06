import {useState, useEffect} from "react";
import axios from 'axios';
import Article from "./Article.js";
import Image from './Image.js';
import InfiniteScroll from 'react-infinite-scroll-component';
import ModalAndPin from "./FinalBoard.js";

export default  function GetImages () {
    const [images, setImages, person] = useState([]);


    useEffect(() =>{
        fetchImages()
    }, [])

    const fetchImages = () => {
        axios.get(`https://api.unsplash.com/photos/?page=20&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
        .then((res) =>setImages([...images, ...res.data])) }
        
        return (
            <>
                <ModalAndPin ></ModalAndPin>
                <div className="">
                <InfiniteScroll dataLength={images.length} next={fetchImages} hasMore={true} loader={<h3 style={{color:"black", margin:"20px 0px"}}>Loading...</h3>}>

                <div className="columns-2 gap-x-1 mx-12 text-center md:columns-5 md:gap-x-3 md:gap-y-1 ">
                        {images.map(image => 
                                <Image key={image.id} 
                                fullImageUrl={image.urls.full} 
                                imageUrl={image.urls.thumb} 
                                userName={image.user.name} 
                                // profileImage={user.name.profile_image} 
                         />)}
                </div>
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
                 </div>
             </>
         )
    }
        