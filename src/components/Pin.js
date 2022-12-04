import React, {useState} from 'react';
import { ProgressPlugin } from 'webpack';
// import 'boxicons';
import '../styles.css';

function Pin(props) {
// const [pinImage, setPinImage] = useState();
  return (
    <div>
            <input onChange={event => upload_img(event, setPinImage)} type="file" name='picture' id="picture"></input>

                <div className=' bg-green-100'>
                    <div className='pin_title'>{props.pinDetails.title}</div>

                    <div className='pin-modal'>
                            <div className='modal-head'>
                                    <div className='bg-red-600'>Save</div>

                            </div>

                            <div className='modal-footer'>
                                    <div className='location'>
                                            <div className='icon-container'>
                                                    <box-icon name='right-top-arrow-circle'></box-icon>
                                            </div>
                                            <span>{props.pinDetails.destination}</span>
                                    </div>

                                    <div className='icon-container'>
                                                <box-icon type='solid' name='share-alt'></box-icon>
                                            </div>

                                            <div className='icon-container'>
                                                    <box-icon name='dots-horizontal-rounded'></box-icon>
                                            </div>
                            </div>
                    </div>

                <div className='pin_image'></div>
                                <img src={props.pinDetails.img_blob}></img>
                </div>
    </div>
  )
}

export default Pin;