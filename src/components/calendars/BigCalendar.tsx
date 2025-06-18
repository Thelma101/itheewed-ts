import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Sample wedding events
const events = [
  {
    title: 'Wedding Ceremony',
    start: new Date(2024, 5, 15, 10, 0), // June 15, 2024, 10:00 AM
    end: new Date(2024, 5, 15, 11, 0),
    desc: 'St. Mary\'s Church',
    type: 'ceremony'
  },
  {
    title: 'Cocktail Hour',
    start: new Date(2024, 5, 15, 17, 0), // June 15, 2024, 5:00 PM
    end: new Date(2024, 5, 15, 18, 0),
    desc: 'Grand Ballroom Foyer',
    type: 'reception'
  },
  {
    title: 'Wedding Reception',
    start: new Date(2024, 5, 15, 18, 0), // June 15, 2024, 6:00 PM
    end: new Date(2024, 5, 15, 23, 0),
    desc: 'Grand Ballroom',
    type: 'reception'
  }
];

const BigCalendar = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl text-center mb-6 text-[var(--color-primary-red)] font-light tracking-widest">
        Wedding Timeline
      </h2>
      <div className="h-[600px] bg-white rounded-xl shadow-lg p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          className="rounded-lg"
          eventPropGetter={(event) => ({
            className: `event-${event.type} bg-[var(--color-primary-red)]`,
            style: {
              backgroundColor: 'var(--color-primary-red)',
              borderRadius: '4px',
              opacity: 0.8,
              color: 'white',
              border: '0',
              display: 'block'
            }
          })}
          components={{
            event: ({ event }) => (
              <div className="p-1">
                <div className="font-semibold">{event.title}</div>
                <div className="text-sm opacity-80">{event.desc}</div>
              </div>
            )
          }}
        />
      </div>
    </div>
  );
};

export default BigCalendar; 