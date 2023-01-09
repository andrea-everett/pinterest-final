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
                    <div className='pin_title'>{props.pinDetails.title}</div>

                    <div className='pin_modal'>
                            <div className='modal_head'>
                                    <div className='bg-red-600'>Save</div>
                            </div>

                            <div className='modal_foot'>
                                    <div className='destination'>
                                            <div className='pin_mock_icon_container'>
                                                    <box-icon name='right-top-arrow-circle' className="pin_mock_icon"></box-icon>
                                            </div>
                                            <span>{props.pinDetails.destination}</span>
                                    </div>

                                    <div className='pin_mock_icon_container'>
                                                <box-icon type='solid' name='share-alt' className="pin_mock_icon"></box-icon>
                                            </div>

                                            <div className='pin_mock_icon_container'>
                                                    <box-icon name='dots-horizontal-rounded' className="pin_mock_icon"></box-icon>
                                            </div>
                            </div>
                    </div>

                <div className='pin_image'></div>
                                <img onLoad={check_size} src={props.pinDetails.img_blob} alt='pin_image'></img>
                </div>
//     </div>
  )
}

export default Pin;