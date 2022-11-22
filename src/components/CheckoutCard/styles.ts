import styled from "styled-components";

export const CheckoutCardStyle = styled.div`
  /* max-width: 368px; */
  max-height: 80px;
  background: #f3f2f2;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  margin-bottom: 24px;

  img {
    height: 64px;
    width: 64px;
  }

  //div dos botões
  & > div:nth-child(2) {
    display: inline-block;
    margin-left: 12px;
    width: 100%;
    box-sizing: border-box;
    /* text-align: center; */
    justify-content: center;

    & > div:first-child {
      font-weight: 700;
      color: #403937;
    }

    & > div:last-child {
      height: 32px;
      box-sizing: border-box;
      padding: 4px;
      display: flex; /* forces children to same row */
      flex: 1;

      img {
        height: 16px;
        width: 16px;
      }
    }
  }
`;
