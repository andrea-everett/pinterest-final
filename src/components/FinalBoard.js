import React from 'react';
import 'boxicons';

import Modal from './Modal.js';
import Pin from './Pin.js';
import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom';

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
        <Router>
        <div>
          {this.props.isBackgroundVisible ? (
            <nav className="pinterest_feed">
                <div className='navigation-bar-mobile mt-5 flex justify-center gap-x-3 hover:underline-offset-2 hover:underline decoration-white text-white sm:hidden'>
                        <button>Browse</button>
                        <button>Watch</button>
                    </div>
                <div className='floating-menu'>
                        <div className='flex flex-col'>
                            <div className=' bg-black fixed left-0 bottom-0 w-full space-x-7  text-center p-5 sm:hidden'>

                                <button className='btn w-12' title='Home'>
                                        <box-icon name='home-alt' color='#f9f5f5' ></box-icon>
                                </button>

                                <button className='btn w-12' title='Home'>
                                         <box-icon name='search-alt-2' color='#f9f5f5' ></box-icon>
                                </button>

                                {/* <button className='btn w-12' title='Home'>
                                        <div onClick={this.hideBackground}
                                        className="plus bg-white w-10   rounded-full  mr-12 sm:p-2" >
                                        <box-icon name="plus-circle"></box-icon>
                               </div>
                                </button> */}

                                <button className='btn w-12' title='Home'>
                                        <box-icon name='message-rounded-dots' color='#f9f5f5' ></box-icon>
                                </button>

                                <button className='btn w-12' title='Home'>
                                        <img src="/components/images/profile-pic.jpg"></img>
                                </button>
                        </div>
                 </div>
                </div>
              <div className="navigation-bar hidden sm:flex sm:gap-x-8 sm:m-10 sm:text-lg align-center">
                  <div className="pinterest align-center sm:p-2 ">
                    <box-icon name="pinterest"
                      type="logo"
                      color="#f90707"
                      size="md"
                    ></box-icon>
                  </div>
                  <div className="button bg-black rounded-full w-24 h-12 text-white text-center align-center p-2">
                    Home
                  </div>
                  <div className="button p-2">Today</div>

                  <Link to="/" component={Create} />

                  
      
                  <div className="search-bar bg-gray-200 w-9/12 rounded-full flex gap-x-2 p-3 align-center">
                    <box-icon name="search-alt-2"></box-icon>
                          <p>Search</p>
                  </div>
                  <div className="bell align-center sm:p-3">
                    <box-icon type="solid" name="bell" color="#928e8e" size="sm"></box-icon>
                  </div>
                  <div className="message sm:p-3" size="sm">
                    <box-icon name="message-rounded-dots"type="solid"color="#928e8e"></box-icon>
                  </div>
                  </div>
              </nav>
            ) : null}

                <div onClick={() => {
                      this.setState(prevState => ({ show_modal: !prevState.show_modal }))
                      this.props.hideBackground()}
                    }>
                  <div className="plus  text-right mr-15 sm:mr-8 sm:p-3" >
                        <box-icon name="plus-circle"   color="#928e8e"></box-icon>
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
            </Router>
          ); 
      }
  }
  
  export default FinalBoard;