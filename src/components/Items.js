import React from 'react'

function Items({ stuff }) {
  return (
    <div className="ItemsDiv">
      <div>{stuff.id}</div>
      <div>{stuff.itemName}</div>
    </div>
  )
}

export default Items
