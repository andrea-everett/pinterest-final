import React, { useState} from 'react';
import "../index.css";

function upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin) {
        if (event.target.files && event.target.files[0]) {
                if (/image\/*/.test(event.target.files[0].type)) {
                        const reader = new FileReader();

                        reader.onload = function() {
                                setPinDetails({
                                        ...pinDetails,
                                        img_blob: reader.result
                                });
                                setShowLabel(false);
                                setShowLabel(true);
                        }
                        reader.readAsDataURL(event.target.files[0]);
                }
        }
}

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

function save_pin(pinDetails) {
        const users_data = {
                ...pinDetails,
                author: 'Jack',
                board: 'default',
                title: document.querySelector('#pin_title').value,
                description: document.querySelector('#pin_description').value,
                desitination: document.querySelector('#pin_destination').value,
                pin_size: document.querySelector('#pin_size').value
        }
        console.log(users_data)
}

function Modal() {
        const [pinDetails, setPinDetails] = useState({
                author: '',
                board: '',
                title: '',
                description: '',
                destination: '',
                img_blob: '',
                pin_size: '',
        })
        const [showLabel, setShowLabel] = useState(true);
        const [showModalPin, setShowModalPin] = useState(false);

  return (
        <div className='bg-green-100'>
                <div className='pin-container'>
                        <div className='side' id='left'>
                                <div className='section1'>
                                        <div className='mock-icon-container'>
                                        <box-icon name='dots-horizontal-rounded'></box-icon>    
                                        </div>
                                </div>

                                <div className='section2'>
                                            <label htmlFor='upload-img' id="upload-img-label"
                                                        style={{
                                                                display: showLabel ? 'block' : 'none'
                                                        }}>
                                                    <div className='upload-img-container'>
                                                            <div id='dotted-border'>
                                                                <box-icon name='right-top-arrow-circle'></box-icon>
                                                            </div> 
                                                            <div>Click to upload</div>
                                                            <div>Recommendation: Use high-quality .jpg</div>
                                                    </div>
                                                    <input onChange={event => upload_img(event, pinDetails, setPinDetails, setShowLabel, setShowModalPin)} type="file" name="upload-img" id="upload-img" />
                                            </label>
                                </div>

                                <div className='modal-pin'
                                                style={{
                                                        display: showModalPin ? 'block' : 'none'
                                                }}>
                                    <div className='pin-img'>
                                        <img onLoad= {check_size} src={pinDetails.img_blob} alt='pin-img'></img>
                                    </div>
                                </div>

                                <div className='section3'>
                                        <div className='bg-green-100'>Save from site</div>
                                </div>
                        </div>

                        <div className='side' id='right'>
                                <div className='section1'>
                                        <div className='select-size'>
                                                <select defaultValue="Select" name="pin-size" id='pin-size'>
                                                        <option value="">Select</option>
                                                        <option value="small">Small</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="large">Large</option>
                                                        </select>
                                                        <div onClick={()=> save_pin(pinDetails)} className='save-pin'>Save</div>
                                        </div>

                                </div>

                                <div className='section2'>
                                        <input placeholder='Add your title'  type="text" className='new-pin-input' id="pin-title" />
                                        <input placeholder='Tell everyone what your pin is about' type="text" className='new-pin-input' id="pin-description" />
                                        <input placeholder='Add a destination link' type="text" className='new-pin-input' id="pin-destination" />
                                </div>

                                <div className='section3'>

                                </div>
                        </div>
                </div>
        </div>
  )
}

export default Modal;
