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
                    <div className='navigation-bar w-full h-4 align-right '>
                            <div onClick={() => this.setState({ show_modal:true})}>
                                    <box-icon name='plus-circle'></box-icon>
                            </div>
                            <div className='title color text-white bg-red-400 text-center text-lg'>Click arrow to begin!</div>
                    </div>
                  

                    <div className='pin_container m-20 absolute grid grid-cols-2 gap 1 grid-rows-4 gap-1 sm:grid sm:grid-cols-5 sm:gap-1 sm:grid-rows-4  justify-center '>
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
