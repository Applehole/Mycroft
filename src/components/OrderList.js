import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Items from './Items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { OrderListDiv } from '../styles/componentsStyles/Mypage/OrderListStyle'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid' // 유니크한 값이 없어서 넣어줬다.

function OrderList() {
  const [content, setContect] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPage, setTotalPage] = useState(2) // 처음에는 3까지였지만 마지막 3번 페이지가 비어져있어서 2로 고쳤다.
  const dispatch = useDispatch()

  useEffect(() => {
    const userApiOrder = () => {
        await axios
          .get(
            `https://mycroft-test-api.herokuapp.com/order?page=${currentPage}`,
          )
          .then((res) => {
            setContect(res.data.content)
            setTotalPage(res.data.totalPages)
          })
    }
    userApiOrder()
  }, [currentPage])

  useEffect(() => {
    dispatch({ type: 'COUNT/CHANGE', number: 1 })
  }) // 그냥 넣으면 무한 리렌더링

  const goToLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      setContect([])
    }
  }
  const goToRight = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1)
      setContect([])
    }
  }

  return (
    <OrderListDiv>
      {content.length ? ( // content를 받아오기 전에 업데이트가 되면 문제가 생겨서 존재의 유무를 물은 후 만들게 했다.
        <>
          {content.map((stuff) => {
            return <Items key={uuidv4()} stuff={stuff} />
          })}
          <div className="PageDiv">
            <button onClick={goToLeft}>왼쪽</button>
            <div>{`${currentPage + 1}/${totalPage}`}</div>
            <button onClick={goToRight}>오른쪽</button>
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
