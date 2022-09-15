import styled from 'styled-components'

export const NavigationComponent = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 8vh;
  background-color: #2e2f31;
  .logoDiv {
    float: left;
    .logoPic {
      width: 50px;
      height: 50px;
      z-index: 2;
    }
  }

  .linkDiv {
    float: right;
    .LoginLink {
      color: white;
      margin: 5px;
    }
  }
`
