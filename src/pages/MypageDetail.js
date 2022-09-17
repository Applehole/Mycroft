import React from 'react'
import { PageDefaultComponent } from '../styles/PageStyles/DefaultStyle'
import { MypageComponent } from '../styles/PageStyles/Mypage'
import { useParams } from 'react-router-dom'
import OrderDetail from '../components/OrderDetail'

function MypageDetail() {
  const { ItemId } = useParams()

  return (
    <PageDefaultComponent>
      <MypageComponent>
        <OrderDetail ItemId={ItemId} />
      </MypageComponent>
    </PageDefaultComponent>
  )
}

export default MypageDetail
