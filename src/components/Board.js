import React from 'react'
import Pin from "./Pin.js"

function Board({ pins, handleDeletePin }) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 mx-20 break-inside-avoid">

      {pins.map(pin => <Pin pinDetails={pin} key={pin.id} handleDeletePin={handleDeletePin} />
      )}
    </div>
  )
}

export default Board

