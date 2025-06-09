import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '@/features/Footer/assets/logo.svg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValidEmail(validateEmail(newEmail));
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail) {
      return;
    }

    try {
      // Example:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });
      
      setIsSubscribed(true);
      setEmail('');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <section className='grid grid-cols-1 bg-primary mx-auto w-full'>
      <div className='flex flex-col md:flex-row px-4 md:px-30 py-10 md:py-20 w-full text-white gap-8 md:gap-0'>
        {/* Logo Section */}
        <div className='flex items-center justify-center md:items-start md:justify-start'>
          <img src={logo} alt='logo' className='w-16 h-16 md:w-20 md:h-20' />
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col md:flex-row mx-auto gap-4 md:gap-8'>
          <div className='flex flex-col items-center md:items-start justify-start mt-4 md:mt-10'>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>Home</Link>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>About</Link>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>Contact</Link>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>FAQ</Link>
          </div>
          <div className='flex flex-col items-center md:items-start justify-start mt-4 md:mt-10'>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>Home</Link>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>About</Link>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>Contact</Link>
            <Link to="/" className='text-white text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors'>FAQ</Link>
          </div>
        </div>

        {/* Newsletter and Social Section */}
        <div className="space-y-6 md:space-y-8 w-full md:w-auto">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Stay Updated
            </h2>
            <form onSubmit={handleSubscribe} className="space-y-4 max-w-md mx-auto md:mx-0">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent ${
                    email && !isValidEmail ? 'border-red-500' : ''
                  }`}
                  required
                />
                {email && !isValidEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={!isValidEmail}
                className={`w-full py-2 rounded-lg transition-colors ${
                  isValidEmail 
                    ? 'bg-[var(--color-primary-red)] text-white hover:bg-opacity-90' 
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
              >
                Subscribe
              </button>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 text-sm text-center md:text-left"
                >
                  Thanks for subscribing! 🎉
                </motion.p>
              )}
            </form>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                aria-label="Instagram"
              >
                📸
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                aria-label="Pinterest"
              >
                📌
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  RSVP
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Registry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Footer;