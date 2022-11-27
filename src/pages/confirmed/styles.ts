import styled from "styled-components";

export const FirstColumnDiv = styled.div`
  display: flex;

  & > div:nth-child(1) {
    position: absolute;
    width: 526px;
    height: 382px;
    left: calc(50% - 526px / 2 - 297px);
    top: 184px;
    border-radius: 6px 36px;

    & > div:nth-child(1) {
      /* Title/Title L */

      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      color: #c47f17;
      box-sizing: border-box;
    }

    & > div:nth-child(2) {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
    }
  }

  & > div:nth-child(2) {
    position: absolute;
    width: 492px;
    height: 293px;
    left: calc(50% - 492px / 2 + 314px);
    top: 284px;
  }
`;

export const BoardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  height: 270px;
  left: calc(50% - 526px / 2 - 297px);
  top: 296px;
  border-radius: 6px 36px;
  margin-top: 40px;
  border: 1px solid;
  border-image: linear-gradient(to left, #dbac2c 2.61%, #8047f8 98.76%);
  border-image-slice: 1;
  padding: 40px;
  justify-content: center;
  gap: 32px;

  img {
      width: 42px;
      height: 42px;
      margin-right: 12px;
    }

  /* & > div:nth-child(1) {
    margin-bottom: 32px;
  } */
  div {
    /* justify-content: center; */
    display: flex;
    /* align-items: center; */
    height: 42px;    
  }

  .first {
    display: flex;
    flex-direction: column;

    & > label:nth-child(2) {
      font-weight: 800;
    }
  }
`;
