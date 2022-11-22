import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Checkout } from "./pages/checkout";
import { Confirmed } from "./pages/confirmed";
import { Home } from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmed" element={<Confirmed />} />
      </Route>
    </Routes>
  );
}
