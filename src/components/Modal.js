import React from 'react';

function Modal() {
  return (
        <div className='add-pin-modal'>
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
                                        <img src='' alt='pin-img'></img>
                                    </div>
                                </div>

                                <div className='section3'>
                                        <div className='save-from-img'>Save from site</div>
                                </div>
                        </div>

                        <div className='side' id='right'>
                                <div className='section1'>

                                </div>

                                <div className='section2'>

                                </div>

                                <div className='section3'>

                                </div>


                        </div>
                </div>
        </div>
  )
}

export default Modal;
