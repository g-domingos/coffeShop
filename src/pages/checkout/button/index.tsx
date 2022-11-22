import { NavLink } from "react-router-dom";
import { ConfirmedButtonStyle, PaymentButtonStyle } from "./styles";

export const PaymentButton = ({ name, img, selected }: any) => {
  return (
    <PaymentButtonStyle selected={selected}>
      <img src={img} />
      {name}
    </PaymentButtonStyle>
  );
};

export const ConfirmedButton = ({available}: any) => {
  return (
    <NavLink to="/confirmed">
      <ConfirmedButtonStyle disabled={available}>CONFIRMAR PEDIDO</ConfirmedButtonStyle>
    </NavLink>
  );
};
