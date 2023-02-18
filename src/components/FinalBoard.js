import React from 'react';
import 'boxicons';

import Modal from './AddPin.js';
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
        const new_pins = [..._state.pins];
  
        new_pins.push(<Pin pinDetails={pinDetails} key={_state.pins.length} />);
        return {
          pins: new_pins,
          show_modal: false,
        };
      });
    };

  render() {
      return (
        <div>
                <div onClick={() => {
                      this.setState(prevState => ({ show_modal: !prevState.show_modal }))
                      this.props.hideBackground()}
                    }>
                  <div className="plus  text-right mr-15 sm:mr-8 sm:p-3" >
                      
                    </div>
                </div>
        
                {this.props.isBackgroundVisible ? (
                      <div>
                      <div className="arrow text-right mr-12">
                          <box-icon name="up-arrow-alt" color="#f10606"></box-icon>
                      </div>
                      <div className="begin m-6  sm:text-md sm:text-right p-2sm: bg-red-500 sm:w-25 sm:text-white sm:p-3">
                          Click arrow to begin!
                      </div>
                      </div>
                  ) : null}
  
              <div className="pin_container justify-center grid grid-cols-2 sm:pin_container-sm sm:grid-cols-4" >
                {this.state.pins}
              </div>
            <div
              onClick={(event) =>
                event.target.className === "add_pin_modal"
                  ? this.setState({ show_modal: false })
                  : null
                  }
                  className="add_pin_modal_container  bg-gray-200 "
              >
                  {this.state.show_modal ? <Modal add_pin={this.add_pin} /> : null}
            </div>
            </div>

          ); 
      }
  }
  
  export default FinalBoard;