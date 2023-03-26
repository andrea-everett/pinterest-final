import React from 'react'
import Pin from "./Pin.js"

function Board({ pins }) {
  return (
    <div className="flex flex-wrap justify-center columns-2 gap-x-4 mx-10 md:columns-6">{pins.map(pin => <Pin pinDetails={pin} />)}</div>
  )
}

export default Board

