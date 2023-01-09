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
                    <div className='navigation-bar w-full h-4 fixed top-0'>
                            <div onClick={() => this.setState({ show_modal:true})}>
                            <div className=' pint_mock_container add_pin flex justify-end w-20px h-60px p-10'>
                                    <box-icon name='plus-circle'></box-icon>
                            </div>
                            </div>
                    </div>

                    <div className='pin_container m-20 absolute grid grid-cols-5 gap-y-5 gap-x-10  grid-row-10  justify-center '>
                        {this.state.pins}
                    </div>

                    <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({show_modal :false}) : null } 
                        className='add_pin_modal_container  bg-gray-200'>
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
