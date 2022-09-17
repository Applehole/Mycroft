import styled from 'styled-components'

export const OrderDetailDiv = styled.div`
  height: 300px;
  width: 60%;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 3fr;

  .Date {
    grid-column: 2/3;
    grid-row: 1/2;
    margin: 5px;
  }
  .Text {
    grid-column: 1/2;
    grid-row: 1/2;
    margin: auto;
  }
  .picture {
    width: 250px;
    height: 250px;
    border-radius: 10px;
    margin: auto;
  }
  .Detail {
    grid-column: 1/3;
    grid-row: 3/4;
    display: flex;
    justify-content: space-between;
    .DetailID {
      margin: 0 10px;
    }
    .DetailItem {
      margin: 0 10px;
    }
  }
`
