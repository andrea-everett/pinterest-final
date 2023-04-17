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

  // const handleDeletePin = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const res = await fetch(`${URL}/pins/${props.pinDetails.id}`, {
  //       method: 'DELETE',
  //       // body: JSON.stringify(props.pinDetails),
  //       headers: {
  //         "Content-Type": 'application/json'
  //       }
  //     })
  //     const data = await res.json()
  //     console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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

  /* <div className={`${props.pinDetails.pin_size}`}> */

  /* <div className="pin_modal">
        <div className="pin_title_container">
          <div className="modal_head right-1 top-1 text-center w-3/12  ">
          </div>

          <div className="pin_container bg-black h-5/6">
            <div className="modal_foot relative">
              <div className="pin_image"></div>
              <img
                src={props.pinDetails.img_blob}
                alt="pin_image rounded-full"
              ></img>
              <div className="destination text-left pt-1 pb-5">
                <div className="pin_mock_icon_container absolute bottom-1 w-3/12 bg-gray-200 rounded-md text-left pt-1 pb-5">
                  <box-icon
                    name="right-top-arrow-circle"
                    className="pin_mock_icon p-1"
                  ></box-icon>
                </div>

                <div className="pin_mock_icon_container sm:absolute sm:bottom-1 sm:right-1 sm:bg-gray-200 rounded-lg">
                  <box-icon
                    name="dots-horizontal-rounded"
                    className="pin_mock_icon"
                  ></box-icon>
                </div>
              </div>
            </div>
          </div>

          <div className="details_container flex">
            <div className="pin_title text-white pt-2 sm:text-white bottom text-lg">
              {props.pinDetails.title}
            </div>
            {/* <box-icon name='dots-horizontal-rounded' className="pin_mock_icon items-end" color="white"></box-icon> */
  /* </div>

          <div className="pin_description text-white sm:text-black bottom text-sm">
            {props.pinDetails.description}
          </div>
        </div >
      </div > * /} */
}

export default Pin;
