// src/App.js
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import MainPage from "./pages/MainPage";
import ReservationPage from "./pages/ReservationPage";
import PaymentPage from "./pages/PaymentPage";
import MyPage from "./pages/MyPage";
import Tip from "./pages/Tip";

import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />

        <Route path="/parking/:parkingId" element={<ReservationPage />} />


        <Route path="/payment" element={<PaymentPage />} />


        <Route path="/mypage" element={<MyPage />} />

        <Route path="/tip" element={<Tip />} />
      </Route>
    </Routes>
  );
};

export default App;
