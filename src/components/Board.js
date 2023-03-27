import React from 'react'
import Pin from "./Pin.js"

function Board({ pins }) {
  return (
    <div className="mx-10 grid sm:grid-cols-6 sm:gap-6 grid-cols-2 gap-3">{pins.map(pin => <Pin pinDetails={pin} />)}</div>
  )
}

export default Board

