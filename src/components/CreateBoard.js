import React from 'react'
import Pin from "./Pin.js"

function createBoard({ pins }) {
  return (
    <div className="w-full columns-2 gap-x-4 mx-12 md:columns-6">{pins.map(pin => <Pin pinDetails={pin} />)}</div>
  )
}

export default createBoard