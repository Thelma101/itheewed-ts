import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Create Your Free Account",
    description:
      "Sign up in seconds and unlock your personalized wedding dashboard. Everything you need, all in one place.",
    icon: "👰",
  },
  {
    title: "Build Your Perfect Checklist",
    description:
      "We craft a custom step-by-step checklist for your date, style, and location. Stay organized and celebrate each checkmark!",
    icon: "🗂️",
  },
  {
    title: "Manage Guests & RSVPs",
    description:
      "Add guests, track RSVPs, meal preferences, and plus-ones — all automatically updated as responses come in.",
    icon: "💌",
  },
  {
    title: "Find Trusted Vendors",
    description:
      "Discover and connect with photographers, florists, caterers and more. Read reviews, compare quotes, and book securely.",
    icon: "📸",
  },
  {
    title: "Design Your Website & Registry",
    description:
      "Create a beautiful wedding website and share your story. Add gift registries or honeymoon funds effortlessly.",
    icon: "💻",
  },
  {
    title: "Keep Everyone in the Loop",
    description:
      "Share updates with your partner, wedding party, and guests. From invites to timelines, you’re always in control.",
    icon: "🔔",
  },
];

// Motion variants for parent and child animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const HowItWorksWeb2: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-serif mb-6 text-primary"
          variants={item}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          variants={item}
        >
          Plan your dream wedding effortlessly with I Thee Wed. Here’s how we
          help you every step of the way.
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-rose-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
              variants={item}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          variants={item}
          className="mt-12 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
        >
          Start Planning Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HowItWorksWeb2;
