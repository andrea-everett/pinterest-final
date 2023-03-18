import React from "react";
import "boxicons";

function Pin(props) {
  return (
    <div>
      <div className={`${props.pinDetails.pin_size}`}>
      
          <div className="pin_modal ">
          
            <div className="modal_head right-1 top-1 text-center w-3/12  ">
              <div className="bg-red-600 top-2 right-20 hidden text-white rounded-full ">
                Save
              </div>
            </div>

            <div className="modal_foot relative">
              <div className="modal_foot_container">
                <div className="destination">
                  <div className="pin_mock_icon_container absolute bottom-1 w-3/12 bg-gray-200 rounded-md">
                    <box-icon
                      name="right-top-arrow-circle"
                      className="pin_mock_icon p-1"
                    ></box-icon>
                  </div>
                </div>

                <div className="pin_mock_icon_container sm:absolute sm:bottom-1 sm:right-1 sm:bg-gray-200 rounded-lg">
                  <box-icon
                    name="dots-horizontal-rounded"
                    className="pin_mock_icon"
                  ></box-icon>
                </div>
                <div className="pin_image"></div>
                <img
                  src={props.pinDetails.img_blob}
                  alt="pin_image rounded-full"
                ></img>
              </div>
            </div>
          </div>

          <div className="pin_title_container flex">
            <div className="pin_title flex justify-end text-white pt-2 sm:text-black bottom text-lg">
              {props.pinDetails.title}
            </div>
            {/* <box-icon name='dots-horizontal-rounded' className="pin_mock_icon items-end" color="white"></box-icon> */}
          </div>

          <div className="pin_description text-white sm:text-black bottom text-sm">
            {props.pinDetails.description}
          </div>
        </div>
      </div>

  );
}

export default Pin;
