import React from 'react';
import 'boxicons';

import Modal from './Modal.js';
import Pin from './Pin.js';


class ModalAndPin extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        pins: [],
        show_modal: false,
        isBackgroundVisible: true,
      };
    }
  
    hideBackground = () => {
      this.setState({ isBackgroundVisible: false });
    };
  
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
          {this.state.isBackgroundVisible ? (
            <nav className="pinterest_feed">
              <div className="navigation-bar sm:flex sm:gap-x-8 sm:m-10 sm:text-lg">
                <div className="pinterest sm:p-2 ">
                  <box-icon
                    name="pinterest"
                    type="logo"
                    color="#f90707"
                  ></box-icon>
                </div>
                <div className="button bg-black rounded-full text-white p-2">
                  Home
                </div>
                <div className="button p-2">Today</div>
                <div className="button p-2">Create</div>
                <div className="search-bar bg-gray-200 w-9/12 rounded-lg p-2">
                  <box-icon name="search-alt-2"></box-icon>Search
                </div>
                <div className="bell sm:p-2">
                  <box-icon type="solid" name="bell" color="#928e8e"></box-icon>
                </div>
                <div className="message sm:p-2">
                  <box-icon
                    name="message-rounded-dots"
                    type="solid"
                    color="#928e8e"
                  ></box-icon>
                </div>
                <div className="profile-img ">
                  <img src="../images/profile-pic.jpg"></img>
                </div>
              </div>
            </nav>
          ) : null}
  <div onClick={() => this.setState({ show_modal: true })}>
            <div
              onClick={this.hideBackground}
              className="plus text-right mr-12 sm:p-2"
            >
              <box-icon name="plus-circle"></box-icon>
            </div>
          </div>
          {this.state.isBackgroundVisible ? (
            <div>
              <div className="arrow text-right mr-12">
                <box-icon name="up-arrow-alt" color="#f10606"></box-icon>
              </div>
              <div className="begin text-md text-right p-2 bg-red-500 w-25 text-white">
                Click arrow to begin!
              </div>
            </div>
          ) : null}
  
          <div className="pin_container  m-5 gap-x-2  sm:pin_container-sm md:pin_container-md absolute" >
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
  
  export default ModalAndPin;
