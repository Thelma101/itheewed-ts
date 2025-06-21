import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import HowItWorksWeb3 from './HowItWorksWeb3';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is I Thee Wed free to use?",
    answer:
      "Yes! You can create an account and plan your wedding for free. Premium features are optional.",
  },
  {
    question: "Can I customize my wedding checklist?",
    answer:
      "Absolutely. We generate a checklist based on your date and location — you can edit tasks anytime.",
  },
  {
    question: "How do I share my wedding website with guests?",
    answer:
      "Your website has a unique link you can send via email or include in your invites.",
  },
  {
    question: "Do you have vendor recommendations?",
    answer:
      "Yes, discover trusted local vendors, read reviews, and book right from your dashboard.",
  },
  {
    question: "Can I manage RSVPs online?",
    answer:
      "Yes! Guests can RSVP directly through your wedding website, and you’ll see updates instantly.",
  },
];

const HowItWorksWeb3: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to know about planning your big day with I Thee Wed.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-rose-100 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-primary focus:outline-none"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 text-2xl"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial="height: 0"
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-6 pb-4 text-gray-600 overflow-hidden"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksWeb3;
