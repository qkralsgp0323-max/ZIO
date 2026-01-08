import { useState } from 'react'
import DatePicker from 'react-datepicker';
import "./Clock.scss";

const Clock = () => {
  const [selectedTime, setSelectedTime] = useState(
    new Date()
  );

  return (
    <div id='clock'>
      <div className='in-time'>
        <p>입차 시간</p>
        <DatePicker
          selected={selectedTime}
          onChange={setSelectedTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="입차시간"
          dateFormat="h:mm aa"
        />
      </div>
      <div className='out-time'>
        <p>출차 시간</p>
        <DatePicker
          selected={selectedTime}
          onChange={setSelectedTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="입차시간"
          dateFormat="h:mm aa"
        />
      </div>
    </div>
  )
}

export default Clock