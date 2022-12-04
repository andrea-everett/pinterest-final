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
                        <Pin key={_state.pins.length} />
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
                    <div className='w-full h-4 fixed top-0'>
                            <div onClick={() => this.setState({ show_modal:true})} className="pin_mock_icon_container add_pin">
                            <div className='flex justify-end w-60px h-60px p-10'>
                            <box-icon name='plus-circle'></box-icon>
                            </div>
                            </div>
                    </div>

                    <div className='pin_container'>
                        {this.state.pins}
                    </div>

                    <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({show_modal :false}) : null } 
                        className='add_pin_modal_container'>
                    {
                        this.state.show_modal ?
                            <Modal add_pin={this.add_pin} /> : null
                    }
                        <Modal />
                    </div>
            </div>
         )
    }
}

export default ModalAndPin;
