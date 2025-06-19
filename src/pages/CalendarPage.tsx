import React, { useState } from 'react';

const initialEvents: Record<string, { time: string; title: string }[]> = {
  '2025-05-18': [
    { time: '8 AM', title: 'Sermon' },
    { time: '10 AM', title: 'Blessing of Marriage' },
    { time: '10:30 AM', title: 'Ceremony' },
  ],
  '2025-05-19': [
    { time: '2 PM', title: 'Reception' },
  ],
};

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfWeek = (year: number, month: number) => new Date(year, month, 1).getDay();

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 18));
  const [currentMonth, setCurrentMonth] = useState(9);
  const [currentYear, setCurrentYear] = useState(2025);
  const [eventsByDate, setEventsByDate] = useState(initialEvents);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDayOfWeek = getFirstDayOfWeek(currentYear, currentMonth);

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

  const handleSelectDate = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const selectedDateKey = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
  const events = eventsByDate[selectedDateKey] || [];

  const handleEventChange = (idx: number, field: 'time' | 'title', value: string) => {
    setEventsByDate(prev => {
      const updated = [...(prev[selectedDateKey] || [])];
      updated[idx] = { ...updated[idx], [field]: value };
      return { ...prev, [selectedDateKey]: updated };
    });
  };

  const handleEventInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
  };

  const handleAddEvent = () => {
    setEventsByDate(prev => {
      const updated = [...(prev[selectedDateKey] || []), { time: '', title: '' }];
      return { ...prev, [selectedDateKey]: updated };
    });
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-12">
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        <div className="flex-1 p-8 bg-blue-50">
          <h2 className="text-xl font-bold mb-2 text-gray-800">Enjoy the flexibility</h2>
          <p className="text-gray-600 mb-6 text-sm">of planning a wedding from the comfort of your home within a single App.</p>
          <div className="space-y-4 text-sm">
            <div><hr className="mb-1" /><span className="font-semibold text-gray-800">Set your editable dates</span></div>
            <div><hr className="mb-1" /><span className="font-semibold text-gray-800">Track your events in real time</span></div>
            <div><hr className="mb-1" /><span className="font-semibold text-gray-800">Set a push Notification<br />across all platforms</span><hr className="mt-1" /></div>
          </div>
        </div>
        <div className="flex-1 p-6 flex flex-col items-center">
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
              {Array(firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1).fill(null).map((_, i) => (<div key={i}></div>))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const isSelected = selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
                return (
                  <button
                    key={day}
                    onClick={() => handleSelectDate(day)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors text-xs ${isSelected ? 'bg-cyan-600 text-white' : 'hover:bg-cyan-100 text-gray-800'}`}
                  >
                    {day}
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
                        type="text"
                        value={event.time}
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
  );
};

export default CalendarPage; 