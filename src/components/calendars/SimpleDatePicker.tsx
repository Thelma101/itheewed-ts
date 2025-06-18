import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SimpleDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl text-center mb-6 text-[var(--color-primary-red)] font-light tracking-widest">
        Select Your Wedding Date
      </h2>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          minDate={new Date()}
          maxDate={new Date(2025, 11, 31)}
          placeholderText="Choose your wedding date"
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent"
          dateFormat="MMMM d, yyyy"
          showPopperArrow={false}
          calendarClassName="wedding-calendar"
          popperClassName="wedding-calendar-popper"
          popperPlacement="bottom-start"
          popperModifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ]}
        />
      </div>

      <style jsx global>{`
        .wedding-calendar {
          font-family: 'Open Sans', sans-serif;
          border: none;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 1rem;
        }

        .wedding-calendar .react-datepicker__header {
          background-color: white;
          border-bottom: none;
          padding-top: 0;
        }

        .wedding-calendar .react-datepicker__day--selected {
          background-color: var(--color-primary-red) !important;
          border-radius: 50%;
        }

        .wedding-calendar .react-datepicker__day:hover {
          background-color: var(--color-primary-red);
          opacity: 0.8;
          border-radius: 50%;
        }

        .wedding-calendar .react-datepicker__day-name {
          color: var(--color-primary-red);
          font-weight: 600;
        }

        .wedding-calendar .react-datepicker__current-month {
          color: var(--color-primary-red);
          font-weight: 600;
          font-size: 1rem;
        }

        .wedding-calendar-popper {
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default SimpleDatePicker; 