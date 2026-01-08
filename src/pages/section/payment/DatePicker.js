import { useState } from "react";

const DatePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(
    new Date()
  );
  return <DatePicker
    selected={selectedDateTime}
    onChange={setSelectedDateTime}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={60}
    timeCaption="입차시간"
    dateFormat="h:mm aa"
  />;
};
render(DatePicker);