import { useContext, useState } from "react";
import { ButtonPlusMinus} from "../CoffeCard/button";
import { CheckoutCardStyle } from "./styles";
import { PurchaseInfo } from "./types";
import { RemoveButton } from "../CoffeCard/button";
import { fullCoffeList } from "../../App";

export const CheckoutCard = ({id, name, price, quantity, img,  }: PurchaseInfo) => {
  const [amountCoffe, setAmountCoffe] = useState(quantity);

  return (
    <CheckoutCardStyle>
      <div>
        <img src={img} />
      </div>
      <div>
        <div>{name}</div>
        <div>
          <ButtonPlusMinus
            styled
            setContCoffe={setAmountCoffe}
            contCoffe={amountCoffe}
          />

          <RemoveButton id={id}/>
            
        </div>
      </div>
      <div>R$ {price}</div>
    </CheckoutCardStyle>
  );
};
