"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does PrepePundit work?',
    answer: 'PrepePundit uses AI to convert your study materials into interactive questions, allowing you to practice and reinforce your learning effectively.'
  },
  {
    question: 'What file formats are supported?',
    answer: 'We support PDF, DOC, TXT, and video files. Our system can process and analyze content from these formats to create personalized study materials.'
  },
  {
    question: 'How accurate is the AI assessment?',
    answer: 'PrepePundit uses advanced AI technology to provide highly accurate assessments. Our system is constantly learning and improving to ensure reliable results.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const FAQItem = ({ faq, index, isActive, onToggle }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
      <button
        className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={onToggle}
        aria-expanded={isActive}
      >
        <span className="flex-1 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-gray-500 dark:text-gray-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeOut"
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.1
                }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeIn"
                },
                opacity: {
                  duration: 0.2
                }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 text-gray-600 dark:text-gray-300">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isActive={activeIndex === index}
              onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}