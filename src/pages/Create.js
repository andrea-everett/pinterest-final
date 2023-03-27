import React from 'react';
import AddPinForm from '../components/AddPinForm.js';
import Board from '../components/Board.js';

const Create = ({ pins, add_pin }) => {
  return (
    <div className=''>
      <AddPinForm add_pin={add_pin} />
      <Board pins={pins} />
    </div>
  )
}

export default Create;

// flex flex-col w-3/4 inset-x-0 mx-auto