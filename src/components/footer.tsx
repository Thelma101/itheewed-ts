import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '@/features/Footer/assets/logo.svg'

// type ScheduleEntry = {
//   time: string;
//   title: string;
// };

// const STORAGE_KEY = 'draftSchedule';
// const EXPIRY_DURATION = 20 * 60 * 1000; // 20 minutes

// const defaultEntries: ScheduleEntry[] = [
//   { time: '08:00', title: 'Sermon' },
//   { time: '09:00', title: 'Blessing of Marriage' },
//   { time: '10:30', title: 'Ceremony' },
// ];

// export const Footer: React.FC = () => {
//   const [date, setDate] = useState<Date | null>(new Date());
//   const [entries, setEntries] = useState<ScheduleEntry[]>(defaultEntries);

//   // Save to localStorage with timestamp
//   const saveToLocalStorage = (data: ScheduleEntry[]) => {
//     localStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify({
//         data,
//         timestamp: Date.now(),
//       })
//     );
//   };

//   // Load from localStorage and check expiry
//   const loadFromLocalStorage = () => {
//     const item = localStorage.getItem(STORAGE_KEY);
//     if (!item) return;

//     try {
//       const parsed = JSON.parse(item);
//       const isExpired = Date.now() - parsed.timestamp > EXPIRY_DURATION;

//       if (isExpired) {
//         localStorage.removeItem(STORAGE_KEY);
//         setEntries(defaultEntries); // reset to default
//       } else {
//         setEntries(parsed.data);
//       }
//     } catch (error) {
//       console.error('Error parsing saved data', error);
//     }
//   };

//   // Auto-clear expired data every 30s (optional)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       loadFromLocalStorage();
//     }, 30 * 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Load once on component mount
//   useEffect(() => {
//     loadFromLocalStorage();
//   }, []);

//   // Save on entries change
//   useEffect(() => {
//     saveToLocalStorage(entries);
//   }, [entries]);

//   const updateEntry = (index: number, updated: Partial<ScheduleEntry>) => {
//     const newEntries = [...entries];
//     newEntries[index] = { ...newEntries[index], ...updated };
//     setEntries(newEntries);
//   };

//   return (
//     <div className="flex flex-col space-y-6 p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-semibold">Select a Date</h2>
//       <DatePicker
//         selected={date}
//         onChange={(d) => setDate(d)}
//         inline
//       />

//       <h3 className="text-lg font-medium mt-4">Schedule for the Day</h3>
//       {entries.map((entry, index) => (
//         <div key={index} className="flex flex-col space-y-2">
//           <input
//             type="time"
//             value={entry.time}
//             onChange={(e) => updateEntry(index, { time: e.target.value })}
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             value={entry.title}
//             onChange={(e) => updateEntry(index, { title: e.target.value })}
//             placeholder="Event title"
//             className="border p-2 rounded"
//           />
//         </div>
//       ))}

//       <p className="text-sm text-gray-500 mt-4">
//         This schedule will auto-reset after 20 minutes unless you sign up.
//       </p>
//     </div>
//   );
// };



const Footer: React.FC = () => {
  return (
    <section className='flex bg-primary mx-auto'>
      <div className='flex flex-col w-full px-20 py-20'>
        <div className='flex flex-col items-start justify-start'>
          <img src={logo} alt='logo' className='w-20 h-20'/>
        </div>
        <div className='flex flex-col '>
          <div className='flex flex-col items-start justify-start mt-10'>
            <h2 className='text-white text-2xl font-bold'>Contact Us</h2>
            <p className='text-white text-sm mt-5'>Email: info@weddingplanner.com</p>
            <p className='text-white text-sm mt-2'>Phone: +1 (123) 456-7890</p>
      </div>
      </div>
      </div>
    </section>
  )
}


export default Footer;