import React from "react";
import "boxicons";

function Pin(props) {
  let gridRow = ''
  return (
    <a href={props.pinDetails.img_blob} target="_blank" rel="noreferrer" className='inline-block w-5/6 justify-center place-content-center rounded-lg'>
      <img src={props.pinDetails.img_blob} alt='' altprop='' />
      <div className='text-left pt-1 pb-5'>{props.pinDetails.title}</div>
      <div className='text-left pt-1 pb-5'>{props.pinDetails.description}</div>
    </a>
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
