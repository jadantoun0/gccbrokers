'use client'

import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';

interface FAQItemProps {
    question: String,
    answer: String,
};

const FAQItem : React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border-b border-gray-300 rounded-2xl text-black">
        <div
          className="flex justify-between items-center cursor-pointer p-4"
          onClick={toggleOpen}
        >
          <h2 className="text-lg font-semibold">{question}</h2>
          <div
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            {isOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <p className="p-4 text-gray-600">{answer}</p>
        </div>
      </div>
    );
  };
export default FAQItem