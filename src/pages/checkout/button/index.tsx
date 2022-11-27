import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fullCoffeList } from "../../../App";
import { ConfirmedButtonStyle, PaymentButtonStyle } from "./styles";

export const PaymentButton = ({ name, img, selected }: any) => {
  return (
    <PaymentButtonStyle selected={selected}>
      <img src={img} />
      {name}
    </PaymentButtonStyle>
  );
};

export const ConfirmedButton = ({ available, handleSubmit, setClickOn, clickOn, paymentType}: any) => {
  const navigate = useNavigate()
  const { setCoffeQuantity, formValues } = useContext(fullCoffeList);

  const onHandleSubmit = () => {
    // handleSubmit()
    setClickOn(true);
    

  };

  useEffect(() => {
    if (clickOn === true && paymentType !== ""){
      formValues.paymentType = paymentType
      navigate("/confirmed")
    }
  },[clickOn, paymentType])

  return (
    // <NavLink to="/confirmed">
      <ConfirmedButtonStyle type="submit"
        onClick={() => {
          setCoffeQuantity(0);
          onHandleSubmit();
        }}
        disabled={available}
      >
        CONFIRMAR PEDIDO
      </ConfirmedButtonStyle>
    // </NavLink>
  );
};
