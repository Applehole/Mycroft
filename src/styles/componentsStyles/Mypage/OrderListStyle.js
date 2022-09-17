import styled from 'styled-components'

export const OrderListDiv = styled.div`
  height: 100%;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-rows: auto;

  .ItemsDiv {
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    border-radius: 10px;
    margin: 5px;
    transition: 0.25s;
    cursor: pointer;

    .ItemsID {
      margin: 24px 0px 0px 20px;
    }
    .ItemName {
      margin: 20px 10px 0px 0px;
    }
  }

  .ItemsDiv:hover {
    background-color: #9fcde5;
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
