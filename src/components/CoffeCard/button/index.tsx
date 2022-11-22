import { ButtonDiv, RemoveButtonStyle } from "./styles";
import { ButtonProps } from "./types";
import Minus from "../../../images/Minus.svg";
import TrashCan from "../../../images/trashcan.svg"
import { useContext } from "react";
import { fullCoffeList } from "../../../App";


export function ButtonPlusMinus({
  setContCoffe,
  contCoffe,
  styled,
}: ButtonProps) {
  function handleIncrement() {
    setContCoffe(contCoffe + 1);
  }

  function handleDecrement() {
    if (contCoffe >= 2) {
      setContCoffe(contCoffe - 1);
    }
  }

  return (
    <ButtonDiv styled={styled}>
      <button onClick={handleDecrement}>-</button>
      <label>{contCoffe}</label>
      <button onClick={handleIncrement}>+</button>
    </ButtonDiv>
  );
}

export const RemoveButton = ({onHandleRemove, id} :any) => {
  const { coffeType, setCoffeType, setCoffeQuantity, coffeQuantity } = useContext(fullCoffeList);

  const onHandleDelete = () => {

    const filteredPurchase = coffeType.filter((item:any) => item.id && item.id !== id)
    setCoffeType(filteredPurchase)
    setCoffeQuantity(filteredPurchase.length)
    
  } 
  console.log(coffeQuantity)
  return (

    <RemoveButtonStyle onClick={onHandleDelete}>
      <img src={TrashCan} />
      <label>REMOVER</label>
    </RemoveButtonStyle>
  );
};
