import { FirstDivLayout, GridTexts, ImgDiv, TextDiv } from "./styles";
import CafeImagem from "../../images/Imagem.svg";
import { useContext } from "react";

export function FirstDiv() {
  return (
    <FirstDivLayout>
      <TextDiv>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </TextDiv>
      <ImgDiv>
        <img src={CafeImagem}></img>
      </ImgDiv>
      <GridTexts>
        <div>
          <label>Compra simples rapida e segura</label>
          <label>Embalagem mantém o café intacto</label>
        </div>
        <div>
          <label>Entrega rápida e rastreada</label>
          <label>O café chega fresquinho até você</label>
        </div>
      </GridTexts>
    </FirstDivLayout>
  );
}
