import styled from 'styled-components'

export const PictureDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin: auto;
  text-align: center;

  .pictureCover {
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 80%;
    .picturePlace {
      width: 500px;
      height: 500px;
      text-align: center;
    }
  }

  .PictureSubmitButton {
    width: 60%;
    margin: auto;
    border-radius: 20px;
    background-color: #77af9c;
    color: #d7fff1;
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.25s;
    border: none;
  }
  .PictureSubmitButton:hover {
    letter-spacing: 2px;
    transform: scale(1.1);
  }
`
