import { HeaderStyle } from "./styles";
import Logo from "../../images/Logo.svg";
import Cart from "../../images/Cart.svg";
import { NavLink } from "react-router-dom";
import { Home } from "../../pages/home";
import { useContext } from "react";
import { fullCoffeList } from "../../App";

export function Header() {
  const { setCoffeQuantity, coffeQuantity } = useContext(fullCoffeList);

  return (
    <HeaderStyle>
      <NavLink to="/" title="home">
        <img src={Logo}></img>
      </NavLink>
      <NavLink to="/checkout" title="checkout">
        <img src={Cart}></img>
        {coffeQuantity !== 0 ? <span>{coffeQuantity}</span> : null}
      </NavLink>
    </HeaderStyle>
  );
}
