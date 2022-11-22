import styled from "styled-components";

export const ConfirmedLayout = styled.div`
  height: 700px;
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  margin-top: 200px;
  margin-bottom: 12px;
  label {
    font-size: 22px;
    font-weight: bold;
    margin-left: 160px;
  }
`;

export const DeliveryScreen = styled.div`
  max-width: 640px;
  max-height: 591px;
  margin-left: 160px;
  gap: 12px;
`;

export const OrderResume = styled.div`
  background: #f3f2f2;
  border-radius: 6px 44px;
  width: 448px;
  height: 498px;
  margin-top: 182;
  margin-left: 32px;
  padding: 40px;

  & > div:last-child {
    margin-top: 160px;
  }
`;

export const AddressInformationDiv = styled.div`
  max-width: 640px;
  max-height: 372px;
  background: #f3f2f2;
  border-radius: 6px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding: 40px 0 40px 0;
  box-sizing: border-box;
  margin-bottom: 16px;
  form {
    padding: 0 40px 0 40px;
  }
`;

export const AdressDelivery = styled.div`
  /* margin-top: 40px; */
  margin-left: 40px;
  width: 560px;
  height: 44px;
  justify-items: baseline;

  label {
    margin-left: 10px;
    font-size: 20px;
    margin-top: 0;
    color: rgba(64, 57, 55, 1);
  }

  img {
  }
`;

export const PaymentDiv = styled.div`
  max-height: 207px;
  background: #f3f2f2;
  border-radius: 6px;
  padding: 40px 40px 40px 40px;
  color: #403937;
  box-sizing: border-box;

  & > div:nth-child(1) {
    height: 44px;
    box-sizing: border-box;
    align-items: center;
    margin-bottom: 32px;
    display: flex;
    top: 0;

    img {
      height: 22px;
      width: 22px;
    }

    & > div:last-child {
      & > label:first-child {
        font-size: 16px;
        color: rgba(64, 57, 55, 1);
        font-weight: 700;
      }
      & > label:last-child {
        font-size: 12px;
      }
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
    gap: 12px;
  }
`;

export const TotalPurchase = styled.div`
  /* margin-top: 100px; */
  /* position: absolute; */
  width: 100%;
  height: 92px;
  background: red;
`;