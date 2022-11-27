
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Router } from "./Router";
import { Toast } from "./utils/toast";

export const fullCoffeList = createContext({} as any);

function App() {


  const [coffeQuantity, setCoffeQuantity] = useState(0)
  const [coffeType, setCoffeType] = useState([{}]);
  const [formValues, setFormValues] = useState({
    postalCode: "",
    street: "",
    number: "",
    complement: "",
    bairro: "",
    city: "",
    state: "",
    paymentType: "",
  });
  
  const coffeList = [
    {
      type: "Tradicional",
      name: "Expresso Tradicional",
      text: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      type: "Tradicional",
      name: "Expresso Americano",
      text: "Expresso Diluído, menos intenso que o tradicional",
      price: 10.20,
    },
    {
      type: "irlandês",
      name: "Expresso Cremoso",
      text: "Café expresso tradicional com espuma cremosa",
      price: 9.90,
    },
    {
      type: "Tradicional",
      name: "Expresso Gelado",
      text: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.90,
    },
    {
      type: "Tradicional",
      name: "Expresso Gelado",
      text: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.90,
    },
    {
      type: "Tradicional",
      name: "Expresso Gelado",
      text: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.90,
    },
    {
      type: "Tradicional",
      name: "Expresso Gelado",
      text: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.95,
    },
  ];




  return (
    <fullCoffeList.Provider value={{ coffeList, setCoffeQuantity, coffeQuantity, coffeType, setCoffeType, formValues, setFormValues }}>

      <BrowserRouter>
        <Router />
        <Toast />
      </BrowserRouter>

      </fullCoffeList.Provider>
    
  );
}

export default App;
