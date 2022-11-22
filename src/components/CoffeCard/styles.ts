import styled from "styled-components";

export const CoffeCardStyle = styled.div`
  max-width: 256px;
  height: 310px;
  margin: 20px;
  background: #f3f2f2;
  border-radius: 6px 36px;
`;

export const CoffeCardImg = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-top: -20px;
`;

export const CoffeType = styled.div`
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  width: 81px;
  height: 21px;
  background: #f1e9c9;
  border-radius: 100px;
  flex: none;
  order: 0;
  flex-grow: 0;

  label {
    width: 65px;
    height: 13px;
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
    color: #c47f17;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

export const CoffeName = styled.div`
  margin: 8px;
  height: 26px;
  left: 20px;
  right: 20px;
  top: 149px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  text-align: center;
  color: #403937;
`;

export const CoffeCopy = styled.div`
  padding: 0 15px;
  height: 36px;
  left: 20px;
  right: 20px;
  top: 200px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: #8d8686;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 24px 20px 24px;
  height: 38px;
  left: 24px;
  right: 24px;
  bottom: 20px;
  /* box-sizing: border-box; */
  margin-top: 33px;

  label {
    /* width: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: #574f4d;
    flex: none;
    order: 0;
    flex-grow: 0; */
  }

  & > div:first-child {
    width: 67px;
    height: 31px;
    display: flex;
    text-align: center;
    justify-content: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #574f4d;
    margin-right: 23px;
  }

  & > button:last-child() {
    margin-left: 8px;
  }
`;
