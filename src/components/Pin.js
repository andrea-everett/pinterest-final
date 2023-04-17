import React from "react";
import "boxicons";

function Pin(props) {
  let pinStyle = 'border-solid border-2 border-black-600 aspect-auto justify-center relative w-full place-content-center rounded-lg mb-4 overflow-y-scroll'
  let imageHeight = ''
  if (props.pinDetails.size === "small") {
    imageHeight = "w-full object-cover aspect-video"
  } else if (props.pinDetails.size === "medium") {
    imageHeight = "w-full object-cover aspect-square"
  }
  else if (props.pinDetails.size === "large") {
    imageHeight = "w-full object-cover aspect-auto"
  }

  return (
    <div className={pinStyle}>
      <div className='relative'>
        <div className='absolute top-1 right-1' onClick={() => props.handleDeletePin(props.pinDetails.id)}>
          <box-icon name='x-circle'></box-icon>
        </div>
        <img src={props.pinDetails.img_blob} className={imageHeight} alt='' altprop='' />
      </div>
      <div>

        <div className='text-left text-lg pt-1 text-white md:text-black'>{props.pinDetails.title}</div>
        <div className='text-left pt-1 pb-6 text-white md:text-black'>{props.pinDetails.description}</div>
      </div>
    </div>
  )
}

export default Pin;
