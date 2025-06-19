import React, { useState } from 'react';

const initialEvents: Record<string, { time: number; title: string }[]> = {
  '2025-06-18': [
    { time: 9, title: 'Sermon' },
    { time: 10, title: 'Blessing of Marriage' },
    { time: 11, title: 'Ceremony' },
  ],
  '2025-06-17': [
    { time: 9, title: 'Sermon' },
    { time: 10, title: 'Cutting of Cake Ceremony' },
    { time: 11, title: 'Dance, Dance' }
  ],
  '2025-06-19': [
    { time: 9, title: 'Welcoming' },
    { time: 10, title: 'Throwing bouquet' }
  ],
};

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfWeek = (year: number, month: number) => new Date(year, month, 1).getDay();

const today = new Date();

const CalendarSection: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [eventsByDate, setEventsByDate] = useState(initialEvents);

  const days = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfWeek(currentYear, currentMonth);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleSelectedDate = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
  const day = String(selectedDate.getDate()).padStart(2, '0');
  const selectedDateKey = `${year}-${month}-${day}`;
  const events = eventsByDate[selectedDateKey] || [];

  const handleEventChange = (idx: number, field: 'time' | 'title', value: string) => {
    setEventsByDate(prev => {
      const updated = [...(prev[selectedDateKey] || [])];
      if (field === 'time') {
        const num = value === '' ? 0 : Number(value);
        updated[idx] = { ...updated[idx], time: num };
      } else {
        updated[idx] = { ...updated[idx], title: value };
      }
      return { ...prev, [selectedDateKey]: updated };
    });
  };

  const handleEventInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
  };

  const handleAddEvent = () => {
    setEventsByDate(prev => {
      const updated = [...(prev[selectedDateKey] || []), { time: 0, title: '' }];
      return { ...prev, [selectedDateKey]: updated };
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return (
    <section className="flex bg-[#DBFCFF] text-primary-dark px-24">
      <div className="flex items-center justify-center py-20 gap-9">
        <div className="flex flex-col items-start justify-center px-9 gap-5">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-3xl">Enjoy the flexibility </p>
            <p>of planning a wedding from the comfort of your home within a single App. </p>
          </div>
          <div className="flex w-full border-[0.5px] border-primary-gray"></div>
          <div>
            <p className="text-xl font-semibold leading-loose">Set your editable dates</p>
          </div>
          <div className="flex w-full border-[0.5px] border-primary-gray"></div>
          <div>
            <p className="text-xl font-semibold leading-loose">Track your events in real time</p>
          </div>
          <div className="flex w-full border-[0.5px] border-primary-gray"></div>
          <div>
            <p className="text-xl font-semibold leading-loose">Set a push Notification across all platform</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white rounded-xl border-[0.5px] border-primary-gray p-14 gap-11">
            <div className="w-full max-w-xs bg-white rounded-lg shadow border p-3 text-sm">
              <div className="flex items-center justify-between mb-3">
                <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-700">&lt;</button>
                <span className="font-semibold">{monthNames[currentMonth]} {currentYear}</span>
                <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-700">&gt;</button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-gray-500 mb-1">
                {weekDays.map((d) => (<div key={d} className="font-medium">{d}</div>))}
              </div>
              <div className="grid grid-cols-7 gap-1 mb-3">
                {Array(firstDay === 0 ? 6 : firstDay - 1).fill(null).map((_, i) => (<div key={i}></div>))}
                {Array.from({ length: days }, (_, i) => {
                  const dayNum = i + 1;
                  const isSelected = selectedDate.getDate() === dayNum && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
                  return (
                    <button
                      key={dayNum}
                      onClick={() => handleSelectedDate(dayNum)}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors text-xs ${isSelected ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-100 text-gray-800'}`}
                    >
                      {dayNum}
                    </button>
                  );
                })}
              </div>
              <div>
                {events.length > 0 ? (
                  <ul>
                    {events.map((event, idx) => (
                      <li key={idx} className="mb-1 flex gap-2 items-center">
                        <input
                          type="number"
                          step="0.5"
                          value={event.time === 0 ? '' : event.time}
                          onChange={e => handleEventChange(idx, 'time', e.target.value)}
                          onBlur={e => handleEventChange(idx, 'time', e.target.value)}
                          onKeyDown={handleEventInputKeyDown}
                          className="w-12 px-1 py-0.5 text-xs text-gray-600 border-b border-gray-200 focus:outline-none focus:border-cyan-600 bg-transparent"
                          aria-label="Event time"
                          placeholder="Time"
                        />
                        <input
                          type="text"
                          value={event.title}
                          onChange={e => handleEventChange(idx, 'title', e.target.value)}
                          onBlur={e => handleEventChange(idx, 'title', e.target.value)}
                          onKeyDown={handleEventInputKeyDown}
                          className="flex-1 px-1 py-0.5 text-gray-800 font-medium border-b border-gray-200 focus:outline-none focus:border-cyan-600 bg-transparent"
                          aria-label="Event title"
                          placeholder="Event"
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-xs text-center mb-2">No events for this day.</p>
                )}
                <button
                  onClick={handleAddEvent}
                  className="mt-1 w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border border-cyan-100 rounded py-1 text-xs font-medium transition-colors"
                >
                  + Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection; 