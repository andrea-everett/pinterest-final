import React from 'react';

import 'boxicons';


function check_size(event) {
        const image = event.target;

        image.classList.add('pin_max_width');

        if (
                image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width ||
                image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().height
        ) {
                image.classList.remove('pin_max_width');
                image.classList.add('pin_max_height');
        }

        image.style.opacity = 1;
}

function Pin(props) {
// const [pinImage, setPinImage] = useState();
  return (
//     <div>
//             <input onChange={event => upload_img(event, setPinImage)} type="file" name='picture' id="picture"></input>

                <div className={`${props.pinDetails.pin_size}`} >
                    <div className='pin_title hidden'>{props.pinDetails.title}</div>

                    <div className='pin_modal relative rounded-lg'>
                            <div className='hover:modal_head absolute right-1 top-1 text-center w-6/12  '>
                                    <div className= 'bg-red-600 text-white rounded-full '>Save</div>
                            </div>

                            <div className='modal_foot'>
                                    <div className='destination'>
                                            <div className='pin_mock_icon_container absolute bottom-1 w-6/12 bg-gray-200 rounded-md'>
                                                <box-icon name='right-top-arrow-circle'  className="pin_mock_icon right-2"></box-icon>
                                            </div>
                                    </div>

                                            <div className='pin_mock_icon_container absolute bottom-1 right-1 bg-gray-200 rounded-lg'>
                                                    <box-icon name='dots-horizontal-rounded' className="pin_mock_icon"></box-icon>
                                            </div>
                                            <div className='pin_image rounded-lg max-w-full max-h-full'></div>
                                                         <img  src={props.pinDetails.img_blob} alt='pin_image rounded-full'></img>
                                </div>
                        </div>
                </div>

            
//     </div>
  )
}

export default Pin;