import { useContext, useState } from "react";
import { TextDiv } from "../FirstDiv/styles";
import { CoffeTitle, DivCoffeList, SecondDivLayout } from "./styles";
import { fullCoffeList } from "../../../src/App";
import { CoffeCard } from "../CoffeCard";

export function SecondDiv() {
  const { coffeList, coffeType, setCoffeType } = useContext(fullCoffeList);
  //estado para armazenar todos os pedidos do cliente antes de ir para o checkout
  return (
    <SecondDivLayout>
      <CoffeTitle>
        <h1>Nossos Cafés</h1>
      </CoffeTitle>

      <DivCoffeList>
        {coffeList.map((item: any) => (
          <CoffeCard
            price={item.price}
            text={item.text}
            type={item.type}
            name={item.name}
            coffeType={coffeType}
            setCoffeType={setCoffeType}
          ></CoffeCard>
        ))}
      </DivCoffeList>
    </SecondDivLayout>
  );
}
