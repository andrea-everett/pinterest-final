import React from 'react'
import Pin from "./Pin.js"

function Board({ pins }) {
  return (
    <div className="mx-10 grid grid-cols-6 gap-6">{pins.map(pin => <Pin pinDetails={pin} />)}</div>
  )
}

export default Board

