"use client"; 
import React, { useRef } from 'react';
import Image from 'next/image';
import WhoAreWeArticle from './WhoAreWeArticle';
import Reveal from '../animations/Reveal';

const WhoAreWe = () => {
    const data = [
        {
            title: "Pioneers in Forex Trading",
            content: [
                "Leading FX broker with deep market insights",
                "Continuous innovation in trading technology",
                "Strategic expansion in the MENA region"
            ]
        },
        {
            title: "Client-Centered Approach",
            content: [
                "Empowering traders with top-tier tools and resources",
                "Commitment to transparency and trust",
                "Providing exceptional support to all clients"
            ],
        },
        {
            title: "Regional Expertise",
            content: [
                "Strong presence across key MENA markets",
                "Focused growth in the EMEA region",
                "Expertise in navigating regional trading landscapes"
            ],
        },
    ];

    return (
        <div className='bg-white text-black px-2 flex flex-col items-center py-10'>
            <div className='max-w-5xl'>
                {/* Animated Title and Description */}
                <Reveal type='scale'>
                    <p className='font-bold text-4xl mb-8 text-center text-primaryColor'>
                        Who Are We
                    </p>
                </Reveal>

                <Reveal type='scale'>
                    <p className='text-center max-w-5xl text-gray-500 text-md'>
                        GCC Brokers is an ambitious and rapidly growing FX broker, dedicated to serving the diverse and dynamic MENA region. With a deep understanding of the Forex market and a passion for innovation, our team is committed to providing exceptional services and support to our clients.
                    </p>
                </Reveal>

                <div className='flex flex-col lg:flex-row'> 
                    <div className='mt-12 flex flex-col lg:flex-1 items-center justify-center lg:justify-start gap-y-5 py-3'>
                        <div>
                            {data.map((row, index) => (
                                 <WhoAreWeArticle key={index} title={row.title} content={row.content} />
                            ))}
                        </div>
                    </div>

                    {/* Animated Images */}
                    <div className='flex items-center lg:flex-1 h-[500px] justify-center relative w-full'>
                        <div className='absolute top-10 lg:left-10 lg:right-10'>
                           <Reveal type='scale'>
                                <Image
                                    src="/images/laptop.webp"
                                    alt="Laptop"
                                    width={600}
                                    height={600}
                                />
                           </Reveal>
                        </div>
                        <div className='absolute scale-75 md:scale-100 left-5 bottom-7 lg:bottom-0 lg:left-0'>
                           <Reveal type='scale'>
                                <Image
                                    src="/images/phone.png"
                                    alt="Phone"
                                    width={180}
                                    height={100} 
                                />
                           </Reveal>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center lg:py-6 text-white'>
                    <button className='px-7 py-3 rounded-3xl bg-gradient-to-r from-primaryColor to-secondaryColor'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WhoAreWe;
