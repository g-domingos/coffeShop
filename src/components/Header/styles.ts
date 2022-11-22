import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;

  position: absolute;
  height: 70px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* Base/Background */

  background: #fafafa;

  span {
    position: absolute;
    top: 33px;
    right: 147px;
    padding: 3px 7px;
    border-radius: 50%;
    background: red;
    color: white;
  }
`;
