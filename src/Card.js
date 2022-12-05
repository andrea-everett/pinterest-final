import React from 'react';
import 'boxicons';


 function Pin() {
  return (
    <div>
            {/* <input type="file" name='picture' id="picture"> */}

                <div className='box-border h-512px w-252px bg-green-100'>
                    <div className='pin_title'></div>

                    <div className='pin-modal'>
                            <div className='modal-head'>
                                    <div className='save-card'>Save</div>

                            </div>

                            <div className='modal-footer'>
                                    <div className='location'>
                                            <div className='icon-container'>
                                                    <box-icon name='right-top-arrow-circle'></box-icon>
                                            </div>
                                            <span>Eatery</span>
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
                            <box-icon name='pin'></box-icon>
                </div>

            {/* </input> */}
    </div>
  )
}



//  function Pin(props) {
//   return (
//             <div style={{
//                 ...styles.pin,
//                 ...styles[props.size]
//             }}></div>
//   )
// }

// const styles = {
//     pin: {
//         margin:'15px 10px',
//         padding: 0,
//         borderRadius: '16px',
//         backgroundColor: 'red'
//     },
//     small: {
//         gridRowEnd: 'span 26'
//     },
//     medium: {
//         gridRowEnd: 'span 33'
//     },
//     large: {
//         gridRowEnd: 'span 45'
//     },
// }

export default Pin;