import React from 'react'
import { useNavigate } from 'react-router-dom'

function Items({ stuff }) {
  let navigate = useNavigate()

  const goToDetailPage = () => {
    console.log(`hi number ${stuff.id}`)
    navigate(`/mypage/order/${stuff.id}`)
  }
  return (
    <div className="ItemsDiv" onClick={goToDetailPage}>
      <div className="ItemsID">{stuff.id}</div>
      <div className="ItemName">{stuff.itemName}</div>
    </div>
  )
}

export default Items
