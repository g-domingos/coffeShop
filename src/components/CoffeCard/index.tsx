import {
  CoffeCardImg,
  CoffeCardStyle,
  CoffeCopy,
  CoffeName,
  CoffeType,
  PriceDiv,
} from "./styles";
import CoffeCupImg from "../../images/Coffee.svg";
import CartImage from "../../images/Icon Button.svg";
import { CoffeCardProps, OrderInfo } from "./types";
import { ButtonPlusMinus } from "./button";
import { useContext, useEffect, useState } from "react";
import { error, success, Toast, toast } from "../../utils/toast";
import { ToastContainer, toast as toastFunction } from "react-toastify";
import { fullCoffeList } from "../../App";

export function CoffeCard({
  type,
  name,
  text,
  price,
  coffeType,
  setCoffeType,
}: CoffeCardProps) {
  const { setCoffeQuantity, coffeQuantity } = useContext(fullCoffeList);

  //estado para atualizar a quantidade daquele café, após clicar em + ou -
  const [contCoffe, setContCoffe] = useState(1);

  const cartClick = (name: string, contCoffe: number) => {
    //Armazenar no estado a lista de pedidos para fazer o checkout.
    setCoffeType([
      ...coffeType,
      {
        id: new Date().getTime(),
        name: name,
        quantity: contCoffe,
        price: price,
        img: CoffeCupImg,
      },
    ]);
    //reseta a quantidade do café após clicar no carrinho
    setContCoffe(1);
  };
  useEffect(() => {
    //estado que vem do useContext para plotar o numero dos pedidos no carrinho que está no header.
    setCoffeQuantity(coffeType.filter((item:any) => item.id).length);
    console.log(coffeType)
  }, [coffeType]);
  return (
    <>
      <CoffeCardStyle>
        <CoffeCardImg>
          <img src={CoffeCupImg}></img>
        </CoffeCardImg>
        <CoffeType>
          <label>{type}</label>
        </CoffeType>
        <CoffeName>{name}</CoffeName>
        <CoffeCopy>{text}</CoffeCopy>
        <PriceDiv>
          <div>
            <label style={{ fontSize: "12px" }}>R$</label>
            <label>{(price * contCoffe).toFixed(2)}</label>
          </div>
          <ButtonPlusMinus setContCoffe={setContCoffe} contCoffe={contCoffe} />
          <button
            style={{ border: "none", cursor: "pointer" }}
            onClick={() => cartClick(name, contCoffe)}
          >
            <img src={CartImage} />
          </button>
        </PriceDiv>
      </CoffeCardStyle>
      <ToastContainer />
    </>
  );
}
