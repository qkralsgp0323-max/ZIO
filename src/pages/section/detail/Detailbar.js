import "./ReservationInfo.scss";
import { useParking } from "../../../contexts/ParkingContext";

const Detailbar = () => {
  const { lotDetail } = useParking();

  return (
    <div className="parking-card">
      <p>{lotDetail?.parking_name || "주차장 이름"}</p>
      <p>{lotDetail?.address || "주차장 주소"}</p>
    </div>
  );
};

export default Detailbar;
