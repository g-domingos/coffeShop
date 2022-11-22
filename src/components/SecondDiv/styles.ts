import styled from "styled-components";

export const SecondDivLayout = styled.div`
  /* background: black; */
  height: auto;
  left: 0px;
  right: 0px;
  top: 648px;
  float: left;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .h1 {
    /* position: absolute; */
    width: 193px;
    height: 42px;
    left: calc(50% - 1120px / 2);
    top: 32px;

    /* Title/Title L */

    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    /* identical to box height, or 42px */

    display: flex;
    align-items: center;

    /* Base/Subtitle */

    color: #403937;
  }
`;

export const DivCoffeList = styled.div`
  
  /* border: 1px solid red; */
  width: 1200px;
  height: auto;
  /* left: calc(50% - 1120px / 2); */
  top: 500px;
  display: flex;
  flex-wrap: wrap;
`;

export const CoffeTitle = styled.div`
  top: -60px;
  position: relative;
`;