import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { PictureDiv } from '../styles/componentsStyles/Home/pictureUploadStyle'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PictureUpload() {
  const [imageUrl, setImageUrl] = useState(null)
  const imgRef = useRef()
  const Token = useSelector((state) => state.token)
  let navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'COUNT/CHANGE', number: 0 })
  })

  const onChangeImage = () => {
    const reader = new FileReader()
    const file = imgRef.current.files[0]
    console.log(file)

    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageUrl(reader.result)
    }
  }

  const orderPicture = () => {
    if (Token) {
      alert('주문성공')
      setImageUrl(null)
    } else {
      alert('로그인을 진행해주세요')
      navigate('/sign-up')
    }
  }

  return (
    <PictureDiv>
      <div className="pictureCover">
        <img
          className="picturePlace"
          src={imageUrl ? imageUrl : 'pelican.png'}
          alt="pelican"></img>
        <input type="file" ref={imgRef} onChange={onChangeImage}></input>
      </div>
      <button onClick={orderPicture} className="PictureSubmitButton">
        주문하기
      </button>
    </PictureDiv>
  )
}

export default PictureUpload
