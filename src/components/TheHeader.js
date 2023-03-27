import React from 'react';
import 'boxicons';
import { NavLink } from "react-router-dom";

class TheHeader extends React.Component {

  render() {
    return (
      <nav className="pinterest_feed">
        <div className='floating-menu'>
          <div className='flex flex-col fixed bg-black'>
            <div className='bg-black fixed z-999 left-0 bottom-0 w-full space-x-20 space-evenly  text-center p-5 sm:hidden'>

              <NavLink to="/" className='btn w-12' title='Home'>
                <box-icon name='home-alt' color='#f9f5f5' ></box-icon>
              </NavLink>

              <NavLink to="/today" className='btn w-12' title='Home'>
                <box-icon name='search-alt-2' color='#f9f5f5' ></box-icon>
              </NavLink>

              <NavLink to="/create" className='btn w-12' title='Home'>
                <box-icon name='message-rounded-dots' color='#f9f5f5' ></box-icon>
              </NavLink>

              {/* <button className='btn w-12' title='Home'>
                                          <img src="/components/images/profile-pic.jpg"></img>
                                  </button> */}
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
          <NavLink to="/" className="button hover:bg-black rounded-full w-24 h-12 hover:text-white text:black text-center align-center p-2">
            Home
          </NavLink>
          <NavLink to="/today" className="align-center p-2 hover:bg-black hover:rounded-full hover:text-white text-center w-24 h-12">Today</NavLink>
          <NavLink to="/create" className="align-center p-2 hover:bg-black hover:rounded-full hover:text-white text-center w-24 h-12">Create</NavLink>
          <div className="search-bar bg-gray-200 w-9/12 h-14 rounded-full flex gap-x-3 p-3 align-center">
            <box-icon name="search-alt-2" size="sm" color="grey"></box-icon>
            <p>Search</p>
          </div>
          <div className="bell align-center sm:p-3">
            <box-icon type="solid" name="bell" color="#928e8e" size="sm"></box-icon>
          </div>
          <div className="message sm:p-3" size="sm">
            <box-icon name="message-rounded-dots" type="solid" color="#928e8e"></box-icon>
          </div>
        </div>
      </nav>
    );
  }
}

export default TheHeader;
