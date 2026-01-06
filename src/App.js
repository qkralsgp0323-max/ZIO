import { Routes, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ParkingDetailPage from "./pages/Detail/ParkingDetailPage";
import TicketReservation from "./pages/Detail/TicketReservation";
import LoginPage from "./pages/Auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import MyPage from "./pages/MyPage/MyPage";
import ChangeCarNumber from "./pages/MyPage/ChangeCarNumber";
import ChangePayment from "./pages/MyPage/ChangePayment";
import Receipt from "./pages/MyPage/Receipt";
import ReservationList from "./pages/ReservationList/ReservationList";
import Tip from "./pages/Tip/Tip"
import "./App.scss"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}> 
      <Route path="/" element={<HomePage />}/>
      <Route
         path="/parking/:parkingId" 
         element={<ParkingDetailPage/>}/>
          <Route
          path="/parking/:parkingId/reserve"
          element={<TicketReservation />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/car" element={<ChangeCarNumber />} />
        <Route path="/mypage/payment" element={<ChangePayment />} />
        <Route
          path="/mypage/receipt/:reservationId"
          element={<Receipt />}
        />

        <Route
          path="/reservationlist"
          element={<ReservationList />}
        />

        
        <Route path="/tip" element={<Tip />} />

      </Route>
    </Routes>
  )
}

export default App