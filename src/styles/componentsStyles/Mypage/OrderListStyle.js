import styled from 'styled-components'

export const OrderListDiv = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-rows: auto;

  .ItemsDiv {
    display: flex;
    margin: auto;
  }

  .PageDiv {
    grid-row: 12/13;
    display: flex;
    margin: auto;
  }

  .loadingIcon {
    width: 200px;
    height: 200px;
    margin: auto;
  }
`
