import React from 'react';

import Pin from "./Card.js";

 function PinterestLayout() {
  return (
                    // <div style={styles.pin_container}>
                    //   <Pin size='small' />
                    //   <Pin size='medium' />
                    //   <Pin size= 'large' />
                    //   <Pin size='small' />
                    //   <Pin size='medium' />
                    //   <Pin size= 'large' />
                    //   <Pin size='small' />
                    //   <Pin size='medium' />
                    //   <Pin size= 'large' />

                    // </div>

        <div className='pin_container container grid-template-columns: repeat(auto-fill, 250px) auto-rows-10px justify-center bg-red-700'>
                <div className='small row-span-26 '></div>
                <div className='medium row-span-33'></div>
                <div className='large row-span-45'></div>
        </div>

  )
}

// const styles = {
//   pin_container: {
//     margin: 0,
//     padding: 0,
//     width: '80vw',
//     gridTemplateColumns: 'repeat(auto-fill, 250px)',
//     gridAutoRows: '10px'
//   }
// }



export default PinterestLayout;