import { Routes, Route } from "react-router-dom";
import SelectPaymentMethod from "../pages/selectPaymentMethod/selectPaymentMethod";
import Payment from "../pages/payment/payment";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/payment"
        element={<SelectPaymentMethod />}
      />
      <Route
        path="/payment/:id_method"
        element={<Payment />}
      />

    </Routes>
  )
}