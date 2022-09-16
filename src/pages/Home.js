import React from 'react'
import { PageDefaultComponent } from '../styles/PageStyles/DefaultStyle'
import { HomeComponenet } from '../styles/PageStyles/Home'
import PictureUpload from '../components/PictureUpload'

function Home() {
  return (
    <PageDefaultComponent>
      <HomeComponenet>
        <PictureUpload />
      </HomeComponenet>
    </PageDefaultComponent>
  )
}

export default Home
