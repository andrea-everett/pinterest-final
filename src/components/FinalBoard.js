import React from 'react';
import Modal from "./Modal.js";

const FinalBoard = ({pins, add_pin}) => {
  return (
    <div>
      <Modal add_pin={add_pin}/>
       Pins Go Here
    </div>
  )
}

export default FinalBoard;