import React from 'react'
import FAQItem from './FAQItem';
import Reveal from '../animations/Reveal';

const FAQ = () => {
    const faqs = [
        {
            question: 'What is Forex trading?',
            answer: 'Forex trading, or foreign exchange trading, involves buying and selling currencies in the global market with the aim of making a profit from exchange rate fluctuations.',
        },
        {
            question: 'How do I open a trading account?',
            answer: 'To open a trading account, you need to register on our platform, complete the verification process, and fund your account to start trading.',
        },
        {
            question: 'What trading platforms do you offer?',
            answer: 'We offer trading platforms such as MetaTrader 4, MetaTrader 5, and our proprietary web-based platform, which can be accessed from both desktop and mobile devices.',
        },
      
        {
            question: 'How can I withdraw funds from my account?',
            answer: 'You can withdraw funds by logging into your account, navigating to the withdrawal section, and selecting your preferred withdrawal method. Processing times may vary depending on the method chosen.',
        },
        {
            question: 'What types of accounts do you offer?',
            answer: 'We offer several account types, including Standard, Pro, and VIP accounts, each with different benefits, spreads, and commissions. Visit our account types page for more details.',
        },
        {
            question: 'What is the leverage offered on your platform?',
            answer: 'We offer flexible leverage options, ranging from 1:10 to 1:500, depending on the account type and the regulatory requirements in your region.',
        },
        {
            question: 'Are there any fees for trading?',
            answer: 'We charge a small spread on trades, and some account types may have additional commission fees. Please refer to our fees page for a complete breakdown of costs.',
        },
        {
            question: 'Do you provide educational resources?',
            answer: 'Yes, we offer a variety of educational resources, including webinars, video tutorials, and articles, to help traders of all levels improve their skills.',
        },
        {
            question: 'What customer support options are available?',
            answer: 'Our customer support team is available 24/7 via live chat, email, and phone. You can also visit our help center for quick answers to common questions.',
        },
    ];
    

  return (
    <div className='bg-white py-7'>
        <div className='flex items-center justify-center flex-col'>
            <Reveal type='fade'>
                <p className='font-bold py-12 text-4xl flex items-center justify-center text-center text-primaryColor'>FREQUENTLY ASKED QUESTIONS</p>
            </Reveal>
            <div className='flex max-w-4xl justify-center flex-col'>
                {faqs.map((faq, index) => (
                    <Reveal key={index} type='fade' delay={0.1 * index} direction='right'>
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    </Reveal>
                ))}
            </div>
        </div>
       
    </div>
  )
}

export default FAQ