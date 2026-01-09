import "./ReservationInfo.scss";
import { useParking } from "../../../contexts/ParkingContext";


const Detailbar = ( ) => {
  const{ lotId}= useParking();
  return (
<div className="parking-card">
          <div className="parking-card-img" />
          <div className="parking-card-texts">
            <p className="parking-card-name">
              {lotId?.parking_name || "주차장 이름"}
            </p>
            <p className="parking-card-addr">
              {lotId?.address || "주차장 주소"} 
            </p>
          </div>
        </div>  )
}

export default Detailbar