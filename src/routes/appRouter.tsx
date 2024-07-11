import { Routes, Route, Navigate } from "react-router-dom";
import Payment from "../pages/payment/payment";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/payment"
        element={<Payment />}
      />

    </Routes>
  )
}