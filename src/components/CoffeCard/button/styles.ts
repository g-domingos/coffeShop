import styled from "styled-components";

export const ButtonDiv = styled.div<{ styled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.styled ? "0px" : "8px")};
  /* gap: 4px; */
  width: 72px;
  background: #e6e5e5;
  border-radius: 6px;
  box-sizing: border-box;

  button {
    border: none;
    cursor: pointer;
    background: transparent;
    color: rgba(128, 71, 248, 1);

    label {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const RemoveButtonStyle = styled.div`
  width: 91px;
  /* height: 38px; */
  align-content: center;
  background: #e6e5e5;
  border-radius: 6px;
  /* margin-left: 12px; */
  color: #574f4d;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;

  label {
    margin: auto;
  }
`;
