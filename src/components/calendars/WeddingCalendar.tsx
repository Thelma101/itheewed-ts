import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WeddingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState([
    { time: '8:00', name: 'Sermon' },
    { time: '9:00', name: 'Blessing of Marriage' },
    { time: '10:30', name: 'Ceremony' }
  ]);

  // Load temporary data on mount
  useEffect(() => {
    const savedData = localStorage.getItem('weddingSchedule');
    if (savedData) {
      const { data, timestamp } = JSON.parse(savedData);
      const now = new Date().getTime();
      // Check if data is less than 20 minutes old
      if (now - timestamp < 20 * 60 * 1000) {
        setEvents(data.events);
        setSelectedDate(data.date ? new Date(data.date) : null);
      } else {
        // Clear expired data
        localStorage.removeItem('weddingSchedule');
      }
    }
  }, []);

  // Save temporary data with timestamp
  const saveTemporaryData = () => {
    const data = {
      events,
      date: selectedDate,
      timestamp: new Date().getTime()
    };
    localStorage.setItem('weddingSchedule', JSON.stringify(data));
  };

  // Handle changes with auto-save
  const handleChange = (index: number, field: 'time' | 'name', value: string) => {
    const newEvents = [...events];
    newEvents[index] = { ...newEvents[index], [field]: value };
    setEvents(newEvents);
    saveTemporaryData();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl text-center mb-4 text-primary-red">
        Wedding Schedule
      </h2>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => {
            setSelectedDate(date);
            saveTemporaryData();
          }}
          inline
          minDate={new Date()}
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="time"
                value={event.time}
                onChange={(e) => handleChange(index, 'time', e.target.value)}
                className="w-24 p-2 border rounded"
              />
              <input
                type="text"
                value={event.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Event name"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingCalendar; 