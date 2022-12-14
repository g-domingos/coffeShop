import { createRef, MutableRefObject, useContext, useEffect, useRef, useState } from "react";
import { fullCoffeList } from "../../App";
import { SignupForm } from "./formik";
import {
  AddressInformationDiv,
  AdressDelivery,
  ConfirmedLayout,
  DeliveryScreen,
  OrderResume,
  PaymentDiv,
  Title,
  TotalPurchase,
} from "./styles";

import LocalIcon from "../../images/LocalIcon.svg";
import MoneyIcon from "../../images/MoneyIcon.svg";
import CreditIcon from "../../images/credit.svg";
import DebitIcon from "../../images/debit.svg";
import CashIcon from "../../images/cash.svg";

import { ConfirmedButton, PaymentButton } from "./button";
import { useSearchParams } from "react-router-dom";
import { PaymentButtonStyle } from "./button/styles";
import { CheckoutCard } from "../../components/CheckoutCard";

export function Checkout() {
  const { coffeType, setCoffeType, formValues, setFormValues } = useContext(fullCoffeList);
  const [paymentType, setPaymentType] = useState("");
  const [clickOn, setClickOn] = useState(false);
  
  let totalValue = 0;
  
  if (coffeType.length > 1){

    totalValue = coffeType
    .filter((item: any) => item.price)
    .map((item: any) => item.price)
    .reduce((initial:number, number:number) => {return initial + number}).toFixed(2)
  }



  const showButton = () => {
    return coffeType.length === 0 || paymentType === "";
  };

  const handleSubmit = () => {
    setClickOn(true)
    formValues.paymentType = paymentType
    
  };


  const handleSelectPaymentMethod = (method: string) => {
    switch (method) {
      case "CREDIT":
        setPaymentType("CREDIT");
        break;
      case "DEBIT":
        setPaymentType("DEBIT");
        break;
      case "CASH":
        setPaymentType("CASH");
        break;
      default:
        setPaymentType("");
    }
  };

  return (
    <div>
      <Title>
        <label>Complete seu pedido</label>
      </Title>
      <ConfirmedLayout>
        <DeliveryScreen>
          <AddressInformationDiv>
            <AdressDelivery>
              <img src={LocalIcon}></img>
              <label style={{ fontWeight: "700" }}>Endere??o de entrega</label>
              <br />
              <label style={{ fontSize: "14px", marginLeft: "30px" }}>
                Informe o Endere??o onde deseja receber seu pedido
              </label>
            </AdressDelivery>
            <SignupForm
              paymentType={paymentType}
              useref={clickOn}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          </AddressInformationDiv>
          <PaymentDiv>
            <div>
              <div>
                <img src={MoneyIcon} />
              </div>
              <div>
                <label>Pagamento</label>
                <br />
                <label>
                  O pagamento ?? feito na entrega. Escolha a forma que deseja
                  pagar
                </label>
              </div>
            </div>
            <div>
              <PaymentButtonStyle
                onClick={() => handleSelectPaymentMethod("CREDIT")}
                selected={paymentType === "CREDIT"}
              >
                <img src={CreditIcon} />
                CART??O DE CR??DITO
              </PaymentButtonStyle>
              <PaymentButtonStyle
                onClick={() => handleSelectPaymentMethod("DEBIT")}
                selected={paymentType === "DEBIT"}
              >
                <img src={DebitIcon} />
                CART??O DE D??BITO
              </PaymentButtonStyle>
              <PaymentButtonStyle
                onClick={() => handleSelectPaymentMethod("CASH")}
                selected={paymentType === "CASH"}
              >
                <img src={CashIcon} />
                DINHEIRO
              </PaymentButtonStyle>
            </div>
          </PaymentDiv>
        </DeliveryScreen>

        <OrderResume>
          <div>
            {coffeType
              .filter((item: any) => item.id)
              .map((item: any) => (
                <CheckoutCard
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  img={item.img}
                ></CheckoutCard>
              ))}
          </div>
          <div>
            <TotalPurchase>
              <div>
                <div>Total de itens</div>
                <div>R$ {totalValue}</div>
              </div>
              <div>
                <div>Entrega</div>
                <div>R$ 4,00</div>
              </div>
              <div>
                <div>Total</div>
                <div>R$ {+totalValue +4 }</div>                
              </div>
            </TotalPurchase>
            <div>
              <ConfirmedButton
                handleSubmit={handleSubmit}
                available={showButton()}
                setClickOn={setClickOn}
                clickOn={clickOn}
                paymentType={paymentType}
              />
            </div>
          </div>
        </OrderResume>
      </ConfirmedLayout>
    </div>
  );
}
//!coffeType.length
