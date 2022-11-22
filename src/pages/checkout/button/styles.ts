import styled from "styled-components";

export const PaymentButtonStyle = styled.div<{ selected?: boolean }>`
  max-width: 178.67px;
  height: 51px;
  border: ${(props) =>
    props.selected ? "1px solid #8047F8" : "1px solid #EBE5F9"};
  cursor: pointer;
  gap: 8px;

  /* Base/Button */

  background: ${(props) => (props.selected ? "#EBE5F9" : "#e6e5e5")};
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
  color: #574f4d;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ConfirmedButtonStyle = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 24px;
  border: 2px solid transparent;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    :hover {
    border: 2px solid transparent;
  }
  }

  :hover {
    border: 2px solid #d69e06;
  }

  /* Brand / Yellow */

  background: #dbac2c;
  border-radius: 6px;
`;
