import { useContext, createContext } from "react";
import { fullCoffeList } from "../../App";
import { FirstDiv } from "../../components/FirstDiv";
import { SecondDiv } from "../../components/SecondDiv";

export function Home() {
  
  const { coffeType, setCoffeType, coffeQuantity } = useContext(fullCoffeList);


  return (
    <div style={{ justifyContent: "center" }}>
      <div style={{ width: "70vw" }}>
        <FirstDiv />
        <SecondDiv />
      </div>
    </div>
  );
}
