import { useContext, useState } from "react";
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
  const { coffeType, setCoffeType } = useContext(fullCoffeList);
  const [paymentType, setPaymentType] = useState("");

  

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
              <label style={{ fontWeight: "700" }}>Endereço de entrega</label>
              <br />
              <label style={{ fontSize: "14px", marginLeft: "30px" }}>
                Informe o Endereço onde deseja receber seu pedido
              </label>
            </AdressDelivery>
            <SignupForm />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
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
                CARTÃO DE CRÉDITO
              </PaymentButtonStyle>
              <PaymentButtonStyle
                onClick={() => handleSelectPaymentMethod("DEBIT")}
                selected={paymentType === "DEBIT"}
              >
                <img src={DebitIcon} />
                CARTÃO DE DÉBITO
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
            <TotalPurchase></TotalPurchase>
            <div>
              <ConfirmedButton available={!coffeType.length}/>
            </div>
          </div>
        </OrderResume>
      </ConfirmedLayout>
    </div>
  );
}
