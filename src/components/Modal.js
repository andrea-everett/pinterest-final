import React from 'react';

function Modal() {
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
                                            <label htmlFor='upload-img' id="upload-img-label">
                                                    <div className='upload-img-container'>
                                                            <div id='dotted-border'>
                                                                <box-icon name='right-top-arrow-circle'></box-icon>
                                                            </div> 
                                                            <div>Click to upload</div>
                                                            <div>Recommendation: Use high-quality .jpg</div>
                                                    </div>
                                                    <input type="file" name="upload-img" id="upload-img" />
                                            </label>
                                </div>

                                <div className='modal-pin'>
                                    <div className='pin-img'>
                                        {/* <img src={pinImage} alt='pin-img'></img> */}
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
                                                        <div className='save-pin'>Save</div>
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
