import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WeddingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-light tracking-widest text-center mb-6 text-[var(--color-primary-red)]">
        Wedding Schedule
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          inline
          minDate={new Date()}
          maxDate={new Date(2025, 11, 31)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default WeddingCalendar; 