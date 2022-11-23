import { BoardInfo, FirstColumnDiv } from "./styles";
import Motoboy from "../../images/Illustration.svg";
import MoneyCheckout from "../../images/MoneyIconChecl.svg";
import TimeDelivery from "../../images/Time.svg";
import DeliveryLocal from "../../images/DeliveryLocal.svg";

export function Confirmed() {
  return (
    <FirstColumnDiv>
      <div>
        <div>Uhu! Pedido confirmado</div>
        <div>Agora é só aguardar que logo o café chegará até você</div>
        <BoardInfo>
          <div>
            <img src={DeliveryLocal} />
            <label>Entrega em</label>
          </div>
          <div>
            <div>
              <img src={TimeDelivery} />
              <div >
                <label>Previsao de entrega</label><br/>
                <label>20min - 30min</label>
              </div>
            </div>
          </div>
          <div>
            <img src={MoneyCheckout} />
            <label>Pagamento na entrega</label>
          </div>
        </BoardInfo>
      </div>
      <div>
        <img src={Motoboy} />
      </div>
    </FirstColumnDiv>
  );
}
