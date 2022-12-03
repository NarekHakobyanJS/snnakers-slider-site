import React from 'react'

function Sneakers({ sneakers}) {
  return (
    <>
      <h1>{sneakers.name}</h1>
      <div>
        <img src={sneakers.img} />
      </div>
      <p>{sneakers.price}</p>
    </>
  )
}

export default Sneakers