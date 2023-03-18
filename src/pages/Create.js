import React from 'react';
import Modal from "../components/Modal.js";
import Board from '../components/CreateBoard.js';

const Create = ({ pins, add_pin }) => {
  return (
    <div className='flex flex-col w-3/4 inset-x-0 mx-auto'>
      <Modal add_pin={add_pin} />
      <Board pins={pins} />
    </div>
  )
}

export default Create;