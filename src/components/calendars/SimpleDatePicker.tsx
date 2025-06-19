import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SimpleDatePicker.css';

const SimpleDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="wedding-calendar">
      <h2 className="text-2xl font-light tracking-widest text-center mb-6 text-[var(--color-primary-red)]">
        Wedding Date Picker
      </h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        inline
        minDate={new Date()}
        maxDate={new Date(2025, 11, 31)}
        popperClassName="wedding-calendar-popper"
        popperPlacement="bottom-start"
      />
    </div>
  );
};

export default SimpleDatePicker; 