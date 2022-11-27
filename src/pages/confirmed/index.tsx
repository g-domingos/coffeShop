import { BoardInfo, FirstColumnDiv } from "./styles";
import Motoboy from "../../images/Illustration.svg";
import MoneyCheckout from "../../images/MoneyIconChecl.svg";
import TimeDelivery from "../../images/Time.svg";
import DeliveryLocal from "../../images/DeliveryLocal.svg";
import { useContext } from "react";
import { fullCoffeList } from "../../App";

export function Confirmed() {
  const { formValues } = useContext(fullCoffeList);

  return (
    <FirstColumnDiv>
      <div>
        <div>Uhu! Pedido confirmado</div>
        <div>Agora é só aguardar que logo o café chegará até você</div>
        <BoardInfo>
          <div>
            <img src={DeliveryLocal} />
            <div className="first">
              <label>Entrega em</label>
              <label>
                {formValues.street}, {formValues.number} - {formValues.bairro} -{" "}
                {formValues.city} / {formValues.state}
              </label>
            </div>
          </div>
          <div>
            <div>
              <img src={TimeDelivery} />
              <div className="first">
                <label>Previsao de entrega</label>

                <label>20min - 30min</label>
              </div>
            </div>
          </div>
          <div>
            <img src={MoneyCheckout} />
            <div className="first">
              <label>Pagamento na entrega</label>
              <label>Método de pagamento: {formValues.paymentType}</label>
            </div>
          </div>
        </BoardInfo>
      </div>
      <div>
        <img src={Motoboy} />
      </div>
    </FirstColumnDiv>
  );
}
