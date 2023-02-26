import {useState, useEffect} from "react";
import axios from 'axios';
import Image from './Image.js';

export default  function Home() {
    const [images, setImages, person] = useState([]);
    const [isBackgroundVisible, setBackgroundVisible] =useState(true);

    useEffect(() =>{
        fetchImages()
    }, [])

    const fetchImages = () => {
        axios.get(`https://api.unsplash.com/photos/?page=30&per_page=50&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
        .then((res) =>setImages([...images, ...res.data])) }
        
        const hideBackground = () => {
            setBackgroundVisible(prevState => !prevState);
        };

        return (
            <>
             <div className="absolute text-8xl text-center w-6/12">
             <div className="p-10">
                <h1>Stay Inspired</h1>
             </div>
                
                {isBackgroundVisible ? 
                <div className="relative  items-center  bottom-1 columns-2 gap-x-0 text-center md:columns-2">
                        {images.map(image => 
                                <Image key={image.id} 
                                fullImageUrl={image.urls.full} 
                                imageUrl={image.urls.thumb} 
                                // userName={image.user.name} className='text-xs'
                                // profileImage={user.name.profile_image} 
                         />)}
                </div>
                : null } 
                  
                 </div>
             </>
         )
    }
        
