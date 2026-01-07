import "./ReservationDetail.scss";

const ReservationDetail = ({ spaces, selectedCode, onSelect }) => {
  const laneA = spaces.filter((space) => space.space_code.startsWith("A-"));
  const laneB = spaces.filter((space) => space.space_code.startsWith("B-"));

  return (
    <div className="parking-map">
      <span className="parking-direction">
        A ↑ <br /> ↓ B
      </span>


      <div className="lane lane-left">
        {laneA.map((space) => {
          const isSelected = space.space_code === selectedCode;

          return (
            <button
              key={space.id}
              className={[
                "parking-box",                 
                `box-${space.space_type}`,     
                isSelected ? "selected" : "",  
              ].join(" ")}
              onClick={() => onSelect(space)}
            >
              <span className="box-code">{space.space_code}</span>
            </button>
          );
        })}
      </div>

      <div className="road" />

      <div className="lane lane-right">
        {laneB.map((space) => {
          const isSelected = space.space_code === selectedCode;

          return (
            <button
              key={space.id}
              className={[
                "parking-box",
                `box-${space.space_type}`,
                isSelected ? "selected" : "",
              ].join(" ")}
              onClick={() => onSelect(space)}
            >
              <span className="box-code">{space.space_code}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ReservationDetail;
