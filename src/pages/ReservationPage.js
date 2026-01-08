import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import ReservationInfo from "./section/detail/ReservationInfo";
import GuestReservation from "./section/detail/GuestReservation";

const ReservationPage = () => {
  const [user, setUser] = useState(null);
  const [guestAuthed, setGuestAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthState = async () => {
      // 1. 회원 로그인 여부 확인
      const { data } = await supabase.auth.getUser();
      setUser(data.user);

      // 2. 비회원 예약 조회 세션 확인
      const guestSession = sessionStorage.getItem("guestReservationAuth");
      setGuestAuthed(!!guestSession);

      setLoading(false);
    };

    checkAuthState();
  }, []);

  if (loading) {
    return null; // 또는 로딩 UI
  }

  return (
    <section id="reservation-page">
      {/* 
        조건 정리:
        - 회원이면 → ReservationInfo
        - 비회원 + 세션 인증 완료 → ReservationInfo
        - 비회원 + 인증 안 됨 → GuestReservation
      */}
      {user || guestAuthed ? (
        <ReservationInfo user={user} />
      ) : (
        <GuestReservation />
      )}
    </section>
  );
};

export default ReservationPage;