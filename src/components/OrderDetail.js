import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { OrderDetailDiv } from '../styles/componentsStyles/Mypage/OrderDetailStyle'

function OrderDetail({ ItemId }) {
  const [id, setId] = useState('')
  const [item, setItem] = useState('')

  useEffect(() => {
    axios
      .get(`https://mycroft-test-api.herokuapp.com/order/${ItemId}`)
      .then((res) => {
        console.log('res', res)
        setId(res.data.id)
        setItem(res.data.itemName)
      })
  }, [])
  const date = new Date(new Date().getTime())
  const Year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return (
    <OrderDetailDiv>
      <div className="Date">{`${Year}/${month + 1}/${day}`}</div>
      <div className="Text">주문한 사진</div>
      <img
        className="picture"
        src={`https://picsum.photos/id/${ItemId}/200/300`}
        alt="randomPic"></img>
      <div className="Detail">
        <div className="DetailID">ID: {id}</div>
        <div className="DetailItem">Item: {item}</div>
      </div>
    </OrderDetailDiv>
  )
}

export default OrderDetail
