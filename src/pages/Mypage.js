import React from 'react'
import { PageDefaultComponent } from '../styles/PageStyles/DefaultStyle'
import { MypageComponent } from '../styles/PageStyles/Mypage'
import OrderList from '../components/OrderList'

function Mypage() {
  return (
    <PageDefaultComponent>
      <MypageComponent>
        <OrderList />
      </MypageComponent>
    </PageDefaultComponent>
  )
}

export default Mypage
