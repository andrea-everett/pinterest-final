import React from 'react'
import { useId } from 'react';
import Pin from "./Pin.js"

// const AsyncAwait = () => {
//   // const [users, setUsers] = useState([])

//   const fetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()
//     setUsers(data)
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

function Board({ pins }) {
  return (
    <div className="mx-10 grid sm:grid-cols-6 sm:gap-6 grid-cols-2 gap-3">
      {pins.map(pin => <Pin pinDetails={pin} key={pin.id} />
      )}
    </div>
  )
}

export default Board

