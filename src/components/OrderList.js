import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Items from './Items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { OrderListDiv } from '../styles/componentsStyles/Mypage/OrderListStyle'

function OrderList() {
  const [content, setContect] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(3)

  useEffect(() => {
    const userApiOrder = () => {
      setTimeout(function () {
        axios
          .get(`https://mycroft-test-api.herokuapp.com/order?page=0`)
          .then((res) => {
            setContect(res.data.content)
            setCurrentPage(res.data.currentPage)
            setTotalPage(res.data.totalPages)
          })
      }, 1000)
    }
    userApiOrder()
  }, [])

  return (
    <OrderListDiv>
      {content.length ? ( // content를 받아오기 전에 업데이트가 되면 문제가 생겨서 존재의 유무를 물은 후 만들게 했다.
        <>
          {content.map((stuff) => {
            return <Items key={stuff.id} stuff={stuff} />
          })}
          <div className="PageDiv">
            <button>왼쪽</button>
            <div>{`${currentPage + 1}/${totalPage + 1}`}</div>
            <button>오른쪽</button>
          </div>
        </>
      ) : (
        <>
          <FontAwesomeIcon
            spin
            className="loadingIcon"
            icon={faSpinner}></FontAwesomeIcon>
        </>
      )}
    </OrderListDiv>
  )
}

export default OrderList
