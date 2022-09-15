import styled from 'styled-components'

export const SignUpFunction = styled.div`
  .SignUpFrameBox {
    height: auto;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    top: 50%;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 10% 80% 10%;
    grid-template-areas:
      '. . SignUpBack'
      '. SignUpTitle .'
      '. SignUpDiv .'
      '. SignUpDiv .'
      '. SignUpDiv .'
      '. SignUpDiv .';
  }

  .SignUpTitle {
    font-size: 3em;
    grid-area: SignUpTitle;
    text-align: center;
  }

  .SignUpDiv {
    grid-area: SignUpDiv;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
  }

  .SignUpForm {
    grid-row: 1/6;
    text-align: center;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }

  .SignUpFormIdDiv {
    grid-row: 1/2;
    width: 100%;
    margin: 10px;
    border-radius: 20px;
    display: flex;
  }

  .SignUpFormIdIcon {
    margin: 10px 20px;
  }

  .SignUpFormIdInput {
    width: 100%;
    background-color: #b3b3b3;
    font-size: 1.2em;
  }

  .SignUpFormPWDiv {
    grid-row: 2/3;
    width: 100%;
    border-radius: 20px;
    margin: 10px;
    display: flex;
  }

  .SignUpFormPWIcon {
    margin: 10px 20px;
  }

  .SignUpFormPWInput {
    width: 100%;
    background-color: #b3b3b3;
    font-size: 1.2em;
  }

  .SignUpFormCheckPWDiv {
    grid-row: 3/4;
    width: 100%;
    border-radius: 20px;
    margin: 10px;
    display: flex;
  }

  .SignUpFormCheckPWIcon {
    margin: 10px 20px;
  }

  .SignUpFormCheckPWInput {
    width: 100%;
    background-color: #b3b3b3;
    font-size: 1.2em;
  }

  .SignUpFormPhoneDiv {
    grid-row: 4/5;
    width: 100%;
    border-radius: 20px;
    margin: 10px;
    display: flex;
  }

  .SignUpFormPhoneIcon {
    margin: 10px 20px;
  }

  .SignUpFormPhoneInput {
    width: 100%;
    background-color: #b3b3b3;
    font-size: 1.2em;
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .SignUpFormButton {
    grid-row: 6/7;
    margin: auto;
    width: 35%;
    border-radius: 20px;
    background-color: #77af9c;
    color: #d7fff1;
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.25s;
    border: none;
  }
  .SignUpFormButton:hover {
    letter-spacing: 2px;
    transform: scale(1.1);
  }
`
