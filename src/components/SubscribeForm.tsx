import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SubscribeForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    // Email validation
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setIsValidEmail(validateEmail(newEmail));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail) {
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/v1/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('🎉 ' + data.message);
                setEmail('');
                setIsValidEmail(false);
            } else {
                setMessage('⚠️ ' + data.message);
                console.log(data.error);

            }
        } catch (err) {
            console.error(err);
            setMessage('Something went wrong.');
        }

        // Clear message after 6 seconds
        setTimeout(() => setMessage(''), 6000);
    };

    return (
        <div className="w-full">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Stay Updated</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-primary-gray">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 border text-sm md:text-base focus:outline-none ${email && !isValidEmail ? 'border-red-300' : ''
                        }`}
                    required
                />
                {email && !isValidEmail && (
                    <p className="text-red-300 text-xs md:text-sm mt-1">
                        Please enter a valid email address
                    </p>
                )}

                <button
                    type="submit"
                    disabled={!isValidEmail}
                    className={`w-full py-3 transition-colors text-sm md:text-base ${isValidEmail
                            ? 'bg-[var(--color-primary-red)] text-white hover:bg-opacity-90'
                            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        }`}
                >
                    Subscribe
                </button>

                <AnimatePresence>
                    {message && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`text-xs md:text-sm text-center md:text-left ${message.startsWith('🎉') ? 'text-white' : 'text-red-300'
                                }`}
                        >
                            {message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};

export default SubscribeForm;
