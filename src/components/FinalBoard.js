import React from 'react';
import 'boxicons';

import Modal from './Modal.js';
import Pin from './Pin.js';

class FinalBoard extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        pins: [],
        show_modal: false,
      };
    }

    add_pin = (pinDetails) => {
      this.setState((_state) => {
        const new_pins = [..._state.pins]
  
        new_pins.push(<Pin pinDetails={pinDetails} key={_state.pins.length} />)
        return {
          pins: new_pins,
          show_modal: false,
        };
      });
    };

    render() {
      return (
        <div>
              <div className="plus  text-right mr-15 sm:mr-8 sm:p-3">
              <div className="pin_container justify-center grid grid-cols-2 sm:pin_container-sm sm:grid-cols-4" >
          </div> 
          <div className="add_pin_modal_container  bg-gray-200 ">
                  <Modal add_pin={this.add_pin} /> 
           </div>
          </div>
        </div>
          ); 
      }
}
  
  export default FinalBoard;
  