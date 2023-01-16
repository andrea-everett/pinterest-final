import React from 'react';
import 'boxicons';

import Modal from './Modal.js';
import Pin from './Pin.js';


 class ModalAndPin extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                pins:[],
                show_modal: false
            }
        }

        add_pin = pinDetails => {
                this.setState(_state => {
                    const new_pins = [
                        ..._state.pins
                    ]

                    new_pins.push(
                        <Pin pinDetails={pinDetails} key={_state.pins.length} />
                    )
                    return {
                        pins: new_pins,
                        show_modal: false
                    }
                })
        }

  render() {
            return (
            <div>
                <div className='pinterest_feed relative'>
                    <div className='navigation-bar h-4 absolute top-3 left-3 '>
                            <div onClick={() => this.setState({ show_modal:true})}>
                                    <box-icon name='plus-circle'></box-icon>
                            </div>
                            
                            <div className='pinterest_logo '>
                                    <div className='pinterest relative top-3  '><box-icon name='pinterest' type='logo' color='#f90707' ></box-icon></div>
                            </div>
                            {/* <div className='title color text-white bg-red-500 text-center text-lg relative top-20 left-30'>Click arrow to begin!</div> */}
                    </div>
                </div>
                  
                {/* <div className='pin_container m-20 absolute grid grid-cols-2 gap  gap-1 h-500 w-200  sm:grid sm:grid-cols-5 sm:gap-1 sm:grid-rows-3 sm:h-screen justify-center '> */}
                    <div className='pin_container m-20 absolute flex flex-wrap justify-between gap-x-5 gap-y-5 h-screen '>
                        {this.state.pins}
                    </div>

                    <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({show_modal :false}) : null } 
                        className='add_pin_modal_container  bg-gray-200 '>
                         {
                            this.state.show_modal ?
                                <Modal add_pin={this.add_pin} /> : null
                         }                    
                    </div>
            </div>
         )
    }
}

export default ModalAndPin;
