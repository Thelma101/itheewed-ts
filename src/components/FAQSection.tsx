import React, { useState } from 'react';

const faqs = [
  {
    question: "What is I Thee Wed?",
    answer: "I Thee Wed is your all-in-one platform for planning, organizing, and celebrating your wedding—beautifully and stress-free."
  },
  {
    question: "How do I get started?",
    answer: "Simply create a free account to unlock your personalized dashboard, wedding website, and planning tools."
  },
  {
    question: "Can I customize my wedding website?",
    answer: "Yes! Choose from elegant templates, add your story, event details, photos, and more—no coding required."
  },
  {
    question: "How do I manage my guest list and RSVPs?",
    answer: "Easily add guests, send digital invitations, and track RSVPs in real time. Guests can respond online, and you'll see updates instantly."
  },
  {
    question: "Can I create a wedding checklist?",
    answer: "Absolutely. We generate a step-by-step checklist tailored to your date, location, and style—so you never miss a thing."
  },
  {
    question: "How do I find and book vendors?",
    answer: "Browse trusted photographers, florists, caterers, and more. Read reviews, compare quotes, and book directly through your dashboard."
  },
  {
    question: "Can I set up a gift registry?",
    answer: "Yes! Add gifts from your favorite stores or let guests contribute to your honeymoon fund—all in one place."
  },
  {
    question: "Is my data secure?",
    answer: "Your privacy is our priority. All your information is encrypted and never shared without your permission."
  },
  {
    question: "Can I plan with my partner or family?",
    answer: "Of course! Invite your partner, wedding party, or family to collaborate and stay in sync every step of the way."
  },
  {
    question: "How much does it cost?",
    answer: "I Thee Wed offers a free plan with all the essentials. Premium features are available for couples who want even more customization and support."
  }
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-1">Frequently Asked Questions</h1>
        {/* <h2 className="text-2xl md:text-3xl font-black font-primary mb-2 text-primary">Frequently Asked Questions</h2> */}
        <p className="text-base p-2 text-primary-red mb-10 font-thin">Everything you need to know about planning with I Thee Wed.</p>
        <div className="space-y-5 text-left w-full">
          {faqs.map((faq, idx) => (
            <div key={idx} className=" w-full shadow-md bg-white border border-gray-100 overflow-hidden">
              <button
                className={`w-full flex justify-between items-center px-6 py-4 focus:outline-none transition-colors duration-200 ${open === idx ? 'bg-primary/10' : ''}`}
                onClick={() => handleToggle(idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="text-primary font-semibold text-base md:text-lg">{faq.question}</span>
                <span className={`ml-4 transition-transform duration-300 ${open === idx ? 'rotate-45 text-primary' : 'rotate-0 text-gray-400'}`}>+</span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`px-6 pb-4 text-gray-700 text-sm md:text-base transition-all duration-300 ease-in-out ${open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                aria-hidden={open !== idx}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 