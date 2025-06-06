import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  couple: string;
  text: string;
  date: string;
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const DynamicFooter = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const testimonials: Testimonial[] = [
    {
      id: 1,
      couple: "Sarah & James",
      text: "The website made planning our wedding so much easier! Our guests loved the interactive features.",
      date: "March 2024"
    },
    {
      id: 2,
      couple: "Emma & Michael",
      text: "Beautiful design and easy to use. Our guests could RSVP and find all the information they needed.",
      date: "February 2024"
    },
    {
      id: 3,
      couple: "Lisa & David",
      text: "The countdown timer and weather widget were such nice touches. Highly recommend!",
      date: "January 2024"
    }
  ];

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How do I RSVP?",
      answer: "Simply click the RSVP button in the navigation menu and fill out the form with your details."
    },
    {
      id: 2,
      question: "Can I bring a plus one?",
      answer: "Please check your invitation for the number of guests allowed. If you need to request a plus one, contact us directly."
    },
    {
      id: 3,
      question: "What's the dress code?",
      answer: "The dress code is formal/black tie optional. We kindly request no white or ivory attire."
    }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  // Countdown timer effect
  useEffect(() => {
    const weddingDate = new Date('2024-08-20T00:00:00');
    
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Testimonial rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonials Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary-red)]">
              What Couples Say
            </h2>
            <div className="relative h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <p className="text-gray-700 italic mb-4">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{testimonials[currentTestimonial].couple}</span>
                    <span className="text-sm text-gray-500">{testimonials[currentTestimonial].date}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-[var(--color-primary-red)] scale-125'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary-red)]">
              Counting Down
            </h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary-red)]">
                  {timeLeft.days}
                </div>
                <div className="text-sm text-gray-600">Days</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary-red)]">
                  {timeLeft.hours}
                </div>
                <div className="text-sm text-gray-600">Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary-red)]">
                  {timeLeft.minutes}
                </div>
                <div className="text-sm text-gray-600">Minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary-red)]">
                  {timeLeft.seconds}
                </div>
                <div className="text-sm text-gray-600">Seconds</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary-red)]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <span className="text-[var(--color-primary-red)]">
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Language Selector and Quick Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Language</h3>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-primary-red)] focus:border-transparent"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[var(--color-primary-red)] transition-colors">
                    Emergency Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[var(--color-primary-red)] transition-colors">
                    Wedding Registry
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[var(--color-primary-red)] transition-colors">
                    Photo Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DynamicFooter; 